import { NextRequest, NextResponse } from "next/server";
import { sendRegistrationConfirmationEmails } from "@/lib/brevo";

// Dev-only helper to preview the post-payment confirmation email (with Zoom
// link) without going through a real Billplz payment. Not linked from the
// site nav — visit /test-email directly.

export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 });
  }

  try {
    const { name, email, phone, business, jobTitle } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "name, email and phone are required" }, { status: 400 });
    }

    await sendRegistrationConfirmationEmails({
      name,
      email,
      phone,
      business,
      jobTitle,
      billId: `TEST-${Date.now()}`,
    });

    return NextResponse.json({ sent: true });
  } catch (err: any) {
    console.error("Test email send failed:", err);
    return NextResponse.json({ error: err.message || "Failed to send test email" }, { status: 500 });
  }
}
