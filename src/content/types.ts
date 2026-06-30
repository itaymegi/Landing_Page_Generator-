/** Build-time page language / direction. */
export type Locale = 'en' | 'he'

export const LOCALES: Locale[] = ['en', 'he']

/** Non–section-copy strings (a11y, section eyebrows, footer headings). */
export type SiteUi = {
  skipToContent: string
  eyebrowServices: string
  eyebrowProcess: string
  eyebrowTestimonials: string
  eyebrowContact: string
  emailLabel: string
  phoneLabel: string
  contactSuccessMessage: string
  /** Shown while lead submit is in flight. */
  contactSubmitting: string
  /** Shown when lead submit fails due to network/server error. */
  contactSubmitError: string
  /** Shown when submission is enabled but API/env is missing on deployment. */
  contactEndpointMissing: string
  footerLegal: string
  footerSocial: string
  navAriaPrimary: string
  navAriaMobilePrimary: string
  menuOpen: string
  menuClose: string
  srMenu: string
}

export type Cta = {
  label: string
  href: string
}

export type NavLink = {
  label: string
  href: string
}

export type FormFieldSpec = {
  id: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea'
  placeholder?: string
  required?: boolean
}

export type BenefitItem = {
  title: string
  description: string
}

export type ServiceItem = {
  title: string
  description: string
  highlight?: string
}

export type WhyUsStep = {
  title: string
  description: string
  step: number
}

export type TestimonialItem = {
  quote: string
  name: string
  role: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type FooterLink = {
  label: string
  href: string
}

/** Optional explicit icon; otherwise inferred from `href` in the footer. */
export type SocialPlatform =
  | 'instagram'
  | 'facebook'
  | 'twitter'
  | 'x'
  | 'youtube'
  | 'linkedin'
  | 'tiktok'
  | 'whatsapp'
  | 'appStore'
  | 'googlePlay'

export type SocialLink = {
  label: string
  href: string
  icon?: SocialPlatform
}

/** Optional overrides for CSS variables (see `src/index.css` @theme). */
export type SiteTheme = Partial<{
  page: string
  surface: string
  surfaceMuted: string
  border: string
  text: string
  textMuted: string
  accent: string
  accentHover: string
  accentSubtle: string
  /** Text/icons on solid accent (primary buttons, on-accent bands). */
  accentForeground: string
  /** Contact section background (e.g. Bordeaux); falls back to `accent` when unset. */
  contactBand?: string
  /** Text on contact band; falls back to `accentForeground` when unset. */
  contactBandForeground?: string
}>

export type SiteMeta = {
  /** Browser tab title; default: `${brand.name} — ${brand.tagline}` */
  title?: string
  /** SEO / social description */
  description?: string
}

export type SiteConfig = {
  /** Folder name under `public/clients/{clientId}/` for assets */
  clientId: string
  /** Active locale for this resolved config (set by registry). */
  locale?: Locale
  ui: SiteUi
  meta?: SiteMeta
  theme?: SiteTheme
  brand: {
    name: string
    tagline: string
    /** Optional mark shown beside the name in the header (e.g. `/clients/slug/logo.png`). */
    logoSrc?: string
    logoAlt?: string
  }
  nav: {
    links: NavLink[]
    /** Primary store CTA (e.g. App Store). */
    cta: Cta
    /** When set, header + mobile bar show App Store / Play toggle + one primary button. */
    playStore?: Cta
    /** Optional segment button labels (defaults: App Store / Google Play). */
    storeSegmentLabels?: { apple: string; google: string }
    /**
     * With `playStore`: store row links to each store; this is the prominent button (e.g. WhatsApp).
     * Omit to keep the segmented “pick store + one download” control.
     */
    stickyPrimaryCta?: Cta
  }
  proofStrip: {
    items: string[]
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: Cta
    secondaryCta: Cta
    /** When true with two store URLs in primary/secondary, show two store buttons (no WhatsApp in hero). */
    dualStoreHero?: boolean
    /** When true, no primary/secondary CTAs in hero (e.g. stores only in nav / mobile bar). */
    hideHeroCtas?: boolean
    /** Hero visual; leave empty to use a text-only hero (no image column). */
    imageSrc: string
    imageAlt: string
    /** Eyebrow as a pill badge (modern landing look). */
    modernEyebrow?: boolean
  }
  benefits: {
    title: string
    subtitle: string
    items: BenefitItem[]
  }
  services: {
    title: string
    subtitle: string
    items: ServiceItem[]
  }
  whyUs: {
    title: string
    subtitle: string
    steps: WhyUsStep[]
  }
  testimonials: {
    title: string
    subtitle: string
    items: TestimonialItem[]
  }
  ctaMid: {
    title: string
    subtitle: string
    cta: Cta
    /** Optional second store for mid-page toggle (same UX as nav). */
    playStore?: Cta
    /** Optional non-store CTA (e.g. WhatsApp) below the download control. */
    secondaryCta?: Cta
  }
  faq: {
    title: string
    subtitle: string
    items: FaqItem[]
  }
  contact: {
    title: string
    subtitle: string
    microcopy: string
    whatsappLabel: string
    whatsappUrl: string
    email: string
    phone: string
    formFields: FormFieldSpec[]
    submitLabel: string
    /** Optional lead delivery config. Omit to keep demo-only success (no network). */
    submission?: {
      /** `api`: POST to app-owned endpoint (e.g. `/api/lead`). */
      mode: 'api'
      /** Prepended to email subject, e.g. `[Go-Delivery]`. */
      subjectPrefix?: string
      /** Optional source label in inbox (e.g. `landing-page`). */
      channel?: string
    }
    /** Optional marketing consent checkbox (e.g. GDPR-style); omit if not needed. */
    marketingConsent?: {
      label: string
      required?: boolean
    }
    /**
     * When set, replaces the lower band (microcopy, email, phone, WhatsApp) after the form.
     * Use for a minimal legal line + creator credit.
     */
    belowForm?: {
      appPrivacyLink: Cta
      creatorLine: string
      /** Optional link below creator (e.g. studio); use `href: '#'` until URL is ready. */
      placeholderLink?: { label: string; href: string }
    }
  }
  footer: {
    tagline: string
    copyright: string
    links: FooterLink[]
    social: SocialLink[]
    /** `legalOnly`: logo/tagline/social appear in BrandSocialStrip after Contact; SiteFooter is minimal. */
    layout?: 'full' | 'legalOnly'
    /** Optional creator / studio credit line (e.g. English slogan). */
    creatorCredit?: string
  }
}

/** Per-client content for both locales (build picks one via `VITE_LOCALE`). */
export type LocalizedClientConfig = Record<Locale, SiteConfig>
