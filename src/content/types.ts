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

export type SocialLink = {
  label: string
  href: string
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
  meta?: SiteMeta
  theme?: SiteTheme
  brand: {
    name: string
    tagline: string
  }
  nav: {
    links: NavLink[]
    cta: Cta
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
    imageSrc: string
    imageAlt: string
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
  }
  footer: {
    tagline: string
    copyright: string
    links: FooterLink[]
    social: SocialLink[]
  }
}
