export type GalleryImage = {
  src: string;
  alt: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  stars: number;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type EventType = {
  value: string;
  label: string;
};

export type SiteConfig = {
  brand: {
    name: string;
    tagline: string;
  };
  contact: {
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    whatsappFloatingMessage: string;
    instagram: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
    imageAlt: string;
  };
  trustBar: {
    items: { icon: string; label: string; counter?: number; suffix?: string }[];
  };
  gallery: {
    title: string;
    subtitle: string;
    viewAllLabel: string;
    previewImages: GalleryImage[];
    allImages: GalleryImage[];
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  eventPlanner: {
    title: string;
    subtitle: string;
    eventTypes: EventType[];
    guestCountLabel: string;
    dateLabel: string;
    notesLabel: string;
    submitLabel: string;
    successMessage: string;
    whatsappCtaLabel: string;
  };
  testimonials: {
    title: string;
    items: TestimonialItem[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  finalCta: {
    headline: string;
    text: string;
    buttonLabel: string;
  };
  floatingWhatsApp: {
    label: string;
  };
  meta: {
    title: string;
    description: string;
    siteUrl: string;
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
    accessibilityContactName?: string;
    accessibilityContactPhone?: string;
    accessibilityContactEmail?: string;
    deliveryAreas?: string;
    usesAnalytics?: boolean;
    usesWhatsApp?: boolean;
    usesInstagram?: boolean;
  };
};

/** Builds a WhatsApp deep link with optional prefilled message. */
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

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const galleryImages: GalleryImage[] = [
  { src: unsplash("photo-1555244167-5d85dae45baf"), alt: "מגש אירוח מעוצב עם מבחר גבינות ופירות" },
  { src: unsplash("photo-1540189549336-e6e99c3679fe"), alt: "שולחן אירוח עשיר עם מגשים צבעוניים" },
  { src: unsplash("photo-1414235077428-338989a2e8c0"), alt: "מגשי אירוח פרימיום לאירוע" },
  { src: unsplash("photo-1504674900247-0877df9cc836"), alt: "מנות אירוח מעוצבות על שולחן" },
  { src: unsplash("photo-1476224203421-9ac39bcb3327"), alt: "מגש פירות וירקות טריים לאירוח" },
  { src: unsplash("photo-1517248135467-4c7edcad34c4"), alt: "שולחן שוק מעוצב לאירוע" },
  { src: unsplash("photo-1565299624946-b28f40a0ae38"), alt: "מגש אירוח עם מבחר מנות" },
  { src: unsplash("photo-1555939594-58d7cb561ad1"), alt: "מנות אירוח חמות ומעוצבות" },
  { src: unsplash("photo-1567620905732-2d1ec7ab7445"), alt: "מגש אירוח עם פנקייקים ופירות" },
  { src: unsplash("photo-1493770348161-369560ae357d"), alt: "בראנץ' מעוצב לאירוע בוקר" },
  { src: unsplash("photo-1505253758473-96b7015fcd40"), alt: "מגשי אירוח קטנים ומעוצבים" },
  { src: unsplash("photo-1529042410759-befb1204b468"), alt: "שולחן אירוח עם מגשי גבינות" },
  { src: unsplash("photo-1467003909585-2f8a72700288"), alt: "מגש דגים ומאכלי ים לאירוח" },
  { src: unsplash("photo-1482049016688-2d3e1b311543"), alt: "מגש בוקר מעוצב עם ביצים וירקות" },
  { src: unsplash("photo-1512058564366-18510be2db19"), alt: "מגש אירוח עם סלטים טריים" },
  { src: unsplash("photo-1600891964092-4316c288032e"), alt: "סטייק מעוצב על מגש אירוח" },
  { src: unsplash("photo-1565958011703-44f982eba187"), alt: "עוגות ומאפים על מגש אירוח" },
  { src: unsplash("photo-1574484789859-9d85c177a34d"), alt: "מגש פסטה ומנות איטלקיות" },
  { src: unsplash("photo-1547592166-23ac45744acd"), alt: "מרק ומנות חמות לאירוח" },
  { src: unsplash("photo-1606787366850-de6330128bfc"), alt: "מגש בשרים מעוצב לאירוע" },
  { src: unsplash("photo-1563379926898-05f4575a45d8"), alt: "מגש סושי ואסייתי לאירוח" },
  { src: unsplash("photo-1574894709920-11b28e736d0a"), alt: "מגש קינוחים מעוצב לאירוע" },
  { src: unsplash("photo-1551218808-94e220e084d2"), alt: "שולחן אירוח עם מגשי מזון מגוונים" },
  { src: unsplash("photo-1506086679520-0d90a8389ec9"), alt: "מגש אירוח עם פירות יער" },
  { src: unsplash("photo-1484723091739-30a097e8f929"), alt: "מגש בוקר צרפתי מעוצב" },
  { src: unsplash("photo-1544025162-d76694265947"), alt: "מגשי בשרים על גריל לאירוע" },
  { src: unsplash("photo-1565299507177-b0ac66763828"), alt: "פיצה ומאכלים איטלקיים על מגש" },
  { src: unsplash("photo-1567620832904-9d6ac0a3b5c5"), alt: "מגש אירוח עם מנות אסייתיות" },
];

export const site: SiteConfig = {
  brand: {
    name: "שני פוד פרודקשן",
    tagline: "מגשי אירוח וחוויות קולינריות",
  },
  contact: {
    whatsappNumber: "972500000000",
    whatsappDefaultMessage:
      "היי, הגעתי דרך דף הנחיתה.\nאשמח לקבל הצעת מחיר.",
    whatsappFloatingMessage:
      "היי, הגעתי דרך דף הנחיתה ואשמח לקבל פרטים.",
    instagram:
      "https://www.instagram.com/shani_food_production?igsh=MTRjbTBrcWt1OWVvZA==",
  },
  hero: {
    headline: "מגשי אירוח וחוויות קולינריות לאירועים בלתי נשכחים",
    subtitle:
      "מגשי אירוח מעוצבים, שולחנות שוק ופתרונות אירוח בהתאמה אישית לאירועים פרטיים ועסקיים.",
    primaryCta: "קבלת הצעת מחיר",
    secondaryCta: "צפייה בעבודות",
    image: unsplash("photo-1414235077428-338989a2e8c0", 1920),
    imageAlt: "מגשי אירוח מעוצבים של שני פוד פרודקשן",
  },
  trustBar: {
    items: [
      { icon: "⭐", label: "אירועים", counter: 200, suffix: "+" },
      { icon: "🎉", label: "שירות אישי ומקצועי" },
      { icon: "🚚", label: "התאמה אישית לכל אירוע" },
    ],
  },
  gallery: {
    title: "העבודות שלנו",
    subtitle: "כל מגש — סיפור. כל אירוע — חוויה.",
    viewAllLabel: "צפייה בגלריה מלאה",
    previewImages: galleryImages.slice(0, 8),
    allImages: galleryImages,
  },
  services: {
    title: "השירותים שלנו",
    subtitle: "פתרונות אירוח מעוצבים, בהתאמה מלאה לסגנון האירוע שלכם",
    items: [
      {
        id: "platters",
        title: "מגשי אירוח",
        description:
          "מגשים מעוצבים עם מבחר גבינות, פירות, בשרים ומאפים — מושלמים לכל אירוע, מהאינטימי ועד הגדול.",
        image: unsplash("photo-1555244167-5d85dae45baf", 800),
        imageAlt: "מגשי אירוח מעוצבים",
        whatsappMessage:
          "היי, הגעתי דרך דף הנחיתה.\nאשמח לקבל פרטים על מגשי אירוח.",
      },
      {
        id: "market-tables",
        title: "שולחנות שוק",
        description:
          "שולחנות שוק מרהיבים עם מגוון מנות, צבעים וטעמים — חוויה קולינרית שלמה שמרשימה כל אורח.",
        image: unsplash("photo-1517248135467-4c7edcad34c4", 800),
        imageAlt: "שולחן שוק מעוצב לאירוע",
        whatsappMessage:
          "היי, הגעתי דרך דף הנחיתה.\nאשמח לקבל פרטים על שולחנות שוק.",
      },
      {
        id: "events",
        title: "אירועים פרטיים ועסקיים",
        description:
          "פתרונות אירוח מלאים לאירועי חברה, ימי הולדת, הרמות כוסית ואירוח ביתי — עם תשומת לב לכל פרט.",
        image: unsplash("photo-1540189549336-e6e99c3679fe", 800),
        imageAlt: "אירוע פרטי עם מגשי אירוח",
        whatsappMessage:
          "היי, הגעתי דרך דף הנחיתה.\nאשמח לקבל פרטים על אירועים פרטיים ועסקיים.",
      },
    ],
  },
  eventPlanner: {
    title: "בואו נתכנן את האירוע שלכם",
    subtitle: "מלאו כמה פרטים ונבנה לכם הצעה מותאמת אישית",
    eventTypes: [
      { value: "birthday", label: "יום הולדת" },
      { value: "business", label: "אירוע עסקי" },
      { value: "home", label: "אירוח ביתי" },
      { value: "toast", label: "הרמת כוסית" },
      { value: "other", label: "אחר" },
    ],
    guestCountLabel: "כמות אורחים",
    dateLabel: "תאריך האירוע",
    notesLabel: "הערות",
    submitLabel: "קבלת הצעה אישית",
    successMessage:
      "מעולה, אפשר להתאים לכם הצעה אישית לפי סוג האירוע וכמות האורחים.",
    whatsappCtaLabel: "שליחה בוואטסאפ",
  },
  testimonials: {
    title: "מה הלקוחות אומרים",
    items: [
      {
        quote:
          "המגשים היו מדהימים! כל אורח שאל מאיפה האוכל. שירות מקצועי, אדיב ומדויק לחלוטין.",
        name: "מיכל כ.",
        stars: 5,
      },
      {
        quote:
          "הזמנו שולחן שוק ליום הולדת — היה חוויה שלמה. העיצוב, הטעמים, הכל מושלם. ממליצה בחום!",
        name: "דנה ל.",
        stars: 5,
      },
      {
        quote:
          "שירות אישי ברמה הגבוהה ביותר. התאימו לנו מגשים לאירוע חברה והכל הגיע בזמן ובאיכות מעולה.",
        name: "רון ש.",
        stars: 5,
      },
    ],
  },
  faq: {
    title: "שאלות נפוצות",
    items: [
      {
        question: "כמה זמן מראש מומלץ להזמין?",
        answer:
          "מומלץ להזמין לפחות 3–5 ימים מראש. לאירועים גדולים או מורכבים — עדיף שבוע ומעלה. נשמח לבדוק זמינות גם בהתראה קצרה יותר.",
      },
      {
        question: "האם ניתן להתאים את המגש לאירוע?",
        answer:
          "בהחלט! כל מגש מותאם אישית לפי סוג האירוע, כמות האורחים, העדפות תזונה וסגנון. פשוט ספרו לנו מה אתם מחפשים.",
      },
      {
        question: "האם יש משלוחים?",
        answer:
          "כן, אנחנו מספקים משלוחים לאזור המרכז. לאזורים נוספים — פנו אלינו בוואטסאפ ונבדוק יחד אפשרות משלוח.",
      },
      {
        question: "לאילו אזורים השירות מגיע?",
        answer:
          "השירות מגיע בעיקר למרכז הארץ — תל אביב, גוש דן והסביבה. לאזורים נוספים נשמח לתאם בוואטסאפ.",
      },
    ],
  },
  finalCta: {
    headline: "מוכנים להפוך את האירוע הבא שלכם למיוחד?",
    text: "שלחו הודעה ונבנה יחד חוויית אירוח שמתאימה בדיוק לאירוע שלכם.",
    buttonLabel: "שלחו הודעה בוואטסאפ",
  },
  floatingWhatsApp: {
    label: "רוצים הצעת מחיר?",
  },
  meta: {
    title: "שני פוד פרודקשן — מגשי אירוח וחוויות קולינריות",
    description:
      "מגשי אירוח מעוצבים, שולחנות שוק ופתרונות אירוח בהתאמה אישית לאירועים פרטיים ועסקיים. קבלת הצעת מחיר בוואטסאפ.",
    siteUrl: "https://shani-food.example.com",
    ogImage: unsplash("photo-1414235077428-338989a2e8c0", 1200),
  },
  legal: {
    businessName: "שני פוד פרודקשן",
    websiteUrl: "https://shani-food.example.com",
    lastUpdated: "2026-07-01",
    deliveryAreas: "מרכז הארץ, תל אביב וגוש דן",
    usesAnalytics: false,
    usesWhatsApp: true,
    usesInstagram: true,
  },
};

export function siteWhatsAppHref(message?: string): string {
  return whatsappHref(
    site.contact.whatsappNumber,
    message ?? site.contact.whatsappDefaultMessage,
  );
}

export function buildEventPlannerMessage(data: {
  eventType: string;
  guestCount: string;
  date: string;
  notes: string;
}): string {
  const eventLabel =
    site.eventPlanner.eventTypes.find((t) => t.value === data.eventType)
      ?.label ?? data.eventType;

  return [
    "היי, הגעתי דרך דף הנחיתה.",
    "אשמח לקבל הצעת מחיר.",
    `סוג אירוע: ${eventLabel}`,
    `כמות אורחים: ${data.guestCount || "—"}`,
    `תאריך: ${data.date || "—"}`,
    `הערות: ${data.notes || "—"}`,
  ].join("\n");
}
