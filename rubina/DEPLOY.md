# Rubina — Production Go-Live Checklist

## Before first production deploy

1. Set **`NEXT_PUBLIC_SITE_URL`** in Vercel (Project → Settings → Environment Variables) to your canonical domain, e.g. `https://rubina.co.il` (no trailing slash).
2. Redeploy after saving the variable.

## After purchasing a custom domain

1. Vercel → **Domains** → add your domain and configure DNS at your registrar.
2. Confirm `NEXT_PUBLIC_SITE_URL` matches the primary domain.
3. Google Search Console → add property → verify via DNS → submit `https://YOUR-DOMAIN/sitemap.xml`.
4. Claim Google Business Profile and link the same website URL.

## Local development

Copy `.env.example` to `.env.local` and set:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## SEO routes (verify after deploy)

- `/robots.txt`
- `/sitemap.xml`
- `/manifest.webmanifest`
- `/opengraph-image` (social preview image)
