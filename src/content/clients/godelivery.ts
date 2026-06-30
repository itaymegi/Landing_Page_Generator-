import type { LocalizedClientConfig, SiteConfig } from '../types'
import { uiEn, uiHe } from '../uiStrings'

const APP_STORE =
  'https://apps.apple.com/il/app/go-delivery/id6747035141?l=he'
const GOOGLE_PLAY =
  'https://play.google.com/store/apps/details?id=com.godelivery.app'
const WHATSAPP = 'https://wa.me/972586970773'
const INSTAGRAM =
  'https://www.instagram.com/go.delivery11?igsh=eGs3dDR6cHBpd2s3'
/** Replace with your official TikTok profile URL if different. */
const TIKTOK = 'https://www.tiktok.com/@godelivery01?_r=1&_t=ZS-95Ji1wdxkma'
const APP_PRIVACY =
  'https://apps.apple.com/il/app/go-delivery/id6747035141?l=he'

const godeliveryTheme = {
  page: '#140808',
  surface: '#1c0f0f',
  surfaceMuted: '#281818',
  border: 'color-mix(in oklab, #ffffff 14%, transparent)',
  text: '#faf7f7',
  textMuted: '#c9b8b8',
  accent: '#d31313',
  accentHover: '#e82e2e',
  accentSubtle: 'color-mix(in oklab, #d31313 22%, transparent)',
  accentForeground: '#faf5f5',
  /** Contact section — Bordeaux; light text + white action pills */
  contactBand: '#7B1B38',
  contactBandForeground: '#faf8f8',
} as const

const HEADER_LOGO = '/clients/godelivery/logo-mark.png'
const SUPPORT_EMAIL = 'support@godelivery.co'
const SUPPORT_PHONE = '+972 58-697-0773'

