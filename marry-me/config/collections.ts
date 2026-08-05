export type Collection = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  isPlaceholder: boolean;
};

export const collections: Collection[] = [
  {
    id: "half-circle-path",
    name: "חצי מעגל + שביל",
    description: "שביל עלי כותרת שמוביל לרגע — מסגרת אבן, נרות ושקט מושלם.",
    image: "/media/hero/hero-arch-candles.png",
    imageAlt: "שביל לבן עם נרות וחצי מעגל פרחים תחת קשת אבן",
    isPlaceholder: true,
  },
  {
    id: "half-circle-heart",
    name: "חצי מעגל + לב לבן",
    description: "שילוב דרמטי של שביל, לב פרחוני ושלט זוהר — רגע שאי אפשר לשכוח.",
    image: "/media/collections/half-circle-heart.png",
    imageAlt: "הצעת נישואין עם לב לבן ושלט Will You Marry Me תחת קשת",
    isPlaceholder: true,
  },
  {
    id: "white-heart",
    name: "לב לבן",
    description: "לב פרחים צפוף, נרות ואור רך — אייקון של הצעה יוקרתית.",
    image: "/media/collections/white-heart-neon.png",
    imageAlt: "זוג בתוך לב פרחים לבן עם שלט זוהר בלילה",
    isPlaceholder: true,
  },
  {
    id: "half-circle-flowers",
    name: "חצי מעגל פרחים",
    description: "חצי מעגל לבן, נרות גבוהים ושקיעה — מינימליסטי ומלא רגש.",
    image: "/media/collections/half-circle-flowers.png",
    imageAlt: "החלפת טבעת בתוך חצי מעגל פרחים לבנים תחת קשת",
    isPlaceholder: true,
  },
  {
    id: "red-collection",
    name: "הקולקציה האדומה",
    description: "ורדים אדומים עמוקים, שטיח קטיפה ואור נרות — תשוקה אלגנטית.",
    image: "/media/collections/red-collection.png",
    imageAlt: "זוג מחבק מול לב ורדים אדומים עם נרות",
    isPlaceholder: true,
  },
];

export function collectionHref(id: string): string {
  return `/collections/${id}`;
}

export function getCollectionById(id: string) {
  return collections.find((collection) => collection.id === id);
}

export function collectionWhatsAppMessage(name: string): string {
  return `היי Marry Me, אשמח לשמוע פרטים על הקולקציה: ${name}`;
}
