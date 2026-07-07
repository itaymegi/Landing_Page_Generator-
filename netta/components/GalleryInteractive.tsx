"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { galleryFocus, type GalleryImage } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { HydrationSafeButton } from "@/components/ui/HydrationSafeButton";

type GalleryInteractiveProps = {
  title: string;
  openLabel: string;
  closeLabel: string;
  previewImages: GalleryImage[];
  allImages: GalleryImage[];
};

/** Taller mobile frame + gentler desktop crop for portrait picnic shots. */
const STAGE_ASPECT = "aspect-[4/5] w-full sm:aspect-[4/3] lg:aspect-[16/10]";

function imageFocus(image: GalleryImage): string {
  return image.objectPosition ?? galleryFocus.subject;
}

export function GalleryInteractive({ allImages }: GalleryInteractiveProps) {
  const images = allImages;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % images.length) + images.length) % images.length);
    },
    [images.length],
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  /* Auto-play only while gallery is on screen */
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  /* Auto-play */
  useEffect(() => {
    if (images.length <= 1 || isPaused || !isVisible || lightboxOpen) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length, isPaused, isVisible, lightboxOpen]);

  /* Keep active thumbnail centered without scrolling the page */
  useEffect(() => {
    const container = thumbnailsRef.current;
    if (!container) return;
    const thumb = container.children[current] as HTMLElement | undefined;
    if (!thumb) return;

    const targetLeft =
      thumb.offsetLeft - container.clientWidth / 2 + thumb.offsetWidth / 2;
    container.scrollTo({ left: targetLeft, behavior: "auto" });
  }, [current]);

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxOpen) return;
      if (e.key === "ArrowLeft") next();
      if (e.key === "ArrowRight") prev();
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, lightboxOpen]);

  /* Lightbox body scroll lock */
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  /* Touch / swipe */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 48) {
      if (dx > 0) prev();
      else next();
    }
    touchStartX.current = null;
  };

  /* Empty state */
  if (images.length === 0) {
    return (
      <Reveal delay={100}>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-gold/30 bg-cream/20 py-24 sm:mt-16">
          <svg
            className="h-10 w-10 text-gold/30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.25}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 21h18"
            />
          </svg>
          <p className="text-sm font-light tracking-wide text-brown/40">
            תמונות הגלריה יתווספו בקרוב
          </p>
        </div>
      </Reveal>
    );
  }

  const current_image = images[current];

  return (
    <>
      <Reveal delay={100}>
        <div
          ref={sectionRef}
          className="mt-12 sm:mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* ── Main stage ── */}
          <div
            className="relative overflow-hidden rounded-2xl bg-charcoal shadow-2xl shadow-brown/20"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className={`relative ${STAGE_ASPECT}`}>
              {/* Slides */}
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                  aria-hidden={index !== current}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: imageFocus(image) }}
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    priority={index <= 1}
                    loading={index <= 2 ? "eager" : "lazy"}
                  />
                </div>
              ))}

              {/* Gradient vignette */}
              <div
                className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Click to open lightbox */}
              <HydrationSafeButton
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="absolute inset-0 z-20 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                aria-label={`הגדל תמונה: ${current_image.alt}`}
              />

              {/* Prev / Next arrows */}
              {images.length > 1 && (
                <>
                  <HydrationSafeButton
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    className="absolute end-3 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold active:scale-95 sm:h-12 sm:w-12"
                    aria-label="תמונה קודמת"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </HydrationSafeButton>
                  <HydrationSafeButton
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    className="absolute start-3 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold active:scale-95 sm:h-12 sm:w-12"
                    aria-label="תמונה הבאה"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </HydrationSafeButton>
                </>
              )}

              {/* Bottom bar: counter + dots */}
              <div className="pointer-events-none absolute bottom-0 inset-x-0 z-30 flex items-end justify-between px-4 pb-4 sm:px-6 sm:pb-5">
                {/* Dots */}
                {images.length > 1 && (
                  <div className="pointer-events-auto flex items-center gap-1.5">
                    {images.map((_, idx) => (
                      <HydrationSafeButton
                        key={idx}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          goTo(idx);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === current
                            ? "bg-white w-6"
                            : "bg-white/40 w-1.5 hover:bg-white/70"
                        }`}
                        aria-label={`תמונה ${idx + 1}`}
                        aria-current={idx === current}
                      />
                    ))}
                  </div>
                )}

                {/* Counter */}
                <span className="rounded-full bg-charcoal/50 px-3 py-1 text-xs text-white/90 backdrop-blur-sm">
                  {current + 1} / {images.length}
                </span>
              </div>

              {/* Auto-play progress bar */}
              {images.length > 1 && !isPaused && (
                <div className="absolute bottom-0 inset-x-0 z-30 h-0.5 overflow-hidden bg-white/10">
                  <div
                    key={current}
                    className="h-full bg-gold origin-left animate-progress"
                    style={{ animationDuration: "5000ms" }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* ── Thumbnails ── */}
          {images.length > 1 && (
            <div
              ref={thumbnailsRef}
              className="mt-3 flex gap-2 overflow-x-auto pb-1 sm:mt-4 sm:gap-3"
              style={{ scrollbarWidth: "none" }}
              aria-label="תמונות ממוזערות"
            >
              {images.map((image, index) => (
                <HydrationSafeButton
                  key={image.src}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:h-20 sm:w-28 ${
                    index === current
                      ? "ring-2 ring-gold ring-offset-2 ring-offset-parchment opacity-100 scale-[1.04]"
                      : "opacity-45 hover:opacity-80 hover:scale-[1.02]"
                  }`}
                  aria-label={`עבור לתמונה ${index + 1}: ${image.alt}`}
                  aria-current={index === current}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: imageFocus(image) }}
                    sizes="112px"
                    loading="lazy"
                  />
                </HydrationSafeButton>
              ))}
            </div>
          )}

          {/* ── Caption ── */}
          {current_image.alt && (
            <p
              className="mt-3 text-center text-xs font-light tracking-wide text-brown/50 sm:text-sm"
              aria-live="polite"
            >
              {current_image.alt}
            </p>
          )}
        </div>
      </Reveal>

      {/* Fullscreen lightbox */}
      <Lightbox
        src={current_image.src}
        alt={current_image.alt}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
