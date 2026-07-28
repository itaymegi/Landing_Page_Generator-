/**
 * Dream Line — content configuration.
 *
 * Every image-bearing section renders from `CreationItem` objects. When new
 * photography arrives (gift boxes, sweets, wine, occasions...), replace
 * `isPlaceholder: true` entries with real `image` / `imageAlt` values below —
 * no component changes are required anywhere in the site.
 */

export type CreationCategoryId =
  | "illustration"
  | "keepsake"
  | "giftBox"
  | "sweets"
  | "wine"
  | "occasion";

export type AspectRatio = "portrait" | "tall" | "square" | "landscape" | "wide";

export type PlannerServiceFamily = "illustration" | "keepsake" | "giftBox" | "custom";

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
  accent: "blush" | "peach" | "butter" | "powderBlue" | "lavender";
  glyph: "heart" | "frame" | "giftBox" | "chocolate" | "wine";
  href: string;
  isPlaceholder: boolean;
  /** One or more CreationItem ids — card image carousel (Rubina-style packages). */
  previewItemIds: string[];
  /** CTA that opens the planner with this service preselected. */
  ctaLabel: string;
  /** Planner service family handoff key. */
  serviceKey: PlannerServiceFamily;
};

export type SuitabilityTag = {
  label: string;
};

export type PlannerPackage = {
  title: string;
  /** Omit for custom-quote options (לפי הצעת מחיר). */
  price?: number;
  needsPhoto: boolean;
  /** Maps package to a services showcase family for the step wizard. */
  family: PlannerServiceFamily;
};

