import type { LegalConfig } from "@landing-legal/core";

export type NavLink = {
  label: string;
  href: string;
};

export type AboutCredential = {
  value: string;
  label: string;
};

export type ValuePillar = {
  id: string;
  title: string;
  description: string;
};

export type JourneyStep = {
  number: string;
  title: string;
  description: string;
};

/**
 * Real WhatsApp messages, shown as screenshots. The image carries no machine
 * readable text, so `transcript` mirrors it for screen readers and search.
 */
export type Testimonial = {
  id: string;
  meta: string;
  treatment: string;
  treatmentSlug: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  transcript: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SiteConfig = {
  brand: {
    name: string;
    logoText: string;
    logoSub: string;
    logoMark: string;
    logoMarkAlt: string;
    tagline: string;
    taglineEn: string;
    description: string;
  };
  contact: {
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    consultationMessage: string;
    instagram: string;
    instagramHandle: string;
    facebook: string;
    tiktok: string;
    tiktokHandle: string;
    email: string;
    phones: string[];
    address: string;
    hours: string;
    isPlaceholder: boolean;
  };
  nav: NavLink[];
  /** Shorter drawer menu for mobile — desktop keeps full `nav`. */
  mobileNav: NavLink[];
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
    imageAlt: string;
    imageCaption: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
    pullQuote: string;
    credentials: AboutCredential[];
    signature: string;
    signatureRole: string;
  };
  why: {
    eyebrow: string;
    title: string;
    subtitle: string;
    editorialWord: string;
    items: ValuePillar[];
    standard: {
      eyebrow: string;
      body: string;
      points: { title: string; description: string }[];
    };
  };
  journey: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: JourneyStep[];
    note: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
    transcriptLabel: string;
    items: Testimonial[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  leadForm: {
    eyebrow: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    treatmentLabel: string;
    treatmentPlaceholder: string;
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
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    followTitle: string;
    disclaimer: string;
    copyright: string;
  };
  meta: {
    title: string;
    description: string;
    keywords: string[];
    siteUrl: string;
    ogImage: string;
  };
  business: {
    legalName: string;
    description: string;
    areaServed: string[];
    sameAs: string[];
  };
  legal: LegalConfig;
};

const SITE_URL = "https://agam-aesthetic.com";
const INSTAGRAM_URL = "https://www.instagram.com/agam.aesthetic";
const FACEBOOK_URL = "https://www.facebook.com/share/19L7bPW9NW/";
const TIKTOK_URL = "https://www.tiktok.com/@agam.aesthetic";

export const site: SiteConfig = {
  brand: {
    name: "Agam Aesthetic",
    logoText: "AGAM",
    logoSub: "AESTHETIC",
    logoMark: "/media/brand/logo.jpg",
    logoMarkAlt: "הלוגו של Agam Aesthetic",
    tagline: "רפואה אסתטית מדויקת",
    taglineEn: "Aesthetic Medicine",
    description:
      "קליניקה פרטית לרפואה אסתטית. טיפולים מדויקים בחומרים מאושרים, בליווי אישי ובתוצאה שנשארת טבעית.",
  },
  contact: {
    whatsappNumber: "972537268184",
    whatsappDefaultMessage: "היי, הגעתי דרך האתר ואשמח לשמוע פרטים על הטיפולים.",
    consultationMessage: "היי, אשמח לקבוע פגישת ייעוץ.",
    instagram: INSTAGRAM_URL,
    instagramHandle: "@agam.aesthetic",
    facebook: FACEBOOK_URL,
    tiktok: TIKTOK_URL,
    tiktokHandle: "@agam.aesthetic",
    email: "hello@agam-aesthetic.com",
    phones: ["053-726-8184"],
    address: "אילן רמון 5, נס ציונה",
    hours: "ימים א׳–ה׳, בתיאום מראש",
    isPlaceholder: false,
  },
  nav: [
    { label: "בית", href: "/#hero" },
    { label: "אודות", href: "/#about" },
    { label: "טיפולים", href: "/#categories" },
    { label: "מוצרים", href: "/#brands" },
    { label: "תוצאות", href: "/#results" },
    { label: "גלריה", href: "/#clinic" },
    { label: "שאלות", href: "/#faq" },
    { label: "יצירת קשר", href: "/#contact-form" },
  ],
  mobileNav: [
    { label: "ראשי", href: "/#hero" },
    { label: "אודות", href: "/#about" },
    { label: "טיפולים", href: "/#categories" },
    { label: "למה לבחור בנו", href: "/#why" },
    { label: "שאלות נפוצות", href: "/#faq" },
    { label: "יצירת קשר", href: "/#contact-form" },
  ],
  hero: {
    eyebrow: "Aesthetic Medicine",
    headline: "אסתטיקה מדויקת,",
    headlineAccent: "בתוצאה שנשארת טבעית",
    subtitle:
      "קליניקה פרטית לרפואה אסתטית. כל טיפול מתחיל בהיכרות, נבנה לפי מבנה הפנים שלך ומבוצע בחומרים מאושרים בלבד.",
    primaryCta: "קביעת פגישת ייעוץ",
    secondaryCta: "השאירו פרטים",
    image: "/media/clinic/owner-portrait.png",
    imageAlt: "אגם בפגישת ייעוץ עם מטופלת בקליניקה",
    imageCaption: "אגם — מייסדת הקליניקה, בפגישת ייעוץ",
  },
  about: {
    eyebrow: "Our Story",
    title: "Agam Aesthetic",
    lead: "אסתטיקה טובה היא כזו שלא מזהים — רק מרגישים שמשהו התאזן.",
    paragraphs: [
      "אני עוסקת ברפואה אסתטית כבר קרוב לעשור, ובכל השנים האלה התפיסה שלי כמעט לא השתנתה: הפנים שלך צריכות להישאר הפנים שלך. התפקיד שלי הוא לדייק, לא לשנות.",
      "כל טיפול בקליניקה מתחיל בפגישת ייעוץ שקטה, בלי לחץ ובלי הבטחות. אנחנו מסתכלות יחד על מבנה הפנים, על הפרופורציות ועל מה שמפריע לך — ורק אחר כך בונות תכנית.",
      "לפעמים התשובה הנכונה היא לחכות. גם את זה אני אומרת, וזה בדיוק מה שמחזיר אליי מטופלות שנים אחר כך.",
    ],
    pullQuote:
      "פחות זה יותר. עדיף להוסיף בהדרגה מאשר לתקן תוצאה מוגזמת.",
    credentials: [
      { value: "9", label: "שנות ניסיון" },
      { value: "5,000+", label: "טיפולים שבוצעו" },
      { value: "12", label: "השתלמויות" },
    ],
    signature: "אגם",
    signatureRole: "מייסדת Agam Aesthetic",
  },
  why: {
    eyebrow: "Why Agam Aesthetic",
    title: "למה בוחרים ב־Agam Aesthetic",
    subtitle: "ארבעה עקרונות שמלווים כל טיפול.",
    editorialWord: "Precision",
    items: [
      {
        id: "precision",
        title: "דיוק רפואי",
        description: "עבודה לפי אנטומיה, במינונים מדודים ובנקודות מדויקות.",
      },
      {
        id: "personal",
        title: "התאמה אישית",
        description: "תכנית סביב מבנה הפנים והקצב שלך — לא חבילה קבועה.",
      },
      {
        id: "natural",
        title: "תוצאה טבעית",
        description: "איזון, לא שינוי — שומרים על ההבעה ועל הזהות של הפנים.",
      },
      {
        id: "consultation",
        title: "ליווי מקצועי",
        description: "פגישת היכרות כנה, כולל המלצה שלא לטפל כשזו התשובה הנכונה.",
      },
    ],
    standard: {
      eyebrow: "Our Standard",
      body: "רק חומרים מקוריים ומאושרים לשימוש רפואי, עם תיעוד אצווה בכל טיפול.",
      points: [
        {
          title: "בטיחות",
          description: "היסטוריה קלינית ארוכה ופרופיל בטיחות ידוע.",
        },
        {
          title: "מקור מתועד",
          description: "יבואן מורשה, שרשרת קירור ותיעוד לכל מזרק.",
        },
        {
          title: "תוצאה צפויה",
          description: "התנהגות ידועה ברקמה — תכנון, לא ניחוש.",
        },
      ],
    },
  },
  journey: {
    eyebrow: "The Journey",
    title: "מסע המטופלת",
    subtitle: "ארבעה שלבים, מהשיחה הראשונה ועד המעקב.",
    steps: [
      {
        number: "01",
        title: "ייעוץ ואבחון",
        description:
          "פגישת היכרות ובחינת מבנה הפנים — מה מפריע ומה באמת אפשרי.",
      },
      {
        number: "02",
        title: "תכנית טיפול",
        description:
          "תכנית מדורגת: מה עכשיו, מה בהמשך ומה לא נחוץ בכלל.",
      },
      {
        number: "03",
        title: "ביצוע הטיפול",
        description:
          "טיפול בסביבה סטרילית, בקצב נוח ועם הרדמה לפי הצורך.",
      },
      {
        number: "04",
        title: "מעקב",
        description:
          "בדיקה אחרי שבועיים והתאמות עדינות במידת הצורך.",
      },
    ],
    note: "בין השלבים תמיד אפשר לעצור או לדחות.",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "מה אומרות המטופלות",
    subtitle:
      "הודעות אמיתיות שהתקבלו בוואטסאפ בימים שאחרי הטיפול, מוצגות באישור המטופלות.",
    note: "ההודעות מוצגות כפי שהתקבלו. פרטים מזהים הוסרו.",
    transcriptLabel: "תוכן ההודעה",
    items: [
      {
        id: "t1",
        meta: "הודעה מהיום שאחרי",
        treatment: "עיצוב אף ללא ניתוח",
        treatmentSlug: "nose",
        src: "/media/reviews/review-1.png",
        alt: "צילום מסך של הודעת וואטסאפ ממטופלת לאחר עיצוב אף",
        width: 594,
        height: 265,
        transcript: [
          "רק רציתי להגיד שהאף יצא פשוט נדיר, איך התרשמתי מהתוצאה. הכי טבעי ועדין שיש. ממש שמחה שבחרתי בך, אמליץ לכל מי שאוכל.",
          "איזה כיף! את מהממת, תתחדשי.",
        ],
      },
      {
        id: "t2",
        meta: "הודעה ממטופלת",
        treatment: "עיצוב שפתיים",
        treatmentSlug: "lips",
        src: "/media/reviews/review-2.png",
        alt: "צילום מסך של הודעת וואטסאפ ממטופלת לאחר עיצוב שפתיים",
        width: 593,
        height: 160,
        transcript: [
          "תקשיבי, אני חייבת להגיד לך — יצא מושלם! זה כל כך טבעי, בדיוק כמו שרציתי. לא מפסיקים להחמיא לי. תודה אהובה.",
        ],
      },
      {
        id: "t3",
        meta: "מעקב יום אחרי הטיפול",
        treatment: "תכנית אנטי אייג׳ינג",
        treatmentSlug: "anti-aging",
        src: "/media/reviews/review-3.png",
        alt: "צילום מסך של הודעת וואטסאפ במעקב שאחרי הטיפול",
        width: 571,
        height: 250,
        transcript: [
          "היי, אני בסדר גמור, מרגישה טוב ורעננה.",
          "והיום מישהי אמרה לי: מה עשית? את נראית זוהרת.",
        ],
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "שאלות נפוצות",
    subtitle: "תשובות לשאלות המרכזיות לפני קביעת פגישת ייעוץ.",
    items: [
      {
        question: "האם הטיפול כואב?",
        answer:
          "רוב הטיפולים נסבלים היטב. באזורים רגישים מורחים משחת הרדמה, ובחומרי המילוי משולב חומר מאלחש. רוב המטופלות מתארות לחץ קצר יותר מאשר כאב.",
      },
      {
        question: "כמה זמן נמשך הטיפול?",
        answer:
          "פגישת ייעוץ ראשונה כ-30 דקות. הטיפול עצמו נמשך בדרך כלל בין 15 ל-45 דקות, בהתאם לאזור ולהיקף.",
      },
      {
        question: "מתי אפשר לחזור לשגרה?",
        answer:
          "מיד לאחר רוב הטיפולים. ייתכן אודם או נפיחות קלה ל-24–72 שעות. מומלץ להימנע ממאמץ, סאונה ושמש חזקה ליומיים.",
      },
      {
        question: "מתי רואים תוצאות?",
        answer:
          "בחומרי מילוי רואים שינוי מיידי שמתייצב תוך שבועיים. בבוטוקס התוצאה מופיעה בהדרגה תוך 3 עד 14 יום.",
      },
      {
        question: "כמה זמן התוצאה נשמרת?",
        answer:
          "בין כארבעה חודשים לשנתיים, בהתאם לחומר, לאזור ולמטבוליזם האישי. נדייק את הציפיות בפגישת הייעוץ.",
      },
    ],
  },
  leadForm: {
    eyebrow: "Consultation Request",
    title: "השאירו פרטים",
    subtitle:
      "מלאו את הפרטים ונחזור אליכן בוואטסאפ לתיאום פגישת ייעוץ. אין התחייבות ואין עלות.",
    nameLabel: "שם מלא",
    namePlaceholder: "השם שלך",
    phoneLabel: "טלפון",
    phonePlaceholder: "053-726-8184",
    treatmentLabel: "תחום הטיפול",
    treatmentPlaceholder: "עוד לא החלטתי",
    messageLabel: "הודעה",
    messagePlaceholder: "אם יש משהו שחשוב לך שנדע מראש",
    optionalHint: "לא חובה",
    submitLabel: "שליחה בוואטסאפ",
    note: "הפרטים נשלחים ישירות כהודעת וואטסאפ מהמכשיר שלך. איננו שומרים אותם בשרת.",
    errorName: "נא למלא שם",
    errorPhone: "נא למלא מספר טלפון תקין",
    successNote: "וואטסאפ נפתח עם ההודעה שלך. אם לא נפתח, אפשר ללחוץ שוב.",
    assurances: [
      "מענה באותו יום",
      "ייעוץ ללא עלות",
      "בלי לחץ להחליט",
    ],
  },
  finalCta: {
    eyebrow: "Book a Consultation",
    title: "מוכנות לקבוע פגישה?",
    subtitle:
      "נשמח לענות על שאלות ולתאם ייעוץ שקט — בלי התחייבות ובלי לחץ להחליט באותו רגע.",
    primaryCta: "קביעת פגישת ייעוץ",
    secondaryCta: "שיחה בוואטסאפ",
    note: "מענה בימים א׳–ה׳. פגישות בתיאום מראש בלבד.",
  },
  footer: {
    tagline: "רפואה אסתטית מדויקת, בתוצאה שנשארת טבעית.",
    navTitle: "ניווט",
    contactTitle: "יצירת קשר",
    followTitle: "עקבו אחרינו",
    disclaimer:
      "המידע באתר הוא מידע כללי בלבד ואינו מהווה ייעוץ רפואי או תחליף לבדיקה. תוצאות הטיפול משתנות מאדם לאדם.",
    copyright: "Agam Aesthetic",
  },
  meta: {
    title: "Agam Aesthetic | קליניקה פרטית לרפואה אסתטית",
    description:
      "קליניקה פרטית לרפואה אסתטית: עיצוב אף ללא ניתוח, עיצוב שפתיים, בוטוקס ותכניות אנטי אייג׳ינג. חומרים מאושרים, דיוק רפואי ותוצאה טבעית.",
    keywords: [
      "רפואה אסתטית",
      "רפואה אסתטית נס ציונה",
      "עיצוב שפתיים",
      "אף ללא ניתוח",
      "בוטוקס",
      "חומרי מילוי",
      "אנטי אייג׳ינג",
      "מעורר קולגן",
      "נס ציונה",
    ],
    siteUrl: SITE_URL,
    ogImage: "/media/clinic/owner-portrait.png",
  },
  business: {
    legalName: "Agam Aesthetic",
    description:
      "קליניקה פרטית לרפואה אסתטית המתמחה בטיפולי הזרקה, עיצוב פנים וטיפולי עור בחומרים מאושרים.",
    areaServed: ["נס ציונה", "ראשון לציון", "רחובות", "מרכז"],
    sameAs: [INSTAGRAM_URL, FACEBOOK_URL, TIKTOK_URL],
  },
  legal: {
    businessName: "Agam Aesthetic",
    businessOwner: "אגם",
    email: "hello@agam-aesthetic.com",
    phone: "053-726-8184",
    address: "אילן רמון 5, נס ציונה",
    deliveryAreas: "נס ציונה, ראשון לציון, רחובות והמרכז",
    websiteUrl: SITE_URL,
    lastUpdated: "2026-08-04",
    usesAnalytics: false,
    usesWhatsApp: true,
    usesInstagram: true,
  },
};

export function whatsappHref(number: string, message?: string): string {
  const digits = number.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    site.meta.siteUrl.replace(/\/$/, "")
  );
}

export function siteWhatsAppHref(message?: string): string {
  return whatsappHref(
    site.contact.whatsappNumber,
    message ?? site.contact.whatsappDefaultMessage,
  );
}

export function consultationHref(): string {
  return whatsappHref(
    site.contact.whatsappNumber,
    site.contact.consultationMessage,
  );
}

export function treatmentInquiryHref(treatmentName: string): string {
  return whatsappHref(
    site.contact.whatsappNumber,
    `היי, אשמח לשמוע פרטים על ${treatmentName}.`,
  );
}

export function productInquiryHref(productName: string): string {
  return whatsappHref(
    site.contact.whatsappNumber,
    `היי, אשמח לפרטים על ${productName} דרך הקליניקה.`,
  );
}

export type LeadFormValues = {
  name: string;
  phone: string;
  treatment: string;
  message: string;
};

export function leadWhatsAppHref(values: LeadFormValues): string {
  const lines = [
    "היי, הגעתי דרך האתר ואשמח לתאם פגישת ייעוץ.",
    `שם: ${values.name}`,
    `טלפון: ${values.phone}`,
  ];

  if (values.treatment) lines.push(`תחום טיפול: ${values.treatment}`);
  if (values.message) lines.push(`הודעה: ${values.message}`);

  return whatsappHref(site.contact.whatsappNumber, lines.join("\n"));
}
