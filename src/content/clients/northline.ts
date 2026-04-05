import type { SiteConfig } from '../types'

/** Default demo client — your agency offer (content from original Stage 1). */
export const northline: SiteConfig = {
  clientId: 'northline',
  meta: {
    title: 'Northline Studio — Landing pages that convert',
    description:
      'Northline Studio helps small businesses launch premium landing experiences that convert.',
  },
  brand: {
    name: 'Northline Studio',
    tagline: 'Landing pages for growth-minded small businesses',
  },
  nav: {
    links: [
      { label: 'Benefits', href: '#benefits' },
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
      { label: 'Stories', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: { label: 'Book a call', href: '#contact' },
  },
  proofStrip: {
    items: [
      'Strategy-first structure',
      'Launch in days, not weeks',
      'Built to convert',
    ],
  },
  hero: {
    eyebrow: 'Premium landing pages · Small business focus',
    title: 'A single page that earns trust—and moves people to act.',
    subtitle:
      'We design and build focused landing experiences with clear story, strong proof, and frictionless contact. One proven structure you can reuse and resell across clients.',
    primaryCta: { label: 'Get a project quote', href: '#contact' },
    secondaryCta: { label: 'Chat on WhatsApp', href: 'https://wa.me/15551234567' },
    imageSrc:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Bright modern workspace with warm natural light',
  },
  benefits: {
    title: 'Why businesses like yours choose a focused landing page',
    subtitle:
      'Attention is scarce. A disciplined one-page story keeps visitors oriented, answers objections, and drives one primary action.',
    items: [
      {
        title: 'Clarity beats clever',
        description:
          'Headline hierarchy, scannable sections, and CTAs that repeat the same promise—so visitors always know what to do next.',
      },
      {
        title: 'Trust built in sequence',
        description:
          'Outcomes first, offer second, proof third. The flow mirrors how people actually decide—especially on mobile.',
      },
      {
        title: 'Fast to ship, easy to iterate',
        description:
          'One structure means predictable delivery. Swap copy, palette, and media without rebuilding layout or responsiveness.',
      },
    ],
  },
  services: {
    title: 'What you get',
    subtitle:
      'Everything needed for a client-ready page—not a bloated site you will fight later.',
    items: [
      {
        title: 'Conversion architecture',
        description:
          'Section order, messaging rhythm, and CTA placement tuned for small-business offers and lead capture.',
        highlight: 'Included',
      },
      {
        title: 'Premium visual system',
        description:
          'Typography, spacing, cards, and motion that feel intentional—on phone, tablet, and desktop.',
        highlight: 'Responsive',
      },
      {
        title: 'Contact + WhatsApp paths',
        description:
          'Primary form, click-to-chat, and visible contact details so high-intent visitors pick their lane.',
        highlight: 'Flexible',
      },
    ],
  },
  whyUs: {
    title: 'How we work',
    subtitle: 'A calm process with crisp checkpoints—no mystery milestones.',
    steps: [
      {
        step: 1,
        title: 'Align on the offer',
        description:
          'We nail the promise, audience, and primary action in a short intake so the page speaks to real buyers.',
      },
      {
        step: 2,
        title: 'Design the story',
        description:
          'Wireframe the sections, refine copy blocks, and stress-test the mobile scroll before visuals lock.',
      },
      {
        step: 3,
        title: 'Build, polish, handoff',
        description:
          'Production build, accessibility pass, and a tidy codebase structured for future client swaps.',
      },
    ],
  },
  testimonials: {
    title: 'Teams who needed clarity—not more pages',
    subtitle: 'Placeholder stories styled like real social proof; swap with client quotes anytime.',
    items: [
      {
        quote:
          'We finally have one link we are proud to send. Bookings doubled in six weeks without touching ads.',
        name: 'Jordan Ellis',
        role: 'Owner, Harth & Co. Goods',
      },
      {
        quote:
          'The structure is strict in a good way. Updates are fast because every section has a job.',
        name: 'Morgan Lee',
        role: 'Director, Beacon Field Services',
      },
      {
        quote:
          'Mobile looks as premium as desktop. That was the bar—and they cleared it.',
        name: 'Samira Okonkwo',
        role: 'Founder, Vital Form Coaching',
      },
    ],
  },
  ctaMid: {
    title: 'Ready to look as credible as you are?',
    subtitle:
      'Tell us about your business and timeline. We will respond with next steps within one business day.',
    cta: { label: 'Start the conversation', href: '#contact' },
  },
  faq: {
    title: 'Questions, answered',
    subtitle: 'Straight answers for buyers comparing landing page partners.',
    items: [
      {
        question: 'Is this a full website?',
        answer:
          'No—this is a single, high-performing landing page. It is ideal when you have one core offer and want speed, focus, and easier maintenance.',
      },
      {
        question: 'Can you match our brand colors?',
        answer:
          'Yes. Palette swaps are centralized. Bring your brand guidelines and we will mirror them.',
      },
      {
        question: 'What do you need from us?',
        answer:
          'Business context, offer details, proof points (logos, quotes, metrics), imagery or direction, and your preferred contact paths (form, WhatsApp, phone).',
      },
      {
        question: 'Do you host the page?',
        answer:
          'We can hand off static assets for your host (Netlify, Vercel, etc.) or advise on deployment. No lock-in.',
      },
    ],
  },
  contact: {
    title: 'Let’s talk about your page',
    subtitle:
      'Share a few details—we will follow up with timing, pricing, and what good looks like for your offer.',
    microcopy:
      'We respect your inbox. No spam—just a thoughtful reply with next steps.',
    whatsappLabel: 'Message on WhatsApp',
    whatsappUrl: 'https://wa.me/15551234567',
    email: 'hello@northline.studio',
    phone: '+1 (555) 014-2270',
    formFields: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Alex Morgan',
        required: true,
      },
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'you@business.com',
        required: true,
      },
      {
        id: 'phone',
        label: 'Phone',
        type: 'tel',
        placeholder: '+1 (555) 000-0000',
        required: false,
      },
      {
        id: 'message',
        label: 'What are you launching?',
        type: 'textarea',
        placeholder: 'Tell us about your offer, timeline, and goals.',
        required: true,
      },
    ],
    submitLabel: 'Request a call back',
  },
  footer: {
    tagline: 'Premium landing pages for teams that value clarity.',
    copyright: '© 2026 Northline Studio. All rights reserved.',
    links: [
      { label: 'Privacy', href: '#contact' },
      { label: 'Terms', href: '#contact' },
    ],
    social: [
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'Instagram', href: 'https://instagram.com' },
    ],
  },
}
