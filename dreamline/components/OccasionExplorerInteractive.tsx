"use client";

import { useState } from "react";
import type { CreationItem, OccasionOption } from "@/config/site";
import { ArtworkFrame } from "@/components/ui/ArtworkFrame";
import { HydrationSafeButton } from "@/components/ui/HydrationSafeButton";

type OccasionExplorerInteractiveProps = {
  items: OccasionOption[];
  previews: Record<string, CreationItem>;
};

export function OccasionExplorerInteractive({ items, previews }: OccasionExplorerInteractiveProps) {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const active = items.find((item) => item.id === activeId) ?? items[0];
  const activeItem = previews[active.id];

  return (
    <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:gap-14">
      <div
        role="tablist"
        aria-label="בחירת רגע"
        className="-mx-5 flex gap-2.5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 lg:order-2"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((item) => {
          const isActive = item.id === active.id;
          return (
            <HydrationSafeButton
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(item.id)}
              className={`shrink-0 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                isActive
                  ? "border-terracotta bg-terracotta text-white shadow-md shadow-terracotta/20"
                  : "border-black/10 bg-white text-ink-soft hover:border-terracotta/40 hover:text-terracotta-deep"
              }`}
            >
              {item.label}
            </HydrationSafeButton>
          );
        })}
      </div>

      <div key={active.id} className="lg:order-1" style={{ animation: "fade-up 0.5s ease-out" }}>
        <div className="relative mx-auto w-full max-w-sm">
          <ArtworkFrame item={activeItem} rounded="rounded-[1.75rem]" className="shadow-lg shadow-ink/10" priority={false} />
        </div>
        <p className="mx-auto mt-5 max-w-sm text-center text-base leading-relaxed text-ink-soft lg:mx-0 lg:text-start">
          {active.description}
        </p>
      </div>
    </div>
  );
}
