# Legal Compliance — `@landing-legal/core`

This document explains how to add the legal pages and compliance components to any Next.js landing page in this repo.

> **Disclaimer:** The legal templates in this package are provided for informational purposes and as a starting point only. They are **not legal advice**. Each client should have the content reviewed by qualified legal counsel before going live.

---

## What the package provides

| Export | Purpose |
|--------|---------|
| `resolveLegalContext` | Normalises config from `site.ts` into a `LegalContext` object |
| `PrivacyPolicyContent` | Hebrew privacy policy body (JSX) |
| `AccessibilityStatementContent` | Hebrew accessibility statement body (JSX) |
| `TermsOfUseContent` | Hebrew terms of use body (JSX) |
| `LegalPageLayout` | Page shell: `<main>`, `<h1>`, back link, semantic structure |
| `FooterLegalLinks` | Three footer nav links to the legal pages |
| `FormConsent` | Consent note beneath form submit buttons |
| `WhatsAppConsentNote` | Note near WhatsApp CTA buttons |
| `createLegalMetadata` | Next.js `Metadata` helper (sets noindex) |
| `legalSitemapEntries` | Spreads three URLs into your sitemap |
| `styles/legal.css` | CSS variables + `.lp-*` class definitions |

---

## Adding to a new landing page (~15 min)

### 1. Install the package

In the app directory (`my-app/`):

```bash
npm install
```

First add to `my-app/package.json`:

```json
"@landing-legal/core": "file:../packages/landing-legal"
```

### 2. Update `next.config.ts`

```ts
import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@landing-legal/core"],
  turbopack: {
    // Must point to the repo root so Turbopack can reach packages/landing-legal
    root: path.join(process.cwd(), ".."),
  },
};
export default nextConfig;
```

### 3. Add `legal` block to `config/site.ts`

```ts
export type SiteConfig = {
  // ... existing fields ...
  legal: {
    businessName: string;         // e.g. "My Business Ltd"
    businessOwner?: string;       // e.g. "ישראל ישראלי"
    email?: string;               // public contact email
    phone?: string;               // display phone, e.g. "052-000-0000"
    address?: string;             // physical address (optional)
    websiteUrl: string;           // production URL
    lastUpdated: string;          // ISO date "2026-07-01"
    privacyContactEmail?: string; // defaults to email
    accessibilityContactName?: string;
    accessibilityContactPhone?: string;
    accessibilityContactEmail?: string;
    deliveryAreas?: string;       // shown in Terms page
    usesAnalytics?: boolean;      // adds analytics paragraph to Privacy
    usesWhatsApp?: boolean;       // adds WhatsApp note to Privacy
    usesInstagram?: boolean;
  };
};
```

Fill in the values in the `site` object:

```ts
export const site: SiteConfig = {
  // ...
  legal: {
    businessName: "My Business",
    businessOwner: "ישראל ישראלי",
    email: "hello@mybusiness.example.com",
    phone: "052-000-0000",
    websiteUrl: "https://mybusiness.example.com",
    lastUpdated: "2026-07-01",
    deliveryAreas: "גוש דן והסביבה",
    usesWhatsApp: true,
    usesInstagram: true,
  },
};
```

### 4. Create `config/legal.ts`

```ts
import { resolveLegalContext } from "@landing-legal/core";
import { site, getSiteUrl } from "./site";

export const legalContext = resolveLegalContext({
  legal: site.legal,
  contact: site.contact,          // passes email, phone, instagram etc.
  business: site.business,        // passes deliveryAreas if set there
  websiteUrl: getSiteUrl(),
});
```

### 5. Import `legal.css` in `globals.css`

```css
@import "tailwindcss";
@import "@landing-legal/core/styles/legal.css";
```

You can override the CSS variables in the same file to match your brand:

```css
:root {
  --lp-accent: #5a3e36;   /* your brand colour */
  --lp-bg: #faf8f4;
}
```

### 6. Create the three route pages

`app/privacy/page.tsx`:

```tsx
import { PrivacyPolicyContent, LegalPageLayout, createLegalMetadata } from "@landing-legal/core";
import { legalContext } from "@/config/legal";

export const metadata = createLegalMetadata("privacy", legalContext);

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="מדיניות פרטיות" context={legalContext}>
      <PrivacyPolicyContent context={legalContext} />
    </LegalPageLayout>
  );
}
```

Repeat with `"accessibility"` / `"הצהרת נגישות"` and `"terms"` / `"תנאי שימוש"`.

### 7. Add `FooterLegalLinks` to the Footer

```tsx
import { FooterLegalLinks } from "@landing-legal/core";

// Inside your footer JSX:
<FooterLegalLinks />
```

### 8. Add `FormConsent` under form submit buttons

```tsx
import { FormConsent } from "@landing-legal/core";

// After the <button type="submit"> in your form:
<FormConsent />
```

### 9. Add `WhatsAppConsentNote` near WhatsApp CTAs

```tsx
import { WhatsAppConsentNote } from "@landing-legal/core";

// After your WhatsAppButton:
<WhatsAppConsentNote />
```

### 10. Update `sitemap.ts`

```ts
import { legalSitemapEntries } from "@landing-legal/core";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  return [
    { url: siteUrl, ... },
    ...legalSitemapEntries(siteUrl),
  ];
}
```

---

## Config field reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `businessName` | `string` | ✅ | Shown on all three legal pages |
| `businessOwner` | `string` | — | Owner name; used as default accessibility coordinator |
| `email` | `string` | — | Public contact email |
| `phone` | `string` | — | Display phone number |
| `address` | `string` | — | Physical address |
| `websiteUrl` | `string` | ✅ | Full production URL |
| `lastUpdated` | `string` | ✅ | ISO date `"YYYY-MM-DD"` |
| `deliveryAreas` | `string` | — | Mentioned in Terms page |
| `usesAnalytics` | `boolean` | — | Adds analytics paragraph in Privacy |
| `usesWhatsApp` | `boolean` | — | Adds WhatsApp note in Privacy; default `true` |
| `usesInstagram` | `boolean` | — | Informational only at present |

---

## Theming

Override CSS variables in your app's `globals.css` to match the brand:

```css
:root {
  --lp-bg: #faf8f4;
  --lp-text: #2c2c2c;
  --lp-text-muted: #7a7060;
  --lp-accent: #5a3e36;
  --lp-border: #e2d8c8;
  --lp-link: #5a3e36;
}
```

---

## Vercel monorepo deployment

When deploying a sub-app (e.g. `munch/`) from a monorepo root:

1. Set **Root Directory** to the app folder (e.g. `munch`).
2. Enable **"Include source files outside of the Root Directory"** in Vercel project settings so that `packages/landing-legal/` is included in the build.

---

## Accessibility checklist

When adopting the legal layer, also review the main landing page:

- [ ] One `<h1>` per page; legal pages supply their own via `LegalPageLayout`
- [ ] All images have `alt` text; decorative images use `alt=""`
- [ ] Icon-only links have `aria-label` (WhatsApp, Instagram, email)
- [ ] Interactive elements have visible `focus-visible` rings
- [ ] Text contrast ≥ 4.5:1 (especially muted text on cream backgrounds)
- [ ] `overflow-x-hidden` on body; footer bottom padding for floating CTAs
- [ ] Descriptive link text (avoid "לחץ כאן" alone)
