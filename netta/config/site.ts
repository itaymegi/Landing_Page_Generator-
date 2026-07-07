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
  picnic: "center 68%",
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

export type HowToOrderStep = {
  title: string;
  description: string;
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
    note: string;
    image: string;
    imageAlt: string;
  };
  trustStrip: {
    title?: string;
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
  howToOrder: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: HowToOrderStep[];
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
  { src: "/images/roll-raw.jpg", alt: "סינבונים טריים לפני האפייה — גלגולי בצק רך עם מילוי קינמון", objectPosition: galleryFocus.center },
  { src: "/images/hero.jpg", alt: "סינבונים אפויים וזהובים במגש — מילוי קינמון עשיר", objectPosition: galleryFocus.center },
  { src: "/images/roll-classic.jpg", alt: "סינבונים אפויים עם ציפוי קרם לבן נוזל", objectPosition: galleryFocus.center },
  { src: "/images/roll-pistachio.jpg", alt: "סינבון פיסטוק עם ציפוי קרמל ופיסטוק גרוס", objectPosition: galleryFocus.center },
  { src: "/images/roll-lotus.jpg", alt: "מארז סינבונים במגוון טעמים — לוטוס, קרמל וקלאסי", objectPosition: galleryFocus.center },
  { src: "/images/roll-raw-pistachio.jpg", alt: "סינבוני פיסטוק במגש לפני האפייה", objectPosition: galleryFocus.center },
  { src: "/images/our-story.jpg", alt: "מארז Netta's Cinnamon פתוח עם מבחר סינבונים", objectPosition: galleryFocus.center },
  { src: "/images/box-sticker.jpg", alt: "מדבקת המותג Netta's Cinnamon על מארז הסינבונים", objectPosition: galleryFocus.center },
];

