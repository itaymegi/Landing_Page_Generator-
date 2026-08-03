import type { GalleryImage } from "@/config/site";

export type GalleryCategory =
  | "all"
  | "chuppah"
  | "tables"
  | "events"
  | "workshops";

export type GalleryFilter = {
  id: GalleryCategory;
  label: string;
};

export const DEFAULT_GALLERY_FILTER: GalleryCategory = "all";

export const galleryFilters: GalleryFilter[] = [
  { id: "all", label: "הכל" },
  { id: "chuppah", label: "חופות" },
  { id: "tables", label: "שולחנות" },
  { id: "events", label: "אירועים" },
  { id: "workshops", label: "עמדות שזירה" },
];

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80",
    alt: "חופה פרחונית באירוע חתונה",
    category: "chuppah",
    objectPosition: "center",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80",
    alt: "עיצוב שולחנות חתונה בפרחים",
    category: "tables",
  },
  {
    src: "/images/mikvah/01.png",
    alt: "עיצוב פרחים לאירוע",
    category: "events",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=900&q=80",
    alt: "זר כלה צבעוני",
    category: "events",
  },
  {
    src: "/images/design-events-v2/01.png",
    alt: "עיצוב אירוע פרטי בפרחים",
    category: "events",
  },
  {
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=900&q=80",
    alt: "חופה אלגנטית בשקיעה",
    category: "chuppah",
  },
  {
    src: "/images/restaurant-design/01.png",
    alt: "סידור פרחים לשולחן אירוח",
    category: "tables",
  },
  {
    src: "/images/mikvah/03.png",
    alt: "אווירה עדינה לאירוע",
    category: "events",
  },
  {
    src: "/images/office-flower-workshop/01.png",
    alt: "עמדת שזירה",
    category: "workshops",
  },
  {
    src: "/images/bridal-bouquet/01.png",
    alt: "זר כלה אמנותי",
    category: "events",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80",
    alt: "חופה מלאה בפרחים",
    category: "chuppah",
  },
  {
    src: "/images/restaurant-design/04.png",
    alt: "עיצוב שולחנות יוקרתי",
    category: "tables",
  },
  {
    src: "/images/bachelorette-party/01.png",
    alt: "עיצוב לאירוע פרטי",
    category: "events",
  },
  {
    src: "/images/office-flower-workshop/03.png",
    alt: "עמדת שזירה צבעונית",
    category: "workshops",
  },
  {
    src: "/images/mikvah/05.png",
    alt: "פרחים עדינים לאירוע",
    category: "events",
  },
  {
    src: "/images/design-events-v2/05.png",
    alt: "הפקת אירוע בפרחים",
    category: "events",
  },
];

export function getAllGalleryImages(): GalleryImage[] {
  return galleryImages;
}

export function getGalleryPreviewImages(): GalleryImage[] {
  return galleryImages.slice(0, 8);
}

export function filterGalleryByCategory(
  images: GalleryImage[],
  category: GalleryCategory,
): GalleryImage[] {
  if (category === "all") return images;
  return images.filter((img) => img.category === category);
}

export function categoryFromHash(hash: string): GalleryCategory | null {
  const map: Record<string, GalleryCategory> = {
    "#gallery-chuppah": "chuppah",
    "#gallery-tables": "tables",
    "#gallery-events": "events",
    "#gallery-workshops": "workshops",
  };
  return map[hash] ?? null;
}

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  galleryCategory: GalleryCategory;
};

export const serviceItems: ServiceItem[] = [
  {
    slug: "weddings",
    title: "חתונות",
    description:
      "ממש לא רק בלבן — צבעוני ופרוע, אלגנטי ומינימליסטי, או רומנטי ופסטלי. אתם תחלמו, ואנחנו נגשים את זה.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    imageAlt: "עיצוב חתונות",
    galleryCategory: "events",
  },
  {
    slug: "private-events",
    title: "אירועים פרטיים",
    description:
      "בר ובת מצוות, ימי הולדת וחגיגות משפחתיות — עיצוב שנותן ביטוי לאופי שלכם, עם מרכזי שולחן, פינת צילום ועמדת שזירה.",
    image: "/images/bachelorette-party/01.png",
    imageAlt: "עיצוב אירועים פרטיים",
    galleryCategory: "events",
  },
  {
    slug: "corporate",
    title: "אירועי חברה",
    description:
      "השקות מוצר, ימי כיף, חגים וסיכומים שנתיים — עיצוב ומיתוג שמותאמים לאופי האירוע ול־וייב של החברה.",
    image: "/images/design-events-v2/01.png",
    imageAlt: "עיצוב אירועי חברה",
    galleryCategory: "events",
  },
  {
    slug: "weaving-stations",
    title: "עמדות שזירה",
    description:
      "אטרקציה ססגונית בקבלת פנים — קשתות, מסרקיות, בוטונייר, טבעות וצמידים מפרחים, מותאמים לקונספט ולצבעי האירוע.",
    image: "/images/office-flower-workshop/01.png",
    imageAlt: "עמדות שזירה מעוצבות",
    galleryCategory: "workshops",
  },
  {
    slug: "chuppah",
    title: "עיצוב חופות",
    description:
      "חופות פרחוניות ומדויקות לקונספט — מהקלאסית ועד הדרמטית, עם ירידה לפרטים הקטנים ביותר.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    imageAlt: "עיצוב חופות",
    galleryCategory: "chuppah",
  },
  {
    slug: "tables",
    title: "עיצוב שולחנות ונראות",
    description:
      "סידורי פרחים, מפות ומפיות, שלטי כניסה, תפריטים והזמנות — כל הנראות של האירוע בידיים אחת.",
    image: "/images/restaurant-design/01.png",
    imageAlt: "עיצוב שולחנות ונראות האירוע",
    galleryCategory: "tables",
  },
];

export function getGalleryHash(category: GalleryCategory): string {
  if (category === "all") return "#gallery";
  return `#gallery-${category}`;
}

export function getServiceHref(slug: string): string {
  return `/services/${slug}`;
}

export function getAllServiceSlugs(): string[] {
  return serviceItems.map((s) => s.slug);
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return serviceItems.find((s) => s.slug === slug);
}
