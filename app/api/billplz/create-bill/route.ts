import { NextRequest, NextResponse } from "next/server";
import { upsertRegistrantContact, sendAdminPendingPaymentAlert } from "@/lib/brevo";

// Creates a Billplz bill and returns the payment URL to redirect the user to.
// Docs: https://www.billplz.com/api

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, business, jobTitle } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Nama, e-mel dan telefon diperlukan" },
        { status: 400 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const apiKey = process.env.BILLPLZ_API_KEY;
    const collectionId = process.env.BILLPLZ_COLLECTION_ID;
    const baseUrl = process.env.BILLPLZ_BASE_URL || "https://www.billplz-sandbox.com";
    const priceMyr = Number(process.env.COURSE_PRICE_MYR || "59");

    if (!apiKey || !collectionId) {
      return NextResponse.json(
        { error: "Billplz belum dikonfigurasi. Sila tetapkan BILLPLZ_API_KEY dan BILLPLZ_COLLECTION_ID." },
        { status: 500 }
      );
    }

    // Billplz expects amount in sen (smallest currency unit)
    const amountSen = Math.round(priceMyr * 100);

    const params = new URLSearchParams();
    params.append("collection_id", collectionId);
    params.append("email", email);
    params.append("mobile", phone);
    params.append("name", name);
    params.append("amount", String(amountSen));
    params.append("description", "Pendaftaran: Agentic AI for Marketers (Sesi 2 Jam)");
    params.append("callback_url", `${siteUrl}/api/billplz/callback`);
    params.append("redirect_url", `${siteUrl}/daftar/success`);
    if (business) {
      params.append("reference_1_label", "Jenis Perniagaan");
      params.append("reference_1", business);
    }
    if (jobTitle) {
      params.append("reference_2_label", "Jawatan");
      params.append("reference_2", jobTitle);
    }

    const authHeader = "Basic " + Buffer.from(`${apiKey}:`).toString("base64");

    const billplzRes = await fetch(`${baseUrl}/api/v3/bills`, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await billplzRes.json();

    if (!billplzRes.ok) {
      return NextResponse.json(
        { error: data.error?.message?.[0] || "Gagal mencipta bil Billplz" },
        { status: 500 }
      );
    }

    // Billplz's v3 API returns an already-absolute url (e.g. "https://www.billplz.com/bills/xxxx"),
    // but some accounts/environments return a relative path (e.g. "/bills/xxxx") — handle both.
    const paymentUrl = /^https?:\/\//i.test(data.url) ? data.url : `${baseUrl}${data.url}`;

    // Persist the registration attempt as a Brevo contact (unpaid). The callback
    // route flips PAID to "Yes" once Billplz confirms payment.
    try {
      await upsertRegistrantContact({
        email,
        name,
        phone,
        business,
        jobTitle,
        billId: data.id,
        paid: false,
      });
      await sendAdminPendingPaymentAlert({ name, email, phone, business, jobTitle, billId: data.id });
    } catch (err) {
      console.error("Failed to save registrant / notify admin via Brevo:", err);
    }

    return NextResponse.json({ url: paymentUrl, billId: data.id });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Ralat pelayan. Sila cuba sebentar lagi." },
      { status: 500 }
    );
  }
}
