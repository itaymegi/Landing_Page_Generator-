# Client brief — copy this file per project

**Instructions:** Duplicate this file as `briefs/<client>-YYYY-MM-DD.md`. Send it to the client (or fill it together in a call). When complete, translate the answers into `src/content/clients/<slug>.ts` as a **localized bundle** (`en` + `he` keys) and register the slug in `src/content/clients/registry.ts`.

---

## A. Project meta

| Field | Your answer |
| ----- | ----------- |
| **Client / project name** (legal or DBA) | |
| **Short slug** (lowercase, no spaces, e.g. `acme-dental`) — used for folder `public/clients/<slug>/` | |
| **Page title** (browser tab, e.g. `Acme Dental — Family dentistry in Austin`) | |
| **Meta description** (1–2 sentences for Google / previews, ~155 characters) | |

---

## A2. Languages & build

| Field | Your answer |
| ----- | ----------- |
| **Locales needed** | `en` only / `en` + `he` (Hebrew uses RTL at build time via `VITE_LOCALE=he`) |
| **Primary locale for first launch** | `en` / `he` |

If you need **both** English and Hebrew live, plan **two builds** (same client, `VITE_LOCALE=en` vs `he`) unless you add a runtime language switch later.

_For Hebrew: prefer native marketing copy; keep product names like **WhatsApp** and **App Store** in English where it reads better. Section anchors (`#benefits`, `#contact`, …) stay the same in code._

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

**Mobile apps (optional):** If you publish on **both** App Store and Google Play, add a second store URL in config (`nav.playStore`) plus optional segment labels (`nav.storeSegmentLabels`). The site shows a **segmented toggle + one primary download button** in the header (desktop) and sticky mobile bar; iOS/Android visitors get a **default segment** from the browser but can switch manually. If only one store is set, a single CTA is shown (no toggle).

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
| **Primary button** (label + link — often App Store) | |
| **Second store (optional)** | If you set `ctaMid.playStore`, the banner uses the same **toggle + one button** pattern as the nav. |

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

Define each row: **id** (one word), **label**, **type** (`text` | `email` | `tel` | `textarea`), **placeholder**, **required** (yes/no). **Do not** ask for age or use radio groups unless you add custom code — keep to simple inputs driven by this table.

**Marketing consent (optional):** If legal/compliance needs a checkbox, specify label and whether it is required; it maps to `contact.marketingConsent` in code.

| id | Label | type | placeholder | required |
| -- | ----- | ---- | ----------- | -------- |
| name | Name | text | | yes |
| | | | | |
| | | | | |
| | | | | |

**Submission:** The template validates in the browser and shows a demo “sent” state. For production, the developer replaces the submit handler with `mailto:`, a WhatsApp deep link, or an HTTP API — without changing the contact section layout.

---

## N. Footer

| Field | Your answer |
| ----- | ----------- |
| **Short tagline** (one line) | |
| **Copyright line** (e.g. `© 2026 Business Name. All rights reserved.`) | |
| **Footer links** (label + URL): | |
| **Social links** (label + URL): | Icons are inferred from URLs (Instagram, WhatsApp, App Store, Google Play, etc.); optional `icon` in code overrides inference. |

---

## O. Assets checklist

Place files in `public/clients/<slug>/` (see [ASSETS.md](./ASSETS.md)):

| File | Attached? (yes/no) | Notes |
| ---- | ------------------ | ----- |
| `hero.jpg` (or .webp) | | |
| `logo.svg` (optional) | | |

---

## Next steps (for you / developer)

1. Create `src/content/clients/<slug>.ts` exporting a **localized** object (`<slug>Locales`) with `en` and `he` keys, each a full `SiteConfig` (include `ui` from `uiEn` / `uiHe` in `src/content/uiStrings.ts`). Copy structure from `northline.ts`, `example-cafe.ts`, or `godelivery.ts`.
2. Add the slug to `registry` in `src/content/clients/registry.ts` (map to the `*Locales` bundle).
3. Drop images into `public/clients/<slug>/` and set `hero.imageSrc` to `/clients/<slug>/hero.jpg`.
4. Build with `VITE_CLIENT_ID=<slug>` and `VITE_LOCALE=en` or `he`, then `npm run build` and deploy (see [DEPLOY.md](./DEPLOY.md)).
