export type ProductItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: { src: string; alt: string; objectPosition?: string }[];
  price?: number;
};

export type GalleryImage = {
  src: string;
  alt: string;
  /** Crop anchor for object-cover — e.g. "center 68%" keeps low subjects visible. */
  objectPosition?: string;
};

/** Shared crop anchors for gallery images. */
export const galleryFocus = {
  center: "center center",
  subject: "center 62%",
  picnic: "center 65%",
} as const;

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
    boxTypeLabel: string;
    boxTypeOptions: BoxTypeOption[];
    dateLabel: string;
    notesLabel: string;
    successMessage: string;
    submitLabel: string;
    calculatorLabel: string;
    addPackageLabel: string;
    removePackageLabel: string;
    breakdownLabel: string;
    estimatedTotalLabel: string;
    priceDisclaimer: string;
    customPriceNote: string;
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
    keywords: string[];
    ogImage: string;
    themeColor: string;
  };
  business: {
    name: string;
    legalName: string;
    description: string;
    logo: string;
    email: string;
    phone: string;
    pickupLocality: string;
    areaServed: string[];
    sameAs: string[];
    category: string;
  };
  legal: {
    businessName: string;
    businessOwner?: string;
    email?: string;
    phone?: string;
    address?: string;
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

export { getSiteUrl } from "@/lib/site-url";

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

const galleryImages: GalleryImage[] = [
  { src: "/images/gallery-1.jpg",  alt: "שני מארזי Rubina על ערימת קש — מתנה מיוחדת מהחווה", objectPosition: galleryFocus.subject },
  { src: "/images/gallery-3.jpg",  alt: "שלושה מארזים פתוחים עם גבינות ויין על מפה לבנה", objectPosition: galleryFocus.center },
  { src: "/images/gallery-4.jpg",  alt: "מארז רובינה עם גבינות, יין ותוספות מובחרות", objectPosition: galleryFocus.center },
  { src: "/images/gallery-5.jpg",  alt: "מרכיבי המארזים לפני האריזה — גבינות, יין ופינוקים", objectPosition: galleryFocus.center },
  { src: "/images/gallery-8.jpg",  alt: "סלסלת פיקניק יוקרתית של רובינה בשדה", objectPosition: galleryFocus.picnic },
  { src: "/images/gallery-9.jpg",  alt: "מארז פתוח עם גבינות, יין ופינוקים — מוכן למשלוח", objectPosition: galleryFocus.center },
  { src: "/images/gallery-10.jpg", alt: "סלסלת קש עם חמניה, גבינות ויין — מתנה מושקעת", objectPosition: galleryFocus.subject },
  { src: "/images/gallery-11.jpg", alt: "שורות מארזים אחידים — הזמנות גדולות בעבודת יד", objectPosition: galleryFocus.center },
  { src: "/images/gallery-12.jpg", alt: "סלסלת פיקניק על מפה אדומה-לבנה — שקיעה בשדה", objectPosition: galleryFocus.picnic },
  { src: "/images/gallery-13.jpg", alt: "סלסלת פיקניק עם יין וגבינות על שולחן בשדה", objectPosition: galleryFocus.picnic },
  { src: "/images/gallery-14.jpg", alt: "סלסלת פיקניק עם גבינות ויין על רקע שדה ירוק", objectPosition: galleryFocus.picnic },
  { src: "/images/gallery-15.jpg", alt: "סלסלת פיקניק עם יין, גבינות ומקרונים בטבע", objectPosition: galleryFocus.picnic },
  { src: "/images/gallery-16.jpg", alt: "שתי סלסלאות פיקניק על מפה אדומה-לבנה בשדה", objectPosition: galleryFocus.picnic },
  { src: "/images/gallery-17.jpg", alt: "שתי סלסלאות פיקניק על שולחן לבן בשדה", objectPosition: galleryFocus.picnic },
  { src: "/images/gallery-18.jpg", alt: "סלסלת פיקניק מלאה עם גבינות ויין בשעת השקיעה", objectPosition: galleryFocus.picnic },
  { src: "/images/gallery-19.jpg", alt: "סלסלת פיקניק עם גבינות, יין ומקרונים בשדה", objectPosition: galleryFocus.picnic },
];

function formatPlannerBoxLabel(title: string, price?: number): string {
  return price != null ? `${title} — ${price.toLocaleString("he-IL")}₪` : title;
}

function buildPlannerBoxTypeOptions(items: ProductItem[]): BoxTypeOption[] {
  const productOptions = items
    .filter((p) => p.id !== "custom")
    .map((p) => ({
      value: p.title,
      label: formatPlannerBoxLabel(p.title, p.price),
    }));

  return [
    ...productOptions,
    { value: "מארז מותאם אישית", label: "מארז מותאם אישית" },
    { value: "אחר", label: "אחר / עוד לא בטוח/ה" },
  ];
}

export const site: SiteConfig = {
  brand: {
    name: "Rubina",
    logoText: "RUBINA",
    logoSrc: "/images/logo.png",
    logoAlt: "Rubina",
    tagline: "מארזים | גבינות | יין",
    description:
      "מארזי גבינות, יין ופינוקים בעיצוב יוקרתי — מתנה שמרגישה מושקעת, אישית ומיוחדת.",
  },
  contact: {
    whatsappNumber: "972527836631",
    whatsappDefaultMessage:
      "היי רובינה! אשמח לשמוע פרטים על המארזים שלכם",
    instagram: "https://www.instagram.com/rubina.cheese",
    tiktok: "https://www.tiktok.com/@rubina.cheese?_r=1&_t=ZS-97g04eLaznG",
    email: "idanpitovski16@gmail.com",
    phones: ["052-783-6631"],
  },
  colors: {
    cream: "#E8DCCB",
    beige: "#E8DCCB",
    gold: "#A67C52",
    goldDeep: "#8B6340",
    charcoal: "#5A4634",
    white: "#FFFFFF",
  },
  nav: [
    { label: "הסיפור", href: "#story" },
    { label: "המארזים", href: "#products" },
    { label: "גלריה", href: "#gallery" },
    { label: "שאלות", href: "#faq" },
    { label: "הזמנה", href: "#planner" },
    { label: "צור קשר", href: "#contact" },
  ],
  hero: {
    headline: "מארזי גבינות ויין",
    tagline: "Luxury Cheese & Wine Gift Boxes, Curated to Impress.",
    subtitle:
      "Rubina — מארזי גבינות, יין ופינוקים בעבודת יד. מתנה מושקעת לאירוח, פיקניק, זוגות ואירועים — עם משלוחים למרכז.",
    ctaLabel: "הזמנה בWhatsApp",
    secondaryCta: "צפייה במארזים",
    image: "/images/hero.png",
    imageAlt: "מארזי גבינות ויין על רקע שדה חיטה",
  },
  trustStrip: {
    items: [
      { label: "בעבודת יד" },
      { label: "מרכיבים טריים" },
      { label: "משלוח ואיסוף" },
    ],
  },
  occasions: {
    title: "למי זה מתאים?",
    subtitle:
      "מארזים שנועדו להשתלב ברגעים הקטנים והגדולים של החיים.",
    items: [
      { label: "מארזי אירוח" },
      { label: "דייט זוגי" },
      { label: "ימי הולדת" },
      { label: "מתנה לאחרי לידה" },
      { label: "פיקניק בטבע" },
      { label: "חנוכת בית" },
      { label: "מתנה לחג" },
      { label: "מתנות סוף שנה" },
      { label: "מתנות לעובדים" },
      { label: "אירוע חברה" },
      { label: "שי יוקרתי ללקוחות" },
    ],
  },
  ourStory: {
    title: "איך Rubina נולדה",
    headline: "ברוכים הבאים",
    intro:
      "אנחנו עידן ורומי, זוג מילואימניקים ממושב עזריה. הקמנו את Rubina — מארזי בוטיק של גבינות, יין ופינוקים לכל רגע מיוחד.",
    paragraphs: [
      "מתוך רצון ליצור משהו משלנו עם מלא אהבה ומשמעות.",
      "כל מארז נבנה בקפידה , בעבודת יד , בדגש על איכות טריות וייחודיות.",
      "כדי שתהנו מרגעים טובים ומיוחדים!",
    ],
    image: "/images/our-story.png",
    imageAlt: "עידן ורומי — מארזי Rubina בדרך אליכם",
  },
  products: {
    title: "המארזים שלנו",
    items: [
      {
        id: "gold",
        title: "מארז גולד",
        price: 390,
        description:
          "מארז גולד — מכיל 11 סוגי גבינות, יין ישראלי, סכין ותוספות לשדרוג החוויה: קרקרים, פיצוחים, זיתים.",
        image: "/images/product-gold-1.jpg",
        imageAlt: "מארז Gold פתוח — גבינות מובחרות ויין שרדונה על רקע קש",
        images: [
          { src: "/images/product-gold-1.jpg", alt: "מארז Gold פתוח — גבינות, יין שרדונה ותוספות" },
          { src: "/images/product-gold-2.jpg", alt: "מארז Gold — גבינות ויין לבן Ben David" },
          { src: "/images/product-gold-3.jpg", alt: "מארז Gold סגור עם סרט — מוכן למתנה" },
        ],
      },
      {
        id: "rubina",
        title: "מארז רובינה",
        price: 290,
        description:
          "מארז רובינה — מכיל 8 סוגי גבינות, יין, סכין ותוספות לשדרוג החוויה: קרקרים, פיצוחים, זיתים.",
        image: "/images/product-rubina-1.jpg",
        imageAlt: "מארז רובינה פתוח — גבינות בוטיק ויין מובחר",
        images: [
          { src: "/images/product-rubina-1.jpg", alt: "מארז רובינה פתוח — גבינות ויין מובחר" },
          { src: "/images/product-rubina-2.jpg", alt: "מארז רובינה — תצוגה שנייה עם גבינות ויין" },
          { src: "/images/product-rubina-3.jpg", alt: "מארז רובינה סגור עם סרט — מוכן למתנה" },
        ],
      },
      {
        id: "classic",
        title: "מארז קלאסי",
        price: 240,
        description:
          "מארז קלאסי — מכיל 6 סוגי גבינות, יין, סכין ותוספות לשדרוג החוויה: קרקרים, זיתים.",
        image: "/images/product-classic-1.jpg",
        imageAlt: "מארז קלאסי פתוח — גבינות ויין אדום Montesano Cabernet Franc",
        images: [
          { src: "/images/product-classic-1.jpg", alt: "מארז קלאסי פתוח — גבינות ויין אדום Montesano" },
          { src: "/images/product-classic-2.jpg", alt: "מארז קלאסי סגור עם סרט — מוכן למתנה" },
          { src: "/images/product-classic-3.jpg", alt: "מארז קלאסי פתוח — תצוגה מלאה על רקע קש" },
        ],
      },
      {
        id: "ari",
        title: "מארז ארי",
        price: 190,
        description:
          "מארז ארי — מכיל 4 סוגי גבינות, יין, סכין ותוספות לשדרוג החוויה: קרקרים, זיתים.",
        image: "/images/product-ari-1.jpg",
        imageAlt: "מארז פתוח — גבינות ויין לבן Sauvignon Blanc",
        images: [
          { src: "/images/product-ari-1.jpg", alt: "מארז פתוח — גבינות ויין לבן Sauvignon Blanc" },
          { src: "/images/product-ari-2.jpg", alt: "מארז סגור עם סרט — מוכן למתנה" },
          { src: "/images/product-ari-3.jpg", alt: "מארז פתוח — תצוגה מלאה על רקע קש" },
        ],
      },
      {
        id: "sunset",
        title: "מארז Sunset",
        price: 310,
        description:
          "מארז sunset — מכיל פלטה המורכבת מ6 סוגי גבינות, יין, לאבנה, לחם וחמאה, 5 כדורי שוקולד, 4 מקרונים ושדרוגים נוספים שייגרמו לחווייה להרגיש מושלמת.",
        image: "/images/product-sunset1.jpg",
        imageAlt: "מארז Sunset — סלסלת פיקניק על מפה אדומה-לבנה בשדה",
        images: [
          { src: "/images/product-sunset1.jpg", alt: "מארז Sunset — סלסלת פיקניק על מפה אדומה-לבנה בשדה", objectPosition: galleryFocus.picnic },
          { src: "/images/product-sunset2.jpg", alt: "מארז Sunset — סלסלת פיקניק על שולחן לבן בשעת שקיעה" },
          { src: "/images/product-sunset3.jpg", alt: "מארז Sunset — תצוגה נוספת של הסלסלה בשדה", objectPosition: galleryFocus.picnic },
        ],
      },
      {
        id: "sunrise",
        title: "מארז Sunrise",
        price: 260,
        description:
          "מארז sunrise — מכיל פלטה המורכבת מ4 סוגי גבינות, יין, לאבנה, לחם וחמאה, 3 כדורי שוקולד, זוג מקרונים ושדרוגים נוספים שייגרמו לחוויה להרגיש מושלמת.",
        image: "/images/product-sunrise1.jpg",
        imageAlt: "מארז Sunrise — סלסלת פיקניק על מפה אדומה-לבנה בשדה",
        images: [
          { src: "/images/product-sunrise1.jpg", alt: "מארז Sunrise — סלסלת פיקניק על מפה אדומה-לבנה בשדה", objectPosition: galleryFocus.picnic },
          { src: "/images/product-sunrise2.jpg", alt: "מארז Sunrise — סלסלת פיקניק על שולחן לבן בשקיעה" },
          { src: "/images/product-sunrise3.jpg", alt: "מארז Sunrise — תקריב של הסלסלה עם גבינות ויין", objectPosition: "center 75%" },
        ],
      },
      {
        id: "custom",
        title: "מארז מותאם אישית",
        description:
          "רוצים מארז שמתאים בדיוק לכם? נבנה יחד מארז לפי טעם, אירוע ותקציב — עם הלב והידיים שלנו.",
        image: "/images/product-custom-made.png",
        imageAlt: "מארז סלסלה מותאם אישית עם חמניה בשדה חיטה",
      },
    ],
  },
  gallery: {
    title: "קצת מהקסם שלנו",
    openLabel: "לגלריה המלאה",
    closeLabel: "סגור",
    previewImages: galleryImages,
    allImages: galleryImages,
  },
  faq: {
    title: "שאלות נפוצות",
    items: [
      {
        question: "מה כוללים מארזי הגבינות והיין של Rubina?",
        answer:
          "כל מארז נבנה בעבודת יד וכולל גבינות נבחרות, יין, ותוספות לפי סוג המארז — כמו קרקרים, פיצוחים, זיתים, שוקולד או מקרונים. פרטים מלאים לכל מארז מופיעים בעמוד המארזים.",
      },
      {
        question: "אפשר להזמין מארז גבינות כמתנה?",
        answer:
          "בהחלט. המארזים של Rubina מתאימים במיוחד כמתנה לאירוח, לזוגות, לחגים ולימי הולדת — עם אריזה מוקפדת שמרגישה יוקרתית ואישית.",
      },
      {
        question: "יש מארזי פיקניק, Sunset או Sunrise?",
        answer:
          "כן. לצד המארזים הקלאסיים יש גם מארזי Sunset ו-Sunrise — מארזים רומנטיים לפיקניק, שקיעה ורגעים זוגיים בשדה. לפרטים ומחיר — שלחו הודעה בוואטסאפ.",
      },
      {
        question: "איך מזמינים?",
        answer:
          "שלחו לנו הודעה בוואטסאפ עם סוג המארז שמעניין אתכם, תאריך וכמות — ונחזור אליכם עם כל הפרטים.",
      },
      {
        question: "לאיזה אזורים אתם משלחים?",
        answer:
          "משלוחים למרכז הארץ וגוש דן. לאזורים נוספים — פנו אלינו בוואטסאפ ונבדוק יחד אפשרות משלוח. אפשר גם איסוף עצמי ממושב עזריה.",
      },
      {
        question: "איך עובד המשלוח?",
        answer:
          "לאחר אישור ההזמנה בוואטסאפ נתאם מועד משלוח עד הבית או איסוף עצמי. משלוחים בימים א׳–ו׳.",
      },
      {
        question: "כמה זמן מראש מומלץ להזמין?",
        answer:
          "אנו ממליצים לבצע את ההזמנה לפחות 3 ימים מראש, ובמיוחד לאירועים — כדי להבטיח זמינות של חומרי הגלם הטריים ביותר.",
      },
      {
        question: "אפשר מארז מותאם אישית?",
        answer:
          "בהחלט. נבנה יחד מארז לפי טעם, אירוע ותקציב — פשוט כתבו לנו בוואטסאפ מה אתם מחפשים.",
      },
      {
        question: "כשרות?",
        answer:
          "כלל המוצרים שלנו כשרים. לגבי כשרות מדויקת ניתן לפנות אלינו בוואטסאפ.",
      },
      {
        question: "רגישויות?",
        answer:
          "יש אופציה להזמין מארזים מותאמים לרגישי גלוטן, רגישי לקטוז ונשים בהריון.",
      },
    ],
  },
  planner: {
    eyebrow: "הזמנה",
    title: "בואו נרכיב לכם מארז",
    subtitle: "כמה פרטים קצרים ונחזור אליכם בוואטסאפ עם כל הפרטים.",
    nameLabel: "שם",
    boxTypeLabel: "סוג מארז",
    boxTypeOptions: [],
    dateLabel: "תאריך רצוי",
    notesLabel: "הערות",
    successMessage:
      "מעולה! נפתח עבורכם חלון וואטסאפ עם הפרטים — נשמח לחזור אליכם.",
    submitLabel: "שליחת פרטים בWhatsApp",
    calculatorLabel: "בחירת מארזים",
    addPackageLabel: "הוספת מארז נוסף",
    removePackageLabel: "הסרה",
    breakdownLabel: "פירוט הזמנה",
    estimatedTotalLabel: "סה״כ משוער",
    priceDisclaimer: "מחיר משוער · המחיר הסופי יאושר ב-WhatsApp",
    customPriceNote: "לפי הצעת מחיר",
  },
  contactSection: {
    heading: "רוצים להפתיע מישהו ברגע מפנק טעים ומדויק?",
    subtitle:
      "שלחו לנו הודעה ונעזור לכם לבחור מארז גבינות ויין שמתאים לאירוע, לטעם ולתקציב — עם משלוח או איסוף.",
    whatsappLabel: "הזמנה בWhatsApp",
    instagramLabel: "Instagram",
    phoneLabel: "טלפון",
    deliveryAreas: "משלוחים למרכז הארץ",
    deliveryInfo: "משלוח עד הבית — נשמח לתאם בוואטסאפ",
    pickupInfo: "איסוף עצמי ממושב עזריה",
    leadTime: "הזמנה מראש — נשמח לתאם מועד",
    orderDays: "משלוחים בימים א׳–ו׳",
    closingMessage:
      "כאן לשירותכם תמיד מהלב — כל רעיון ופנטזיה שלכם אנחנו כאן להגשים! אוהבים, עידן ורומי ♥",
    accessibilityNote:
      "האתר מותאם לגלישה נוחה. לכל שאלה או בקשה — פנו אלינו בוואטסאפ.",
  },
  footer: {
    copyright: "© 2026 Rubina. כל הזכויות שמורות.",
  },
  meta: {
    title: "Rubina | מארזי גבינות ויין מעוצבים",
    description:
      "Rubina — מארזי גבינות, יין ופינוקים בעבודת יד. מתנות מושקעות לאירוח, פיקניק, זוגות ואירועים, עם משלוחים למרכז ואיסוף ממושב עזריה. הזמנה בוואטסאפ.",
    keywords: [
      "Rubina",
      "רובינה",
      "מארזי גבינות",
      "מארזי יין",
      "מארז גבינות ויין",
      "מתנות",
      "מתנה לאירוח",
      "פיקניק",
      "משלוחים",
      "מארזים",
      "גבינות",
      "יין",
      "cheese gift box",
      "wine gift box",
    ],
    ogImage: "/opengraph-image",
    themeColor: "#F5F0E8",
  },
  business: {
    name: "Rubina",
    legalName: "Rubina",
    description:
      "מארזי גבינות, יין ופינוקים בעבודת יד — מתנות מושקעות לאירוח, פיקניק ואירועים.",
    logo: "/images/logo.png",
    email: "idanpitovski16@gmail.com",
    phone: "+972-52-783-6631",
    pickupLocality: "מושב עזריה",
    areaServed: ["מרכז הארץ", "גוש דן", "תל אביב והמרכז"],
    sameAs: [
      "https://www.instagram.com/rubina.cheese",
      "https://www.tiktok.com/@rubina.cheese",
    ],
    category: "Food & Drink",
  },
  legal: {
    businessName: "Rubina",
    email: "idanpitovski16@gmail.com",
    phone: "052-783-6631",
    lastUpdated: "2026-07-01",
    deliveryAreas: "גוש דן, תל אביב ומרכז",
    usesAnalytics: false,
    usesWhatsApp: true,
    usesInstagram: true,
  },
};

site.planner.boxTypeOptions = buildPlannerBoxTypeOptions(site.products.items);

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
