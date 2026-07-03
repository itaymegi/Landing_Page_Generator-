export type ProductItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: { src: string; alt: string }[];
  price?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

const GALLERY_IMAGE_PATTERN = /^\/images\/gallery-\d+\.png$/;

export function isGalleryImage(src: string): boolean {
  return GALLERY_IMAGE_PATTERN.test(src);
}

export function filterGalleryImages(images: GalleryImage[]): GalleryImage[] {
  return images.filter((image) => isGalleryImage(image.src));
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
  { src: "/images/gallery-1.png", alt: "שלושה מארזי Rubina על מפת פיקניק בשדה חיטה" },
  { src: "/images/gallery-2.png", alt: "מארזי גבינות ויין על רקע קש כפרי" },
  { src: "/images/gallery-3.png", alt: "מארז Rubina על ערימת חציר ליד האסם" },
  { src: "/images/gallery-4.png", alt: "מארז מעוצב על רקע רפת — מהחווה אליכם" },
  { src: "/images/gallery-5.png", alt: "משלוח מארזי Rubina בדרך אל הלקוח" },
  { src: "/images/gallery-6.png", alt: "שני מארזים על ערימת חציר בשעת הזהב" },
  { src: "/images/gallery-7.png", alt: "מארזי פיקניק מעוצבים על מפה לבנה" },
  { src: "/images/gallery-8.png", alt: "מארז פיקניק מלא — גבינות, יין, לחם ומגש מעוצב בשדה חיטה" },
  { src: "/images/gallery-9.png", alt: "חוויית פיקניק יוקרתית עם מארז Rubina בשדה" },
  { src: "/images/gallery-10.png", alt: "מבחר גבינות, יין ותוספות לפני אריזת המארזים" },
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
    subtitle:
      "מארזים בעבודת יד, עם גבינות נבחרות, יין ופינוקים שנארזים בקפידה ומגיעים עד אליכם.",
    ctaLabel: "Order on WhatsApp",
    secondaryCta: "צפייה במארזים",
    image: "/images/product-rubina.png",
    imageAlt: "מארז גבינות ויין מעוצב של רובינה",
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
        description:
          "מארז גולד — מכיל 11 סוגי גבינות, יין ישראלי, סכין ותוספות לשדרוג החוויה: קרקרים, פיצוחים, זיתים.",
        image: "/images/product-gold.png",
        imageAlt: "מארז Gold — יין אדום, גבינות ותוספות על רקע קש",
      },
      {
        id: "rubina",
        title: "מארז רובינה",
        description:
          "מארז רובינה — מכיל 8 סוגי גבינות, יין, סכין ותוספות לשדרוג החוויה: קרקרים, פיצוחים, זיתים.",
        image: "/images/product-rubina.png",
        imageAlt: "מארז רובינה — מארז החתימה עם גבינות בוטיק ויין",
      },
      {
        id: "classic",
        title: "מארז קלאסי",
        description:
          "מארז קלאסי — מכיל 6 סוגי גבינות, יין, סכין ותוספות לשדרוג החוויה: קרקרים, זיתים.",
        image: "/images/product-classic.png",
        imageAlt: "מארז קלאסי — גבינות, יין לבן ותוספות על רקע קש",
      },
      {
        id: "ari",
        title: "מארז ARI",
        description:
          "מארז ARI — מכיל 4 סוגי גבינות, יין, סכין ותוספות לשדרוג החוויה: קרקרים, זיתים.",
        image: "/images/product-ari.png",
        imageAlt: "מארז ARI — יין לבן, גבינות ותוספות על רקע קש",
      },
      {
        id: "custom",
        title: "מארז מותאם אישית",
        description:
          "רוצים משהו שמתאים בדיוק לכם? נבנה יחד מארז לפי טעם, אירוע ותקציב — עם הלב והידיים שלנו.",
        image: "/images/product-custom-made-2.png",
        imageAlt: "מארז בהרכבה אישית",
        images: [
          {
            src: "/images/product-custom-made-2.png",
            alt: "מארז בהרכבה אישית — סלסלת חבלים בשדה החיטה",
          },
          {
            src: "/images/product-custom-made.png",
            alt: "מארז בהרכבה אישית — סלסלת פיקניק עם חמניה",
          },
        ],
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
      { value: "מארז Gold", label: "מארז Gold" },
      { value: "מארז רובינה", label: "מארז רובינה" },
      { value: "מארז קלאסי", label: "מארז קלאסי" },
      { value: "מארז ARI", label: "מארז ARI" },
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
    heading: "רוצים להפרוצים להפתיע מישהו ברגע מפנק טעים ומדויק?",
    subtitle:
      "שלחו לנו הודעה ונעזור לכם לבחור את המארז שמתאים בדיוק לאירוע, לטעם ולתקציב.",
    whatsappLabel: "להזמנה בוואטסאפ",
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
