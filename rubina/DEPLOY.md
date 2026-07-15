# Rubina — Deploy & SEO (developer)

Production site: **https://myrubina.com**

## Vercel environment variables

| Variable | Required | Notes |
|----------|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | **Yes** | `https://myrubina.com` (no trailing slash) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | HTML-tag code from Search Console |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | No | Bing Webmaster HTML tag |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | No | Plausible analytics |

Redeploy after changing any variable.

## Already automated in code

- Metadata, canonical URLs, OG/Twitter images
- `robots.ts` — all crawlers including AI bots allowed
- `sitemap.ts` — home page only (legal pages noindex, excluded)
- JSON-LD `@graph` (Organization, LocalBusiness, FAQ, Products)
- Security headers, error boundaries, skip link

## SEO routes (smoke test)

- https://myrubina.com/robots.txt
- https://myrubina.com/sitemap.xml
- https://myrubina.com/manifest.webmanifest
- https://myrubina.com/opengraph-image

## Owner-only steps

See **[GO-LIVE-OWNER.md](./GO-LIVE-OWNER.md)** (Hebrew) — hand to Idan & Romi for Search Console, Business Profile, and Instagram link.

## Local development

```bash
cp .env.example .env.local
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
npm run dev
```
