import type { CreationCategoryId } from "@/config/site";

export type PlaceholderAccent = "blush" | "peach" | "butter" | "powderBlue" | "lavender" | "sage";
export type PlaceholderGlyph = "heart" | "frame" | "giftBox" | "chocolate" | "wine" | "sparkle";

type CategoryPlaceholderMeta = {
  accent: PlaceholderAccent;
  glyph: PlaceholderGlyph;
  fallbackLabel: string;
};

/** Default look for each category's placeholder slots — used until real photography arrives. */
export const categoryPlaceholderMeta: Record<CreationCategoryId, CategoryPlaceholderMeta> = {
  illustration: { accent: "blush", glyph: "heart", fallbackLabel: "איור אישי" },
  keepsake: { accent: "peach", glyph: "frame", fallbackLabel: "מוצר מאויר" },
  giftBox: { accent: "peach", glyph: "giftBox", fallbackLabel: "התמונה בדרך" },
  sweets: { accent: "butter", glyph: "chocolate", fallbackLabel: "התמונה בדרך" },
  wine: { accent: "lavender", glyph: "wine", fallbackLabel: "התמונה בדרך" },
  occasion: { accent: "powderBlue", glyph: "sparkle", fallbackLabel: "התמונה בדרך" },
};

const accentGradient: Record<PlaceholderAccent, string> = {
  blush: "from-blush via-blush/70 to-ivory",
  peach: "from-peach via-peach/70 to-ivory",
  butter: "from-butter via-butter/70 to-ivory",
  powderBlue: "from-powder-blue via-powder-blue/70 to-ivory",
  lavender: "from-lavender via-lavender/70 to-ivory",
  sage: "from-sage via-sage/70 to-ivory",
};

const accentGlyphColor: Record<PlaceholderAccent, string> = {
  blush: "text-blush-deep",
  peach: "text-peach-deep",
  butter: "text-butter-deep",
  powderBlue: "text-powder-blue-deep",
  lavender: "text-[#9484CC]",
  sage: "text-[#83996E]",
};

function Glyph({ glyph, className }: { glyph: PlaceholderGlyph; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (glyph) {
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20s-7.5-4.6-9.9-9C.6 7.7 2.1 4 6 4c2.1 0 3.6 1.4 4 3 .4-1.6 1.9-3 4-3 3.9 0 5.4 3.7 3.9 7-2.4 4.4-9.9 9-9.9 9z" />
        </svg>
      );
    case "frame":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="1.5" />
          <rect x="8" y="8" width="8" height="8" rx="0.5" />
        </svg>
      );
    case "giftBox":
      return (
        <svg {...common}>
          <rect x="3.5" y="9.5" width="17" height="10.5" rx="1" />
          <path d="M3.5 9.5V7.8a1.8 1.8 0 011.8-1.8h13.4a1.8 1.8 0 011.8 1.8v1.7" />
          <path d="M12 6v14" />
          <path d="M12 6c-1.2-2.6-5-1.8-3.6 1 .8 1.4 3.6 1.4 3.6-1z" />
          <path d="M12 6c1.2-2.6 5-1.8 3.6 1-.8 1.4-3.6 1.4-3.6-1z" />
        </svg>
      );
    case "chocolate":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
          <path d="M3.5 12h17M12 3.5v17M7.75 3.5v17M16.25 3.5v17" />
        </svg>
      );
    case "wine":
      return (
        <svg {...common}>
          <path d="M8 3.5h8l-1.1 8a2.9 2.9 0 01-5.8 0L8 3.5z" />
          <path d="M12 11.5v7" />
          <path d="M8.5 20.5h7" />
        </svg>
      );
    case "sparkle":
    default:
      return (
        <svg {...common}>
          <path d="M12 3.5l1.4 4.9 4.9 1.4-4.9 1.4-1.4 4.9-1.4-4.9-4.9-1.4 4.9-1.4L12 3.5z" />
          <path d="M19 15.5l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3z" />
        </svg>
      );
  }
}

type PlaceholderArtworkProps = {
  category: CreationCategoryId;
  label?: string;
  className?: string;
};

/**
 * Elegant, on-brand stand-in for a slot that doesn't have real photography yet.
 * Never a grey box — always a soft pastel gradient + restrained line-art glyph
 * + a small "on the way" label, styled as an intentional editorial moment.
 */
export function PlaceholderArtwork({ category, label, className = "" }: PlaceholderArtworkProps) {
  const meta = categoryPlaceholderMeta[category];

  return (
    <div
      className={`placeholder-weave relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${accentGradient[meta.accent]} ${className}`}
    >
      <Glyph glyph={meta.glyph} className={`h-[34%] w-[34%] opacity-80 ${accentGlyphColor[meta.accent]}`} />
      <span
        className={`absolute bottom-4 start-4 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium tracking-wide text-ink-soft backdrop-blur-sm`}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden="true" />
        {label ?? meta.fallbackLabel}
      </span>
    </div>
  );
}
