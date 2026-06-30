# Deploying a client build

This project is a **static SPA**: `npm run build` outputs HTML/CSS/JS in `dist/`. Any static host works.

## 1. Choose the client and language

Set **`VITE_CLIENT_ID`** to a registry key and **`VITE_LOCALE`** to `en` or `he` **before** build (see `.env.example`). Hebrew builds use **RTL** (`dir="rtl"`) and Hebrew UI strings from each client’s locale bundle.

**Locally:**

```bash
# Windows PowerShell
$env:VITE_CLIENT_ID="example-cafe"; $env:VITE_LOCALE="en"; npm run build

# Hebrew example (e.g. Go-Delivery)
$env:VITE_CLIENT_ID="godelivery"; $env:VITE_LOCALE="he"; npm run build

# macOS / Linux
VITE_CLIENT_ID=example-cafe VITE_LOCALE=en npm run build
```

**Persistent:** copy `.env.example` to `.env` and set `VITE_CLIENT_ID=...` and `VITE_LOCALE=en` or `he`. Vite loads `.env` automatically (do not commit secrets in `.env` if the repo is shared—client id is not secret, but keep the habit).

### Contact form (Vercel lead endpoint)

Clients that set `contact.submission: { mode: 'api' }` in their content (e.g. Go-Delivery) submit to `/api/lead`.
The frontend is provider-agnostic; delivery happens in the Vercel function via server env vars.

Required/optional variables for Vercel serverless:

| Variable | Purpose |
| -------- | ------- |
| `LEAD_DELIVERY_MODE` | `formspree_relay` now (temporary), `resend` later (branded sender). |
| `FORMSPREE_ENDPOINT` | Full Formspree endpoint used when `LEAD_DELIVERY_MODE=formspree_relay`. |
| `LEAD_SUBJECT_PREFIX` | (Optional) Global prefix added server-side to subject, e.g. `[MegiWeb]`. |
| `RESEND_API_KEY` | Future mode (`resend`) API key. |
| `LEAD_FROM_EMAIL` | Future mode sender, e.g. `leads@yourdomain.com`. |
| `LEAD_TO_EMAIL` | Future mode recipient inbox. |

**Temporary recipient email** (e.g. `itaymegi13@gmail.com`) is configured in Formspree dashboard for the relay form, not in frontend code.

`/api/lead` normalizes and relays:

- Subject: `New lead | <Brand> | <Locale>` (+ optional prefixes)
- Metadata block: client/locale/brand/page/timestamp/consent/channel
- Form fields in configured order
- Reply-to from visitor email field when present

If `/api/lead` is unavailable or env vars are missing, submit shows an error instead of fake success.

Add these vars in Vercel Project Settings for each deployment.

## 2. Build

```bash
npm ci
npm run build
```

Output: `dist/`

## 3. Host options

### Vercel

1. Import project; framework preset **Vite**.
2. Build command: `npm run build`; output **dist**.
3. Project Settings → Environment Variables:
   - frontend build vars: `VITE_CLIENT_ID`, `VITE_LOCALE`
   - server vars for `/api/lead`: `LEAD_DELIVERY_MODE`, `FORMSPREE_ENDPOINT`, optional `LEAD_SUBJECT_PREFIX`
4. Ensure the repository includes `api/lead.ts` so Vercel deploys the function.

### Any static host (S3, Cloudflare Pages, nginx, etc.)

Upload the contents of `dist/` after a local build with the correct `VITE_CLIENT_ID` and `VITE_LOCALE`.

## 4. One site per client and locale

`VITE_CLIENT_ID` and `VITE_LOCALE` are baked in at **build time**. For multiple live sites (different clients and/or English vs Hebrew), use **one deployment per combination** (different env vars or branches), each with its own build—for example `godelivery` + `en` and `godelivery` + `he` as two separate deploys if both must be live.

## 5. After deploy

- Smoke-test mobile nav, contact form (`/api/lead` + server env), and WhatsApp links.
- Update real `meta` and `contact` data in the client’s TypeScript config before the final production build.
