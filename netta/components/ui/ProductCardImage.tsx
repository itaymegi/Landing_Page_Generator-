"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ProductItem } from "@/config/site";
import { HydrationSafeButton } from "@/components/ui/HydrationSafeButton";

type ProductCardImageProps = {
  product: ProductItem;
  sizes?: string;
  priority?: boolean;
  /** If false, suppresses hover zoom (used in modal). */
  hover?: boolean;
};

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      {dir === "left" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      )}
    </svg>
  );
}

export function ProductCardImage({
  product,
  sizes = "(max-width: 1024px) 100vw, 45vw",
  priority = false,
  hover = true,
}: ProductCardImageProps) {
  /* Normalise to a flat array of {src, alt} */
  const images: { src: string; alt: string; objectPosition?: string }[] =
    useMemo(
      () =>
        product.images && product.images.length > 0
          ? product.images
          : [{ src: product.image, alt: product.imageAlt }],
      [product.images, product.image, product.imageAlt],
    );

  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;

    images.forEach((image) => {
      const preload = new window.Image();
      preload.src = image.src;
    });
  }, [images]);

  const goTo = useCallback(
    (index: number, e?: React.MouseEvent | React.PointerEvent) => {
      e?.preventDefault();
      e?.stopPropagation();
      setCurrent(((index % images.length) + images.length) % images.length);
    },
    [images.length],
  );

  const prev = useCallback(
    (e: React.MouseEvent) => goTo(current - 1, e),
    [current, goTo],
  );
  const next = useCallback(
    (e: React.MouseEvent) => goTo(current + 1, e),
    [current, goTo],
  );

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 44) {
      if (dx > 0) {
        setCurrent((c) => (c - 1 + images.length) % images.length);
      } else {
        setCurrent((c) => (c + 1) % images.length);
      }
    }
    touchStartX.current = null;
  };

  /* Single-image — simple, no carousel chrome */
  if (images.length === 1) {
    const hoverClass = hover
      ? "transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      : "";
    return (
      <Image
        src={images[0].src}
        alt={images[0].alt}
        fill
        className={`object-cover ${hoverClass}`}
        style={images[0].objectPosition ? { objectPosition: images[0].objectPosition } : undefined}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === current ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
          aria-hidden={index !== current}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
            sizes={sizes}
            priority={priority && index === 0}
            loading="eager"
          />
        </div>
      ))}

      {/* Gradient so controls are readable */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-charcoal/40 to-transparent"
        aria-hidden="true"
      />

      {/* Prev arrow (right side in RTL = previous) */}
      <HydrationSafeButton
        type="button"
        onClick={prev}
        className="absolute end-2 top-1/2 z-30 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-brown opacity-0 shadow-md backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 hover:bg-white hover:scale-110 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold active:scale-95"
        aria-label="תמונה קודמת"
      >
        <ChevronIcon dir="right" />
      </HydrationSafeButton>

      {/* Next arrow (left side in RTL = next) */}
      <HydrationSafeButton
        type="button"
        onClick={next}
        className="absolute start-2 top-1/2 z-30 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-brown opacity-0 shadow-md backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 hover:bg-white hover:scale-110 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold active:scale-95"
        aria-label="תמונה הבאה"
      >
        <ChevronIcon dir="left" />
      </HydrationSafeButton>

      {/* Dot indicators */}
      <div
        className="absolute bottom-3 inset-x-0 z-30 flex justify-center gap-1.5"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((_, idx) => (
          <HydrationSafeButton
            key={idx}
            type="button"
            onClick={(e) => goTo(idx, e)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current
                ? "w-5 bg-white"
                : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`תמונה ${idx + 1}`}
            aria-current={idx === current}
          />
        ))}
      </div>

      {/* Image count badge */}
      <div className="absolute end-2 top-2 z-30 rounded-full bg-charcoal/50 px-2 py-0.5 text-[10px] text-white/90 backdrop-blur-sm">
        {current + 1}/{images.length}
      </div>
    </div>
  );
}
