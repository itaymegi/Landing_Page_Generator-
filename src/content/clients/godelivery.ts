import type { SiteConfig } from '../types'

const APP_STORE =
  'https://apps.apple.com/il/app/go-delivery/id6747035141?l=he'
const WHATSAPP = 'https://wa.me/972586970773'
const INSTAGRAM =
  'https://www.instagram.com/go.delivery11?igsh=eGs3dDR6cHBpd2s3'
const APP_PRIVACY =
  'https://apps.apple.com/il/app/go-delivery/id6747035141?l=he'

/** Go-Delivery — city courier app (Holylabs Ltd). Replace support email when you have a live inbox. */
export const godelivery: SiteConfig = {
  clientId: 'godelivery',
  meta: {
    title: 'Go-Delivery — Send & receive anything in your city',
    description:
      'GoDelivery is the easiest way to send and receive anything in your city. From documents and small parcels to groceries and gifts — our trusted couriers pick up and deliver your items fast, safely, and exactly when you need it.',
  },
  theme: {
    page: '#0f0a0a',
    surface: '#1a1212',
    surfaceMuted: '#241818',
    border: 'color-mix(in oklab, #ffffff 12%, transparent)',
    text: '#faf5f5',
    textMuted: '#b8a8a8',
    accent: '#d31313',
    accentHover: '#e82e2e',
    accentSubtle: 'color-mix(in oklab, #d31313 22%, transparent)',
  },
  brand: {
    name: 'Go-Delivery',
    tagline: 'Fast, safe city delivery — from documents to groceries',
  },
  nav: {
    links: [
      { label: 'Why us', href: '#benefits' },
      { label: 'What we deliver', href: '#services' },
      { label: 'How it works', href: '#process' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: { label: 'Download the app', href: APP_STORE },
  },
  proofStrip: {
    items: [
      'Live order tracking',
      'Trusted local couriers',
      'Parcels, groceries, gifts & more',
    ],
  },
  hero: {
    eyebrow: 'City delivery · Customer & courier app',
    title: 'Send and receive anything in your city—fast and safely.',
    subtitle:
      'One app for documents, small parcels, groceries, and gifts. Request a pickup, follow progress in real time, and get your items delivered when you need them.',
    primaryCta: { label: 'Download on the App Store', href: APP_STORE },
    secondaryCta: { label: 'Chat on WhatsApp', href: WHATSAPP },
    imageSrc: '/clients/godelivery/hero.jpg',
    imageAlt: 'Go-Delivery app showing order history and delivery tracking',
  },
  benefits: {
    title: 'Why people choose Go-Delivery',
    subtitle:
      'Built for speed and clarity—from tap to pickup to “delivered.”',
    items: [
      {
        title: 'Simple from the first tap',
        description:
          'Create a delivery in minutes. Clear pricing cues and status updates so you always know what happens next.',
      },
      {
        title: 'Built for real city logistics',
        description:
          'Couriers and customers stay aligned with tracking and structured handoffs—fewer surprises, fewer calls.',
      },
      {
        title: 'Versatile by design',
        description:
          'From paperwork and parcels to last-minute grocery runs and gifts—one flexible flow for many errands.',
      },
    ],
  },
  services: {
    title: 'What you can move with us',
    subtitle:
      'If it fits the guidelines and local rules, our couriers can usually take it.',
    items: [
      {
        title: 'Documents & small parcels',
        description:
          'Contracts, legal papers, retail pickups—lightweight items with clear pickup and drop-off.',
        highlight: 'Popular',
      },
      {
        title: 'Groceries & everyday runs',
        description:
          'Food and essentials when you are short on time—pickup from stores you choose.',
        highlight: 'Same day',
      },
      {
        title: 'Gifts & special handoffs',
        description:
          'Birthdays, care packages, and surprise drops—handled with care and proof of delivery.',
        highlight: 'Careful',
      },
    ],
  },
  whyUs: {
    title: 'How it works',
    subtitle: 'Three steps from request to delivered.',
    steps: [
      {
        step: 1,
        title: 'Create your delivery',
        description:
          'Set pickup and drop-off, item type, and timing. You will see updates as the order progresses.',
      },
      {
        step: 2,
        title: 'Courier picks up',
        description:
          'A trusted courier accepts the job, collects your items, and follows the in-app flow.',
      },
      {
        step: 3,
        title: 'Track to the door',
        description:
          'Follow status in the app until delivery is complete—with support and chat when you need it.',
      },
    ],
  },
  testimonials: {
    title: 'Loved by riders and senders',
    subtitle:
      'Feedback from real users—ratings and tone reflect public App Store reviews.',
    items: [
      {
        quote:
          'Rocket app—met all my needs. Ordering feels fast and I always know where things stand.',
        name: 'Itay M.',
        role: 'Five-star App Store review',
      },
      {
        quote:
          'Excellent app, regular user. The flow stays simple even when I book several deliveries a week.',
        name: 'App Store reviewer',
        role: 'Five-star review',
      },
      {
        quote:
          'Thank you—great experience end to end. Tracking and updates make it feel trustworthy.',
        name: 'Asdewcb',
        role: 'Five-star App Store review',
      },
    ],
  },
  ctaMid: {
    title: 'Ready to send your next delivery?',
    subtitle:
      'Download Go-Delivery on the App Store and book your first courier in minutes.',
    cta: { label: 'Get the app', href: APP_STORE },
  },
  faq: {
    title: 'Questions & answers',
    subtitle:
      'Basics about using Go-Delivery. Contact us if you need something specific.',
    items: [
      {
        question: 'What can I send?',
        answer:
          'Typical items include documents, small parcels, groceries, and gifts. Prohibited or restricted items depend on local law and our terms—check details in the app before booking.',
      },
      {
        question: 'Is my delivery tracked?',
        answer:
          'Yes. The app is built around status updates and live tracking so you can follow pickup and delivery milestones.',
      },
      {
        question: 'Who are the couriers?',
        answer:
          'Couriers work through the Go-Delivery platform. Every trip follows the same structured pickup and drop-off flow to keep quality consistent.',
      },
      {
        question: 'How do I get help?',
        answer:
          'Message us on WhatsApp, use the in-app contact options, or email support. We respond as quickly as we can during business hours.',
      },
    ],
  },
  contact: {
    title: 'Talk to us',
    subtitle:
      'Questions about deliveries, partnerships, or the app? Reach out—we read every message.',
    microcopy:
      'Prefer WhatsApp? Pick the number below for the fastest reply.',
    whatsappLabel: 'Message us on WhatsApp',
    whatsappUrl: WHATSAPP,
    // Replace with a live inbox before production (form is demo-only until wired).
    email: 'support@godelivery.co',
    phone: '+972 58-697-0773',
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
        id: 'topic',
        label: 'Topic',
        type: 'text',
        placeholder: 'Delivery, partnership, press…',
        required: false,
      },
      {
        id: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: 'How can we help?',
        required: true,
      },
    ],
    submitLabel: 'Send message',
  },
  footer: {
    tagline: 'Go-Delivery — city logistics made simple.',
    copyright: '© 2026 Holylabs Ltd. All rights reserved.',
    links: [
      { label: 'App privacy', href: APP_PRIVACY },
      { label: 'Download app', href: APP_STORE },
    ],
    social: [
      { label: 'Instagram', href: INSTAGRAM },
      { label: 'App Store', href: APP_STORE },
    ],
  },
}
