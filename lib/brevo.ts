// Thin wrapper around Brevo's REST API (https://developers.brevo.com/reference)
// Used in place of a database: registrants are stored as Brevo contacts, and
// Brevo also sends the transactional confirmation emails.

const BREVO_API_BASE = "https://api.brevo.com/v3";

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

function getPriceLabel(): string {
  return `RM${process.env.COURSE_PRICE_MYR || "59"}`;
}

// Brevo's PHONE attribute requires E.164 (e.g. +60123456789). The registration
// form collects local Malaysian format (e.g. 0123456789 or 012-345 6789).
function toE164Malaysia(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (phone.trim().startsWith("+")) return `+${digits}`;
  if (digits.startsWith("60")) return `+${digits}`;
  if (digits.startsWith("0")) return `+6${digits}`;
  return `+60${digits}`;
}

type Registrant = {
  name: string;
  email: string;
  phone: string;
  business?: string;
  jobTitle?: string;
  billId: string;
};

type PaymentStatus = "pending" | "successful";

function registrantDetailsHtml(reg: Registrant, status: PaymentStatus): string {
  const statusLabel = status === "successful" ? "Berjaya" : "Menunggu";
  return `
    <ul>
      <li><strong>Nama:</strong> ${reg.name}</li>
      <li><strong>E-mel:</strong> ${reg.email}</li>
      <li><strong>Telefon:</strong> ${reg.phone}</li>
      <li><strong>Perniagaan:</strong> ${reg.business || "-"}</li>
      <li><strong>Jawatan:</strong> ${reg.jobTitle || "-"}</li>
      <li><strong>Harga:</strong> ${getPriceLabel()}</li>
      <li><strong>Status Pembayaran:</strong> ${statusLabel}</li>
      <li><strong>Bill ID:</strong> ${reg.billId}</li>
    </ul>
  `;
}

async function sendAdminAlert(
  reg: Registrant,
  subject: string,
  intro: string,
  status: PaymentStatus
): Promise<void> {
  const adminEmail = process.env.BREVO_ADMIN_EMAIL;
  if (!adminEmail) return;

  await sendTransactionalEmail({
    to: [{ email: adminEmail }],
    subject,
    htmlContent: `<p>${intro}</p>${registrantDetailsHtml(reg, status)}`,
  });
}

// --- Contacts ---------------------------------------------------------

// Creates the contact if new, or updates attributes if the email already exists.
export async function upsertRegistrantContact(reg: Registrant & { paid: boolean }): Promise<void> {
  const apiKey = getEnv("BREVO_API_KEY");
  const listId = Number(getEnv("BREVO_LIST_ID"));

  const res = await fetch(`${BREVO_API_BASE}/contacts`, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: reg.email,
      listIds: [listId],
      updateEnabled: true,
      attributes: {
        FIRSTNAME: reg.name,
        PHONE: toE164Malaysia(reg.phone),
        COMPANY: reg.business || "",
        JOB_TITLE: reg.jobTitle || "",
        BILL_ID: reg.billId,
        PAID: reg.paid ? "Yes" : "No",
      },
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Brevo contact upsert failed (${res.status}): ${body}`);
  }
}

// --- Transactional emails ----------------------------------------------

type SendEmailArgs = {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
};

export async function sendTransactionalEmail({ to, subject, htmlContent }: SendEmailArgs): Promise<void> {
  const apiKey = getEnv("BREVO_API_KEY");
  const senderEmail = getEnv("BREVO_SENDER_EMAIL");
  const senderName = process.env.BREVO_SENDER_NAME || "Agentic AI for Marketers";

  const res = await fetch(`${BREVO_API_BASE}/smtp/email`, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to,
      subject,
      htmlContent,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Brevo email send failed (${res.status}): ${body}`);
  }
}

// Notifies the admin as soon as someone submits the form and a Billplz bill
// is created, before payment is confirmed. sendRegistrationConfirmationEmails()
// sends the follow-up once the Billplz callback confirms payment.
export async function sendAdminPendingPaymentAlert(reg: Registrant): Promise<void> {
  await sendAdminAlert(
    reg,
    `Pendaftaran baharu (belum bayar): ${reg.name}`,
    "Pendaftaran baharu dibuat, menunggu pembayaran Billplz.",
    "pending"
  );
}

// Sends the admin notification + registrant confirmation emails once a
// Billplz payment is confirmed via the callback route.
export async function sendRegistrationConfirmationEmails(reg: Registrant): Promise<void> {
  await sendAdminAlert(
    reg,
    `Pendaftaran baharu (dibayar): ${reg.name}`,
    "Pendaftaran baharu telah disahkan.",
    "successful"
  );

  await sendTransactionalEmail({
    to: [{ email: reg.email, name: reg.name }],
    subject: "Pendaftaran Anda Disahkan — Agentic AI for Marketers",
    htmlContent: `
      <p>Salam ${reg.name},</p>
      <p>Terima kasih! Pendaftaran anda telah <strong>disahkan</strong> dan tempat anda untuk
      sesi <strong>Agentic AI for Marketers</strong> telah ditempah.</p>
      <p>Link Zoom/Google Meet dan maklumat lanjut akan dihantar menjelang tarikh sesi.</p>
      <p>Jumpa anda di sesi!</p>
    `,
  });
}
