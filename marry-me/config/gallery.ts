export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: "couples" | "rings" | "sunsets" | "flowers" | "candles" | "details";
  aspect: "portrait" | "tall" | "square" | "landscape";
  isPlaceholder: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "/media/gallery/arch-candles.png",
    alt: "זוג תחת קשת אבן עם נרות ועלי כותרת",
    category: "couples",
    aspect: "tall",
    isPlaceholder: true,
  },
  {
    id: "g2",
    src: "/media/gallery/arch-kiss.png",
    alt: "נשיקה בשקיעה תחת קשת עתיקה",
    category: "sunsets",
    aspect: "portrait",
    isPlaceholder: true,
  },
  {
    id: "g3",
    src: "/media/gallery/white-heart-night.png",
    alt: "לב פרחים לבן מואר בלילה",
    category: "flowers",
    aspect: "square",
    isPlaceholder: true,
  },
  {
    id: "g4",
    src: "/media/gallery/white-heart-neon.png",
    alt: "שלט Will You Marry Me בלב פרחים",
    category: "details",
    aspect: "portrait",
    isPlaceholder: true,
  },
  {
    id: "g5",
    src: "/media/gallery/half-circle-heart.png",
    alt: "הצעה על הברך מול לב לבן וים",
    category: "couples",
    aspect: "landscape",
    isPlaceholder: true,
  },
  {
    id: "g6",
    src: "/media/gallery/white-heart-day.png",
    alt: "לב לבן באור יום על רציף עץ",
    category: "flowers",
    aspect: "tall",
    isPlaceholder: true,
  },
  {
    id: "g7",
    src: "/media/gallery/half-circle-flowers.png",
    alt: "רגע החלפת הטבעת בשקיעה",
    category: "rings",
    aspect: "portrait",
    isPlaceholder: true,
  },
  {
    id: "g8",
    src: "/media/gallery/red-collection.png",
    alt: "קולקציית ורדים אדומים",
    category: "flowers",
    aspect: "square",
    isPlaceholder: true,
  },
  {
    id: "g9",
    src: "/media/gallery/ring-closeup.png",
    alt: "תקריב טבעת אירוסין עם נרות ופרחים",
    category: "rings",
    aspect: "landscape",
    isPlaceholder: true,
  },
  {
    id: "g10",
    src: "/media/gallery/golden-fields.png",
    alt: "הצעה בשדה זהוב עם שולחן ונרות",
    category: "candles",
    aspect: "tall",
    isPlaceholder: true,
  },
];
