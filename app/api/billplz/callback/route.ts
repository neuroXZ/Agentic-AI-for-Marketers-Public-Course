import { NextRequest, NextResponse } from "next/server";
import { upsertRegistrantContact, sendRegistrationConfirmationEmails } from "@/lib/brevo";

// Billplz calls this endpoint server-to-server after a payment attempt.
// Rather than trusting the callback's own x_signature field (which requires
// exactly replicating Billplz's signing algorithm), we treat the callback as
// just a trigger to re-check and re-fetch the bill directly from Billplz's
// API using our private API key — that's an authoritative, unspoofable
// source of truth for whether it's actually paid.
// Docs: https://www.billplz.com/api#callback-and-redirect-url

async function fetchBillFromBillplz(billId: string) {
  const apiKey = process.env.BILLPLZ_API_KEY;
  const baseUrl = process.env.BILLPLZ_BASE_URL || "https://www.billplz-sandbox.com";
  if (!apiKey) throw new Error("Missing BILLPLZ_API_KEY");

  const authHeader = "Basic " + Buffer.from(`${apiKey}:`).toString("base64");
  const res = await fetch(`${baseUrl}/api/v3/bills/${billId}`, {
    headers: { Authorization: authHeader },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch bill ${billId} from Billplz (${res.status})`);
  }

  return res.json();
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    const billId = payload["id"];
    if (!billId) {
      return NextResponse.json({ error: "Missing bill id" }, { status: 400 });
    }

    const bill = await fetchBillFromBillplz(billId);
    const isPaid = bill.paid === true;
    const email = bill.email;
    const name = bill.name;
    const mobile = bill.mobile;
    const business = bill.reference_1;
    const jobTitle = bill.reference_2;

    console.log(`Billplz callback — bill ${billId} paid: ${isPaid}`);

    if (isPaid && email) {
      try {
        await upsertRegistrantContact({
          email,
          name,
          phone: mobile,
          business,
          jobTitle,
          billId,
          paid: true,
        });
      } catch (err) {
        console.error("Failed to mark registrant paid in Brevo:", err);
      }

      try {
        await sendRegistrationConfirmationEmails({
          name,
          email,
          phone: mobile,
          business,
          jobTitle,
          billId,
        });
      } catch (err) {
        console.error("Failed to send confirmation email(s) via Brevo:", err);
      }
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    return NextResponse.json({ error: "Callback error" }, { status: 500 });
  }
}
