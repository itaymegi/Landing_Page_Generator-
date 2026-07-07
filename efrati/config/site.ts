export type ProductItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: { src: string; alt: string }[];
  price?: number;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export function filterGalleryImages(images: GalleryImage[]): GalleryImage[] {
  return images;
}

export type OccasionTag = {
  label: string;
};

export type BoxTypeOption = {
  value: string;
  label: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SiteColors = {
  cream: string;
  beige: string;
  gold: string;
  goldDeep: string;
  charcoal: string;
  white: string;
};

export type SiteConfig = {
  brand: {
    name: string;
    logoText: string;
    logoSrc: string;
    logoAlt: string;
    tagline: string;
    description: string;
  };
  contact: {
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    instagram: string;
    tiktok: string;
    email: string;
    phones: string[];
  };
  colors: SiteColors;
  nav: NavLink[];
  hero: {
    headline: string;
    tagline: string;
    subtitle: string;
    ctaLabel: string;
    secondaryCta: string;
    image: string;
    imageAlt: string;
  };
  trustStrip: {
    items: { label: string }[];
  };
  occasions: {
    title: string;
    subtitle: string;
    items: OccasionTag[];
  };
  ourStory: {
    title: string;
    headline: string;
    intro: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
  products: {
    title: string;
    items: ProductItem[];
  };
  gallery: {
    title: string;
    openLabel: string;
    closeLabel: string;
    instagramCta: string;
    previewImages: GalleryImage[];
    allImages: GalleryImage[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  planner: {
    eyebrow: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    occasionLabel: string;
    occasionPlaceholder: string;
    cityLabel: string;
    cityPlaceholder: string;
    boxTypeLabel: string;
    boxTypeOptions: BoxTypeOption[];
    dateLabel: string;
    timeLabel: string;
    guestsLabel: string;
    guestsPlaceholder: string;
    notesLabel: string;
    successMessage: string;
    submitLabel: string;
    calculatorLabel: string;
    addPackageLabel: string;
    removePackageLabel: string;
    breakdownLabel: string;
  };
  contactSection: {
    heading: string;
    subtitle: string;
    whatsappLabel: string;
    instagramLabel: string;
    phoneLabel: string;
    deliveryAreas: string;
    deliveryInfo: string;
    pickupInfo: string;
    leadTime: string;
    orderDays: string;
    closingMessage: string;
    accessibilityNote: string;
  };
  footer: {
    copyright: string;
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
export function whatsappHref(
  number: string,
  message?: string,
): string {
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

const galleryImages: GalleryImage[] = [
  { src: "/images/hero.jpg",                 alt: "עמדת הקינוחים המעוצבת של הממלכה של אפרתי באירוע חיצוני" },
  { src: "/images/service-custom.jpg",       alt: "עמדה בהתאמה אישית — מעוצבת ומוארת לאירוע" },
  { src: "/images/our-story.jpg",            alt: "עגלת הוופלים הממותגת של הממלכה של אפרתי" },
  { src: "/images/service-desserts.jpg",     alt: "שולחן קינוחים עמוס דונאטים, וופלים ותוספות צבעוניות" },
  { src: "/images/service-ice-cream.jpg",    alt: "גלידה אמריקאית רכה עם תוספות" },
  { src: "/images/service-cotton-candy.jpg", alt: "ענן שערות סבתא צבעוני טרי מהמכונה" },
  { src: "/images/service-snow-cones.jpg",   alt: "עמדת ברד עם כוסות בצבעים שונים" },
  { src: "/images/service-savory.jpg",       alt: "מגש צ'יפס ושניצל בעמדת מטוגנים" },
  { src: "/images/service-waffle.jpg",       alt: "וופל על מקל עם שוקולד ותוספות" },
];

export const site: SiteConfig = {
  brand: {
    name: "הממלכה של אפרתי",
    logoText: "הממלכה של אפרתי",
    logoSrc: "/images/logo.png",
    logoAlt: "הממלכה של אפרתי — עמדות אוכל לאירועים",
    tagline: "עמדות מעוצבות לאירועים",
    description:
      "עמדות מעוצבות לאירועים — קינוחים, אוכל ועוד. אטרקציה צבעונית ומרשימה שהופכת כל אירוע לחוויה.",
  },
  contact: {
    whatsappNumber: "972526845245",
    whatsappDefaultMessage:
      "היי! הגעתי מהאתר של הממלכה של אפרתי 🤍\nבינתיים אספר לכם על האירוע שלי:\n\n• מה חוגגים? \n• מיקום האירוע (עיר): \n• תאריך ושעה: \n• כמות מוזמנים בערך: \n• במה אני מעוניין/ת? ",
    instagram: "https://www.instagram.com/hamamlaha_shel_efrati",
    tiktok: "",
    email: "",
    phones: ["052-684-5245"],
  },
  colors: {
    cream: "#F3EBE0",
    beige: "#E8D5B8",
    gold: "#C9A84C",
    goldDeep: "#A88B3A",
    charcoal: "#4A3F35",
    white: "#FFFFFF",
  },
  nav: [
    { label: "למה אנחנו", href: "#story" },
    { label: "השירותים", href: "#products" },
    { label: "גלריה", href: "#gallery" },
    { label: "למי מתאים", href: "#occasions" },
    { label: "הזמנה", href: "#planner" },
    { label: "צור קשר", href: "#contact" },
  ],
  hero: {
    headline: "האוכל הוא רק חלק מהחוויה",
    tagline: "Food is only part of the experience.",
    subtitle:
      "קינוחים, אוכל ועוד — עמדות מעוצבות, צבעוניות ומלאות חיים שהופכות למוקד העניין של האירוע.",
    ctaLabel: "הזמנה בWhatsApp",
    secondaryCta: "צפייה בשירותים",
    image: "/images/hero.jpg",
    imageAlt: "עמדת קינוחים מעוצבת של הממלכה של אפרתי באירוע חיצוני",
  },
  trustStrip: {
    items: [
      { label: "איכות וטריות" },
      { label: "ניקיון ומקצועיות" },
      { label: "שפע והגשה מרשימה" },
      { label: "התאמה אישית לכל אירוע" },
    ],
  },
  occasions: {
    title: "למי השירות מתאים?",
    subtitle:
      "כל מי שרוצה להוסיף אטרקציה קולינרית שתמשוך את האורחים ותיצור חוויה בלתי נשכחת.",
    items: [
      { label: "חתונות" },
      { label: "בר ובת מצווה" },
      { label: "ימי הולדת" },
      { label: "ברית ובריתה" },
      { label: "אירועי חברה" },
      { label: "אירועים פרטיים" },
      { label: "מסיבות קיץ" },
      { label: "הפנינגים" },
      { label: "מסיבות בריכה" },
      { label: "אירועי בתי ספר וגנים" },
    ],
  },
  ourStory: {
    title: "למה לבחור בממלכה של אפרתי?",
    headline: "לא עוד דוכן אוכל — חוויה שלמה",
    intro:
      "אנחנו לא רק מגישים אוכל. אנחנו יוצרים עמדה מעוצבת, צבעונית ומרשימה שהופכת למוקד העניין באירוע.",
    paragraphs: [
      "כל עמדה נבנית בקפידה, עם דגש על ניקיון, איכות ושפע — כדי שהיא תיראה מושלם ותטעם עוד יותר טוב.",
      "האורחים לא רק אוכלים — הם חווים, מצטלמים ונהנים מכל רגע.",
      "\u201Cגם אני רוצה שזה יהיה באירוע שלי\u201D — בדיוק את התחושה הזו אנחנו כאן ליצור.",
    ],
    image: "/images/our-story.jpg",
    imageAlt: "עגלת הוופלים הממותגת של הממלכה של אפרתי",
  },
  products: {
    title: "השירותים שלנו",
    items: [
      {
        id: "ice-cream",
        title: "גלידות אמריקאיות",
        description:
          "גלידה רכה וקרמית עם מגוון רטבים ותוספות — אטרקציה קיצית שכולם אוהבים.",
        image: "/images/service-ice-cream.jpg",
        imageAlt: "גלידה אמריקאית רכה עם תוספות בעמדה מקצועית",
      },
      {
        id: "waffle",
        title: "וופל על מקל",
        description:
          "וופל טרי על מקל עם שוקולד, סירופים ותוספות צבעוניות — מתוק, חם ומושלם לאירוע.",
        image: "/images/service-waffle.jpg",
        imageAlt: "וופל על מקל עם שוקולד ותוספות צבעוניות",
      },
      {
        id: "cotton-candy",
        title: "שערות סבתא",
        description:
          "ענני סוכר ענקיים בצבעים — קסם אמיתי לילדים ולמבוגרים כאחד.",
        image: "/images/service-cotton-candy.jpg",
        imageAlt: "ענן שערות סבתא צבעוני טרי מהמכונה",
      },
      {
        id: "snow-cones",
        title: "ברד (Snow Cones)",
        description:
          "עמדת ברד צבעונית עם מגוון סירופים בטעמים שונים — רענן ומרווה בקיץ.",
        image: "/images/service-snow-cones.jpg",
        imageAlt: "עמדת ברד עם כוסות צבעוניות וסירופים",
      },
      {
        id: "desserts",
        title: "דונאטים וקינוחים",
        description:
          "מיני דונאטים, וופלים וקינוחים מעוצבים בשלל תוספות — שפע של מתוק על שולחן אחד.",
        image: "/images/service-desserts.jpg",
        imageAlt: "שולחן קינוחים עמוס דונאטים ווופלים",
      },
      {
        id: "savory",
        title: "עמדות מטוגנים שמחממות את הלב",
        description:
          "ציפס, שניצל ועוד מגוון של מטוגנים חמים וטעימים.",
        image: "/images/service-savory.jpg",
        imageAlt: "מגש צ'יפס ושניצל בעמדת מטוגנים",
      },
      {
        id: "custom",
        title: "עמדות בהתאמה אישית",
        description:
          "עמדה מעוצבת במיוחד עבורכם — לפי סגנון האירוע, הצבעים, הגודל והתקציב שלכם.",
        image: "/images/service-custom.jpg",
        imageAlt: "עמדה בהתאמה אישית עם תאורה ומיתוג",
      },
    ],
  },
  gallery: {
    title: "רגעים מהאירועים שלנו",
    openLabel: "לגלריה המלאה",
    closeLabel: "סגור",
    instagramCta: "עוד תמונות באינסטגרם שלנו",
    previewImages: galleryImages,
    allImages: galleryImages,
  },
  faq: {
    title: "למה לקוחות בוחרים בנו",
    items: [
      {
        question: "איכות וטריות",
        answer:
          "כל מנה מוגשת טרייה במקום, עם חומרי גלם איכותיים ותשומת לב לכל פרט — כדי שהטעם יהיה מושלם.",
      },
      {
        question: "ניקיון ומקצועיות",
        answer:
          "עמדות מסודרות ונקיות, צוות עם כפפות והגשה ברמה גבוהה — בדיוק כמו שרואים בתמונות.",
      },
      {
        question: "שפע והגשה מרשימה",
        answer:
          "לא חוסכים בכמות ובנראות — העמדה עצמה היא חלק מהחוויה ומושכת את כל האורחים.",
      },
      {
        question: "התאמה אישית לכל אירוע",
        answer:
          "בוחרים יחד את השירותים, הצבעים והסגנון שמתאימים בדיוק לאירוע שלכם — מיום הולדת ועד חתונה.",
      },
      {
        question: "איך מזמינים?",
        answer:
          "שולחים לנו הודעה בוואטסאפ עם הפרטים: מה חוגגים, מיקום האירוע (עיר), תאריך ושעה, כמות מוזמנים בערך ובמה אתם מעוניינים — ונחזור אליכם עם הצעה מותאמת.",
      },
      {
        question: "לאיזה אזורים אתם מגיעים?",
        answer:
          "מגיעים לאירועים ברחבי הארץ. פנו אלינו בוואטסאפ ונבדוק יחד את הזמינות לתאריך ולמיקום שלכם.",
      },
    ],
  },
  planner: {
    eyebrow: "הזמנה",
    title: "בואו נתכנן את האירוע שלכם",
    subtitle:
      "ספרו לנו כמה פרטים ונחזור אליכם בוואטסאפ עם הצעה מותאמת. אנחנו לעיתים באמצע אירוע — ונחזור אליכם בהקדם 🤍",
    nameLabel: "שם",
    occasionLabel: "מה חוגגים?",
    occasionPlaceholder: "חתונה / יום הולדת / אירוע חברה…",
    cityLabel: "מיקום האירוע (עיר)",
    cityPlaceholder: "באיזו עיר האירוע?",
    boxTypeLabel: "סוג שירות",
    boxTypeOptions: [
      { value: "גלידות אמריקאיות", label: "גלידות אמריקאיות" },
      { value: "וופל על מקל", label: "וופל על מקל" },
      { value: "שערות סבתא", label: "שערות סבתא" },
      { value: "ברד (Snow Cones)", label: "ברד (Snow Cones)" },
      { value: "דונאטים וקינוחים", label: "דונאטים וקינוחים" },
      { value: "עמדות מטוגנים שמחממות את הלב", label: "עמדות מטוגנים שמחממות את הלב" },
      { value: "עמדה בהתאמה אישית", label: "עמדה בהתאמה אישית" },
      { value: "שילוב שירותים", label: "שילוב שירותים / עדיין לא בטוח/ה" },
    ],
    dateLabel: "תאריך האירוע",
    timeLabel: "שעת האירוע",
    guestsLabel: "כמות מוזמנים בערך",
    guestsPlaceholder: "למשל 80",
    notesLabel: "הערות נוספות (לא חובה)",
    successMessage:
      "מעולה! נפתח עבורכם חלון וואטסאפ עם הפרטים — נשמח לחזור אליכם בהקדם.",
    submitLabel: "שליחת פרטים בWhatsApp",
    calculatorLabel: "במה אתם מעוניינים?",
    addPackageLabel: "הוספת שירות נוסף",
    removePackageLabel: "הסרה",
    breakdownLabel: "סיכום הבקשה",
  },
  contactSection: {
    heading: "רוצים עמדה שתהפוך את האירוע לבלתי נשכח?",
    subtitle:
      "שלחו לנו הודעה ונעזור לכם לבנות את החוויה הקולינרית המושלמת לאירוע שלכם.",
    whatsappLabel: "הזמנה בWhatsApp",
    instagramLabel: "Instagram",
    phoneLabel: "טלפון",
    deliveryAreas: "מגיעים לאירועים ברחבי הארץ",
    deliveryInfo: "הגעה והקמה באירוע — נשמח לתאם בוואטסאפ",
    pickupInfo: "זמינים כל ימות השבוע",
    leadTime: "מומלץ לפנות מראש — במיוחד בעונת הקיץ",
    orderDays: "מענה מהיר בוואטסאפ",
    closingMessage:
      "מחכים לשמוע על האירוע שלכם ולהפוך אותו לחגיגה מתוקה ובלתי נשכחת ♥",
    accessibilityNote:
      "האתר מותאם לגלישה נוחה. לכל שאלה או בקשה — פנו אלינו בוואטסאפ.",
  },
  footer: {
    copyright: "© 2026 הממלכה של אפרתי. כל הזכויות שמורות.",
  },
  meta: {
    title: "הממלכה של אפרתי — עמדות אוכל מתוק ומלוח לאירועים",
    description:
      "עמדות קינוחים ונשנושים מעוצבות לחתונות, בר/בת מצווה, ימי הולדת ואירועי חברה. גלידות אמריקאיות, וופל על מקל, שערות סבתא, ברד, דונאטים ונשנושים מלוחים. הזמנה בוואטסאפ.",
    siteUrl: "https://efrati.example.com",
    ogImage: "/images/hero.jpg",
  },
  legal: {
    businessName: "הממלכה של אפרתי",
    businessOwner: "אפרת גבאי",
    phone: "052-684-5245",
    websiteUrl: "https://efrati.example.com",
    lastUpdated: "2026-07-06",
    deliveryAreas: "אירועים ברחבי הארץ",
    usesAnalytics: false,
    usesWhatsApp: true,
    usesInstagram: true,
  },
};

/** Convenience: WhatsApp link using site defaults. */
export function siteWhatsAppHref(message?: string): string {
  return whatsappHref(
    site.contact.whatsappNumber,
    message ?? site.contact.whatsappDefaultMessage,
  );
}

/** Returns the price for a given package title, or undefined for custom/unpriced options. */
export function getProductPrice(title: string): number | undefined {
  return site.products.items.find((p) => p.title === title)?.price;
}
