# Agentic AI for Marketers — Landing Page

Next.js 14 (App Router) + Tailwind landing page with a Billplz payment form for
the "Agentic AI for Marketers" 2-hour course.

## Setup

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local`:

- `BILLPLZ_API_KEY` / `BILLPLZ_COLLECTION_ID` — from your Billplz dashboard (Settings > API Keys, and Collections).
- `BILLPLZ_BASE_URL` — use `https://www.billplz-sandbox.com` while testing, switch to `https://www.billplz.com` for production.
- `BILLPLZ_X_SIGNATURE_KEY` — from Collection settings, used to verify the payment callback is genuinely from Billplz.
- `NEXT_PUBLIC_SITE_URL` — your deployed domain (e.g. `https://yourcourse.com`), used to build Billplz redirect/callback URLs.
- `COURSE_PRICE_MYR` — course price in ringgit.

## Run locally

```bash
npm run dev
```

Visit http://localhost:3000

## How payment works

1. User fills the form on the landing page → POSTs to `/api/billplz/create-bill`.
2. That route calls Billplz's Create Bill API and returns a payment URL.
3. Browser redirects to Billplz's hosted payment page (FPX / card).
4. After payment, Billplz redirects the user to `/daftar/success` (or your failed page) AND separately calls `/api/billplz/callback` server-to-server to confirm payment — the callback is the source of truth, not the redirect.

## Still needed before going live

- **Persist registrations**: the `create-bill` and `callback` routes have `TODO` comments where you should save registrant details and mark payment status (a database like Supabase/Postgres, or even a Google Sheet via its API, works fine for this volume).
- **Send confirmation**: after a paid callback, trigger a WhatsApp/email confirmation with the Zoom link — this can plug into the same Make/Zapier workflow style taught in the course.
- **Real trainer photo**: replace the placeholder circle in the trainer section with an actual image.
- **Domain + HTTPS**: Billplz callbacks require a publicly reachable HTTPS URL, so this needs to be deployed (Vercel is the easiest fit for Next.js) before payments will work end-to-end.

## Structure

```
app/
  page.tsx                          landing page (hero, agenda, trainer, form)
  components/RegisterForm.tsx       registration form → calls create-bill API
  api/billplz/create-bill/route.ts  creates Billplz bill, returns payment URL
  api/billplz/callback/route.ts     verifies + receives payment confirmation
  daftar/success/page.tsx           post-payment redirect page
  daftar/failed/page.tsx            failed payment page
```
