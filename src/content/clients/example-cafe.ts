import type { LocalizedClientConfig, SiteConfig } from '../types'
import { uiEn, uiHe } from '../uiStrings'

/**
 * Second example client — shows `clientId`, custom `theme`, and local hero path.
 * Put `hero.jpg` in `public/clients/example-cafe/` or switch `imageSrc` to any URL.
 */
const exampleCafeEn: SiteConfig = {
  clientId: 'example-cafe',
  ui: uiEn,
  meta: {
    title: 'Riverstone Café — Artisan coffee & brunch',
    description:
      'Local café serving small-batch coffee, weekend brunch, and private event catering in Riverstone.',
  },
  theme: {
    page: '#140f0c',
    surface: '#1c1612',
    surfaceMuted: '#252019',
    border: 'color-mix(in oklab, #f5ebe0 14%, transparent)',
    text: '#faf6f1',
    textMuted: '#b8a99a',
    accent: '#c9835c',
    accentHover: '#e09972',
    accentSubtle: 'color-mix(in oklab, #c9835c 22%, transparent)',
    accentForeground: '#1a120f',
  },
  brand: {
    name: 'Riverstone Café',
    tagline: 'Coffee, brunch & gatherings',
  },
  nav: {
    links: [
      { label: 'Why us', href: '#benefits' },
      { label: 'Menu & catering', href: '#services' },
      { label: 'Visit', href: '#process' },
      { label: 'Guests', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Reserve', href: '#contact' },
    ],
    cta: { label: 'Reserve a table', href: '#contact' },
  },
  proofStrip: {
    items: ['Small-batch roasts', 'Weekend brunch', 'Event catering'],
  },
  hero: {
    eyebrow: 'Riverstone · Open daily 7a–6p',
    title: 'The café your neighborhood deserves.',
    subtitle:
      'Reserve a table for brunch, order catering for your next gathering, or swing by for an espresso that actually tastes like the bean.',
    primaryCta: { label: 'Book a table', href: '#contact' },
    secondaryCta: { label: 'WhatsApp us', href: 'https://wa.me/15559876543' },
    // Local file: add `hero.jpg` under public/clients/example-cafe/
    imageSrc:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Fresh espresso and pastry on a marble counter',
  },
  benefits: {
    title: 'Why locals make this their regular stop',
    subtitle:
      'We focus on a small menu done well—so every visit feels consistent, warm, and worth repeating.',
    items: [
      {
        title: 'Beans you can taste',
        description:
          'Single-origin rotations, dialed-in grinders, and milk steamed for sweetness—not volume.',
      },
      {
        title: 'Brunch without the chaos',
        description:
          'Reservations for peak hours, clear pacing, and staff who know the menu by heart.',
      },
      {
        title: 'Catering that shows up',
        description:
          'Boxed lunches, coffee bars, and pastry spreads—delivered ready for your team or celebration.',
      },
    ],
  },
  services: {
    title: 'What we offer',
    subtitle: 'Pick one path—or combine them for a bigger event.',
    items: [
      {
        title: 'Café dining',
        description: 'Espresso, filters, seasonal drinks, breakfast, and lunch plates.',
        highlight: 'Daily',
      },
      {
        title: 'Weekend brunch',
        description: 'Reservation-only sittings with a set menu and walk-in bar.',
        highlight: 'Sat–Sun',
      },
      {
        title: 'Catering & events',
        description: 'Off-site coffee service, pastries, and sandos for 10–120 guests.',
        highlight: 'Quote',
      },
    ],
  },
  whyUs: {
    title: 'Plan your visit',
    subtitle: 'Three simple steps from “curious” to confirmed.',
    steps: [
      {
        step: 1,
        title: 'Pick your moment',
        description:
          'Brunch table, weekday meeting, or catering date—tell us headcount and timing.',
      },
      {
        step: 2,
        title: 'We hold your spot',
        description:
          'You get a confirmation with prepayment where needed for peak slots.',
      },
      {
        step: 3,
        title: 'Show up hungry',
        description:
          'We handle the rest: dietary notes, high chair, or a quiet corner for calls.',
      },
    ],
  },
  testimonials: {
    title: 'What guests say',
    subtitle: 'Example quotes — replace with real Google or Instagram reviews.',
    items: [
      {
        quote: 'Best cortado in town—and the team remembers my order after two visits.',
        name: 'Priya Desai',
        role: 'Regular, Riverstone',
      },
      {
        quote: 'We booked brunch for twelve. Food was on time, hot, and actually photogenic.',
        name: 'Leo Hart',
        role: 'Event lead, Northbank Co-op',
      },
      {
        quote: 'Catering coffee bar saved our launch party. Zero line, zero drama.',
        name: 'Nina Gould',
        role: 'Marketing, Foldlight',
      },
    ],
  },
  ctaMid: {
    title: 'Save your table before the rush.',
    subtitle:
      'Weekend brunch fills fast. Send your preferred time—we will confirm within a few hours.',
    cta: { label: 'Request a reservation', href: '#contact' },
  },
  faq: {
    title: 'FAQ',
    subtitle: 'Quick answers before you message us.',
    items: [
      {
        question: 'Do you take walk-ins?',
        answer:
          'Yes on weekdays. Weekend brunch is reservation-first; a few bar seats stay walk-in.',
      },
      {
        question: 'Dietary restrictions?',
        answer:
          'Vegetarian and gluten-aware options daily. Note allergies in your reservation.',
      },
      {
        question: 'Parking?',
        answer:
          'Street parking on Maple + validated garage after 5pm two blocks east.',
      },
      {
        question: 'Catering lead time?',
        answer: 'Five business days minimum for 30+ guests; rush slots sometimes available.',
      },
    ],
  },
  contact: {
    title: 'Reservations & catering',
    subtitle: 'We reply same day for most inquiries.',
    microcopy: 'No marketing lists—we only use this to confirm your request.',
    whatsappLabel: 'Message on WhatsApp',
    whatsappUrl: 'https://wa.me/15559876543',
    email: 'hello@riverstone.cafe.example',
    phone: '+1 (555) 019-8842',
    formFields: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Your name',
        required: true,
      },
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'you@email.com',
        required: true,
      },
      {
        id: 'guests',
        label: 'Guests / headcount',
        type: 'text',
        placeholder: 'e.g. 4 guests, Sat 10:30',
        required: true,
      },
      {
        id: 'message',
        label: 'Anything else?',
        type: 'textarea',
        placeholder: 'Dietary needs, catering date, etc.',
        required: false,
      },
    ],
    submitLabel: 'Send request',
  },
  footer: {
    tagline: 'Riverstone Café · Maple Ave & 4th',
    copyright: '© 2026 Riverstone Café. Example client for template demo.',
    links: [{ label: 'Privacy', href: '#contact' }],
    social: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Maps', href: 'https://maps.google.com' },
    ],
  },
}

const exampleCafeHe: SiteConfig = {
  ...exampleCafeEn,
  ui: uiHe,
}

export const exampleCafeLocales: LocalizedClientConfig = {
  en: exampleCafeEn,
  he: exampleCafeHe,
}

/** @deprecated Prefer `exampleCafeLocales.en`. */
export const exampleCafe = exampleCafeEn
