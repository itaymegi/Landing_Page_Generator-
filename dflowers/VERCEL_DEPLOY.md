# Deploy D Flowers on Vercel

Step-by-step guide to deploy the **dflowers** site from the `Landing_Page_Generator-` monorepo.

---

## Prerequisites

- A [Vercel](https://vercel.com) account (free tier is fine)
- This repo pushed to GitHub: `https://github.com/itaymegi/Landing_Page_Generator-.git`
- Optional: domain `dflowers.co.il` (or any domain you own)

---

## 1. Import the project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import Git Repository**
3. Select **`Landing_Page_Generator-`** (connect GitHub if needed)
4. **Do not click Deploy yet** — configure settings first

---

## 2. Critical project settings

On the import screen (or **Settings → General** after import):

| Setting | Value |
|---------|--------|
| **Framework Preset** | Next.js (auto-detected) |
| **Root Directory** | `dflowers` |
| **Build Command** | `npm run build` (default) |
| **Output Directory** | `.next` (default) |
| **Install Command** | *(leave empty — `vercel.json` handles it)* |
| **Node.js Version** | 20.x or 22.x |

### Why Root Directory = `dflowers`?

The repo is a monorepo. The Next.js app lives in `dflowers/`, not the repo root. If you skip this, the build will fail.

### Why the custom install command?

`dflowers` depends on `@landing-legal/core` from `packages/landing-legal`. The repo’s `vercel.json` runs:

```json
{
  "installCommand": "npm install && npm install --prefix ../packages/landing-legal"
}
```

Vercel clones the **full repo**, so the relative path to the legal package works.

---

## 3. Environment variables

In **Project → Settings → Environment Variables**, add:

| Name | Value | Environments |
|------|--------|--------------|
| `NEXT_PUBLIC_SITE_URL` | `https://dflowers.co.il` | Production |
| `NEXT_PUBLIC_SITE_URL` | `https://<your-preview-url>.vercel.app` | Preview *(optional)* |

Use your real production domain once DNS is connected. This powers sitemap, Open Graph, and JSON-LD URLs.

No other secrets are required for this static/marketing site.

---

## 4. Deploy

1. Click **Deploy**
2. Wait for the build log — you should see:
   - `npm install` in `dflowers`
   - `npm install` in `packages/landing-legal`
   - `next build` completing with static pages + 8 service routes
3. Open the `.vercel.app` URL and test on mobile and desktop

---

## 5. Connect a custom domain (optional)

1. **Project → Settings → Domains**
2. Add `dflowers.co.il` and `www.dflowers.co.il`
3. At your domain registrar, add the DNS records Vercel shows (usually `A` + `CNAME`)
4. Wait for SSL (automatic, usually a few minutes)
5. Set **Production** env `NEXT_PUBLIC_SITE_URL` to `https://dflowers.co.il`
6. Redeploy once so metadata uses the final URL

---

## 6. Post-deploy checklist

Test these on your phone:

- [ ] Home page loads — hero, nav, all sections visible to the footer
- [ ] Header stays fixed while scrolling; text readable on light sections
- [ ] **תהליך** (Process) — 5 steps visible on mobile
- [ ] Gallery filters, lightbox, “view all” modal
- [ ] Event planner form → WhatsApp message
- [ ] FAQ accordion
- [ ] Contact CTA + footer phone link (`tel:`)
- [ ] Service pages: `/services/bridal`, etc.
- [ ] Legal: `/privacy`, `/terms`, `/accessibility`
- [ ] WhatsApp links open with correct number

---

## 7. Redeploy after code changes

From your machine:

```bash
cd c:\Projects\Landing_Page_Generator-
git add dflowers/
git commit -m "your message"
git push origin main
```

Vercel redeploys automatically on push to `main` if the Git integration is enabled.

Manual redeploy: **Deployments → … → Redeploy**

---

## Troubleshooting

### Build fails: `Cannot find module '@landing-legal/core'`

- Confirm **Root Directory** is `dflowers`
- Confirm the full monorepo is on GitHub (not only the `dflowers` folder)
- Check that `packages/landing-legal` exists in the repo

### Build fails: `ENOENT` or wrong paths

- Do not set Root Directory to `/` — it must be `dflowers`

### Site works on desktop but sections are blank on mobile

- Hard-refresh or clear cache
- Ensure you deployed the latest commit (premium UI + visibility fixes)

### Wrong URLs in sitemap / social previews

- Set `NEXT_PUBLIC_SITE_URL` in Vercel env vars and redeploy

### Two projects in one repo (rubina, munch, etc.)

Each app needs its **own Vercel project** with a different **Root Directory** (`rubina`, `dflowers`, `munch`, …). One repo, multiple Vercel projects — that’s normal.

---

## Quick reference

| Item | Value |
|------|--------|
| GitHub repo | `itaymegi/Landing_Page_Generator-` |
| Root Directory | `dflowers` |
| Local dev | `cd dflowers && npm run dev` → port 3010 |
| Production domain | `dflowers.co.il` (suggested) |
| WhatsApp | `972509502215` |

---

## Support

If a deploy fails, open the failed build log in Vercel and check the first red error line — usually Root Directory or the legal package install.
