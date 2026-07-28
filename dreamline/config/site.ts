/**
 * Dream Line — content configuration.
 *
 * Every image-bearing section renders from `CreationItem` objects. When new
 * photography arrives (gift boxes, sweets, wine, pets, occasions...), replace
 * `isPlaceholder: true` entries with real `image` / `imageAlt` values below —
 * no component changes are required anywhere in the site.
 */

export type CreationCategoryId =
  | "illustration"
  | "keepsake"
  | "giftBox"
  | "sweets"
  | "wine"
  | "pet"
  | "occasion";

export type AspectRatio = "portrait" | "tall" | "square" | "landscape" | "wide";

export const aspectRatioClass: Record<AspectRatio, string> = {
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/4.3]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
};

export type CreationItem = {
  id: string;
  category: CreationCategoryId;
  title: string;
  description?: string;
  /** Present + isPlaceholder:false = renders the real photo. */
  image?: string;
  imageAlt?: string;
  objectPosition?: string;
  aspectRatio: AspectRatio;
  featured?: boolean;
  isPlaceholder: boolean;
};

export type CategoryDefinition = {
  id: CreationCategoryId;
  title: string;
  description: string;
  accent: "blush" | "peach" | "butter" | "powderBlue" | "sage" | "lavender";
  glyph: "heart" | "frame" | "giftBox" | "chocolate" | "wine" | "paw";
  href: string;
  isPlaceholder: boolean;
  previewItemId: string;
};

export type OccasionOption = {
  id: string;
  label: string;
  description: string;
  previewItemId: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export type ValuePillar = {
  title: string;
  description: string;
};

export type SiteColors = {
  ivory: string;
  ink: string;
  inkSoft: string;
  blush: string;
  blushDeep: string;
  peach: string;
  peachDeep: string;
  butter: string;
  butterDeep: string;
  powderBlue: string;
  powderBlueDeep: string;
  lavender: string;
  sage: string;
  terracotta: string;
  terracottaDeep: string;
  white: string;
};

export type SiteConfig = {
  brand: {
    name: string;
    logoText: string;
    monogram: string;
    tagline: string;
    description: string;
  };
  contact: {
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    instagram: string;
    email: string;
    phones: string[];
    isPlaceholder: boolean;
  };
  colors: SiteColors;
  nav: NavLink[];
  hero: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    ctaLabel: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    primaryImageId: string;
    supportingImageId: string;
    accentImageId: string;
    microNoteTop: string;
    microNoteBottom: string;
  };
  trustStrip: {
    items: { label: string }[];
  };
  categories: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: CategoryDefinition[];
  };
  featuredCreations: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
    itemIds: string[];
  };
  illustrationStory: {
    eyebrow: string;
    title: string;
    subtitle: string;
    coloredItemIds: string[];
    sketchItemIds: string[];
    sketchLabel: string;
    coloredLabel: string;
  };
  giftBoxStory: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    ctaLabel: string;
    ctaHref: string;
    primaryItemId: string;
    detailItemId: string;
  };
  keepsakeStory: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    ctaLabel: string;
    ctaHref: string;
    primaryItemId: string;
    detailItemId: string;
  };
  occasionExplorer: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: OccasionOption[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: ProcessStep[];
    ctaLabel: string;
  };
  whyDreamLine: {
    eyebrow: string;
    title: string;
    pillars: ValuePillar[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    signatureLabel: string;
    isPlaceholderPortrait: boolean;
  };
  socialGallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    itemIds: string[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    imageId: string;
  };
  footer: {
    tagline: string;
    microcopy: string;
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
    email: string;
    phone: string;
    areaServed: string[];
    sameAs: string[];
    category: string;
  };
  legal: {
    businessName: string;
    email?: string;
    phone?: string;
    lastUpdated: string;
    usesAnalytics?: boolean;
    usesWhatsApp?: boolean;
    usesInstagram?: boolean;
  };
};

