export type GalleryImage = {
  src: string;
  alt: string;
  serviceSlug: string;
  objectPosition?: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type EventType = {
  value: string;
  label: string;
};

export type ProcessStep = {
  number: string;
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
  };
  trustStrip: {
    items: string[];
  };
  about: {
    title: string;
    titleEn?: string;
    pillarsTitle: string;
    headline: string;
    intro: string;
    paragraphs: string[];
    pillars: { title: string; description: string }[];
    image: string;
    imageAlt: string;
  };
  services: {
    title: string;
    subtitle: string;
    viewPortfolioLabel: string;
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
  stats: {
    items: { value: number; suffix?: string; label: string }[];
  };
  testimonials: {
    title: string;
    items: TestimonialItem[];
  };
  eventPlanner: {
    title: string;
    subtitle: string;
    eventTypes: EventType[];
    guestCountLabel: string;
    dateLabel: string;
    notesLabel: string;
    submitLabel: string;
    successMessage: string;
    whatsappCtaLabel: string;
  };
  contactCta: {
    headline: string;
    text: string;
    buttonLabel: string;
    backgroundImage: string;
    backgroundAlt: string;
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
    name: "Daniel Sade",
    logoText: "D Flowers",
    tagline: "עיצוב אירועים · סדנאות · הפקות",
    taglineEn: "Time to design",
    description:
      "עיצוב אירועים, אירועים פרטיים ועסקיים, סדנאות שזירת פרחים והפקות יוקרתיות.",
  },
  contact: {
    whatsappNumber: "972509502215",
    whatsappDefaultMessage:
      "היי Daniel, הגעתי דרך האתר.\nאשמח לשמוע עוד על עיצוב האירוע.",
    instagram: "https://www.instagram.com/danieldesign_event",
    email: "Daniel0509502215@gmail.com",
    phones: ["050-950-2215"],
  },
  nav: [
    { label: "הסיפור שלנו", href: "/#about" },
    { label: "שירותים", href: "/#services" },
    { label: "גלריה", href: "/#gallery" },
    { label: "המלצות", href: "/#testimonials" },
    { label: "צור קשר", href: "/#contact" },
  ],
  hero: {
    headline: "יוצרים אירועים בלתי נשכחים בעיצוב פרחים נצחי",
    taglineEn: "Timeless floral design for unforgettable events",
    subtitle:
      "עיצוב, הפקה וסדנאות פרחים לחתונות, אירועים עסקיים וחגיגות פרטיות — עם ליווי אישי ותשומת לב לכל פרט.",
    primaryCta: "התחילו לתכנן",
    secondaryCta: "צפייה בעבודות",
    image: "/images/hero.png",
    imageAlt: "עיצוב פרחים יוקרתי של Daniel Sade — D Flowers",
  },
  trustStrip: {
    items: [
      "עיצוב אירועים · סדנאות · הפקות",
      "Workshops · Design · Production",
      "ליווי אישי מקצה לקצה",
    ],
  },
  about: {
    title: "הסיפור שלנו",
    pillarsTitle: "התכונות העיקריות שלנו",
    headline: "כל אירוע מספר סיפור — אנחנו מעצבים אותו בפרחים",
    intro:
      "Daniel Sade מובילה את D Flowers — סטודיו לעיצוב אירועים, הפקות וסדנאות פרחים.",
    paragraphs: [
      "מחתונה אינטימית ועד הפקה ארגונית — עיצוב editorial, פרחים טריים וליווי אישי, כדי שכל אורח ירגיש שהוא כבר בתוך האירוע.",
    ],
    pillars: [
      {
        title: "ניסיון",
        description: "שנים של הפקות, חתונות ואירועים עסקיים ברמה הגבוהה ביותר.",
      },
      {
        title: "תשומת לב לפרטים",
        description: "כל פרח, כל שולחן, כל פינה — מעוצבים בקפידה ובטעם.",
      },
      {
        title: "ליווי אישי",
        description: "מהרגע הראשון ועד יום האירוע — איתכם לאורך כל הדרך.",
      },
      {
        title: "שירות יוקרתי",
        description: "חוויה שקטה, אלגנטית ומקצועית — בלי פשרות על איכות.",
      },
    ],
    image: "/images/about.png",
    imageAlt: "Daniel Sade — מעצבת אירועים ופרחים",
  },
  services: {
    title: "השירותים שלנו",
    subtitle: "מגוון פתרונות עיצוב והפקה — לכל סוג של חגיגה",
    viewPortfolioLabel: "לצפייה בעבודות",
  },
  process: {
    title: "התהליך שלנו",
    subtitle: "חמישה שלבים — מרעיון ראשוני ועד יום האירוע",
    steps: [
      {
        number: "01",
        title: "היכרות",
        description: "פגישת ייעוץ והבנת החזון שלכם.",
      },
      {
        number: "02",
        title: "קונספט",
        description: "כיוון עיצובי, צבעים ולוח השראה.",
      },
      {
        number: "03",
        title: "עיצוב",
        description: "תכנון פרחים, סידורים וחללים.",
      },
      {
        number: "04",
        title: "הפקה",
        description: "רכש, הכנה ולוגיסטיקה מדויקת.",
      },
      {
        number: "05",
        title: "יום האירוע",
        description: "הקמה, עיצוב סופי ונוכחות מלאה.",
      },
    ],
  },
  gallery: {
    title: "גלריה",
    subtitle: "מבט לעבודות לפי קטגוריה — בחרו שירות וגלו את תיק העבודות",
    viewAllLabel: "צפייה בכל העבודות",
  },
  stats: {
    items: [
      { value: 350, suffix: "+", label: "אירועים שעוצבו" },
      { value: 280, suffix: "+", label: "לקוחות מרוצים" },
      { value: 8, suffix: "+", label: "שנות ניסיון" },
      { value: 120, suffix: "+", label: "התקנות יוקרה" },
    ],
  },
  testimonials: {
    title: "מה הלקוחות אומרים",
    items: [
      {
        quote:
          "Daniel יצרה לנו חתונה מהחלומות. כל פרט — מהזר ועד השולחנות — היה מושלם. הרגשנו שאנחנו בידיים של מקצוענית אמיתית.",
        name: "נועה ואור",
        role: "חתונה",
      },
      {
        quote:
          "הפקנו אירוע חברה עם סדנת פרחים — הצוות היה מרותק. השילוב של יוקרה, יצירתיות ושירות אישי היה יוצא דופן.",
        name: "מנהלת HR, חברת הייטק",
        role: "אירוע עסקי",
      },
      {
        quote:
          "עיצוב המקווה היה עדין, מכבד ומדהים. Daniel הבינה בדיוק את האווירה שרצינו ליצור.",
        name: "שירה",
        role: "ערב מקווה",
      },
      {
        quote:
          "העיצוב במסעדה שלנו שינה לחלוטין את האווירה. הלקוחות מצטלמים עם הפרחים בכל ערב.",
        name: "בעלים, מסעדת fine dining",
        role: "עיצוב מסעדה",
      },
    ],
  },
  eventPlanner: {
    title: "בואו נתכנן את האירוע שלכם",
    subtitle: "מלאו כמה פרטים ונחזור אליכם עם הצעה מותאמת",
    eventTypes: [
      { value: "bridal", label: "חתונה" },
      { value: "luxury-events", label: "אירועי יוקרה" },
      { value: "events", label: "עיצוב אירועים" },
      { value: "restaurants", label: "עיצוב מסעדות" },
      { value: "corporate", label: "אירוע עסקי" },
      { value: "bachelorette", label: "אירוע פרטי" },
      { value: "workshops", label: "סדנת פרחים" },
      { value: "mikveh", label: "מקווה" },
      { value: "other", label: "אחר" },
    ],
    guestCountLabel: "כמות אורחים",
    dateLabel: "תאריך האירוע",
    notesLabel: "ספרו לנו עוד",
    submitLabel: "קבלת הצעה אישית",
    successMessage:
      "מעולה! אפשר לשלוח את הפרטים בוואטסאפ ונחזור אליכם בהקדם.",
    whatsappCtaLabel: "הזמנה בWhatsApp",
  },
  contactCta: {
    headline: "בואו ניצור משהו בלתי נשכח",
    text: "נשמח לשמוע על האירוע שלכם — שלחו הודעה ונתאם פגישת ייעוץ.",
    buttonLabel: "הזמנה בWhatsApp",
    backgroundImage: "/images/contact-bg.png",
    backgroundAlt: "סדנת פרחים ביקב — D Flowers",
  },
  faq: {
    title: "שאלות נפוצות",
    items: [
      {
        question: "כמה זמן מראש מומלץ לפנות?",
        answer:
          "לחתונות ואירועים גדולים — 3–6 חודשים מראש. לאירועים עסקיים וסדנאות — 2–4 שבועות. נשמח לבדוק זמינות גם בהתראה קצרה.",
      },
      {
        question: "האם אתם מגיעים לכל הארץ?",
        answer:
          "כן, אנחנו מלווים אירועים ברחבי הארץ. לאזורים מרוחקים נתאם לוגיסטיקה מראש.",
      },
      {
        question: "מה כולל שירות עיצוב האירוע?",
        answer:
          "ליווי מקצה לקצה — קונסепט, עיצוב פרחים, הפקה, הקמה ונוכחות ביום האירוע. כל חבילה מותאמת אישית.",
      },
      {
        question: "האם ניתן לקבל הצעת מחיר לפני ההזמנה?",
        answer:
          "כן. לאחר פגישת היכרות קצרה נכין הצעת מחיר מפורטת ומותאמת — ללא התחייבות.",
      },
      {
        question: "האם יש אפשרות לפגישת ייעוץ ראשונית?",
        answer:
          "כן, נשמח לפגישת ייעוץ ראשונית — בטלפון, בוואטסאפ או פגישה אישית — כדי להבין את החזון שלכם.",
      },
    ],
  },
  meta: {
    title: "Daniel Sade | D Flowers — עיצוב אירועים ופרחים",
    description:
      "עיצוב אירועים, הפקות וסדנאות פרחים יוקרתיות. חתונות, אירועים עסקיים, מקווה ועיצוב מסעדות — Daniel Sade, D Flowers.",
    siteUrl: "https://dflowers.co.il",
    ogImage: "/images/og-image.png",
  },
  legal: {
    businessName: "Daniel Sade — D Flowers",
    businessOwner: "Daniel Sade",
    email: "Daniel0509502215@gmail.com",
    phone: "050-950-2215",
    websiteUrl: "https://dflowers.co.il",
    lastUpdated: "2026-07-08",
    deliveryAreas: "כל הארץ",
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

export function buildEventPlannerMessage(data: {
  eventType: string;
  guestCount: string;
  date: string;
  notes: string;
}): string {
  const eventLabel =
    site.eventPlanner.eventTypes.find((t) => t.value === data.eventType)
      ?.label ?? data.eventType;

  return [
    "היי, הגעתי דרך האתר של D Flowers.",
    "אשמח לקבל הצעת מחיר.",
    `סוג אירוע: ${eventLabel}`,
    `כמות אורחים: ${data.guestCount || "—"}`,
    `תאריך: ${data.date || "—"}`,
    `הערות: ${data.notes || "—"}`,
  ].join("\n");
}
