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
    quantityLabel: string;
    dateLabel: string;
    notesLabel: string;
    successMessage: string;
    submitLabel: string;
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
  { src: "/images/gallery-1.jpg",  alt: "שני מארזי Rubina על ערימת קש — מתנה מיוחדת מהחווה" },
  { src: "/images/gallery-2.jpg",  alt: "ערימת מארזים בדרך ללקוחות — כל מארז נעשה בעבודת יד" },
  { src: "/images/gallery-3.jpg",  alt: "שלושה מארזים פתוחים עם גבינות ויין על מפה לבנה" },
  { src: "/images/gallery-4.jpg",  alt: "מארז רובינה עם גבינות, יין ותוספות מובחרות" },
  { src: "/images/gallery-5.jpg",  alt: "מרכיבי המארזים לפני האריזה — גבינות, יין ופינוקים" },
  { src: "/images/gallery-6.jpg",  alt: "מגוון מארזים פתוחים — כל אחד מוכן עם אהבה" },
  { src: "/images/gallery-7.jpg",  alt: "הצוות מאחורי Rubina — מארזים עם חיוך ולב" },
  { src: "/images/gallery-8.jpg",  alt: "סלסלת פיקניק יוקרתית של רובינה בשדה" },
  { src: "/images/gallery-9.jpg",  alt: "מארז פתוח עם גבינות, יין ופינוקים — מוכן למשלוח" },
  { src: "/images/gallery-10.jpg", alt: "סלסלת קש עם חמניה, גבינות ויין — מתנה מושקעת" },
  { src: "/images/gallery-11.jpg", alt: "שורות מארזים אחידים — הזמנות גדולות בעבודת יד" },
];

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
    { label: "הזמנה", href: "#planner" },
    { label: "צור קשר", href: "#contact" },
  ],
  hero: {
    headline: "מארזי גבינות ויין",
    tagline: "Luxury Cheese & Wine Gift Boxes, Curated to Impress.",
    subtitle:
      "מארזים בעבודת יד, עם גבינות נבחרות, יין ופינוקים שנארזים בקפידה ומגיעים עד אליכם.",
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
    headline: "היי כולם 🍸🧀🫒🍇 🌾 🧺",
    intro:
      "אנחנו עידן ורומי זוג מילואימניקים ממושב עזריה , הקמנו עסק של מארזי בוטיק מיוחדים של יין וגבינות.",
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
        title: "מארז Gold",
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
        title: "מארז ARI",
        price: 190,
        description:
          "מארז ARI — מכיל 4 סוגי גבינות, יין, סכין ותוספות לשדרוג החוויה: קרקרים, זיתים.",
        image: "/images/product-ari-1.jpg",
        imageAlt: "מארז ARI פתוח — גבינות ויין לבן Sauvignon Blanc",
        images: [
          { src: "/images/product-ari-1.jpg", alt: "מארז ARI פתוח — גבינות ויין לבן Sauvignon Blanc" },
          { src: "/images/product-ari-2.jpg", alt: "מארז ARI סגור עם סרט — מוכן למתנה" },
          { src: "/images/product-ari-3.jpg", alt: "מארז ARI פתוח — תצוגה מלאה על רקע קש" },
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
        question: "איך מזמינים?",
        answer:
          "שלחו לנו הודעה בוואטסאפ עם סוג המארז שמעניין אתכם, תאריך וכמות — ונחזור אליכם עם כל הפרטים.",
      },
      {
        question: "לאיזה אזורים אתם משלחים?",
        answer:
          "משלוחים למרכז הארץ. לאזורים נוספים — פנו אלינו בוואטסאפ ונבדוק יחד אפשרות משלוח.",
      },
      {
        question: "אפשר מארז מותאם אישית?",
        answer:
          "בהחלט. נבנה יחד מארז לפי טעם, אירוע ותקציב — פשוט כתבו לנו בוואטסאפ מה אתם מחפשים.",
      },
      {
        question: "כמה זמן מראש מומלץ להזמין?",
        answer:
          "אנו ממליצים לבצע את ההזמנה לפחות 3 ימים מראש כדי להבטיח את זמינות של חומרי הגלם הטריים ביותר.",
      },
      {
        question: "כשרות?",
        answer: "כלל המוצרים שלנו כשרים.",
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
    boxTypeOptions: [
      { value: "מארז Gold", label: "מארז Gold — 390₪" },
      { value: "מארז רובינה", label: "מארז רובינה — 290₪" },
      { value: "מארז קלאסי", label: "מארז קלאסי — 240₪" },
      { value: "מארז ARI", label: "מארז ARI — 190₪" },
      { value: "מארז מותאם אישית", label: "מארז מותאם אישית" },
      { value: "אחר", label: "אחר / עוד לא בטוח/ה" },
    ],
    quantityLabel: "כמות מארזים",
    dateLabel: "תאריך רצוי",
    notesLabel: "הערות",
    successMessage:
      "מעולה! נפתח עבורכם חלון וואטסאפ עם הפרטים — נשמח לחזור אליכם.",
    submitLabel: "שליחת פרטים בוואטסאפ",
  },
  contactSection: {
    heading: "רוצים להפתיע מישהו ברגע מפנק טעים ומדויק?",
    subtitle:
      "שלחו לנו הודעה ונעזור לכם לבחור את המארז שמתאים בדיוק לאירוע, לטעם ולתקציב.",
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
    title: "Rubina — מארזי גבינות, יין ופינוקים",
    description:
      "מארזי גבינות, יין ופינוקים בעיצוב יוקרתי. מתנה מושקעת לאירוח, זוגות, חגים ורגעים מיוחדים. הזמנה בוואטסאפ.",
    siteUrl: "https://rubina.example.com",
    ogImage: "/images/product-rubina.png",
  },
  legal: {
    businessName: "Rubina",
    email: "idanpitovski16@gmail.com",
    phone: "052-783-6631",
    websiteUrl: "https://rubina.example.com",
    lastUpdated: "2026-07-01",
    deliveryAreas: "גוש דן, תל אביב ומרכז",
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