/** Go-Delivery — courier app, nationwide & intercity (Holylabs Ltd). */
const godeliveryEn: SiteConfig = {
  clientId: 'godelivery',
  theme: godeliveryTheme,
  ui: uiEn,
  meta: {
    title: 'Go-Delivery — Nationwide delivery across Israel',
    description:
      'Go-Delivery connects senders and couriers for deliveries across Israel — urban routes and intercity runs. Documents, parcels, groceries, and gifts with live tracking and clear handoffs.',
  },
  brand: {
    name: 'Go-Delivery',
    tagline: 'Deliveries across Israel — local runmury, door to door',
    logoSrc: HEADER_LOGO,
    logoAlt: 'Go-Delivery',
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
    cta: { label: 'Download on the App Store', href: APP_STORE },
    playStore: { label: 'Get it on Google Play', href: GOOGLE_PLAY },
    storeSegmentLabels: { apple: 'App Store', google: 'Google Play' },
    stickyPrimaryCta: { label: 'WhatsApp', href: WHATSAPP },
  },
  proofStrip: {
    items: [
      'Live tracking on every route',
      'Couriers nationwide',
      'Urban & intercity — documents to gifts',
      'Committed to the best prices for our customers',
      'The most competitive courier pay in the market *',
    ],
  },
  hero: {
    modernEyebrow: true,
    eyebrow: 'Nationwide delivery · One app for senders & couriers',
    title: 'Door-to-door across Israel—book, track, deliver.',
    subtitle:
      'Local or intercity: request a pickup, follow every milestone, and get a clear handoff when it reaches the door.',
    hideHeroCtas: true,
    dualStoreHero: true,
    primaryCta: { label: 'App Store', href: APP_STORE },
    secondaryCta: { label: 'Google Play', href: GOOGLE_PLAY },
    imageSrc: '',
    imageAlt: '',
  },
  benefits: {
    title: 'Why people choose Go-Delivery',
    subtitle:
      'Built for speed and clarity—from tap to pickup to “delivered,” locally or between cities.',
    items: [
      {
        title: 'Simple from the first tap',
        description:
          'Create a delivery in minutes. Clear pricing cues and status updates so you always know what happens next.',
      },
      {
        title: 'Built for real-world routes',
        description:
          'Couriers and customers stay aligned with tracking and structured handoffs—whether it is across town or between cities.',
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
      'Open App Store or Google Play above, or tap WhatsApp for the fastest reply.',
    cta: { label: 'Download on the App Store', href: APP_STORE },
    playStore: { label: 'Get it on Google Play', href: GOOGLE_PLAY },
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
    email: SUPPORT_EMAIL,
    phone: SUPPORT_PHONE,
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
    submitLabel: 'Contact us',
    submission: {
      mode: 'api',
      subjectPrefix: '[Go-Delivery] ',
      channel: 'landing-page',
    },
    belowForm: {
      appPrivacyLink: {
        label: 'In-app privacy policy',
        href: APP_PRIVACY,
      },
      creatorLine: 'Created by MegiWeb',
      placeholderLink: { label: '', href: '#' },
    },
  },
  footer: {
    layout: 'legalOnly',
    tagline: 'Go-Delivery — nationwide delivery, made simple.',
    copyright: '© 2026 Holylabs Ltd. All rights reserved.',
    links: [{ label: 'In-app privacy policy', href: APP_PRIVACY }],
    social: [
      { label: 'Instagram', href: INSTAGRAM },
      { label: 'TikTok', href: TIKTOK, icon: 'tiktok' },
      { label: 'App Store', href: APP_STORE },
      { label: 'Google Play', href: GOOGLE_PLAY },
    ],
  },
}

const godeliveryHe: SiteConfig = {
  clientId: 'godelivery',
  theme: godeliveryTheme,
  ui: uiHe,
  meta: {
    title: 'Go-Delivery — משלוחים בכל הארץ, פשוט ובטוח',
    description:
      'Go-Delivery מחברת בין שולחים לשליחים למשלוחים בכל רחבי הארץ — קווים עירוניים ובין־עירוניים. מסמכים, חבילות, קניות ומתנות עם מעקב בזמן אמת ומסירה ברורה.',
  },
  brand: {
    name: 'Go-Delivery',
    tagline: 'משלוחים בכל הארץ — עירוני, בין־עירוני ועד הדלת',
    logoSrc: HEADER_LOGO,
    logoAlt: 'Go-Delivery',
  },
  nav: {
    links: [
      { label: 'למה אנחנו', href: '#benefits' },
      { label: 'מה שולחים', href: '#services' },
      { label: 'איך זה עובד', href: '#process' },
      { label: 'ביקורות', href: '#testimonials' },
      { label: 'שאלות נפוצות', href: '#faq' },
      { label: 'יצירת קשר', href: '#contact' },
    ],
    cta: { label: 'הורדה ב-App Store', href: APP_STORE },
    playStore: { label: 'Google Play', href: GOOGLE_PLAY },
    storeSegmentLabels: { apple: 'App Store', google: 'Google Play' },
    stickyPrimaryCta: { label: 'WhatsApp', href: WHATSAPP },
  },
  proofStrip: {
    items: [
      'מעקב משלוח בזמן אמת',
      'שליחים בפריסה ארצית',
      'עירוני ובין־עירוני — ממסמכים ועד מתנות',
      'מתחייבים למחירים הטובים ביותר ללקוחות שלנו',
      'תשלום לשליחים המשתלם ביותר בשוק *',
    ],
  },
  hero: {
    modernEyebrow: true,
    eyebrow: 'משלוחים ארציים · אפליקציה אחת לשולחים ולשליחים',
    title: 'מדלת לדלת בכל הארץ — מזמינים, עוקבים, מוסרים.',
    subtitle:
      'עירוני או בין־עירוני: פותחים בקשה, רואים כל שלב בדרך, ומסיימים במסירה ברורה עד הבית.',
    hideHeroCtas: true,
    dualStoreHero: true,
    primaryCta: { label: 'הורדה ב-App Store', href: APP_STORE },
    secondaryCta: { label: 'Google Play', href: GOOGLE_PLAY },
    imageSrc: '',
    imageAlt: '',
  },
  benefits: {
    title: 'למה בוחרים ב-Go-Delivery',
    subtitle: 'בנויים למהירות ולשקיפות — מהלחיצה הראשונה ועד ״נמסר״.',
    items: [
      {
        title: 'פשוט מהרגע הראשון',
        description:
          'פותחים משלוח תוך דקות. מחירים ברורים ועדכוני סטטוס כדי שתמיד תדעו מה קורה עכשיו.',
      },
      {
        title: 'מתאים ללוגיסטיקה אמיתית בכל הארץ',
        description:
          'לקוחות ושליחים מסונכרנים עם מעקב ותהליך איסוף ומסירה מסודר — בעיר, בין ערים או בקו שמשרת אתכם.',
      },
      {
        title: 'גמישים לפי הצורך',
        description:
          'ממסמכים וחבילות ועד ריצה לקנייה ברגע האחרון או מתנה — אותו זרימה אחת, הרבה סוגי שליחויות.',
      },
    ],
  },
  services: {
    title: 'מה אפשר לשלוח איתנו',
    subtitle:
      'כל עוד זה עומד בהנחיות ובחוק המקומי — השליחים שלנו יכולים בדרך כלל לקחת את זה.',
    items: [
      {
        title: 'מסמכים וחבילות קטנות',
        description:
          'חוזים, ניירת, איסוף מחנויות — פריטים קלים עם נקודת איסוף ומסירה ברורה.',
        highlight: 'פופולרי',
      },
      {
        title: 'קניות וסידורים יומיומיים',
        description:
          'אוכל ומוצרים כשאין זמן — איסוף מהחנויות שאתם בוחרים.',
        highlight: 'באותו היום',
      },
      {
        title: 'מתנות ומסירות מיוחדות',
        description:
          'ימי הולדת, חבילות דאגה והפתעות — בזהירות ועם אישור מסירה.',
        highlight: 'בזהירות',
      },
    ],
  },
  whyUs: {
    title: 'איך זה עובד',
    subtitle: 'שלושה שלבים מהבקשה ועד ״נמסר״.',
    steps: [
      {
        step: 1,
        title: 'יוצרים משלוח',
        description:
          'מגדירים איסוף ומסירה, סוג פריט ותזמון. רואים עדכונים ככל שההזמנה מתקדמת.',
      },
      {
        step: 2,
        title: 'השליח אוסף',
        description:
          'שליח אמין מקבל את המשימה, אוסף את הפריטים ופועל לפי התהליך באפליקציה.',
      },
      {
        step: 3,
        title: 'עוקבים עד לדלת',
        description:
          'עוקבים אחרי הסטטוס באפליקציה עד סיום המסירה — עם תמיכה וצ׳אט כשצריך.',
      },
    ],
  },
  testimonials: {
    title: 'אהוב על שולחים ושליחים',
    subtitle:
      'משוב ממשתמשים אמיתיים — הטון משקף ביקורות ציבוריות ב-App Store.',
    items: [
      {
        quote:
          'אפליקציה מעולה — ענתה על כל הצרכים שלי. ההזמנה מרגישה מהירה ותמיד יודעים איפה עומדים.',
        name: 'Itay M.',
        role: 'ביקורת חמישה כוכבים ב-App Store',
      },
      {
        quote:
          'אפליקציה מצוינת, משתמש קבוע. הזרימה נשארת פשוטה גם כשמזמינים כמה משלוחים בשבוע.',
        name: 'משתמש App Store',
        role: 'ביקורת חמישה כוכבים',
      },
      {
        quote:
          'תודה — חוויה מצוינה מההתחלה ועד הסוף. המעקב והעדכונים נותנים תחושת אמון.',
        name: 'Asdewcb',
        role: 'ביקורת חמישה כוכבים ב-App Store',
      },
    ],
  },
  ctaMid: {
    title: 'מוכנים למשלוח הבא?',
    subtitle:
      'App Store או Google Play למעלה, או WhatsApp לתשובה הכי מהירה.',
    cta: { label: 'הורדה ב-App Store', href: APP_STORE },
    playStore: { label: 'Google Play', href: GOOGLE_PLAY },
  },
  faq: {
    title: 'שאלות ותשובות',
    subtitle:
      'הבסיס על שימוש ב-Go-Delivery. לשאלות ספציפיות — דברו איתנו.',
    items: [
      {
        question: 'מה אפשר לשלוח?',
        answer:
          'בדרך כלל מסמכים, חבילות קטנות, קניות ומתנות. פריטים אסורים או מוגבלים תלויים בחוק המקומי ובתנאים שלנו — בדקו באפליקציה לפני הזמנה.',
      },
      {
        question: 'יש מעקב אחרי המשלוח?',
        answer:
          'כן. האפליקציה בנויה סביב עדכוני סטטוס ומעקב חי כדי שתוכלו לעקוב אחרי איסוף ומסירה.',
      },
      {
        question: 'מי השליחים?',
        answer:
          'השליחים פועלים דרך פלטפורמת Go-Delivery. כל נסיעה עוברת אותו תהליך מובנה של איסוף ומסירה לשמירה על איכות.',
      },
      {
        question: 'איך מקבלים עזרה?',
        answer:
          'כותבים לנו ב-WhatsApp, דרך אפשרויות יצירת הקשר באפליקציה, או במייל לתמיכה. נחזור מהר ככל האפשר בשעות הפעילות.',
      },
    ],
  },
  contact: {
    title: 'דברו איתנו',
    subtitle:
      'שאלות על משלוחים, שותפויות או האפליקציה? כותבים לנו — אנחנו קוראים כל הודעה.',
    microcopy:
      'מעדיפים WhatsApp? למטה הכי מהיר לתשובה.',
    whatsappLabel: 'הודעה ב-WhatsApp',
    whatsappUrl: WHATSAPP,
    email: SUPPORT_EMAIL,
    phone: SUPPORT_PHONE,
    formFields: [
      {
        id: 'name',
        label: 'שם',
        type: 'text',
        placeholder: 'השם שלך',
        required: true,
      },
      {
        id: 'email',
        label: 'אימייל',
        type: 'email',
        placeholder: 'you@email.com',
        required: true,
      },
      {
        id: 'topic',
        label: 'נושא',
        type: 'text',
        placeholder: 'משלוח, שותפות, עיתונות…',
        required: false,
      },
      {
        id: 'message',
        label: 'הודעה',
        type: 'textarea',
        placeholder: 'איך נוכל לעזור?',
        required: true,
      },
    ],
    submitLabel: 'צור קשר',
    submission: {
      mode: 'api',
      subjectPrefix: '[Go-Delivery] ',
      channel: 'landing-page',
    },
    belowForm: {
      appPrivacyLink: {
        label: 'מדיניות פרטיות באפליקציה',
        href: APP_PRIVACY,
      },
      creatorLine: 'Created by MegiWeb',
      placeholderLink: { label: '', href: '#' },
    },
  },
  footer: {
    layout: 'legalOnly',
    tagline: 'Go-Delivery — משלוחים בכל הארץ, בפשטות.',
    copyright: '© 2026 Holylabs Ltd. כל הזכויות שמורות.',
    links: [{ label: 'פרטיות באפליקציה', href: APP_PRIVACY }],
    social: [
      { label: 'Instagram', href: INSTAGRAM },
      { label: 'TikTok', href: TIKTOK, icon: 'tiktok' },
      { label: 'App Store', href: APP_STORE },
      { label: 'Google Play', href: GOOGLE_PLAY },
    ],
  },
}

export const godeliveryLocales: LocalizedClientConfig = {
  en: godeliveryEn,
  he: godeliveryHe,
}

/** @deprecated Prefer `godeliveryLocales.en`. */
export const godelivery = godeliveryEn
