# Client brief — copy this file per project

**Instructions:** Duplicate this file as `briefs/<client>-YYYY-MM-DD.md`. Send it to the client (or fill it together in a call). When complete, translate the answers into `src/content/clients/<slug>.ts` and register the slug in `src/content/clients/registry.ts`.

---

## A. Project meta

| Field | Your answer |
| ----- | ----------- |
| **Client / project name** (legal or DBA) | |
| **Short slug** (lowercase, no spaces, e.g. `acme-dental`) — used for folder `public/clients/<slug>/` | |
| **Page title** (browser tab, e.g. `Acme Dental — Family dentistry in Austin`) | |
| **Meta description** (1–2 sentences for Google / previews, ~155 characters) | |

---

## B. Brand

| Field | Your answer |
| ----- | ----------- |
| **Business name** (shown in header) | |
| **Tagline** (short line under name on desktop header) | |

---

## C. Colors (optional)

If the client has brand colors, list **hex codes**. Leave blank to use the default dark + gold theme.

| Role | Hex | Notes |
| ---- | --- | ----- |
| Page background | | |
| Card / surface | | |
| Muted surface | | |
| Body text | | |
| Muted text | | |
| Accent (buttons, links highlight) | | |
| Accent hover (slightly lighter/brighter) | | |

_Your developer maps these into the `theme` block in code (see `src/content/clients/example-cafe.ts`)._

---

## D. Navigation & main CTA

**Primary action** (one main goal — e.g. book, quote, call):

| Field | Your answer |
| ----- | ----------- |
| **Primary CTA button label** | |
| **Primary CTA destination** (usually `#contact` or external booking URL) | |

**Nav labels** (optional — default structure: Benefits, Services, Process, Testimonials, FAQ, Contact). List **6 items max** with label + anchor:

| # | Nav label | Section anchor (`#benefits`, `#services`, `#process`, `#testimonials`, `#faq`, `#contact`) |
| - | --------- | ------------------- |
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |

---

## E. Hero (first screen)

| Field | Your answer |
| ----- | ----------- |
| **Eyebrow** (tiny line above headline, e.g. city + category) | |
| **Headline** | |
| **Subhead / supporting paragraph** | |
| **Primary button** (label + link — often same as nav CTA) | |
| **Secondary button** (e.g. WhatsApp — label + full URL) | |
| **Hero image** — attach file or paste URL. Alt text describing the image for accessibility: | |

---

## F. Proof strip (3 short bullets under hero)

1.  
2.  
3.  

---

## G. Benefits (3 cards)

For each: **title** + short **description**.

1. **Title:**  
   **Description:**  

2. **Title:**  
   **Description:**  

3. **Title:**  
   **Description:**  

---

## H. Services (3 cards)

For each: **title** + **description** + optional **badge** (e.g. “From $99”, “Popular”, “New”).

1. **Title:** | **Badge:**  
   **Description:**  

2. **Title:** | **Badge:**  
   **Description:**  

3. **Title:** | **Badge:**  
   **Description:**  

---

## I. Process / “Why us” (3 numbered steps)

**Section title:**  
**Section subtitle:**  

| Step | Title | Description |
| ---- | ----- | ----------- |
| 1 | | |
| 2 | | |
| 3 | | |

---

## J. Testimonials (3)

For each: **quote** + **full name** + **role / company**.

1.  
2.  
3.  

---

## K. Mid-page CTA banner

| Field | Your answer |
| ----- | ----------- |
| **Title** | |
| **Subtitle** | |
| **Button label** | |
| **Button link** | |

---

## L. FAQ (4–6 pairs)

| # | Question | Answer |
| - | -------- | ------ |
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |

---

## M. Contact

| Field | Your answer |
| ----- | ----------- |
| **Section title** | |
| **Section subtitle** | |
| **Trust line** (under title, e.g. “We reply within 24h”) | |
| **WhatsApp button label** | |
| **WhatsApp link** (full `https://wa.me/...` with country code, no spaces) | |
| **Email** | |
| **Phone** (display + E.164 for links if possible) | |
| **Submit button label** | |

### Form fields

Define each row: **id** (one word), **label**, **type** (`text` | `email` | `tel` | `textarea`), **placeholder**, **required** (yes/no).

| id | Label | type | placeholder | required |
| -- | ----- | ---- | ----------- | -------- |
| name | Name | text | | yes |
| | | | | |
| | | | | |
| | | | | |

---

## N. Footer

| Field | Your answer |
| ----- | ----------- |
| **Short tagline** (one line) | |
| **Copyright line** (e.g. `© 2026 Business Name. All rights reserved.`) | |
| **Footer links** (label + URL): | |
| **Social links** (label + URL): | |

---

## O. Assets checklist

Place files in `public/clients/<slug>/` (see [ASSETS.md](./ASSETS.md)):

| File | Attached? (yes/no) | Notes |
| ---- | ------------------ | ----- |
| `hero.jpg` (or .webp) | | |
| `logo.svg` (optional) | | |

---

## Next steps (for you / developer)

1. Create `src/content/clients/<slug>.ts` exporting a `SiteConfig` object (copy structure from `northline.ts` or `example-cafe.ts`).
2. Add the slug to `registry` in `src/content/clients/registry.ts`.
3. Drop images into `public/clients/<slug>/` and set `hero.imageSrc` to `/clients/<slug>/hero.jpg`.
4. Build with `VITE_CLIENT_ID=<slug> npm run build` and deploy (see [DEPLOY.md](./DEPLOY.md)).
