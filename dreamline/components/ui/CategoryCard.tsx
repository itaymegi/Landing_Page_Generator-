import type { CategoryDefinition, CreationItem } from "@/config/site";
import { ArtworkFrame } from "@/components/ui/ArtworkFrame";

type CategoryCardProps = {
  category: CategoryDefinition;
  item: CreationItem;
};

const accentBorder: Record<CategoryDefinition["accent"], string> = {
  blush: "group-hover:border-blush-deep",
  peach: "group-hover:border-peach-deep",
  butter: "group-hover:border-butter-deep",
  powderBlue: "group-hover:border-powder-blue-deep",
  lavender: "group-hover:border-[#9484CC]",
  sage: "group-hover:border-[#83996E]",
};

const accentDot: Record<CategoryDefinition["accent"], string> = {
  blush: "bg-blush-deep",
  peach: "bg-peach-deep",
  butter: "bg-butter-deep",
  powderBlue: "bg-powder-blue-deep",
  lavender: "bg-[#9484CC]",
  sage: "bg-[#83996E]",
};

export function CategoryCard({ category, item }: CategoryCardProps) {
  return (
    <a
      href={category.href}
      className={`group flex flex-col overflow-hidden rounded-[1.75rem] border border-black/5 bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 ${accentBorder[category.accent]}`}
    >
      <ArtworkFrame item={item} rounded="rounded-t-[1.75rem]" aspectRatioOverride="landscape" />
      <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${accentDot[category.accent]}`} aria-hidden="true" />
          {category.isPlaceholder ? (
            <span className="text-[11px] font-medium uppercase tracking-wide text-ink-soft/70">בקרוב</span>
          ) : null}
        </div>
        <h3 className="text-lg font-medium text-ink sm:text-xl">{category.title}</h3>
        <p className="text-sm leading-relaxed text-ink-soft">{category.description}</p>
      </div>
    </a>
  );
}
