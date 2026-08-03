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

export type Testimonial = {
  quote: string;
  name: string;
  venue?: string;
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
    paragraphs: string[];
    accent: string;
    image: string;
    imageAlt: string;
    objectPosition?: string;
  };
  services: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: { quote: string; name: string; venue?: string }[];
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
    name: "אולגה אהרונוב קוריאנסקי",
    logoText: "Olga Events Design",
    tagline: "עיצובים פורחים",
    taglineEn: "Blooming designs",
    description:
      "סטודיו בוטיק לעיצוב אירועים פרטיים ועסקיים — איכות חסרת פשרות, יצירתיות ויחס אישי לכל אירוע.",
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
    { label: "הסיפור שלנו", href: "/#about" },
    { label: "שירותים", href: "/#services" },
    { label: "גלריה", href: "/#gallery" },
    { label: "פידבקים", href: "/#testimonials" },
    { label: "צור קשר", href: "/#contact" },
  ],
  hero: {
    headline: "עיצוב אירועי בוטיק פרטיים ועסקיים",
    taglineEn: "Boutique private & corporate event design",
    subtitle: "אנחנו כאן כדי להגשים את אירוע החלומות שלכם",
    primaryCta: "לקבלת הצעת מחיר ראשונית",
    secondaryCta: "צפייה בעבודות",
    image:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1920&q=85",
    imageAlt: "עיצוב אירועים בפרחים — עיצובים פורחים",
    chips: ["אירועים פרטיים", "אירועי חברה", "עמדות שזירה"],
  },
  about: {
    title: "הסיפור שלנו",
    headline: "עיצובים פורחים — סטודיו בוטיק לעיצוב אירועים",
    body: "עיצובים פורחים הינו סטודיו בוטיק לעיצוב אירועים המציע איכות חסרת פשרות, יצירתיות ויחס אישי לכל אירוע.",
    paragraphs: [
      "עיצובים פורחים הינו סטודיו בוטיק לעיצוב אירועים המציע איכות חסרת פשרות, יצירתיות ויחס אישי לכל אירוע. אנחנו שמים דגש על כל פרט ופרט, ומתבלטים ברגישות צבעונית מיוחדת שבאה לידי ביטוי בהתאמת צבעים הרמונית במיוחד. התשוקה שלנו היא לאירועים עשירים בפרחים, תוך שילובים בלתי שגרתיים של סגנונות עיצוב שונים.",
      "הלב הפועם של הסטודיו היא אולגה אהרונוב קוריאנסקי, מעצבת גרפית ומאיירת, וגם שוזרת מקצועית. אחרי למעלה מעשור בתחום איור ספרים אולגה הלכה אחרי חלום הילדות והפכה את אהבתה לפרחים למקצוע ולעיסוק יומיומי.",
    ],
    accent: "איכות חסרת פשרות · יצירתיות · יחס אישי",
    image: "/images/about-olga.jpg",
    imageAlt: "אולגה אהרונוב קוריאנסקי — עיצובים פורחים",
    objectPosition: "58% 32%",
  },
  services: {
    title: "השירותים שלנו",
    subtitle:
      'כל אירוע שחלמתם עליו — "עיצובים פורחים" כאן כדי להגשים אותו. מעיצוב הזמנות, תפריטים ושלט הכניסה, דרך עזרה בבחירת מפיות ומפות, וכמובן סידורי הפרחים המרהיבים, פינת הצילום ועמדת השזירה — כל נושא הנראות של האירוע הוא בידיים המנוסות והיצירתיות שלנו.',
  },
  process: {
    title: "איך זה עובד?",
    subtitle:
      "מידת המעורבות שלכם בתהליך העיצוב נתונה לבחירתכם — שותפים מלאים, או ספרו לנו את הוויז׳ן ואנחנו נדאג להכל",
    steps: [
      {
        number: "01",
        title: "שיחת היכרות והבנת הסגנון",
        description:
          "מקשיבים לחזון שלכם, לצבעים, לאווירה ולסיפור שתרצו לספר באורחים.",
      },
      {
        number: "02",
        title: "בחירת כיוון עיצובי וצבעים",
        description:
          "בונים יחד קונספט מדויק — עם רגישות צבעונית והתאמה הרמונית לכל פרט.",
      },
      {
        number: "03",
        title: "בניית הצעה אישית",
        description:
          "הצעת מחיר מותאמת לאירוע שלכם — לא חבילה גנרית, אלא עיצוב שלם.",
      },
      {
        number: "04",
        title: "הקמה ועיצוב ביום האירוע",
        description:
          "נוכחות מלאה, הקמה מוקפדת, וכל הנראות בידיים מקצועיות עד הרגע האחרון.",
      },
    ],
  },
  gallery: {
    title: "גלריה",
    subtitle: "מבט לעבודות — חתונות, אירועים פרטיים, אירועי חברה ועמדות שזירה",
    viewAllLabel: "צפייה בכל העבודות",
  },
  quoteCalculator: {
    title: "קבלו הערכת מחיר ראשונית לאירוע שלכם",
    subtitle:
      "החישוב הוא הערכה כללית בלבד ונועד לתת כיוון תקציבי ראשוני. הצעת מחיר סופית תיבנה לאחר שיחה אישית והתאמה מלאה לאופי האירוע.",
    eventTypes: [
      { value: "wedding", label: "חתונה" },
      { value: "private", label: "אירוע פרטי" },
      { value: "corporate", label: "אירוע חברה" },
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
  testimonials: {
    title: "פידבקים",
    subtitle: "מה הלקוחות מספרים אחרי האירוע",
    items: [
      {
        quote:
          "חיפשנו מישהי שתקלע לאופי שלנו, אולגה ישר הבינה ופשוט הרימה את הרעיון והקונספט לשמיים. באיזשהו שלב נתנו לה יד חופשית ואמרנו לה שאנחנו זורמים. היה פשוט וואו!",
        name: "עדי ותימור",
      },
      {
        quote:
          "מהשיחה הראשונה עם אולגה הבנתי שנהיה בידיים טובות. אולגה הייתה קשובה וסבלנית, ונתנה מענה לכל שאלה או תהייה שהייתה לי. היה לה חשוב להבהיר לי מה אפשרי וגם מה לא אפשרי. אולגה הבינה את הכיוון העיצובי שהיה לי ומצאה חלופות לפרחים עצמם, והסידורים קלעו לחלוטין לאווירה שרצינו שתהיה. קיבלנו שפע מחמאות על הפרחים והסידורים. אולגה הייתה כנה, זמינה, קשובה ונעימה — האולם נראה מדהים!",
        name: "שירה ובוריס",
      },
      {
        quote:
          "אולגה פשוט הגשימה לי חלום. רציתי אווירת יער קסומה וקיבלתי fairy tale מהאגדות. בחנתי הרבה מעצבות אבל לא נתקלתי בעוד מישהי ברמה של אולגה — רמת ההשקעה והירידה שלה לפרטים מהמטורפות שראיתי. עם אולגה השמיים הם הגבול. הטיפ שלי: פשוט תסמכו עליה.",
        name: "מיכל וגיא",
        venue: "תל יצחק קיטצ'ן אנד גרדן",
      },
      {
        quote:
          "אולגה עיצבה לנו את החתונה של הבת שלי בצורה יפהפייה — העיצוב היה באיכות מעולה, עשיר מאוד, אלגנטי, מלא בפרחים יפים, הכל נעשה בצורה מקצועית מאוד! היה שווה כל שקל. אהבתי במיוחד: מקצועיות, יחס אישי, טעם משובח. היה יותר יפה מכל מה שציפיתי.",
        name: "בלה לאה ומיכאל",
        venue: "בדולינה",
      },
    ],
  },
  contactForm: {
    title: "צור קשר",
    subtitle:
      "מוכנים להתחיל לתכנן את אירוע החלומות שלכם? צרו קשר עוד היום ונתחיל בתהליך",
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
        question: "האם אפשר להיות שותפים מלאים בתהליך העיצוב?",
        answer:
          "כן. מידת המעורבות שלכם נתונה לבחירתכם — אפשר להיות שותפים מלאים בבחירות של הצבעים, הכלים, הפרחים והפונטים, ואפשר גם לספר לנו את הוויז׳ן ואנחנו כבר נדאג להכל.",
      },
      {
        question: "מה כולל העיצוב מעבר לפרחים?",
        answer:
          "מעיצוב הזמנות, תפריטים ושלט הכניסה, דרך עזרה בבחירת מפיות ומפות, ועד סידורי הפרחים, פינת הצילום ועמדת השזירה — כל נושא הנראות של האירוע יכול להיות בידיים שלנו.",
      },
      {
        question: "האם המחשבון מציג מחיר סופי?",
        answer:
          "לא. מדובר בהערכה ראשונית בלבד. הצעת מחיר סופית נבנית אחרי שיחה אישית והתאמה לאופי האירוע.",
      },
      {
        question: "האם אפשר לשלוח השראה ורפרנסים?",
        answer:
          "בהחלט. אפשר לשלוח תמונות, צבעים ורפרנסים — ואנחנו נעזור לדייק מה אפשרי לפי עונה, זמינות וקונספט.",
      },
    ],
  },
  meta: {
    title: "אולגה אהרונוב קוריאנסקי | עיצובים פורחים",
    description:
      "עיצובים פורחים — סטודיו בוטיק לעיצוב אירועי בוטיק פרטיים ועסקיים. חתונות, אירועים פרטיים, אירועי חברה ועמדות שזירה.",
    siteUrl: "https://olgaeventsdesign.co.il",
    ogImage:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&q=85",
  },
  legal: {
    businessName: "עיצובים פורחים — Olga Events Design",
    businessOwner: "אולגה אהרונוב קוריאנסקי",
    email: "olga@codewithcontent.com",
    phone: "050-491-8732",
    websiteUrl: "https://olgaeventsdesign.co.il",
    lastUpdated: "2026-08-03",
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
