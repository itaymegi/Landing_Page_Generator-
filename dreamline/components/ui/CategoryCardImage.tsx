"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { CreationItem } from "@/config/site";
import { HydrationSafeButton } from "@/components/ui/HydrationSafeButton";
import { PlaceholderArtwork } from "@/components/ui/PlaceholderArtwork";
import { IMAGE_QUALITY } from "@/lib/image";
import { useHorizontalSwipe } from "@/lib/useHorizontalSwipe";

type CategoryCardImageProps = {
  items: CreationItem[];
  sizes?: string;
  priority?: boolean;
};

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      {dir === "left" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      )}
    </svg>
  );
}

export function CategoryCardImage({
  items,
  sizes = "(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 960px",
  priority = false,
}: CategoryCardImageProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    items.forEach((item) => {
      if (!item.image || item.isPlaceholder) return;
      const preload = new window.Image();
      preload.src = item.image;
    });
  }, [items]);

  const goTo = useCallback(
    (index: number, e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrent(((index % items.length) + items.length) % items.length);
    },
    [items.length],
  );

  const prev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + items.length) % items.length);
  }, [items.length]);

  const next = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % items.length);
  }, [items.length]);

  const onSwipe = useCallback(
    (direction: "prev" | "next") => {
      if (direction === "prev") setCurrent((c) => (c - 1 + items.length) % items.length);
      else setCurrent((c) => (c + 1) % items.length);
    },
    [items.length],
  );

  const stageRef = useHorizontalSwipe(onSwipe, items.length > 1);

  if (items.length === 0) return null;

  if (items.length === 1) {
    const item = items[0];
    return (
      <div className="relative h-full w-full">
        {item.isPlaceholder || !item.image ? (
          <PlaceholderArtwork category={item.category} label={item.title} />
        ) : (
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.title}
            fill
            draggable={false}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes={sizes}
            quality={IMAGE_QUALITY}
            priority={priority}
          />
        )}
      </div>
    );
  }

  return (
    <div ref={stageRef} className="carousel-stage relative h-full w-full overflow-hidden">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === current ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
          aria-hidden={index !== current}
        >
          {item.isPlaceholder || !item.image ? (
            <PlaceholderArtwork category={item.category} label={item.title} />
          ) : (
            <Image
              src={item.image}
              alt={item.imageAlt ?? item.title}
              fill
              draggable={false}
              className="pointer-events-none select-none object-cover"
              sizes={sizes}
              quality={IMAGE_QUALITY}
              priority={priority && index === 0}
              loading="eager"
            />
          )}
        </div>
      ))}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-ink/40 to-transparent"
        aria-hidden="true"
      />

      <HydrationSafeButton
        type="button"
        onClick={prev}
        className="carousel-control absolute end-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta active:scale-95 sm:h-9 sm:w-9"
        aria-label="תמונה קודמת"
      >
        <ChevronIcon dir="right" />
      </HydrationSafeButton>

      <HydrationSafeButton
        type="button"
        onClick={next}
        className="carousel-control absolute start-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta active:scale-95 sm:h-9 sm:w-9"
        aria-label="תמונה הבאה"
      >
        <ChevronIcon dir="left" />
      </HydrationSafeButton>

      <div className="pointer-events-none absolute inset-x-0 bottom-3 z-30 flex justify-center gap-1.5">
        {items.map((_, idx) => (
          <HydrationSafeButton
            key={idx}
            type="button"
            onClick={(e) => goTo(idx, e)}
            className={`pointer-events-auto h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`תמונה ${idx + 1}`}
            aria-current={idx === current}
          />
        ))}
      </div>

      <div className="absolute end-2 top-2 z-30 rounded-full bg-ink/50 px-2 py-0.5 text-[10px] text-white/90 backdrop-blur-sm">
        {current + 1}/{items.length}
      </div>
    </div>
  );
}