export const site: SiteConfig = {
  brand: {
    name: "Netta's Cinnamon",
    logoText: "Netta's Cinnamon",
    logoSrc: "/images/logo.png",
    logoAlt: "Netta's Cinnamon",
    tagline: "סינבונים ביתיים בעבודת יד",
    description:
      "מאפי סינבון טריים בעבודת יד, עם בצק רך, מילוי קינמון מפנק וציפויים עשירים — כמו בבית.",
  },
  contact: {
    whatsappNumber: "972536232382",
    whatsappDefaultMessage:
      "היי Netta's Cinnamon! אשמח לשמוע פרטים על הסינבונים שלכם 🙂",
    instagram: "https://www.instagram.com/__nettascinnamon",
    tiktok: "",
    email: "",
    phones: ["053-623-2382"],
  },
  colors: {
    cream: "#F0E2D0",
    beige: "#E7D3BB",
    gold: "#C98B52",
    goldDeep: "#A85F2F",
    charcoal: "#4A3020",
    white: "#FFFFFF",
  },
  nav: [
    { label: "הסיפור", href: "#story" },
    { label: "הטעמים", href: "#products" },
    { label: "גלריה", href: "#gallery" },
    { label: "איך מזמינים", href: "#how" },
    { label: "הזמנה", href: "#planner" },
    { label: "צור קשר", href: "#contact" },
  ],
  hero: {
    headline: "הסינבון של נטע",
    tagline: "Fresh Handmade Cinnamon Rolls",
    subtitle:
      "מאפי סינבון טריים בעבודת יד, עם ציפויים מפנקים וטעמים שמשאירים חשק לעוד.",
    ctaLabel: "להזמנה בוואטסאפ",
    secondaryCta: "לטעמים שלנו",
    note: "איסוף עצמי מגן יבנה · משלוחים בתיאום",
    image: "/images/hero.jpg",
    imageAlt: "סינבונים אפויים זהובים עם מילוי קינמון עשיר",
  },
  trustStrip: {
    title: "מה הופך את זה לכל כך ממכר?",
    items: [
      { label: "בצק רך ואוורירי" },
      { label: "נאפה בעבודת יד" },
      { label: "טרי ומוכן להזמנה" },
    ],
  },
  occasions: {
    title: "מתי זה מתאים?",
    subtitle:
      "סינבון טרי מתאים כמעט לכל רגע מתוק — קטן או גדול.",
    items: [
      { label: "פינוק לבית" },
      { label: "אירוח משפחתי" },
      { label: "מתנה מתוקה" },
      { label: "ימי הולדת" },
      { label: "שבת בבוקר" },
      { label: "ערב עם חברים" },
      { label: "מארז לעבודה" },
      { label: "קינוח אחרי ארוחה" },
    ],
  },
  ourStory: {
    title: "הסיפור של Netta's Cinnamon",
    headline: "נעים להכיר",
    intro:
      "מה שהתחיל מאהבה למאפים ביתיים הפך למותג קטן ומתוק של סינבונים בעבודת יד.",
    paragraphs: [
      "כל מגש נאפה באהבה, עם בצק רך, מילוי קינמון מפנק וציפויים שמוסיפים בדיוק את הטאץ׳ המתוק.",
      "נטע התחילה להכין סינבונים מהבית, עם דגש על בצק רך, מילוי נדיב והכנה ידנית לגמרי.",
      "המותג בנוי סביב טריות, נוחות, מתיקות ותשומת לב אישית — חוויה ביתית וחמה בכל ביס.",
    ],
    image: "/images/our-story.jpg",
    imageAlt: "מארז Netta's Cinnamon פתוח עם מבחר סינבונים בעבודת יד",
  },
  products: {
    title: "הטעמים שלנו",
    items: [
      {
        id: "classic",
        title: "סינבון קלאסי",
        description:
          "הקלאסיקה שאי אפשר בלעדיה — בצק רך, מילוי קינמון עשיר וזהוב, בדיוק כמו שאוהבים.",
        image: "/images/hero.jpg",
        imageAlt: "סינבון קלאסי אפוי וזהוב עם מילוי קינמון",
      },
      {
        id: "vanilla",
        title: "סינבון עם קרם וניל",
        description:
          "סינבון רך עם ציפוי קרם וניל חלק ונוזל — מתיקות עדינה שנמסה בפה.",
        image: "/images/roll-classic.jpg",
        imageAlt: "סינבון עם ציפוי קרם וניל לבן",
      },
      {
        id: "pistachio",
        title: "סינבון פיסטוק",
        description:
          "מילוי וציפוי פיסטוק עשיר עם פיסטוק גרוס מלמעלה — מפנק במיוחד לחובבי הפיסטוק.",
        image: "/images/roll-pistachio.jpg",
        imageAlt: "סינבון פיסטוק עם ציפוי קרמל ופיסטוק גרוס",
      },
      {
        id: "lotus",
        title: "סינבון לוטוס / קרמל",
        description:
          "סינבון מפנק עם ציפוי לוטוס או קרמל ופירורים פריכים — מתיקות עשירה שקשה לעצור בביס אחד.",
        image: "/images/roll-lotus.jpg",
        imageAlt: "מארז סינבונים בטעמי לוטוס וקרמל",
      },
      {
        id: "trays",
        title: "מגשי אירוח",
        description:
          "מגש מלא בסינבונים טריים במגוון טעמים — מושלם לאירוח, לאירוע או לפינוק גדול.",
        image: "/images/our-story.jpg",
        imageAlt: "מגש אירוח מלא בסינבונים במגוון טעמים",
      },
      {
        id: "gift",
        title: "מארזי מתנה",
        description:
          "מארז מעוצב עם מבחר סינבונים — מתנה מתוקה ואישית שתמיד עושה שמח.",
        image: "/images/box-sticker.jpg",
        imageAlt: "מארז מתנה של Netta's Cinnamon עם מדבקת המותג",
      },
    ],
  },
  gallery: {
    title: "קצת מהמתוק שלנו",
    openLabel: "לגלריה המלאה",
    closeLabel: "סגור",
    previewImages: galleryImages,
    allImages: galleryImages,
  },
  howToOrder: {
    eyebrow: "פשוט וקל",
    title: "איך מזמינים?",
    subtitle: "ארבעה צעדים קטנים לסינבון טרי ומפנק.",
    steps: [
      {
        title: "בוחרים מארז / טעם",
        description: "מעיינים בטעמים ובמארזים ובוחרים את מה שמתחשק.",
      },
      {
        title: "שולחים הודעה בוואטסאפ",
        description: "כותבים לנו מה בא לכם וכמה — ונחזור עם כל הפרטים.",
      },
      {
        title: "מתאמים איסוף או משלוח",
        description: "קובעים יחד מועד ומקום — איסוף מגן יבנה או משלוח בתיאום.",
      },
      {
        title: "נהנים מסינבון טרי",
        description: "מקבלים סינבונים טריים, רכים ומפנקים — ונהנים בגדול.",
      },
    ],
  },
  faq: {
    title: "שאלות נפוצות",
    items: [
      {
        question: "איך מזמינים?",
        answer:
          "שולחים לנו הודעה בוואטסאפ עם הטעם/המארז שמעניין אתכם, כמות ותאריך — ונחזור אליכם עם כל הפרטים.",
      },
      {
        question: "איפה אוספים? יש משלוחים?",
        answer:
          "איסוף עצמי מגן יבנה. משלוחים בתיאום מראש — כתבו לנו בוואטסאפ ונבדוק יחד.",
      },
      {
        question: "כמה זמן מראש כדאי להזמין?",
        answer:
          "מומלץ להזמין כמה ימים מראש כדי שנספיק להכין הכול טרי במיוחד עבורכם.",
      },
      {
        question: "אפשר מגש אירוח או מארז מתנה?",
        answer:
          "בהחלט! אפשר להזמין מגשי אירוח ומארזי מתנה במגוון טעמים — פשוט ספרו לנו מה אתם מחפשים.",
      },
    ],
  },
  planner: {
    eyebrow: "הזמנה",
    title: "בואו נרכיב לכם מארז",
    subtitle: "כמה פרטים קצרים ונחזור אליכם בוואטסאפ עם כל הפרטים.",
    nameLabel: "שם",
    boxTypeLabel: "טעם / מארז",
    boxTypeOptions: [
      { value: "סינבון קלאסי", label: "סינבון קלאסי" },
      { value: "סינבון עם קרם וניל", label: "סינבון עם קרם וניל" },
      { value: "סינבון פיסטוק", label: "סינבון פיסטוק" },
      { value: "סינבון לוטוס / קרמל", label: "סינבון לוטוס / קרמל" },
      { value: "מגש אירוח", label: "מגש אירוח" },
      { value: "מארז מתנה", label: "מארז מתנה" },
      { value: "אחר", label: "אחר / עוד לא בטוח/ה" },
    ],
    dateLabel: "תאריך רצוי",
    notesLabel: "הערות",
    successMessage:
      "מעולה! נפתח עבורכם חלון וואטסאפ עם הפרטים — נשמח לחזור אליכם.",
    submitLabel: "שליחת פרטים בוואטסאפ",
    calculatorLabel: "בחירת טעמים ומארזים",
    addPackageLabel: "הוספת פריט נוסף",
    removePackageLabel: "הסרה",
    breakdownLabel: "פירוט ההזמנה",
    estimatedTotalLabel: "סה״כ משוער",
    priceDisclaimer: "המחיר הסופי יאושר ב-WhatsApp",
    customPriceNote: "מחיר בתיאום בוואטסאפ",
  },
  contactSection: {
    heading: "בא לכם להתפנק בסינבון טרי?",
    subtitle:
      "שלחו הודעה ונעזור לכם לבחור את המארז שמתאים בדיוק לכם.",
    whatsappLabel: "להזמנה בוואטסאפ",
    instagramLabel: "Instagram",
    phoneLabel: "טלפון",
    deliveryAreas: "איסוף עצמי מגן יבנה",
    deliveryInfo: "משלוחים בתיאום — נשמח לתאם בוואטסאפ",
    pickupInfo: "משלוחים בתיאום",
    leadTime: "הזמנה מראש — נשמח לתאם מועד",
    orderDays: "הזמנה מראש בתיאום",
    closingMessage:
      "כל מגש נאפה באהבה, בעבודת יד וטרי במיוחד בשבילכם 🤎",
    accessibilityNote:
      "האתר מותאם לגלישה נוחה. לכל שאלה או בקשה — פנו אלינו בוואטסאפ.",
  },
  footer: {
    copyright: "© 2026 Netta's Cinnamon. כל הזכויות שמורות.",
  },
  meta: {
    title: "Netta's Cinnamon — סינבונים ביתיים בעבודת יד",
    description:
      "מאפי סינבון טריים בעבודת יד, עם בצק רך, מילוי קינמון מפנק וציפויים עשירים. איסוף מגן יבנה ומשלוחים בתיאום. להזמנה בוואטסאפ.",
    siteUrl: "https://nettascinnamon.example.com",
    ogImage: "/images/hero.jpg",
  },
  legal: {
    businessName: "Netta's Cinnamon",
    phone: "053-623-2382",
    websiteUrl: "https://nettascinnamon.example.com",
    lastUpdated: "2026-07-07",
    deliveryAreas: "גן יבנה והסביבה",
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
