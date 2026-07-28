"use client";

import type { CategoryDefinition, CreationItem } from "@/config/site";
import { CategoryCardImage } from "@/components/ui/CategoryCardImage";
import { HydrationSafeButton } from "@/components/ui/HydrationSafeButton";
import { setPlannerService } from "@/lib/plannerHandoff";

type CategoryCardProps = {
  category: CategoryDefinition;
  items: CreationItem[];
  priority?: boolean;
  compact?: boolean;
  showPlannerCta?: boolean;
};

const accentBorder: Record<CategoryDefinition["accent"], string> = {
  blush: "group-hover:border-blush-deep",
  peach: "group-hover:border-peach-deep",
  butter: "group-hover:border-butter-deep",
  powderBlue: "group-hover:border-powder-blue-deep",
  lavender: "group-hover:border-[#9484CC]",
};

const accentDot: Record<CategoryDefinition["accent"], string> = {
  blush: "bg-blush-deep",
  peach: "bg-peach-deep",
  butter: "bg-butter-deep",
  powderBlue: "bg-powder-blue-deep",
  lavender: "bg-[#9484CC]",
};

function openPlanner(category: CategoryDefinition) {
  setPlannerService(category.serviceKey);
  window.dispatchEvent(
    new CustomEvent("dreamline:planner-service", { detail: { service: category.serviceKey } }),
  );
  const el = document.getElementById("planner");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  else window.location.hash = "planner";
}

export function CategoryCard({
  category,
  items,
  priority = false,
  compact = false,
  showPlannerCta = false,
}: CategoryCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-lg shadow-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/8 ${accentBorder[category.accent]}`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          compact ? "aspect-[3/4] max-h-[min(50vh,22rem)]" : "aspect-[4/5]"
        }`}
      >
        <CategoryCardImage items={items} priority={priority} />
      </div>

      <div className={compact ? "px-3.5 pb-3.5 pt-3" : "px-6 pb-7 pt-6 sm:px-7 sm:pb-8"}>
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${accentDot[category.accent]}`} aria-hidden="true" />
          {category.isPlaceholder ? (
            <span className="text-[11px] font-medium uppercase tracking-wide text-ink-soft/70">בקרוב</span>
          ) : null}
        </div>
        <h3 className={`mt-1.5 font-medium text-ink ${compact ? "text-base" : "mt-3 text-xl sm:text-2xl"}`}>
          <a
            href={category.href}
            className="transition-colors hover:text-terracotta-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          >
            {category.title}
          </a>
        </h3>
        <p
          className={`mt-1.5 leading-relaxed text-ink-soft ${
            compact ? "line-clamp-2 text-xs" : "mt-3 max-w-md text-sm sm:text-base"
          }`}
        >
          {category.description}
        </p>

        {showPlannerCta ? (
          <HydrationSafeButton
            type="button"
            onClick={() => openPlanner(category)}
            className={`mt-4 inline-flex w-full items-center justify-center rounded-full bg-terracotta-deep font-medium text-white transition-colors hover:bg-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
              compact ? "min-h-11 px-4 text-sm" : "min-h-12 px-5 text-base"
            }`}
          >
            {category.ctaLabel}
          </HydrationSafeButton>
        ) : null}
      </div>
    </article>
  );
}
