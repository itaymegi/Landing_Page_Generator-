# D Flowers — Daniel Sade

Luxury Hebrew RTL landing page for **Daniel Sade / D Flowers** — event design, floral production, and workshops.

## Stack

- Next.js 16 · React 19 · TypeScript · Tailwind CSS v4
- Framer Motion · Lenis smooth scroll
- `@landing-legal/core` for privacy, terms, and accessibility pages

## Development

```bash
npm install
npm run dev
```

Opens on [http://localhost:3010](http://localhost:3010).

## Build

```bash
npm run build
npm run start
```

## Deploy on Vercel

**Full guide:** [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)

Quick version:

1. Import repo `Landing_Page_Generator-` on Vercel
2. Set **Root Directory** to `dflowers`
3. Add env var `NEXT_PUBLIC_SITE_URL=https://dflowers.co.il`
4. Deploy

Suggested production domain: `dflowers.co.il`
