export type ProductItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  price?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
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
    email: string;
    phones: string[];
  };
  colors: SiteColors;
  hero: {
    headline: string;
    subtitle: string;
    ctaLabel: string;
    image: string;
    imageAlt: string;
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
    ctaLabel: string;
    items: ProductItem[];
  };
  gallery: {
    title: string;
    images: GalleryImage[];
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
    accessibilityNote: string;
  };
  footer: {
    copyright: string;
  };
  meta: {
    title: string;
    description: string;
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
    email: "hello@rubina.example.com",
    phones: ["052-783-6631"],
  },
  colors: {
    cream: "#F7F1E6",
    beige: "#EBE0CD",
    gold: "#B8965A",
    goldDeep: "#A07E3F",
    charcoal: "#2B2421",
    white: "#FFFFFF",
  },
  hero: {
    headline: "המארז המושלם לאירוח, זוגות, חגים ורגעים מיוחדים.",
    subtitle:
      "מארזי גבינות, יין ופינוקים שנבחרו בקפידה לרגעים ששווה לזכור.",
    ctaLabel: "הזמנה בוואטסאפ",
    image: "/images/product-rubina.png",
    imageAlt: "מארז גבינות ויין מעוצב של רובינה",
  },
  ourStory: {
    title: "איך Rubina נולדה",
    headline: "זוג שאוהב לפנק — גם בבית וגם בעסק",
    intro:
      "מדובר בשני בני זוג, לוחמי מילואים, שהקימו את Rubina בזמן המלחמה — מתוך רצון ליצור משהו משלנו, מלא אהבה ומשמעות.",
    paragraphs: [
      "עלינו בקצרה — אנחנו זוג צעיר מלא תשוקה שאוהבים לפנק ולגעת באנשים, ומביאים את אותה מחוייבות ואהבה גם לעסק שלנו.",
      "כל מארז נבנה בקפידה, עם דגש על איכות וטריות, כדי להבטיח שתהנו מרגעים טובים ומיוחדים.",
    ],
    image: "/images/couple.png",
    imageAlt: "הזוג שמאחורי Rubina — מכינים מארזים בעבודת יד",
  },
  products: {
    title: "המארזים שלנו",
    ctaLabel: "לפרטים בוואטסאפ",
    items: [
      {
        id: "rubina",
        title: "מארז רובינה",
        description:
          "המארז החתימה שלנו — גבינות נבחרות, יין, פינוקים ועיצוב שמרגיש מיוחד מהרגע הראשון.",
        image: "/images/product-rubina.png",
        imageAlt: "מארז רובינה — מארז גבינות ויין מעוצב",
      },
      {
        id: "gold",
        title: "מארז Gold",
        description:
          "חוויה פרימיום עם מבחר עשיר יותר, עיצוב מפואר ותחושת יוקרה שמחגגת כל רגע.",
        image: "/images/product-classic.png",
        imageAlt: "מארז Gold — מארז פרימיום",
      },
      {
        id: "classic",
        title: "מארז קלאסי",
        description:
          "מארז קלאסי ואלגנטי עם גבינות מובחרות, יין וליווי מושלם — מתנה שתמיד עובדת.",
        image: "/images/product-custom.png",
        imageAlt: "מארז קלאסי — מארז גבינות ויין",
      },
      {
        id: "custom",
        title: "מארז מותאם אישית",
        description:
          "רוצים משהו שמתאים בדיוק לכם? נבנה יחד מארז לפי טעם, אירוע ותקציב — עם הלב והידיים שלנו.",
        image: "/images/product-gold.png",
        imageAlt: "מארז מותאם אישית — מארז בהתאמה אישית",
      },
    ],
  },
  gallery: {
    title: "קצת מהקסם שלנו",
    images: [
      { src: "/images/gallery-5.png", alt: "מארזי Rubina מוכנים לשליחה" },
      { src: "/images/gallery-6.png", alt: "מארזי גבינות ויין בעבודת יד" },
      { src: "/images/product-rubina.png", alt: "מארז גבינות ויין של רובינה" },
      { src: "/images/product-classic.png", alt: "מארז פרימיום על רקע טבעי" },
      { src: "/images/product-gold.png", alt: "מארז מעוצב עם יין וגבינות" },
      { src: "/images/couple.png", alt: "הזוג שמאחורי Rubina" },
    ],
  },
  contactSection: {
    heading: "רוצים להזמין?",
    subtitle: "שלחו לנו הודעה ונעזור לכם לבחור את המארז שמתאים בדיוק לרגע שלכם.",
    whatsappLabel: "הזמנה בוואטסאפ",
    instagramLabel: "Instagram",
    phoneLabel: "טלפון",
    deliveryAreas: "משלוחים למרכז הארץ",
    deliveryInfo: "משלוח עד הבית — נשמח לתאם בוואטסאפ",
    pickupInfo: "איסוף עצמי ממושב עזריה",
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
  },
};

/** Convenience: WhatsApp link using site defaults. */
export function siteWhatsAppHref(message?: string): string {
  return whatsappHref(
    site.contact.whatsappNumber,
    message ?? site.contact.whatsappDefaultMessage,
  );
}
