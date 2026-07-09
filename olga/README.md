# Olga Events Design

Premium Hebrew RTL landing page for **Olga Events Design** — boutique floral event styling, weddings, chuppah design, and an interactive initial quote calculator.

## Stack

- Next.js 16 · React 19 · TypeScript · Tailwind CSS v4
- Framer Motion · Lenis smooth scroll
- `@landing-legal/core` for privacy, terms, and accessibility pages

## Development

```bash
npm install
npm run dev
```

Opens on [http://localhost:3012](http://localhost:3012).

## Build

```bash
npm run build
npm run start
```

## Deploy on Vercel

**Full guide:** [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)

Quick version:

1. Import repo `Landing_Page_Generator-` on Vercel
2. Set **Root Directory** to `olga`
3. Add env var `NEXT_PUBLIC_SITE_URL=https://olgaeventsdesign.co.il`
4. Deploy

Suggested production domain: `olgaeventsdesign.co.il`
