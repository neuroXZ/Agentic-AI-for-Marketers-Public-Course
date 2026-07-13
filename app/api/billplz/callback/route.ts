import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { upsertRegistrantContact, sendRegistrationConfirmationEmails } from "@/lib/brevo";

// Billplz calls this endpoint server-to-server after a payment attempt
// (X-Signature callback). Verify authenticity, then mark the registration paid.
// Docs: https://www.billplz.com/api#callback-and-redirect-url

function verifySignature(payload: Record<string, string>, xSignatureKey: string) {
  const sourceString = Object.keys(payload)
    .filter((k) => k !== "x_signature")
    .sort()
    .map((k) => `${k}${payload[k]}`)
    .join("|");

  const computed = crypto
    .createHmac("sha256", xSignatureKey)
    .update(sourceString)
    .digest("hex");

  return computed === payload["x_signature"];
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    const xSignatureKey = process.env.BILLPLZ_X_SIGNATURE_KEY;
    if (xSignatureKey) {
      const valid = verifySignature(payload, xSignatureKey);
      if (!valid) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
      }
    }

    const isPaid = payload["paid"] === "true";
    const billId = payload["id"];
    const email = payload["email"];
    const name = payload["name"];
    const mobile = payload["mobile"];
    const business = payload["reference_1"];

    console.log(`Billplz callback — bill ${billId} paid: ${isPaid}`);

    if (isPaid && email) {
      try {
        await upsertRegistrantContact({
          email,
          name,
          phone: mobile,
          business,
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
