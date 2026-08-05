import { media } from "./media";

export type NavLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  brand: {
    name: string;
    logoText: string;
    tagline: string;
  };
  business: {
    legalName: string;
    description: string;
    areaServed: string;
    sameAs: string[];
  };
  contact: {
    email: string;
    phones: string[];
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    instagram: string;
    address: string;
    isPlaceholder: boolean;
  };
  nav: NavLink[];
  hero: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
    image: string;
    imageAlt: string;
    trustBadges: string[];
  };
  promise: {
    eyebrow: string;
    title: string;
    image: string;
    imageAlt: string;
    philosophyEyebrow: string;
    philosophyTitle: string;
    philosophyLead: string[];
    cards: {
      icon: "heart" | "spark" | "guide";
      title: string;
      text: string;
    }[];
  };
  collections: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  whyUs: {
    eyebrow: string;
    title: string;
    subtitle: string;
    featured: {
      title: string;
      text: string;
      image: string;
      imageAlt: string;
    }[];
    compact: { title: string; text: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
    steps: { title: string; text: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    googlePlaceholder: string;
    items: {
      quote: string;
      name: string;
      eventType: string;
      image: string;
      imageAlt: string;
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  leadForm: {
    eyebrow: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    collectionLabel: string;
    collectionPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    optionalHint: string;
    submitLabel: string;
    note: string;
    errorName: string;
    errorPhone: string;
    successNote: string;
    assurances: string[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    afterClick: string;
    reassurances: string[];
    cta: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
  legal: {
    businessName: string;
    businessOwner?: string;
    email?: string;
    phone?: string;
    address?: string;
    websiteUrl: string;
    lastUpdated: string;
    privacyContactEmail?: string;
    deliveryAreas?: string;
    usesAnalytics?: boolean;
    usesWhatsApp?: boolean;
    usesInstagram?: boolean;
  };
};

export const site: SiteConfig = {
  brand: {
    name: "Marry Me",
    logoText: "Marry Me",
    tagline: "Proposal Studio",
  },
  business: {
    legalName: "Marry Me",
    description:
      "סטודיו להפקת הצעות נישואין יוקרתיות — רגעים בלתי נשכחים, לא קישוטים.",
    areaServed: "ישראל",
    sameAs: ["https://www.instagram.com/marry_me_hafakot_/"],
  },
  contact: {
    email: "hello@marry-me.example",
    phones: ["050-288-5277"],
    whatsappNumber: "972502885277",
    whatsappDefaultMessage:
      "היי Marry Me, אשמח לתאם שיחה על הפקת הצעת נישואין.",
    instagram: "https://www.instagram.com/marry_me_hafakot_/",
    address: "ישראל",
    isPlaceholder: false,
  },
  nav: [
    { label: "ההבטחה שלנו", href: "/#promise" },
    { label: "קולקציות", href: "/#collections" },
    { label: "גלריה", href: "/#gallery" },
    { label: "למה אנחנו", href: "/#why" },
    { label: "איך זה עובד", href: "/#process" },
    { label: "שאלות", href: "/#faq" },
  ],
  hero: {
    eyebrow: "Marry Me",
    headline: "תיצרו את ההצעה שהיא תזכור לנצח",
    subtitle: "הפקה אישית של רגע אחד — מדויק, יוקרתי, בלתי נשכח.",
    primaryCta: "דברו איתנו בוואטסאפ",
    secondaryCta: "לגלות את הקולקציות",
    secondaryHref: "/#collections",
    image: media.hero.src,
    imageAlt: media.hero.alt,
    trustBadges: [
      "הפקה אישית",
      "לוקיישנים פרימיום",
      "עיצוב יוקרתי",
      "מאות זוגות",
    ],
  },
  promise: {
    eyebrow: "Our Promise",
    title: "אנחנו לא יוצרים קישוטים.\nאנחנו יוצרים זיכרון.",
    image: "/media/promise/promise-arch-kiss.png",
    imageAlt: "זוג תחת קשת אבן בשקיעה",
    philosophyEyebrow: "The Experience",
    philosophyTitle: "לא רק הצעת נישואין.\nרגע שילווה אתכם לכל החיים.",
    philosophyLead: [
      "כל הצעה שאנחנו מתכננים מתחילה בסיפור שלכם.",
      "אנחנו משלבים יצירתיות, עיצוב מוקפד והפקה מדויקת כדי ליצור חוויה אישית, מרגשת ובלתי נשכחת.",
    ],
    cards: [
      {
        icon: "heart",
        title: "חוויה שנבנית סביבכם",
        text: "אין שתי הצעות זהות. כל פרט נבחר במיוחד כדי לשקף את הסיפור והאופי שלכם.",
      },
      {
        icon: "spark",
        title: "עיצוב שמספר סיפור",
        text: "מהפרחים ועד התאורה – כל אלמנט מתחבר לחוויה אחת יוקרתית והרמונית.",
      },
      {
        icon: "guide",
        title: "ליווי אישי עד הרגע הגדול",
        text: 'אנחנו איתכם מהרעיון הראשון ועד לרגע שבו היא אומרת "כן".',
      },
    ],
  },
  collections: {
    eyebrow: "Collections",
    title: "קולקציות הצעה",
    subtitle: "בחרו אווירה — ואנחנו נהפוך אותה לרגע שלכם.",
    cta: "לפרטים",
  },
  whyUs: {
    eyebrow: "Why Us",
    title: "למה לבחור בנו",
    subtitle: "הצעה מגיעה פעם אחת — והיא חייבת להרגיש מושלמת.",
    featured: [
      {
        title: "עיצוב אישי",
        text: "מותאם לסיפור שלכם — לא לתבנית מדף.",
        image: "/media/gallery/white-heart-day.png",
        imageAlt: "עיצוב לב לבן",
      },
      {
        title: "תשומת לב לכל פרט",
        text: "עלי כותרת, גובה נרות, זווית אור — הכל מדויק.",
        image: "/media/gallery/arch-candles.png",
        imageAlt: "נרות ופרטים",
      },
      {
        title: "חוויה יוקרתית",
        text: "אווירה שמזמינה לנשום לאט — ולהרגיש את הרגע.",
        image: "/media/gallery/golden-fields.png",
        imageAlt: "הצעה בשדה",
      },
    ],
    compact: [
      {
        title: "עיטורים פרימיום",
        text: "פרחים טריים וגימור שנראה כמו מגזין.",
      },
      {
        title: "ידידותי לצילום",
        text: "הסטאפ בנוי לפריימים מושלמים.",
      },
      {
        title: "תהליך ללא לחץ",
        text: "ליווי ברור מהרעיון ועד אחרי ה\"כן\".",
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "גלריית ההצעות שלנו",
    subtitle: "כך זה נראה באמת.",
  },
  process: {
    eyebrow: "How It Works",
    title: "איך זה עובד",
    subtitle: "חמישה שלבים — מהודעה ועד חגיגה.",
    note: "בקצב שלכם · בלי לחץ",
    steps: [
      { title: "יצירת קשר", text: "תאריך, סגנון, והחלום שלכם." },
      { title: "תכנון", text: "לוקיישן, אווירה ותקציב מדויקים." },
      { title: "עיצוב", text: "הסטאפ לפרטי פרטים לפני היום." },
      { title: "יום ההצעה", text: "אנחנו מקימים. אתם מגיעים." },
      { title: "חגיגה", text: "שמפניה, חיבוק, זיכרון לנצח." },
    ],
  },
  testimonials: {
    eyebrow: "Reviews",
    title: "ביקורות והמלצות",
    subtitle: "המילים שנשארות אחרי הרגע.",
    googlePlaceholder: "ביקורות Google — בקרוב",
    items: [
      {
        quote: "הרגשנו כאילו אנחנו בתוך סרט. כל פרט היה מושלם.",
        name: "דניאל ונועה",
        eventType: "לב לבן · קיסריה",
        image: "/media/gallery/white-heart-neon.png",
        imageAlt: "זוג בקולקציית לב לבן",
      },
      {
        quote: "הגעתי — והכל כבר חיכה. שקט בראש, כמו בחלום.",
        name: "איתי ומיכל",
        eventType: "חצי מעגל + שביל",
        image: "/media/gallery/arch-candles.png",
        imageAlt: "הצעה תחת קשת אבן",
      },
      {
        quote: "הקולקציה האדומה הייתה בדיוק מה שחלמנו.",
        name: "יונתן ושי",
        eventType: "הקולקציה האדומה",
        image: "/media/gallery/red-collection.png",
        imageAlt: "קולקציה אדומה",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "שאלות נפוצות",
    items: [
      {
        question: "כמה זמן מראש צריך לתאם?",
        answer:
          "מומלץ כמה שבועות מראש. לתאריכים דחופים — נבדוק יחד מה אפשרי.",
      },
      {
        question: "אפשר להתאים קולקציה אישית?",
        answer:
          "כן. הקולקציות הן נקודת התחלה — כל הצעה מעוצבת סביב הסיפור שלכם.",
      },
      {
        question: "מה כולל המחיר?",
        answer:
          "התמחור לפי היקף העיצוב, הלוקיישן והתוספות. נפרט הכל בשקיפות בשיחה.",
      },
      {
        question: "מה קורה ביום ההצעה?",
        answer:
          "אנחנו מקימים מראש ומסתלקים ברגע הנכון. אתם מגיעים — והקסם מחכה.",
      },
    ],
  },
  leadForm: {
    eyebrow: "Consultation Request",
    title: "השאירו פרטים",
    subtitle:
      "מלאו את הפרטים ונחזור אליכם בוואטסאפ לתיאום שיחת ייעוץ. אין התחייבות ואין עלות.",
    nameLabel: "שם מלא",
    namePlaceholder: "השם שלך",
    phoneLabel: "טלפון",
    phonePlaceholder: "050-288-5277",
    collectionLabel: "קולקציה",
    collectionPlaceholder: "עוד לא החלטתי",
    messageLabel: "הודעה",
    messagePlaceholder: "אם יש משהו שחשוב לכם שנדע מראש",
    optionalHint: "לא חובה",
    submitLabel: "שליחה בוואטסאפ",
    note: "הפרטים נשלחים ישירות כהודעת וואטסאפ מהמכשיר שלכם. איננו שומרים אותם בשרת.",
    errorName: "נא למלא שם",
    errorPhone: "נא למלא מספר טלפון תקין",
    successNote: "וואטסאפ נפתח עם ההודעה שלכם. אם לא נפתח, אפשר ללחוץ שוב.",
    assurances: ["מענה באותו יום", "ייעוץ ללא עלות", "בלי לחץ להחליט"],
  },
  finalCta: {
    eyebrow: "Begin",
    title: "מוכנים לתכנן את הרגע?",
    subtitle: "ספרו לנו את החלום — ואנחנו נהפוך אותו למציאות.",
    afterClick: "תקבלו מענה אישי בוואטסאפ ותתחילו לתכנן ביחד.",
    reassurances: [
      "ייעוץ ללא התחייבות",
      "מענה מהיר",
      "תכנון אישי",
    ],
    cta: "שלחו הודעה בוואטסאפ",
  },
  footer: {
    tagline: "An unforgettable life moment.",
    rights: "כל הזכויות שמורות",
  },
  meta: {
    title: "Marry Me | הפקת הצעות נישואין יוקרתיות",
    description:
      "סטודיו להפקת הצעות נישואין — עיצוב יוקרתי, לוקיישנים קסומים ורגעים בלתי נשכחים.",
    keywords: [
      "הצעת נישואין",
      "הפקת הצעת נישואין",
      "Marry Me",
      "עיצוב הצעה",
      "proposal studio",
    ],
    ogImage: media.og.src,
  },
  legal: {
    businessName: "Marry Me",
    businessOwner: "Marry Me",
    email: "hello@marry-me.example",
    phone: "050-288-5277",
    address: "ישראל",
    websiteUrl: "https://marry-me.example.com",
    lastUpdated: "2026-08-05",
    privacyContactEmail: "hello@marry-me.example",
    deliveryAreas: "ישראל",
    usesAnalytics: false,
    usesWhatsApp: true,
    usesInstagram: true,
  },
};

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return fromEnv || "https://marry-me.example.com";
}

export function whatsappHref(number: string, message?: string): string {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${text}`;
}

export function siteWhatsAppHref(message?: string): string {
  return whatsappHref(
    site.contact.whatsappNumber,
    message ?? site.contact.whatsappDefaultMessage,
  );
}

export type LeadFormValues = {
  name: string;
  phone: string;
  collection: string;
  message: string;
};

export function leadWhatsAppHref(values: LeadFormValues): string {
  const lines = [
    "היי, הגעתי דרך האתר ואשמח לתאם שיחה על הצעת נישואין.",
    `שם: ${values.name}`,
    `טלפון: ${values.phone}`,
  ];

  if (values.collection) lines.push(`קולקציה: ${values.collection}`);
  if (values.message) lines.push(`הודעה: ${values.message}`);

  return whatsappHref(site.contact.whatsappNumber, lines.join("\n"));
}
