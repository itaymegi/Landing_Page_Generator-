export type MediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Temporary brand photo until final assets arrive — swap path only. */
  isPlaceholder: boolean;
};

export const media = {
  hero: {
    src: "/media/hero/hero-arch-candles.png",
    alt: "הצעת נישואין קולנועית תחת קשת אבן עם נרות ופרחים לבנים בשקיעה",
    width: 1080,
    height: 1350,
    isPlaceholder: true,
  },
  promise: {
    src: "/media/promise/promise-arch-kiss.png",
    alt: "זוג מתנשק תחת קשת אבן עתיקה עם שקיעה מעל הים",
    width: 1080,
    height: 1350,
    isPlaceholder: true,
  },
  finalCta: {
    src: "/media/cta/final-cta-fields.png",
    alt: "רגע אינטימי בשדה זהוב עם שולחן לבן ונרות",
    width: 1080,
    height: 1350,
    isPlaceholder: true,
  },
  og: {
    src: "/media/og.png",
    alt: "Marry Me — הצעת נישואין יוקרתית",
    width: 1080,
    height: 1350,
    isPlaceholder: true,
  },
} as const satisfies Record<string, MediaAsset>;