export type PlannerBoxTypeOption = {
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
    logoSrc: string;
    logoAlt: string;
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
  suitability: {
    title: string;
    subtitle: string;
    items: SuitabilityTag[];
  };
  planner: {
    eyebrow: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    boxTypeLabel: string;
    packages: PlannerPackage[];
    boxTypeOptions: PlannerBoxTypeOption[];
    dateLabel: string;
    notesLabel: string;
    photoSectionLabel: string;
    photoSectionHint: string;
    photoRequiredHint: string;
    photoAddedLabel: string;
    photoReplaceLabel: string;
    photoRemoveLabel: string;
    photoPreviewNote: string;
    photoGalleryLabel: string;
    photoCameraLabel: string;
    photoMaxHint: string;
    successMessage: string;
    submitLabel: string;
    calculatorLabel: string;
    addPackageLabel: string;
    removePackageLabel: string;
    breakdownLabel: string;
    estimatedTotalLabel: string;
    priceDisclaimer: string;
    customPriceNote: string;
    shareFallbackNote: string;
    clipboardCopiedNote: string;
    uploadingNote: string;
    nextLabel: string;
    backLabel: string;
    stepOfLabel: string;
    steps: {
      category: { title: string; hint: string };
      type: { title: string; hint: string };
      photo: { title: string; hint: string };
      personalize: { title: string; hint: string };
      notes: { title: string; hint: string };
      summary: { title: string; hint: string };
    };
    familyLabels: Record<PlannerServiceFamily, string>;
    validationCategory: string;
    validationType: string;
    validationPhoto: string;
    cancelledShareNote: string;
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
    instagramLabel: string;
    pickupInfo: string;
    deliveryNote: string;
    closingMessage: string;
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

function formatPlannerBoxLabel(title: string, price?: number): string {
  return price != null ? `${title} — ${price.toLocaleString("he-IL")}₪` : title;
}

function buildPlannerBoxTypeOptions(packages: PlannerPackage[]): PlannerBoxTypeOption[] {
  return packages.map((pkg) => ({
    value: pkg.title,
    label: formatPlannerBoxLabel(pkg.title, pkg.price),
  }));
}

/** Returns the demo price for a package title, or undefined for custom-quote options. */
export function getPlannerPackagePrice(title: string): number | undefined {
  return site.planner.packages.find((p) => p.title === title)?.price;
}

/** True when the package typically needs a reference photo (illustration / print). */
export function plannerPackageNeedsPhoto(title: string): boolean {
  return site.planner.packages.find((p) => p.title === title)?.needsPhoto ?? false;
}

/** Packages belonging to a services family for the step wizard. */
export function plannerPackagesForFamily(family: PlannerServiceFamily) {
  return site.planner.packages.filter((p) => p.family === family);
}

export function isPlannerServiceFamily(value: string | null | undefined): value is PlannerServiceFamily {
  return value === "illustration" || value === "keepsake" || value === "giftBox" || value === "custom";
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
    description: "איור אישי מלא ברגש לזוג, בעיצוב עגול על רקע שקיעה",
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

  // Real — gift packages, sweets & wine
  {
    id: "giftbox-signature",
    category: "giftBox",
    title: "מארז מתנה ממותג",
    description: "מארז חלון לבן עם סרט אדום ותג שם אישי — כולל מיתוג Dream Line",
    image: "/images/Packages_images/giftbox-branded-window-mia-ziv.png",
    imageAlt: "מארז מתנה לבן עם חלון, סרט אדום ותג שם אישי של Dream Line",
    aspectRatio: "tall",
    featured: true,
    isPlaceholder: false,
  },
  {
    id: "giftbox-detail",
    category: "giftBox",
    title: "מארז לב בשוקולד",
    description: "מארז לב מלא בשוקולדים נבחרים עם סרט אדום",
    image: "/images/Packages_images/giftbox-heart-kinder-red-bow.png",
    imageAlt: "מארז לב עם שוקולדי קינדר ופררו רושה וסרט אדום",
    aspectRatio: "portrait",
    isPlaceholder: false,
  },
  {
    id: "giftbox-heart-blue-roses",
    category: "giftBox",
    title: "מארז לב — ורדים כחולים",
    description: "מארז לב בגוון תכלת עם ורדים ופררו רושה",
    image: "/images/Packages_images/giftbox-heart-blue-roses-ferrero.png",
    imageAlt: "מארז לב תכלת עם ורדים כחולים ושוקולד פררו רושה",
    aspectRatio: "square",
    featured: true,
    isPlaceholder: false,
  },
  {
    id: "giftbox-heart-pink-roses",
    category: "giftBox",
    title: "מארז לב — ורדים אדומים",
    description: "מארז ורוד עם שוקולדים וורדים אדומים",
    image: "/images/Packages_images/giftbox-heart-pink-roses-chocolates.png",
    imageAlt: "מארז לב ורוד פתוח עם שוקולדים וורדים אדומים",
    aspectRatio: "square",
    isPlaceholder: false,
  },
  {
    id: "giftbox-heart-ferrero-roses",
    category: "giftBox",
    title: "מארז אהבה — פררו וורדים",
    description: "חצי מארז פררו רושה וחצי ורדים אדומים",
    image: "/images/Packages_images/giftbox-heart-ferrero-red-roses.png",
    imageAlt: "מארז לב מחולק — פררו רושה וורדים אדומים",
    aspectRatio: "square",
    isPlaceholder: false,
  },
  {
    id: "giftbox-heart-kinder-white",
    category: "giftBox",
    title: "מארז לב — קינדר",
    description: "מארז לב שחור-לבן עם קינדר וסרט לבן",
    image: "/images/Packages_images/giftbox-heart-kinder-white-bow.png",
    imageAlt: "מארז לב עם שוקולדי קינדר, ביצי הפתעה וסרט לבן",
    aspectRatio: "portrait",
    isPlaceholder: false,
  },
  {
    id: "giftbox-round-mazal-tov",
    category: "giftBox",
    title: "מארז עגול לחגיגה",
    description: "מארז עגול לבן עם כיתוב אישי, שוקולדים וורדים",
    image: "/images/Packages_images/giftbox-round-mazal-tov-shaked.png",
    imageAlt: "מארז עגול לבן עם כיתוב מזל טוב, שוקולדים וורדים לבנים",
    aspectRatio: "portrait",
    featured: true,
    isPlaceholder: false,
  },
  {
    id: "sweets-arrangement",
    category: "sweets",
    title: "מארז שוקולד וממתקים",
    description: "סידורי שוקולד ומתיקה לאירועים ולחגיגות",
    image: "/images/Packages_images/sweets-milka-marble-box.png",
    imageAlt: "מארז שיש לבן עם שוקולד מילקה, ופלים וכדורי שוקולד",
    aspectRatio: "portrait",
    featured: true,
    isPlaceholder: false,
  },
  {
    id: "sweets-candy-jars",
    category: "sweets",
    title: "צנצנות ממתקים",
    description: "צנצנות מתוקות עטופות בוורוד — מושלם לאירוע",
    image: "/images/Packages_images/sweets-candy-jars-pink-wrap.png",
    imageAlt: "שתי צנצנות ממתקים עטופות בניילון ורוד עם סרטים",
    aspectRatio: "square",
    isPlaceholder: false,
  },
  {
    id: "wine-celebration",
    category: "wine",
    title: "מארז יין ואיור אישי",
    description: "יין עם תווית מאוירת + מסגרת איור אישי באותו סגנון",
    image: "/images/Packages_images/giftbox-wine-framed-illustration.png",
    imageAlt: "מארז עם מסגרת איור משפחתי, בקבוק יין עם תווית מאוירת וזר פרחים",
    aspectRatio: "landscape",
    featured: true,
    isPlaceholder: false,
  },
  {
    id: "occasion-birthday",
    category: "occasion",
    title: "מתנת יום הולדת",
    description: "מתנה מותאמת ליום ההולדת המיוחד",
    image: "/images/Packages_images/giftbox-round-mazal-tov-shaked.png",
    imageAlt: "מארז עגול לבן עם כיתוב מזל טוב לחגיגת יום הולדת",
    aspectRatio: "portrait",
    isPlaceholder: false,
  },
  {
    id: "occasion-baby",
    category: "occasion",
    title: "מתנה להולדת תינוק",
    description: "מתנה חמה לקבלת הפנים הראשונה",
    image: "/images/Packages_images/sweets-candy-jars-pink-wrap.png",
    imageAlt: "צנצנות ממתקים ורודות — מתנה חגיגית להולדת תינוק",
    aspectRatio: "square",
    isPlaceholder: false,
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
    logoSrc: "/images/logo-dream-line-mark.png",
    logoAlt: "Dream Line — לוגו",
    monogram: "DL",
    tagline: "מתנות אישיות שמספרות סיפור",
    description:
      "איורים אישיים, מארזי מתנה ויצירות מותאמות אישית — הופכים רגע אישי למתנה שנשארת.",
  },
  contact: {
    whatsappNumber: "972533030938",
    whatsappDefaultMessage: "היי Dreamline! אשמח לשמוע פרטים על יצירת מתנה אישית",
    instagram: "https://www.instagram.com/dream.linee",
    email: "dreamline@gmail.com",
    phones: ["053-303-0938"],
    isPlaceholder: false,
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
    { label: "עלינו", href: "#about" },
    { label: "יצירות", href: "#creations" },
    { label: "גלריה", href: "#gallery" },
    { label: "איך זה עובד", href: "#how-it-works" },
    { label: "הזמנה", href: "#planner" },
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
    supportingImageId: "giftbox-signature",
    accentImageId: "illustration-couple-blush",
    microNoteTop: "נוצר במיוחד בשבילכם",
    microNoteBottom: "סיפור אחד, מתנה אחת מיוחדת",
  },
  trustStrip: {
    items: [
      { label: "עיצוב אישי לכל לקוח" },
      { label: "יצירה מותאמת מאפס" },
      { label: "איסוף עצמי מנס ציונה" },
      { label: "פנייה וליווי ישירים" },
    ],
  },
  categories: {
    eyebrow: "מה אנחנו יוצרים?",
    title: "מתנה שמתחילה מהסיפור שלכם",
    subtitle:
      "מאיור אישי ועד מארז מתנה שלם — כל קטגוריה מתחילה מהסיפור שלכם.",
    items: [
      {
        id: "illustration",
        title: "איורים אישיים",
        description: "זוגות, משפחות ורגעים משמעותיים — מצוירים במיוחד בשבילכם.",
        accent: "blush",
        glyph: "heart",
        href: "#gallery",
        isPlaceholder: false,
        ctaLabel: "אני רוצה איור כזה",
        serviceKey: "illustration",
        previewItemIds: [
          "illustration-couple-blush",
          "illustration-couple-sunset",
          "illustration-solo-woman",
          "illustration-couple-selfie",
          "illustration-father-daughter",
          "illustration-family-sketch",
        ],
      },
      {
        id: "keepsake",
        title: "מוצרים מאוירים",
        description: "הדפס או שלט שהופכים את האיור שלכם לפריט שחי על הקיר.",
        accent: "peach",
        glyph: "frame",
        href: "#gallery",
        isPlaceholder: false,
        ctaLabel: "אני רוצה מוצר כזה",
        serviceKey: "keepsake",
        previewItemIds: ["product-sign-photo", "product-framed-prints", "wine-celebration"],
      },
      {
        id: "giftBox",
        title: "מארזי מתנה",
        description: "מארז שנבנה בדיוק לצרכים שלכם — מהלב שלנו.",
        accent: "butter",
        glyph: "giftBox",
        href: "#gallery",
        isPlaceholder: false,
        ctaLabel: "אני רוצה מארז כזה",
        serviceKey: "giftBox",
        previewItemIds: [
          "giftbox-heart-blue-roses",
          "giftbox-signature",
          "giftbox-heart-ferrero-roses",
          "giftbox-heart-pink-roses",
          "giftbox-round-mazal-tov",
          "giftbox-detail",
          "giftbox-heart-kinder-white",
          "sweets-arrangement",
          "sweets-candy-jars",
          "wine-celebration",
        ],
      },
    ],
  },
  featuredCreations: {
    eyebrow: "תיק עבודות",
    title: "מהיצירות שלנו",
    subtitle: "איורים, מארזי מתנה ומוצרים מאוירים — כל היצירות האמיתיות שלנו.",
    ctaLabel: "יוצרים לכם מתנה",
    ctaHref: "#planner",
    itemIds: [
      "illustration-couple-blush",
      "illustration-couple-sunset",
      "illustration-solo-woman",
      "illustration-couple-selfie",
      "illustration-father-daughter",
      "illustration-family-sketch",
      "illustration-couple-sketch-hug",
      "illustration-office-sign",
      "product-sign-photo",
      "product-framed-prints",
      "giftbox-heart-blue-roses",
      "giftbox-signature",
      "giftbox-heart-ferrero-roses",
      "giftbox-heart-pink-roses",
      "giftbox-round-mazal-tov",
      "giftbox-detail",
      "giftbox-heart-kinder-white",
      "sweets-arrangement",
      "sweets-candy-jars",
      "wine-celebration",
    ],
  },
  illustrationStory: {
    eyebrow: "מתמונה לאיור",
    title: "מתמונה שאתם אוהבים, לאיור שהוא כולו שלכם",
    subtitle:
      "כל איור מתחיל מרגע אמיתי — ומקבל טיפול אישי, קו וצבע שמתאימים בדיוק לסיפור שלכם.",
    coloredLabel: "בצבע מלא",
    coloredItemIds: [
      "illustration-couple-sunset",
      "illustration-couple-blush",
      "illustration-solo-woman",
      "illustration-couple-selfie",
      "illustration-father-daughter",
    ],
  },
  giftBoxStory: {
    eyebrow: "מארזי מתנה",
    title: "כל מתנה מתחילה במישהו",
    paragraphs: [
      "מארז המתנה של Dream Line לא מתחיל ממדף — הוא מתחיל מכם, מהסיפור שאתם מספרים לנו על מי שהמתנה מיועדת לו.",
      "אתם מספרים לנו למי זה מיועד ולאיזה אירוע, ואנחנו בונים איתכם מארז שמתאים בדיוק לרגע הזה.",
    ],
    ctaLabel: "נבנה יחד מארז",
    ctaHref: "#planner",
    primaryItemId: "giftbox-signature",
    detailItemId: "giftbox-heart-blue-roses",
  },
  keepsakeStory: {
    eyebrow: "מהאיור למוצר",
    title: "מהאיור למוצר שאפשר להחזיק",
    paragraphs: [
      "כל איור יכול להפוך לפריט מוחשי — הדפס ממוסגר לתלייה על הקיר, או שלט אישי לחלל הבית והעבודה.",
      "כך הסיפור שלכם לא נשאר רק על המסך — הוא מקבל מקום קבוע בבית שלכם.",
    ],
    ctaLabel: "רוצים ליצור משהו משלכם?",
    ctaHref: "#planner",
    primaryItemId: "product-framed-prints",
    detailItemId: "wine-celebration",
  },
  suitability: {
    title: "למי זה מתאים?",
    subtitle: "יצירות ומתנות שנועדו להשתלב ברגעים הקטנים והגדולים של החיים.",
    items: [
      { label: "יום הולדת" },
      { label: "מתנה לזוג" },
      { label: "יום נישואין" },
      { label: "הולדת תינוק" },
      { label: "מתנה למשפחה" },
      { label: "חנוכת בית" },
      { label: "סיום לימודים" },
      { label: "מתנה לחג" },
      { label: "אירוע חברה" },
      { label: "מתנות לעובדים" },
      { label: "שי ללקוחות" },
    ],
  },
  howItWorks: {
    eyebrow: "איך זה עובד",
    title: "משיחה אחת, ליצירה שלמה",
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
    title: "The Story of Dream Line",
    paragraphs: [
      "Dream Line נולד מתוך אהבה לציור, לפרטים הקטנים ולרגעים שבין אנשים.",
      "כל יצירה מתחילה בהקשבה — למי היא מיועדת, מה הסיפור שלה, ומה הופך אותה למיוחדת.",
      "הפרטים האישיים כאן יתעדכנו בקרוב — זה המקום שבו הסיפור המלא של Dream Line יסופר.",
    ],
    signatureLabel: "Dream Line",
  },
  faq: {
    title: "שאלות נפוצות",
    subtitle: "יש לכם שאלה? כתבו לנו — נשמח לעזור.",
    items: [
      {
        question: "איך מתחילים בתהליך יצירה?",
        answer:
          "כותבים לנו הודעה ומספרים בקצרה למי מיועדת היצירה ומה האירוע — משם נדריך אתכם שלב אחר שלב.",
      },
      {
        question: "איזו תמונה כדאי לשלוח לאיור אישי?",
        answer:
          "תמונה ברורה ומוארת היטב, שבה הפנים נראים בבירור — כך האיור יהיה הכי מדויק.",
      },
      {
        question: "אפשר להתאים אישית מארז מתנה?",
        answer:
          "בהחלט — מארזי המתנה נבנים סביב הנמען והאירוע: שוקולד, ורדים, יין, איור אישי ועוד. פשוט ספרו לנו מה מתאים.",
      },
      {
        question: "אפשר לבקש משהו שלא מופיע באתר?",
        answer:
          "כן, נשמח לשמוע על הרעיון שלכם ולבדוק איך אפשר להגשים אותו — פשוט כתבו לנו.",
      },
      {
        question: "כמה זמן לוקח לקבל את היצירה?",
        answer: "משך הזמן משתנה לפי סוג היצירה — נעדכן אתכם לאחר שנבין מה אתם מחפשים.",
      },
      {
        question: "יש משלוחים?",
        answer:
          "כן — פרטי המשלוח והאזורים מתואמים ישירות בוואטסאפ לפי ההזמנה. אפשר גם איסוף עצמי מנס ציונה.",
      },
    ],
  },
  planner: {
    eyebrow: "הזמנה",
    title: "בואו נרכיב לכם מתנה",
    subtitle: "כמה פרטים קצרים ונחזור אליכם בוואטסאפ עם כל הפרטים.",
    nameLabel: "שם",
    boxTypeLabel: "סוג יצירה / מארז",
    packages: [
      // DEMO PRICES — replace when real pricing arrives
      { title: "איור אישי — דמות אחת", price: 180, needsPhoto: true, family: "illustration" },
      { title: "איור אישי — זוג", price: 240, needsPhoto: true, family: "illustration" },
      { title: "איור משפחתי", price: 320, needsPhoto: true, family: "illustration" },
      { title: "סקיצת קו", price: 140, needsPhoto: true, family: "illustration" },
      { title: "הדפס ממוסגר", price: 260, needsPhoto: true, family: "keepsake" },
      { title: "שלט אישי מאויר", price: 220, needsPhoto: true, family: "keepsake" },
      { title: "מארז מתנה עם איור אישי", price: 380, needsPhoto: true, family: "giftBox" },
      { title: "מארז מתנה קלאסי", price: 290, needsPhoto: false, family: "giftBox" },
      { title: "מארז שוקולד וממתקים", price: 210, needsPhoto: false, family: "giftBox" },
      { title: "מארז יין וחגיגה", price: 310, needsPhoto: false, family: "giftBox" },
      { title: "מארז מותאם אישית", needsPhoto: false, family: "giftBox" },
      { title: "אחר / עוד לא בטוח/ה", needsPhoto: false, family: "custom" },
    ],
    boxTypeOptions: [],
    dateLabel: "תאריך רצוי",
    notesLabel: "הערות",
    photoSectionLabel: "העלו תמונה",
    photoSectionHint: "לאיורים והדפסים — תמונה ברורה עוזרת לנו לדייק את היצירה. אפשר לצרף עד 3 תמונות.",
    photoRequiredHint: "נדרשת לפחות תמונה אחת כדי להמשיך.",
    photoAddedLabel: "התמונה נוספה",
    photoReplaceLabel: "החלפת תמונה",
    photoRemoveLabel: "הסרה",
    photoPreviewNote: "תצוגה מקדימה במכשיר — התמונה תישלח עם ההזמנה.",
    photoGalleryLabel: "בחירה מהגלריה",
    photoCameraLabel: "צילום עכשיו",
    photoMaxHint: "עד 3 תמונות, 10MB לכל תמונה",
    successMessage:
      "מעולה! נפתח עבורכם חלון וואטסאפ עם הפרטים — נשמח לחזור אליכם.",
    submitLabel: "שליחת פרטים ב-WhatsApp",
    calculatorLabel: "בחירת יצירות / מארזים",
    addPackageLabel: "הוספת פריט נוסף",
    removePackageLabel: "הסרה",
    breakdownLabel: "פירוט הזמנה",
    estimatedTotalLabel: "סה״כ משוער",
    priceDisclaimer: "מחיר משוער · המחיר הסופי יאושר ב-WhatsApp",
    customPriceNote: "לפי הצעת מחיר",
    shareFallbackNote:
      "התמונות הועלו — הקישורים נוספו להודעה. אם התמונות לא נצרפו אוטומטית, שלחו אותן בצ'אט.",
    clipboardCopiedNote: "פרטי ההזמנה הועתקו — אפשר להדביק בוואטסאפ אם הטקסט לא הופיע.",
    uploadingNote: "מעלה תמונות…",
    nextLabel: "הבא",
    backLabel: "הקודם",
    stepOfLabel: "שלב {current} מתוך {total}",
    steps: {
      category: { title: "מה תרצו ליצור?", hint: "בחרו את עולם היצירה שמתאים לכם." },
      type: { title: "בחרו סגנון", hint: "בחרו את הסוג שמתאים ביותר." },
      photo: { title: "העלו תמונה", hint: "תמונה ברורה עוזרת לנו לדייק." },
      personalize: { title: "למי המתנה?", hint: "כמה פרטים קצרים עליכם." },
      notes: { title: "ספרו לנו קצת", hint: "רעיונות, הקדשה או כל פרט שחשוב." },
      summary: { title: "סיכום", hint: "בדקו שהכל נכון — ונמשיך בוואטסאפ." },
    },
    familyLabels: {
      illustration: "איורים אישיים",
      keepsake: "מוצרים מאוירים",
      giftBox: "מארזי מתנה",
      custom: "עדיין לא בטוח/ה",
    },
    validationCategory: "בחרו קטגוריה כדי להמשיך.",
    validationType: "בחרו סוג יצירה כדי להמשיך.",
    validationPhoto: "הוסיפו לפחות תמונה אחת כדי להמשיך.",
    cancelledShareNote: "השיתוף בוטל — אפשר לנסות שוב מתי שתרצו.",
  },
  finalCta: {
    eyebrow: "מוכנים להתחיל?",
    title: "יש לכם מישהו שבא לכם להפתיע באמת?",
    subtitle: "ספרו לנו את התכנון ואנחנו נדאג ליצור עבורכם את המוצר הכי ייחודי ואישי.",
    primaryCtaLabel: "הזמנה בWhatsApp",
    instagramLabel: "Instagram",
    pickupInfo: "איסוף עצמי מנס ציונה",
    deliveryNote: "משלוחים בתיאום",
    closingMessage: "נשמח להכיר את הסיפור שלכם — ולעצב ממנו מתנה שנשארת, מיד מהלב.",
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
    email: "dreamline@gmail.com",
    phone: "+972-53-303-0938",
    areaServed: ["ישראל"],
    sameAs: ["https://www.instagram.com/dream.linee"],
    category: "Gifts & Personalized Art",
  },
  legal: {
    businessName: "Dream Line",
    email: "dreamline@gmail.com",
    phone: "053-303-0938",
    lastUpdated: "2026-07-28",
    usesAnalytics: false,
    usesWhatsApp: true,
    usesInstagram: true,
  },
};

site.planner.boxTypeOptions = buildPlannerBoxTypeOptions(site.planner.packages);

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
