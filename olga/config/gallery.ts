import type { GalleryImage } from "@/config/site";

export type GalleryCategory =
  | "all"
  | "chuppah"
  | "tables"
  | "mikvah"
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
  { id: "mikvah", label: "מקוואות" },
  { id: "events", label: "אירועים" },
  { id: "workshops", label: "סדנאות" },
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
    alt: "עיצוב פרחים למקווה",
    category: "mikvah",
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
    alt: "אווירה עדינה לערב מקווה",
    category: "mikvah",
  },
  {
    src: "/images/office-flower-workshop/01.png",
    alt: "סדנת פרחים",
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
    alt: "סדנת שזירה",
    category: "workshops",
  },
  {
    src: "/images/mikvah/05.png",
    alt: "פרחים עדינים למקווה",
    category: "mikvah",
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
    "#gallery-mikvah": "mikvah",
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
    title: "עיצוב חתונות",
    description: "עיצוב פרחוני מלא לחתונה — מהזר ועד האווירה הכוללת, בהתאמה אישית.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    imageAlt: "עיצוב חתונות",
    galleryCategory: "events",
  },
  {
    slug: "chuppah",
    title: "עיצוב חופות",
    description: "חופות פרחוניות, קלאסיות ופרימיום — כל אחת נבנית לפי הסיפור שלכם.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    imageAlt: "עיצוב חופות",
    galleryCategory: "chuppah",
  },
  {
    slug: "tables",
    title: "עיצוב שולחנות",
    description: "סידורי שולחן עדינים או דרמטיים — מבקבוקונים ועד סידורים גבוהים.",
    image: "/images/restaurant-design/01.png",
    imageAlt: "עיצוב שולחנות",
    galleryCategory: "tables",
  },
  {
    slug: "mikvah",
    title: "עיצוב למקווה",
    description: "אווירה מכבדת, עדינה ומלאת פרחים לערב המקווה.",
    image: "/images/mikvah/01.png",
    imageAlt: "עיצוב למקווה",
    galleryCategory: "mikvah",
  },
  {
    slug: "private-events",
    title: "עיצוב אירועים פרטיים",
    description: "ימי הולדת, בר/בת מצווה, ערבי חברה — עם נגיעה פרחונית אישית.",
    image: "/images/bachelorette-party/01.png",
    imageAlt: "עיצוב אירועים פרטיים",
    galleryCategory: "events",
  },
  {
    slug: "workshops",
    title: "סדנאות פרחים",
    description: "חוויה יצירתית ואינטימית — לימוד, השראה ופרחים טריים.",
    image: "/images/office-flower-workshop/01.png",
    imageAlt: "סדנאות פרחים",
    galleryCategory: "workshops",
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
