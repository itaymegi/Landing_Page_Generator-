export type ProductItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  orderMessage: string;
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

export type NavLink = {
  label: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TrustItem = {
  icon: "hand" | "gift" | "sparkle";
  label: string;
};

export type WhyItem = {
  title: string;
};

export type Review = {
  name: string;
  text: string;
  rating: number;
};

export type BoxTypeOption = {
  value: string;
  label: string;
};

export type SiteConfig = {
  brand: {
    name: string;
    logoText: string;
    logoSub: string;
    logoSrc: string;
    logoAlt: string;
    tagline: string;
    description: string;
  };
  contact: {
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    instagram: string;
    instagramHandle: string;
    phoneDisplay: string;
  };
  business: {
    deliveryAreas: string;
    deliveryInfo: string;
    pickupInfo: string;
    leadTime: string;
  };
  nav: NavLink[];
  hero: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    trustLine: string;
    ctaLabel: string;
    ctaMessage: string;
    secondaryCta: string;
    instagramCta: string;
    image: string;
    imageAlt: string;
  };
  trustStrip: {
    items: TrustItem[];
  };
  products: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cardLabel: string;
    ctaLabel: string;
    items: ProductItem[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    openLabel: string;
    closeLabel: string;
    previewImages: GalleryImage[];
    allImages: GalleryImage[];
  };
  about: {
    eyebrow: string;
    title: string;
    text: string;
    image: string;
    imageAlt: string;
  };
  whyUs: {
    title: string;
    items: WhyItem[];
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
  reviews: {
    eyebrow: string;
    title: string;
    subtitle: string;
    placeholderNote: string;
    items: Review[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  finalCta: {
    title: string;
    text: string;
    ctaLabel: string;
    ctaMessage: string;
    image: string;
  };
  floating: {
    label: string;
    message: string;
  };
  footer: {
    copyright: string;
    instagramLabel: string;
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

const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery-1.png",
    alt: "מארז קינוחים אישיים של Munch Cookies מול חלון מואר",
  },
  {
    src: "/images/gallery-2.png",
    alt: "מארז קינוחי שוקולד ולוטוס במבט על",
  },
  {
    src: "/images/gallery-3.png",
    alt: "עוגיות מעוצבות עם ציפוי שוקולד במארז מתנה",
  },
  {
    src: "/images/gallery-4.png",
    alt: "סופגניות טריות מצופות סוכר על מגש כסוף",
  },
  {
    src: "/images/gallery-5.png",
    alt: "מארז עוגיות פרימיום עם ציפויי שוקולד לבן וחלב",
  },
];

export const site: SiteConfig = {
  brand: {
    name: "Munch Cookies",
    logoText: "munch",
    logoSub: "cookies",
    logoSrc: "/images/logo.png",
    logoAlt: "Munch Cookies by Lin",
    tagline: "עוגיות | קינוחים | מארזי מתנה",
    description:
      "מארזי עוגיות וקינוחים בעבודת יד — מעוצבים בקפידה, בחומרי גלם איכותיים, במראה יוקרתי שמרגיש כמו מתנה.",
  },
  contact: {
    whatsappNumber: "972526085111",
    whatsappDefaultMessage:
      "היי לין, הגעתי דרך דף הנחיתה ואשמח לקבל פרטים על מארזי העוגיות.",
    instagram: "https://www.instagram.com/_munch_cookies",
    instagramHandle: "@_munch_cookies",
    phoneDisplay: "052-608-5111",
  },
  business: {
    deliveryAreas: "משלוחים באזור המרכז",
    deliveryInfo: "משלוח עד הבית — נשמח לתאם בוואטסאפ",
    pickupInfo: "איסוף עצמי בתיאום מראש",
    leadTime: "הזמנה מראש של 2–3 ימים מומלצת",
  },
  nav: [
    { label: "המארזים", href: "#products" },
    { label: "גלריה", href: "#gallery" },
    { label: "על לין", href: "#about" },
    { label: "הזמנה", href: "#planner" },
  ],
  hero: {
    eyebrow: "Munch Cookies",
    headline: "מארזי עוגיות בעבודת יד",
    subtitle:
      "מארזים מעוצבים, חומרי גלם איכותיים וטעמים שאי אפשר לשכוח.",
    trustLine: "עוגיות | קינוחים | מארזי מתנה",
    ctaLabel: "להזמנה בוואטסאפ",
    ctaMessage:
      "היי לין, הגעתי דרך דף הנחיתה ואשמח לקבל פרטים על מארזי העוגיות.",
    secondaryCta: "צפייה במארזים",
    instagramCta: "עקבו באינסטגרם",
    image: "/images/hero.png",
    imageAlt: "מארז קינוחים אישיים מפנק של Munch Cookies",
  },
  trustStrip: {
    items: [
      { icon: "hand", label: "עבודת יד" },
      { icon: "gift", label: "מושלם כמתנה" },
      { icon: "sparkle", label: "נראות יוקרתית" },
    ],
  },
  products: {
    eyebrow: "המארזים המובילים",
    title: "המארזים האהובים",
    subtitle:
      "מארזים מתוקים שנבנים בקפידה ונראים טוב בדיוק כמו שהם טעימים.",
    cardLabel: "מארז",
    ctaLabel: "להזמנה",
    items: [
      {
        id: "classic",
        title: "מארז עוגיות קלאסי",
        description:
          "שילוב מפנק של עוגיות בעבודת יד בטעמים אהובים ומראה יוקרתי.",
        image: "/images/product-classic.png",
        imageAlt: "מארז עוגיות קלאסי עם ציפויי שוקולד",
        orderMessage:
          "היי לין, הגעתי דרך דף הנחיתה ואשמח לפרטים על מארז העוגיות הקלאסי.",
      },
      {
        id: "desserts",
        title: "מארז קינוחים אישי",
        description:
          "קינוחים אישיים, קרמים ושוקולד במארז שמרגיש כמו מתנה.",
        image: "/images/product-desserts.png",
        imageAlt: "מארז קינוחים אישיים עם קרמים ושוקולד",
        orderMessage:
          "היי לין, הגעתי דרך דף הנחיתה ואשמח לפרטים על מארז הקינוחים האישי.",
      },
      {
        id: "premium",
        title: "מארז פרימיום",
        description:
          "מארז חגיגי ומעוצב לאירועים, ימי הולדת והפתעות מתוקות.",
        image: "/images/product-premium.png",
        imageAlt: "מארז פרימיום חגיגי ומעוצב",
        orderMessage:
          "היי לין, הגעתי דרך דף הנחיתה ואשמח לפרטים על מארז הפרימיום.",
      },
    ],
  },
  gallery: {
    eyebrow: "גלריה",
    title: "הגלריה שלנו",
    subtitle: "רגעים מתוקים מתוך המארזים של Munch Cookies.",
    openLabel: "לצפייה בגלריה מלאה",
    closeLabel: "סגור",
    previewImages: galleryImages,
    allImages: galleryImages,
  },
  about: {
    eyebrow: "על לין",
    title: "קצת על לין",
    text: "מאחורי Munch Cookies עומדת לין, שאופה ומעצבת כל מארז מתוך אהבה לפרטים הקטנים, לטעמים מדויקים ולחוויה שנשארת גם אחרי הביס האחרון.",
    image: "/images/about-lin.png",
    imageAlt: "מאפים טריים בעבודת יד של לין",
  },
  whyUs: {
    title: "למה לבחור ב־Munch Cookies?",
    items: [
      { title: "עוגיות בעבודת יד" },
      { title: "מארזים מעוצבים בקפידה" },
      { title: "מתאים למתנות ולאירועים" },
      { title: "יחס אישי והתאמה לפי צורך" },
    ],
  },
  planner: {
    eyebrow: "הזמנה",
    title: "בואו נתאים לכם מארז",
    subtitle:
      "כמה פרטים קצרים ואנחנו נבנה יחד את המארז המושלם עבורכם.",
    nameLabel: "שם",
    boxTypeLabel: "סוג מארז",
    boxTypeOptions: [
      { value: "קלאסי", label: "קלאסי" },
      { value: "קינוחים", label: "קינוחים" },
      { value: "פרימיום", label: "פרימיום" },
      { value: "אחר", label: "אחר" },
    ],
    quantityLabel: "כמות מארזים",
    dateLabel: "תאריך רצוי",
    notesLabel: "הערות",
    successMessage:
      "מעולה, אפשר להתאים עבורך מארז לפי הסגנון, הכמות והתאריך הרצוי.",
    submitLabel: "שליחת פרטים בוואטסאפ",
  },
  reviews: {
    eyebrow: "ביקורות",
    title: "מה הלקוחות מספרים",
    subtitle: "כמה מילים ממי שכבר טעמו וקיבלו.",
    placeholderNote: "ביקורות לדוגמה — יתעדכנו בקרוב",
    items: [
      {
        name: "נועה",
        rating: 5,
        text: "המארז היה מהמם וטעים ברמות, בדיוק כמו בתמונות.",
      },
      {
        name: "דנה",
        rating: 5,
        text: "הזמנתי כמתנה וזה היה פשוט מושלם.",
      },
      {
        name: "מיכל",
        rating: 5,
        text: "הכל הגיע מסודר, אסתטי וטעים מאוד.",
      },
    ],
  },
  faq: {
    eyebrow: "שאלות נפוצות",
    title: "שאלות נפוצות",
    items: [
      {
        question: "כמה זמן מראש מומלץ להזמין?",
        answer:
          "מומלץ להזמין 2–3 ימים מראש כדי לשריין מקום, ובמיוחד לקראת חגים ואירועים. יש בקשה דחופה? כתבו לי בוואטסאפ ונראה מה אפשר לעשות.",
      },
      {
        question: "לאן אתם מגיעים?",
        answer:
          "משלוחים באזור המרכז. לאזורים נוספים — פנו אלינו בוואטסאפ ונבדוק יחד אפשרות משלוח. אפשר גם איסוף עצמי בתיאום מראש.",
      },
      {
        question: "האם אפשר להתאים מארז לפי בקשה?",
        answer:
          "בהחלט. אפשר להתאים את המארז לפי טעמים, כמות, אירוע ותקציב — פשוט ספרו לי מה אתם מחפשים ונבנה אותו יחד.",
      },
      {
        question: "האם יש אפשרות למארזי מתנה?",
        answer:
          "כן. כל המארזים נארזים בעיצוב יוקרתי שמרגיש כמו מתנה, ואפשר להוסיף ברכה אישית.",
      },
      {
        question: "איך מבצעים הזמנה?",
        answer:
          "שולחים לי הודעה בוואטסאפ עם סוג המארז, הכמות והתאריך הרצוי — ואני חוזרת עם כל הפרטים.",
      },
    ],
  },
  finalCta: {
    title: "מוכנים להפתיע מישהו במשהו מתוק?",
    text: "שלחו הודעה ונעזור לכם לבחור את המארז שמתאים בדיוק לרגע, לטעם ולתקציב.",
    ctaLabel: "להזמנה בוואטסאפ",
    ctaMessage:
      "היי לין, הגעתי דרך דף הנחיתה ואשמח לקבל פרטים על מארזי העוגיות.",
    image: "/images/gallery-2.png",
  },
  floating: {
    label: "רוצים להזמין?",
    message: "היי לין, הגעתי דרך דף הנחיתה ואשמח לקבל פרטים.",
  },
  footer: {
    copyright: "© 2026 Munch Cookies by Lin. כל הזכויות שמורות.",
    instagramLabel: "Instagram",
  },
  meta: {
    title: "Munch Cookies by Lin — מארזי עוגיות וקינוחים בעבודת יד",
    description:
      "מארזי עוגיות וקינוחים בעבודת יד בעיצוב יוקרתי. מתנה מושקעת לאירועים, ימי הולדת ורגעים מתוקים. הזמנה בוואטסאפ.",
    siteUrl: "https://munch-cookies.example.com",
    ogImage: "/images/hero.png",
  },
  legal: {
    businessName: "Munch Cookies by Lin",
    businessOwner: "לין ביטון",
    phone: "052-608-5111",
    websiteUrl: "https://munch-cookies.example.com",
    lastUpdated: "2026-07-01",
    deliveryAreas: "גוש דן, תל אביב והסביבה",
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