export { getSiteUrl } from "@/lib/site-url";

/** Builds a WhatsApp deep link with optional prefilled message. */
export function whatsappHref(number: string, message?: string): string {
  const digits = number.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/* ─────────────────────────  Creation items  ───────────────────────── */
/* Every image slot on the site is one of these. Real assets currently
   supplied → isPlaceholder:false. Everything else is a fully designed
   placeholder ready for a same-shape data swap. */

const creationItems: CreationItem[] = [
  // Real — personalized illustrations
  {
    id: "illustration-couple-sunset",
    category: "illustration",
    title: "איור זוגי — שקיעה",
    description: "איור אישי מלא רגש לזוג, בעיצוב עגול על רקע שקיעה",
    image: "/images/illustration-couple-sunset.png",
    imageAlt: "איור זוגי בעיצוב עגול על רקע שקיעה צבעונית",
    aspectRatio: "tall",
    featured: true,
    isPlaceholder: false,
  },
  {
    id: "illustration-couple-blush",
    category: "illustration",
    title: "איור זוגי — פודרה",
    description: "איור זוגי עגול בגווני פודרה רומנטיים",
    image: "/images/illustration-couple-blush.png",
    imageAlt: "איור זוגי עגול בגווני פודרה עם טבעת אירוסין",
    aspectRatio: "square",
    isPlaceholder: false,
  },
  {
    id: "illustration-solo-woman",
    category: "illustration",
    title: "איור אישי — פורטרט",
    description: "איור פורטרט אישי וצבעוני על רקע פודרה",
    image: "/images/illustration-solo-woman.png",
    imageAlt: "איור פורטרט אישי צבעוני על רקע עגול בגוון פודרה",
    aspectRatio: "square",
    isPlaceholder: false,
  },
  {
    id: "illustration-couple-selfie",
    category: "illustration",
    title: "איור זוגי — סלפי",
    description: "איור זוגי בסטייל סלפי, קרוב ואינטימי",
    image: "/images/illustration-couple-selfie.png",
    imageAlt: "איור זוגי צבעוני בסטייל סלפי על רקע לבן",
    aspectRatio: "tall",
    isPlaceholder: false,
  },
  {
    id: "illustration-father-daughter",
    category: "illustration",
    title: "איור משפחתי — אבא ובת",
    description: "איור פורטרט משפחתי עם משפט מלווה",
    image: "/images/illustration-father-daughter-quote.png",
    imageAlt: "איור פורטרט של אבא ובת עם משפט מלווה בעברית",
    aspectRatio: "tall",
    isPlaceholder: false,
  },
  {
    id: "illustration-family-sketch",
    category: "illustration",
    title: "איור משפחתי — סקיצה",
    description: "סקיצת קו למשפחה מורכבת, לפני שלב הצבע",
    image: "/images/illustration-family-sketch.png",
    imageAlt: "סקיצת קו שחור-לבן של משפחה מורחבת סביב שולחן",
    aspectRatio: "tall",
    isPlaceholder: false,
  },
  {
    id: "illustration-couple-sketch-hug",
    category: "illustration",
    title: "איור זוגי — סקיצה",
    description: "סקיצת קו רומנטית עם משפט מלווה",
    image: "/images/illustration-couple-sketch-hug.png",
    imageAlt: "סקיצת קו שחור-לבן של זוג מתחבק עם משפט מלווה",
    aspectRatio: "tall",
    isPlaceholder: false,
  },
  {
    id: "illustration-office-sign",
    category: "keepsake",
    title: "שלט אישי מאויר",
    description: "עיצוב שלט אישי מאויר למרחב עבודה",
    image: "/images/illustration-office-sign-digital.png",
    imageAlt: "עיצוב שלט אישי מאויר עם דמות ופינת עבודה",
    aspectRatio: "landscape",
    isPlaceholder: false,
  },

  // Real — physical product photography (keepsakes)
  {
    id: "product-sign-photo",
    category: "keepsake",
    title: "שלט מודפס בבית",
    description: "השלט המאויר כפריט מוחשי, מוכן להצבה",
    image: "/images/product-sign-photo.png",
    imageAlt: "שלט מאויר מודפס על לוח, מוצב על שולחן עץ",
    aspectRatio: "tall",
    featured: true,
    isPlaceholder: false,
  },
  {
    id: "product-framed-prints",
    category: "keepsake",
    title: "הדפסים ממוסגרים",
    description: "איורים ממוסגרים כמוצר מוגמר ומוכן למתנה",
    image: "/images/product-framed-prints.png",
    imageAlt: "שני הדפסי איור ממוסגרים על שולחן — זוגי וקו משפחתי",
    aspectRatio: "landscape",
    featured: true,
    isPlaceholder: false,
  },

  // Placeholders — future categories (same shape, ready for real photos)
  {
    id: "giftbox-signature",
    category: "giftBox",
    title: "מארז מתנה אישי",
    description: "מארז שנבנה בהתאמה אישית לאירוע ולנמען",
    aspectRatio: "tall",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: "giftbox-detail",
    category: "giftBox",
    title: "פרטים קטנים, מותאמים אישית",
    description: "כל פריט במארז נבחר בהתאמה לסיפור שמאחורי המתנה",
    aspectRatio: "landscape",
    isPlaceholder: true,
  },
  {
    id: "sweets-arrangement",
    category: "sweets",
    title: "מארז שוקולד וממתקים",
    description: "סידורי שוקולד ומתיקה לאירועים ולחגיגות",
    aspectRatio: "square",
    isPlaceholder: true,
  },
  {
    id: "wine-celebration",
    category: "wine",
    title: "מתנת יין לחגיגה",
    description: "מארזי יין לזוגות, לאירועים ולרגעים חוגגים",
    aspectRatio: "tall",
    isPlaceholder: true,
  },
  {
    id: "pet-illustration",
    category: "pet",
    title: "איור חיית מחמד",
    description: "איור אישי לחיית המחמד שלכם",
    aspectRatio: "square",
    isPlaceholder: true,
  },
  {
    id: "occasion-birthday",
    category: "occasion",
    title: "מתנת יום הולדת",
    description: "מתנה מותאמת ליום ההולדת המיוחד",
    aspectRatio: "portrait",
    isPlaceholder: true,
  },
  {
    id: "occasion-baby",
    category: "occasion",
    title: "מתנה להולדת תינוק",
    description: "מתנה חמה לקבלת הפנים הראשונה",
    aspectRatio: "portrait",
    isPlaceholder: true,
  },
];

function getItem(id: string): CreationItem {
  const item = creationItems.find((i) => i.id === id);
  if (!item) {
    throw new Error(`[config/site] Unknown CreationItem id: "${id}"`);
  }
  return item;
}

/* ─────────────────────────────  Site  ─────────────────────────────── */

export const site: SiteConfig = {
  brand: {
    name: "Dream Line",
    logoText: "Dream Line",
    monogram: "DL",
    tagline: "מתנות אישיות שמספרות סיפור",
    description:
      "איורים אישיים, מארזי מתנה ויצירות מותאמות אישית — הופכים רגע אישי למתנה שנשארת.",
  },
  contact: {
    whatsappNumber: "972500000000",
    whatsappDefaultMessage: "היי דרים ליין! אשמח לשמוע פרטים על יצירת מתנה אישית",
    instagram: "https://www.instagram.com/dream.linee",
    email: "hello@dreamline-gifts.com",
    phones: [],
    isPlaceholder: true,
  },
  colors: {
    ivory: "#FFF9F6",
    ink: "#302B29",
    inkSoft: "#6F6762",
    blush: "#F6D8D8",
    blushDeep: "#E9B7BD",
    peach: "#F4C7A8",
    peachDeep: "#E3A276",
    butter: "#F5E8B8",
    butterDeep: "#E9D584",
    powderBlue: "#CFE6F5",
    powderBlueDeep: "#A7CEE8",
    lavender: "#DDD5EF",
    sage: "#DCE5D4",
    terracotta: "#B5603E",
    terracottaDeep: "#9C4E30",
    white: "#FFFFFF",
  },
  nav: [
    { label: "יצירות", href: "#creations" },
    { label: "איורים", href: "#illustration-story" },
    { label: "מארזי מתנה", href: "#gift-box-story" },
    { label: "איך זה עובד", href: "#how-it-works" },
    { label: "עלינו", href: "#about" },
    { label: "שאלות", href: "#faq" },
  ],
  hero: {
    eyebrow: "DREAM LINE",
    headline: "מתנות שמספרות את הסיפור שלכם",
    subtitle:
      "איורים אישיים, מארזי מתנה ויצירות מותאמות אישית — בונים יחד מתנה אחת שמספרת בדיוק את הסיפור שלכם.",
    ctaLabel: "יוצרים לכם מתנה",
    secondaryCtaLabel: "לצפייה ביצירות",
    secondaryCtaHref: "#creations",
    primaryImageId: "illustration-couple-sunset",
    supportingImageId: "product-framed-prints",
    accentImageId: "illustration-couple-blush",
    microNoteTop: "נוצר במיוחד בשבילכם",
    microNoteBottom: "סיפור אחד, מתנה אחת ומיוחדת",
  },
  trustStrip: {
    items: [
      { label: "עיצוב אישי לכל לקוח" },
      { label: "יצירה מותאמת מאפס" },
      { label: "פנייה וליווי ישירים" },
    ],
  },
  categories: {
    eyebrow: "מה נוכל ליצור בשבילכם",
    title: "עולמות היצירה של Dream Line",
    subtitle:
      "מאיור אישי ועד מארז מתנה שלם — כל קטגוריה מתחילה מהסיפור שלכם.",
    items: [
      {
        id: "illustration",
        title: "איורים אישיים",
        description: "זוגות, משפחות ורגעים משמעותיים — מצוירים במיוחד בשבילכם.",
        accent: "blush",
        glyph: "heart",
        href: "#illustration-story",
        isPlaceholder: false,
        previewItemId: "illustration-couple-sunset",
      },
      {
        id: "keepsake",
        title: "מוצרים מאוירים",
        description: "השלט או ההדפס שהאיור שלכם מקבל בו חיים על הקיר.",
        accent: "peach",
        glyph: "frame",
        href: "#gift-box-story",
        isPlaceholder: false,
        previewItemId: "product-framed-prints",
      },
      {
        id: "giftBox",
        title: "מארזי מתנה אישיים",
        description: "מארז שנבנה סביב הנמען, האירוע והרגש שרוצים להעביר.",
        accent: "butter",
        glyph: "giftBox",
        href: "#gift-box-story",
        isPlaceholder: true,
        previewItemId: "giftbox-signature",
      },
      {
        id: "sweets",
        title: "שוקולד ומתיקה",
        description: "סידורי שוקולד וממתקים לחגיגה, במגע אישי.",
        accent: "powderBlue",
        glyph: "chocolate",
        href: "#gift-box-story",
        isPlaceholder: true,
        previewItemId: "sweets-arrangement",
      },
      {
        id: "wine",
        title: "יין וחגיגה",
        description: "מתנות יין לרגעים חוגגים ולזוגות.",
        accent: "lavender",
        glyph: "wine",
        href: "#gift-box-story",
        isPlaceholder: true,
        previewItemId: "wine-celebration",
      },
      {
        id: "pet",
        title: "איורי חיות מחמד",
        description: "גם חבר הבית עם ארבע רגליים מקבל איור משלו.",
        accent: "sage",
        glyph: "paw",
        href: "#illustration-story",
        isPlaceholder: true,
        previewItemId: "pet-illustration",
      },
    ],
  },
  featuredCreations: {
    eyebrow: "תיק עבודות",
    title: "מהיצירות שלנו",
    subtitle: "מבחר יצירות אמיתיות — איורים, מוצרים מודפסים, וגם מה שבדרך.",
    ctaLabel: "יוצרים לכם מתנה",
    ctaHref: "#final-cta",
    itemIds: [
      "illustration-couple-sunset",
      "product-framed-prints",
      "illustration-solo-woman",
      "illustration-couple-selfie",
      "illustration-family-sketch",
      "giftbox-signature",
      "illustration-father-daughter",
      "product-sign-photo",
      "sweets-arrangement",
      "illustration-couple-blush",
      "wine-celebration",
      "illustration-couple-sketch-hug",
    ],
  },
  illustrationStory: {
    eyebrow: "מתמונה לאיור",
    title: "מתמונה שאתם אוהבים, לאיור שהוא כולו שלכם",
    subtitle:
      "כל איור מתחיל מרגע אמיתי — ומקבל טיפול אישי, קו וצבע שמתאימים בדיוק לסיפור שלכם.",
    coloredLabel: "בצבע מלא",
    sketchLabel: "בסקיצת קו",
    coloredItemIds: [
      "illustration-couple-sunset",
      "illustration-couple-blush",
      "illustration-solo-woman",
      "illustration-couple-selfie",
      "illustration-father-daughter",
    ],
    sketchItemIds: ["illustration-family-sketch", "illustration-couple-sketch-hug"],
  },
  giftBoxStory: {
    eyebrow: "מארזי מתנה",
    title: "כל מתנה מתחילה במישהו",
    paragraphs: [
      "מארז המתנה של Dream Line לא מתחיל ממדף — הוא מתחיל מכם, מהסיפור שאתם מספרים לנו על מי שהמתנה מיועדת לו.",
      "אתם מספרים לנו למי זה מיועד ולאיזה אירוע, ואנחנו בונים איתכם מארז שמתאים בול לרגע הזה.",
    ],
    ctaLabel: "נבנה יחד מארז",
    ctaHref: "#final-cta",
    primaryItemId: "giftbox-signature",
    detailItemId: "giftbox-detail",
  },
  keepsakeStory: {
    eyebrow: "מהאיור למוצר",
    title: "מהאיור למוצר שאפשר להחזיק",
    paragraphs: [
      "כל איור יכול להפוך לפריט מוחשי — הדפס ממוסגר לתלייה על הקיר, או שלט אישי לחלל הבית והעבודה.",
      "כך הסיפור שלכם לא נשאר רק על המסך — הוא מקבל מקום קבוע בבית שלכם.",
    ],
    ctaLabel: "רוצים ליצור משהו משלכם",
    ctaHref: "#final-cta",
    primaryItemId: "product-framed-prints",
    detailItemId: "product-sign-photo",
  },
  occasionExplorer: {
    eyebrow: "לאיזה רגע?",
    title: "למה אנחנו יוצרים הכי הרבה",
    subtitle: "בחרו את הרגע שלכם, ותראו איך הוא יכול להיראות.",
    items: [
      {
        id: "couple",
        label: "זוגיות ואהבה",
        description: "איור או מתנה שמספרת את הסיפור הזוגי שלכם.",
        previewItemId: "illustration-couple-sunset",
      },
      {
        id: "family",
        label: "משפחה",
        description: "כל המשפחה, כולל הפרטים הקטנים שחשובים לכם.",
        previewItemId: "illustration-family-sketch",
      },
      {
        id: "workplace",
        label: "עבודה ואבן דרך",
        description: "מתנה אישית לרגע מקצועי משמעותי.",
        previewItemId: "illustration-office-sign",
      },
      {
        id: "birthday",
        label: "יום הולדת",
        description: "מתנה שמרגישה אישית ולא כמו כל שנה.",
        previewItemId: "occasion-birthday",
      },
      {
        id: "baby",
        label: "הולדת תינוק",
        description: "קבלת פנים חמה לחבר החדש במשפחה.",
        previewItemId: "occasion-baby",
      },
      {
        id: "justBecause",
        label: "סתם כי בא לי",
        description: "לא כל מתנה צריכה אירוע — מספיק שרוצים.",
        previewItemId: "illustration-solo-woman",
      },
    ],
  },
  howItWorks: {
    eyebrow: "איך זה עובד",
    title: "משלושה שיחה, ליצירה שלמה",
    subtitle: "תהליך פשוט וברור — אתם מספרים, אנחנו יוצרים.",
    steps: [
      {
        index: "01",
        title: "מספרים לנו על מי מדובר",
        description: "כמה מילים על הנמען, האירוע והתחושה שרוצים להעביר.",
      },
      {
        index: "02",
        title: "משתפים תמונה או כיוון",
        description: "שולחים תמונה או רעיון, ובוחרים את הסטייל שמדבר אליכם.",
      },
      {
        index: "03",
        title: "אנחנו יוצרים את היצירה שלכם",
        description: "מעבדים כל פרט באופן אישי, עד שהיא מרגישה מדויקת.",
      },
      {
        index: "04",
        title: "מקבלים את היצירה המוגמרת",
        description: "היצירה מגיעה אליכם מוכנה למתנה, לתלייה או להצבה.",
      },
    ],
    ctaLabel: "מתחילים ליצור",
  },
  whyDreamLine: {
    eyebrow: "למה Dream Line",
    title: "לא מהמדף. מהסיפור שלכם.",
    pillars: [
      {
        title: "אישי",
        description: "כל יצירה מתחילה מהאדם או מהרגע שאתם רוצים לחגוג — לא ממוצר קיים.",
      },
      {
        title: "יצירתי",
        description: "כל פרויקט מתחיל מרעיון, ומתפתח לכיוון שמתאים בדיוק לכם.",
      },
      {
        title: "רגשי",
        description: "היצירה נבנית סביב אדם, זיכרון או רגע אמיתי — לא סתם עיצוב.",
      },
      {
        title: "חד־פעמי",
        description: "כל יצירה נוצרת במיוחד עבור מי שהיא מיועדת אליו, ולא חוזרת על עצמה.",
      },
    ],
  },
  about: {
    eyebrow: "מי מאחורי Dream Line",
    title: "הסיפור שמאחורי הקו",
    paragraphs: [
      "Dream Line נולד מתוך אהבה לציור, לפרטים הקטנים ולרגעים שבין אנשים.",
      "כל יצירה מתחילה בהקשבה — למי היא מיועדת, מה הסיפור שלה, ומה הופך אותה למיוחדת.",
      "הפרטים האישיים כאן יתעדכנו בקרוב — זה המקום שבו הסיפור המלא של Dream Line יסופר.",
    ],
    signatureLabel: "Dream Line",
    isPlaceholderPortrait: true,
  },
  socialGallery: {
    eyebrow: "@dream.linee",
    title: "קצת מהעולם שלנו באינסטגרם",
    subtitle: "תמונה יומיומית מהסטודיו — עוד יצירות אפשר לראות באינסטגרם.",
    ctaLabel: "לצפייה באינסטגרם",
    itemIds: [
      "illustration-couple-sketch-hug",
      "illustration-couple-blush",
      "illustration-solo-woman",
      "product-sign-photo",
      "illustration-couple-selfie",
      "illustration-father-daughter",
    ],
  },
  faq: {
    title: "שאלות נפוצות",
    subtitle: "כמה שאלות שחוזרות על עצמן — אם יש לכם עוד, פשוט תכתבו לנו.",
    items: [
      {
        question: "איך מתחילים בתהליך יצירה?",
        answer:
          "כותבים לנו הודעה ומספרים בקצרה למי מיועדת היצירה ומה האירוע — משם נדריך אתכם שלב אחר שלב.",
      },
      {
        question: "איזו תמונה כדאי לשלוח לאיור אישי?",
        answer:
          "תמונה ברורה, מוארת היטב, שבה פני האדם נראים בבהירות מומלצת ביותר — כדי שהאיור ישקף אתכם בצורה הכי מדויקת.",
      },
      {
        question: "אפשר להתאים אישית מארז מתנה?",
        answer:
          "בהחלט — מארזי המתנה נבנים סביב הנמען והאירוע. פרטי ההתאמה המלאים יתעדכנו כאן בקרוב.",
      },
      {
        question: "אפשר לבקש משהו שלא מופיע באתר?",
        answer:
          "כן, נשמח לשמוע על הרעיון שלכם ולבדוק איך אפשר להגשים אותו — פשוט כתבו לנו.",
      },
      {
        question: "כמה זמן לוקח לקבל את היצירה?",
        answer: "משך הזמן משתנה לפי סוג היצירה — נעדכן פרטים מדויקים בקרוב.",
      },
      {
        question: "יש משלוחים?",
        answer: "פרטי המשלוחים והאזורים המדויקים יתעדכנו כאן בקרוב.",
      },
    ],
  },
  finalCta: {
    eyebrow: "מוכנים להתחיל?",
    title: "יש לכם מישהו שבא לכם להפתיע באמת?",
    subtitle: "תגידו לנו מי זה, ונתחיל ליצור משהו אישי ומיוחד.",
    primaryCtaLabel: "מתחילים ליצור",
    secondaryCtaLabel: "לשאול שאלה",
    imageId: "illustration-couple-sunset",
  },
  footer: {
    tagline: "מתנות אישיות שמספרות סיפור",
    microcopy: "נוצר במחשבה. נוצר במיוחד בשבילכם.",
    copyright: "© 2026 Dream Line. כל הזכויות שמורות.",
  },
  meta: {
    title: "Dream Line | מתנות אישיות ואיורים בעיצוב אישי",
    description:
      "Dream Line — איורים אישיים, מוצרים מאוירים ומארזי מתנה מותאמים אישית. הופכים תמונה, זיכרון או אירוע ליצירה אחת שנשארת.",
    keywords: [
      "Dream Line",
      "דרים ליין",
      "מתנות בעיצוב אישי",
      "איור אישי",
      "איור מתמונה",
      "מארזים בעיצוב אישי",
      "מתנות מיוחדות",
      "מתנות לזוגות",
      "מתנות ליום הולדת",
      "איור זוגי",
      "איור משפחתי",
      "personalized illustration",
      "custom portrait gift",
    ],
    ogImage: "/opengraph-image",
    themeColor: "#FFF9F6",
  },
  business: {
    name: "Dream Line",
    legalName: "Dream Line",
    description:
      "איורים אישיים, מוצרים מאוירים ומארזי מתנה מותאמים אישית לכל אירוע ורגע משמעותי.",
    email: "hello@dreamline-gifts.com",
    phone: "+972-50-000-0000",
    areaServed: ["ישראל"],
    sameAs: ["https://www.instagram.com/dream.linee"],
    category: "Gifts & Personalized Art",
  },
  legal: {
    businessName: "Dream Line",
    email: "hello@dreamline-gifts.com",
    lastUpdated: "2026-07-28",
    usesAnalytics: false,
    usesWhatsApp: true,
    usesInstagram: true,
  },
};

/** Resolve a CreationItem by id — throws in dev if the id is missing (fail fast on typos). */
export function creationItem(id: string): CreationItem {
  return getItem(id);
}

/** Resolve many CreationItems in the given order, skipping unknown ids defensively in production. */
export function creationItems_(ids: string[]): CreationItem[] {
  return ids.map((id) => getItem(id));
}

/** Convenience: WhatsApp link using site defaults. */
export function siteWhatsAppHref(message?: string): string {
  return whatsappHref(site.contact.whatsappNumber, message ?? site.contact.whatsappDefaultMessage);
}
