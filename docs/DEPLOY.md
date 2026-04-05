# Deploying a client build

This project is a **static SPA**: `npm run build` outputs HTML/CSS/JS in `dist/`. Any static host works.

## 1. Choose the client

Set `VITE_CLIENT_ID` to a registry key **before** build (see `.env.example`).

**Locally:**

```bash
# Windows PowerShell
$env:VITE_CLIENT_ID="example-cafe"; npm run build

# macOS / Linux
VITE_CLIENT_ID=example-cafe npm run build
```

**Persistent:** copy `.env.example` to `.env` and set `VITE_CLIENT_ID=...`. Vite loads `.env` automatically (do not commit secrets in `.env` if the repo is shared—client id is not secret, but keep the habit).

## 2. Build

```bash
npm ci
npm run build
```

Output: `dist/`

## 3. Host options

### Netlify

1. Connect the repo or drag-drop `dist/`.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Environment variable: `VITE_CLIENT_ID` = your client key (e.g. `northline`).

### Vercel

1. Import project; framework preset **Vite**.
2. Build command: `npm run build`; output **dist**.
3. Project Settings → Environment Variables → `VITE_CLIENT_ID`.

### Any static host (S3, Cloudflare Pages, nginx, etc.)

Upload the contents of `dist/` after a local build with the correct `VITE_CLIENT_ID`.

## 4. One site per client

`VITE_CLIENT_ID` is baked in at **build time**. For multiple live clients at different domains, use **one deployment per client** (different env var or different branch), each with its own build.

## 5. After deploy

- Smoke-test mobile nav, contact form (wire to real backend separately), and WhatsApp links.
- Update real `meta` and `contact` data in the client’s TypeScript config before the final production build.
