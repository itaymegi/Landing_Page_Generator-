import type { GalleryImage } from "@/config/site";

export type ServiceCategory = {
  slug: string;
  title: string;
  subtitleEn: string;
  description: string;
  coverImage: string;
  coverImageAlt: string;
  imageFolder: string;
  imageCount: number;
  whatsappMessage: string;
  metaDescription: string;
};

function folderImages(
  folder: string,
  count: number,
  altPrefix: string,
  serviceSlug: string,
): GalleryImage[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/${folder}/${String(i + 1).padStart(2, "0")}.png`,
    alt: `${altPrefix} — תמונה ${i + 1}`,
    serviceSlug,
  }));
}

export const services: ServiceCategory[] = [
  {
    slug: "bridal",
    title: "עיצוב חתונה — זר כלה",
    subtitleEn: "Bridal Collection",
    description:
      "זרי כלה, סידורים ועיצוב פרחים ליום המיוחד — קלאסי, רומנטי או נועז, בהתאמה מלאה לחזון שלכם.",
    coverImage: "/images/bridal-bouquet/01.png",
    coverImageAlt: "זר כלה מעוצב",
    imageFolder: "bridal-bouquet",
    imageCount: 10,
    whatsappMessage: "היי, הגעתי דרך האתר.\nאשמח לשמוע על עיצוב חתונה וזר כלה.",
    metaDescription:
      "זרי כלה ועיצוב פרחים לחתונה — קולקציה יוקרתית מותאמת אישית. D Flowers by Daniel Sade.",
  },
  {
    slug: "events",
    title: "עיצוב אירועים",
    subtitleEn: "Event Design",
    description:
      "עיצוב מלא לאירועים — מרכזי שולחן, backdrops, פרחים וסטיילינג שיוצרים חוויה שלמה.",
    coverImage: "/images/design-events/01.png",
    coverImageAlt: "עיצוב אירועים יוקרתי",
    imageFolder: "design-events",
    imageCount: 9,
    whatsappMessage: "היי, הגעתי דרך האתר.\nאשמח לשמוע על עיצוב אירועים.",
    metaDescription:
      "עיצוב אירועים מלא — פרחים, סטיילינג והפקה יוקרתית. D Flowers by Daniel Sade.",
  },
  {
    slug: "luxury-events",
    title: "עיצוב אירועי יוקרה",
    subtitleEn: "Luxury Event Styling",
    description:
      "עיצוב הוליסטי לחללים, שולחנות ואירועים — שילוב פרחים, טקסטיל ואווירה editorial ברמה הגבוהה ביותר.",
    coverImage: "/images/design-events-v2/01.png",
    coverImageAlt: "סטיילינג יוקרתי לאירוע",
    imageFolder: "design-events-v2",
    imageCount: 10,
    whatsappMessage:
      "היי, הגעתי דרך האתר.\nאשמח לשמוע על עיצוב אירועי יוקרה.",
    metaDescription:
      "סטיילינג יוקרתי לאירועים — עיצוב editorial מלא. D Flowers by Daniel Sade.",
  },
  {
    slug: "restaurants",
    title: "עיצוב מסעדות",
    subtitleEn: "Restaurant Styling",
    description:
      "פרחים וסטיילינג למסעדות, ברים וחללי אירוח — אווירה מדויקת שמחזקת את המותג.",
    coverImage: "/images/restaurant-design/01.png",
    coverImageAlt: "עיצוב פרחים למסעדה",
    imageFolder: "restaurant-design",
    imageCount: 10,
    whatsappMessage:
      "היי, הגעתי דרך האתר.\nאשמח לשמוע על עיצוב פרחים למסעדה.",
    metaDescription:
      "עיצוב פרחים וסטיילינג למסעדות — אווירה יוקרתית שמחזקת את המותג. D Flowers by Daniel Sade.",
  },
  {
    slug: "workshops",
    title: "סדנאות פרחים",
    subtitleEn: "Flower Workshops",
    description:
      "team building יוקרתי — סדנת שזירה בארגון, עם חוויה מלאה ותוצרים מרהיבים.",
    coverImage: "/images/office-flower-workshop/01.png",
    coverImageAlt: "סדנת פרחים במשרד",
    imageFolder: "office-flower-workshop",
    imageCount: 10,
    whatsappMessage:
      "היי, הגעתי דרך האתר.\nאשמח לשמוע על סדנת פרחים לעסקים.",
    metaDescription:
      "סדנאות פרחים לעסקים — חוויית team building יוקרתית. D Flowers by Daniel Sade.",
  },
  {
    slug: "corporate",
    title: "אירועים עסקיים",
    subtitleEn: "Corporate Events",
    description:
      "עיצוב פרחים והפקות לאירועי חברה — השקות, כנסים, ערבי עובדים וחוויות מותג יוקרתיות.",
    coverImage: "/images/office-holidays/01.png",
    coverImageAlt: "עיצוב אירועים עסקיים",
    imageFolder: "office-holidays",
    imageCount: 8,
    whatsappMessage:
      "היי, הגעתי דרך האתר.\nאשמח לשמוע על עיצוב אירועים עסקיים.",
    metaDescription:
      "עיצוב והפקת אירועים עסקיים — פרחים, סטיילינג וחוויה מקצועית. D Flowers by Daniel Sade.",
  },
  {
    slug: "bachelorette",
    title: "מסיבת רווקות",
    subtitleEn: "Bachelorette Experience",
    description:
      "סדנת פרחים, עיצוב חווייתי וחגיגה יוקרתית לכלה ולחברות — ביקב, בטבע או בסטודיו.",
    coverImage: "/images/bachelorette-party/01.png",
    coverImageAlt: "מסיבת רווקות עם סדנת פרחים",
    imageFolder: "bachelorette-party",
    imageCount: 10,
    whatsappMessage:
      "היי, הגעתי דרך האתר.\nאשמח לשמוע על מסיבת רווקות / סדנת פרחים.",
    metaDescription:
      "מסיבת רווקות יוקרתית עם סדנת פרחים — חוויה מעוצבת לכלה ולחברות. D Flowers by Daniel Sade.",
  },
  {
    slug: "mikveh",
    title: "מקווה",
    subtitleEn: "Mikveh Design",
    description:
      "סידורי פרחים, שולחנות ואווירה מכבדת ומעוצבת לערב המיוחד — עם רגישות, טעם ותשומת לב לכל פרט.",
    coverImage: "/images/mikvah/01.png",
    coverImageAlt: "עיצוב פרחים למקווה",
    imageFolder: "mikvah",
    imageCount: 10,
    whatsappMessage: "היי, הגעתי דרך האתר.\nאשמח לשמוע על עיצוב למקווה.",
    metaDescription:
      "עיצוב פרחים יוקרתי למקווה — סידורים, שולחנות ואווירה מכבדת. D Flowers by Daniel Sade.",
  },
];

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getServiceImages(service: ServiceCategory): GalleryImage[] {
  return folderImages(
    service.imageFolder,
    service.imageCount,
    service.title,
    service.slug,
  );
}

export function getAllPortfolioImages(): GalleryImage[] {
  return services.flatMap(getServiceImages);
}

export function getPortfolioPreviewImages(): GalleryImage[] {
  return services.flatMap((service) => getServiceImages(service).slice(0, 2));
}

export type GalleryFilter = {
  id: string;
  label: string;
};

export function getGalleryFilters(): GalleryFilter[] {
  return [
    { id: "all", label: "הכל" },
    ...services.map((s) => ({ id: s.slug, label: s.title })),
  ];
}

export function filterGalleryByService(
  images: GalleryImage[],
  slug: string,
): GalleryImage[] {
  if (slug === "all") return images;
  return images.filter((img) => img.serviceSlug === slug);
}

export function getServiceHref(slug: string): string {
  return `/services/${slug}`;
}
