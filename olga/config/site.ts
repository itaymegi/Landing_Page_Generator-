import type { QuoteSelection } from "@/config/pricing";
import {
  chuppahOptions,
  designLevelLabels,
  extraOptions,
  formatPriceRange,
  tableShapeLabels,
  calculateQuoteRange,
} from "@/config/pricing";

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  objectPosition?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type ServiceCard = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type WhyOlgaItem = {
  title: string;
  description: string;
};

export type SiteConfig = {
  brand: {
    name: string;
    logoText: string;
    tagline: string;
    taglineEn: string;
    description: string;
  };
  contact: {
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    instagram: string;
    email: string;
    phones: string[];
  };
  nav: NavLink[];
  hero: {
    headline: string;
    taglineEn: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
    imageAlt: string;
    chips: string[];
  };
  about: {
    title: string;
    headline: string;
    body: string;
    image: string;
    imageAlt: string;
    objectPosition?: string;
  };
  services: {
    title: string;
    subtitle: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  gallery: {
    title: string;
    subtitle: string;
    viewAllLabel: string;
  };
  quoteCalculator: {
    title: string;
    subtitle: string;
    eventTypes: { value: string; label: string }[];
    stepLabels: [string, string, string, string, string];
    resultTitle: string;
    resultNote: string;
    disclaimer: string;
    whatsappCta: string;
    scheduleCta: string;
  };
  whyOlga: {
    title: string;
    subtitle: string;
    items: WhyOlgaItem[];
  };
  contactForm: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      phone: string;
      eventType: string;
      date: string;
      message: string;
    };
    submitLabel: string;
  };
  faq: {
    title: string;
    items: FaqItem[];
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

export const site: SiteConfig = {
  brand: {
    name: "אולגה",
    logoText: "Olga Events Design",
    tagline: "עיצובים פורחים",
    taglineEn: "Blooming designs",
    description:
      "מעצבת אירועי בוטיק ופלוריסטית — עיצוב אירועים בפרחים בגישה אמנותית, אישית ומוקפדת.",
  },
  contact: {
    whatsappNumber: "972504918732",
    whatsappDefaultMessage:
      "שלום אולגה, הגעתי דרך האתר.\nאשמח לשמוע עוד על עיצוב האירוע.",
    instagram: "https://www.instagram.com/olgaeventsdesign",
    email: "olga@codewithcontent.com",
    phones: ["050-491-8732"],
  },
  nav: [
    { label: "אודות", href: "/#about" },
    { label: "שירותים", href: "/#services" },
    { label: "גלריה", href: "/#gallery" },
    { label: "הערכת מחיר", href: "/#calculator" },
    { label: "צור קשר", href: "/#contact" },
  ],
  hero: {
    headline: "עיצוב אירועים בפרחים בגישה אמנותית, אישית ומוקפדת",
    taglineEn: "Artistic floral event design",
    subtitle:
      "עיצובי פרחים לאירועים, חתונות, חופות ומקוואות — בהתאמה אישית מלאה לאופי האירוע, הצבעים והאווירה שתרצו ליצור.",
    primaryCta: "לקבלת הצעת מחיר ראשונית",
    secondaryCta: "צפייה בעבודות",
    image:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1920&q=85",
    imageAlt: "עיצוב אירועים בפרחים — Olga Events Design",
    chips: ["עיצוב אישי", "חתונות וחופות", "פרחים ואווירה"],
  },
  about: {
    title: "נעים להכיר, אולגה",
    headline: "כל אירוע נבנה מאפס — בלי חבילות גנריות",
    body: "אולגה מעצבת אירועים בפרחים בגישה אמנותית, אישית ומוקפדת. כל אירוע נבנה מאפס לפי הסיפור, המקום, הצבעים והאווירה של הלקוח — בלי חבילות גנריות ובלי פתרונות מוכנים מראש.",
    image: "/images/about-olga.jpg",
    imageAlt: "אולגה בעיצוב פרחים לאירוע — Olga Events Design",
    objectPosition: "58% 32%",
  },
  services: {
    title: "השירותים שלי",
    subtitle: "עיצוב מותאם אישית לכל סוג של חגיגה — כל הצעת מחיר נבנית אחרי שיחה אישית",
  },
  process: {
    title: "איך זה עובד?",
    subtitle: "תהליך עדין, מדויק ואישי — מהרגע הראשון ועד יום האירוע",
    steps: [
      {
        number: "01",
        title: "שיחת היכרות והבנת הסגנון",
        description: "מכירים, מקשיבים ומבינים את החזון, הצבעים והאווירה.",
      },
      {
        number: "02",
        title: "בחירת כיוון עיצובי וצבעים",
        description: "בונים יחד לוח השראה וקונספט פרחוני מדויק.",
      },
      {
        number: "03",
        title: "בניית הצעה אישית",
        description: "הצעת מחיר מותאמת — לא חבילה, אלא עיצוב שלם.",
      },
      {
        number: "04",
        title: "הקמה ועיצוב ביום האירוע",
        description: "נוכחות מלאה, הקמה מוקפדת ואווירה מושלמת.",
      },
    ],
  },
  gallery: {
    title: "גלריה",
    subtitle: "מבט לעבודות — חופות, שולחנות, מקוואות, אירועים וסדנאות",
    viewAllLabel: "צפייה בכל העבודות",
  },
  quoteCalculator: {
    title: "קבלי הערכת מחיר ראשונית לאירוע שלך",
    subtitle:
      "החישוב הוא הערכה כללית בלבד ונועד לתת כיוון תקציבי ראשוני. הצעת מחיר סופית תיבנה לאחר שיחה אישית והתאמה מלאה לאופי האירוע.",
    eventTypes: [
      { value: "wedding", label: "חתונה" },
      { value: "private", label: "אירוע פרטי" },
      { value: "mikvah", label: "מקווה" },
      { value: "other", label: "אחר" },
    ],
    stepLabels: ["סוג אירוע", "שולחנות", "חופה", "תוספות", "הערכה"],
    resultTitle: "הערכה ראשונית",
    resultNote:
      "המחיר הסופי עשוי להשתנות לפי עונתיות, סוגי פרחים, מיקום האירוע, לוגיסטיקה ודרישות מיוחדות.",
    disclaimer:
      "כל הצעת מחיר נבנית אחרי שיחה אישית · המערכת נועדה לעזור להבין כיוון תקציבי ראשוני בלבד",
    whatsappCta: "שליחת הבחירות לאולגה בוואטסאפ",
    scheduleCta: "לתיאום שיחת התאמה",
  },
  whyOlga: {
    title: "למה אולגה?",
    subtitle: "עיצוב בוטיק — אישי, מדויק ומלא בנשמה",
    items: [
      {
        title: "עיצוב אישי מאפס",
        description: "בלי חבילות מוכנות — כל אירוע נבנה לפי הסיפור שלכם.",
      },
      {
        title: "התאמה לצבעים ולקונספט",
        description: "רגישות יוצאת דופן לשילובי צבעים, קומפוזיציה ואווירה.",
      },
      {
        title: "ניסיון באירועים מגוונים",
        description: "חתונות, חופות, מקוואות, אירועים פרטיים וסדנאות.",
      },
      {
        title: "יחס אישי וליווי מלא",
        description: "מהשיחה הראשונה ועד יום האירוע — ליווי קרוב ומקצועי.",
      },
      {
        title: "מענה גם לאלמנטים מיוחדים",
        description: "שבילי חופה, שלטים, בר, עמדות קבלת פנים ועוד.",
      },
    ],
  },
  contactForm: {
    title: "נתחיל לבנות את האווירה לאירוע שלך?",
    subtitle: "מלאי פרטים ונחזור אלייך — או שלחי הודעה ישירות",
    fields: {
      name: "שם",
      phone: "טלפון",
      eventType: "סוג אירוע",
      date: "תאריך אירוע",
      message: "הודעה",
    },
    submitLabel: "שליחה בוואטסאפ",
  },
  faq: {
    title: "שאלות נפוצות",
    items: [
      {
        question: "האם יש חבילות קבועות?",
        answer: "לא. כל אירוע נבנה בהתאמה אישית.",
      },
      {
        question: "האם המחשבון מציג מחיר סופי?",
        answer: "לא. מדובר בהערכה ראשונית בלבד.",
      },
      {
        question: "האם אפשר לשלוח השראה?",
        answer: "כן, אפשר לשלוח תמונות, צבעים ורפרנסים.",
      },
      {
        question: "באילו אזורים את עובדת?",
        answer: "לפי תיאום, בהתאם למיקום ולוגיסטיקה.",
      },
    ],
  },
  meta: {
    title: "Olga Events Design | עיצוב אירועים בפרחים",
    description:
      "אולגה — עיצוב אירועים בפרחים בגישה אמנותית ואישית. חתונות, חופות, שולחנות, מקוואות וסדנאות. הערכת מחיר ראשונית באתר.",
    siteUrl: "https://olgaeventsdesign.co.il",
    ogImage:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&q=85",
  },
  legal: {
    businessName: "Olga Events Design — אולגה עיצובים פורחים",
    businessOwner: "אולגה",
    email: "olga@codewithcontent.com",
    phone: "050-491-8732",
    websiteUrl: "https://olgaeventsdesign.co.il",
    lastUpdated: "2026-07-09",
    deliveryAreas: "לפי תיאום",
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

export function buildQuoteMessage(
  selection: QuoteSelection,
  rangeLabel: string,
): string {
  const eventLabel =
    site.quoteCalculator.eventTypes.find((t) => t.value === selection.eventType)
      ?.label ?? selection.eventType;

  const tablesText =
    selection.tableGroups.length === 0
      ? "ללא שולחנות"
      : selection.tableGroups
          .map(
            (g) =>
              `${tableShapeLabels[g.shape]} × ${g.quantity} (${designLevelLabels[g.level]})`,
          )
          .join("; ");

  const chuppahLabel =
    chuppahOptions.find((c) => c.value === selection.chuppah)?.label ??
    selection.chuppah;

  const extrasText =
    selection.extras.length === 0
      ? "ללא תוספות"
      : selection.extras
          .map((id) => extraOptions.find((e) => e.id === id)?.label ?? id)
          .join(", ");

  return [
    "שלום אולגה, אשמח להצעת מחיר.",
    `סוג אירוע: ${eventLabel}`,
    `שולחנות: ${tablesText}`,
    `חופה: ${chuppahLabel}`,
    `תוספות: ${extrasText}`,
    `הערכה ראשונית מהמחשבון: ${rangeLabel}`,
    "אשמח לשיחת התאמה.",
  ].join("\n");
}

export function buildContactMessage(data: {
  name: string;
  phone: string;
  eventType: string;
  date: string;
  message: string;
}): string {
  return [
    "שלום אולגה, הגעתי דרך האתר.",
    `שם: ${data.name || "—"}`,
    `טלפון: ${data.phone || "—"}`,
    `סוג אירוע: ${data.eventType || "—"}`,
    `תאריך: ${data.date || "—"}`,
    `הודעה: ${data.message || "—"}`,
  ].join("\n");
}

export { formatPriceRange, calculateQuoteRange };
