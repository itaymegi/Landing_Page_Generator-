"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";
import type { GalleryItem } from "@/config/gallery";

const STAGE_ASPECT = "aspect-[5/6] w-full sm:aspect-[4/3] lg:aspect-[16/10]";

type GalleryInteractiveProps = {
  images: GalleryItem[];
};

export function GalleryInteractive({ images }: GalleryInteractiveProps) {
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

  useEffect(() => {
    if (images.length <= 1 || isPaused || !isVisible || lightboxOpen) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length, isPaused, isVisible, lightboxOpen]);

  useEffect(() => {
    const container = thumbnailsRef.current;
    if (!container) return;
    const thumb = container.children[current] as HTMLElement | undefined;
    if (!thumb) return;

    const targetLeft =
      thumb.offsetLeft - container.clientWidth / 2 + thumb.offsetWidth / 2;
    container.scrollTo({ left: targetLeft, behavior: "auto" });
  }, [current]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxOpen) return;
      // RTL: left advances forward
      if (e.key === "ArrowLeft") next();
      if (e.key === "ArrowRight") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, lightboxOpen]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 48) dx > 0 ? prev() : next();
    touchStartX.current = null;
  };

  if (images.length === 0) {
    return (
      <Reveal delay={100}>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-gold/30 bg-champagne/40 py-24 sm:mt-16">
          <p className="text-sm font-light tracking-wide text-ink-faint">
            תמונות הגלריה יתווספו בקרוב
          </p>
        </div>
      </Reveal>
    );
  }

  const currentImage = images[current];

  return (
    <>
      <Reveal delay={100}>
        <div
          ref={sectionRef}
          className="mt-12 sm:mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="relative overflow-hidden rounded-2xl bg-charcoal shadow-[0_24px_64px_rgba(42,38,34,0.16)]"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className={`relative ${STAGE_ASPECT}`}>
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === current ? "z-10 opacity-100" : "z-0 opacity-0"
                  }`}
                  aria-hidden={index !== current}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 1920px"
                    quality={90}
                    priority={index <= 1}
                    loading={index <= 2 ? "eager" : "lazy"}
                  />
                </div>
              ))}

              <div
                className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent"
                aria-hidden="true"
              />

              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="absolute inset-0 z-20 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                aria-label={`הגדל תמונה: ${currentImage.alt}`}
              />

              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    className="absolute end-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white/30 sm:h-12 sm:w-12"
                    aria-label="תמונה קודמת"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    className="absolute start-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white/30 sm:h-12 sm:w-12"
                    aria-label="תמונה הבאה"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                </>
              ) : null}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-4 pb-4 sm:px-6 sm:pb-5">
                {images.length > 1 ? (
                  <div className="pointer-events-auto flex items-center gap-1.5">
                    {images.map((_, idx) => (
                      <button
                        key={images[idx].id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          goTo(idx);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === current
                            ? "w-6 bg-white"
                            : "w-1.5 bg-white/40 hover:bg-white/70"
                        }`}
                        aria-label={`תמונה ${idx + 1}`}
                        aria-current={idx === current}
                      />
                    ))}
                  </div>
                ) : (
                  <span />
                )}

                <span className="rounded-full bg-charcoal/50 px-3 py-1 font-serif-en text-xs text-white/90 backdrop-blur-sm">
                  {current + 1} / {images.length}
                </span>
              </div>

              {images.length > 1 && !isPaused ? (
                <div className="absolute inset-x-0 bottom-0 z-30 h-0.5 overflow-hidden bg-white/10">
                  <div
                    key={current}
                    className="h-full origin-left animate-progress bg-gold"
                    style={{ animationDuration: "5000ms" }}
                  />
                </div>
              ) : null}
            </div>
          </div>

          {images.length > 1 ? (
            <div
              ref={thumbnailsRef}
              className="mt-3 flex gap-2 overflow-x-auto pb-1 sm:mt-4 sm:gap-3"
              style={{ scrollbarWidth: "none" }}
              aria-label="תמונות ממוזערות"
            >
              {images.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:h-20 sm:w-28 ${
                    index === current
                      ? "scale-[1.04] opacity-100 ring-2 ring-gold ring-offset-2 ring-offset-ivory"
                      : "opacity-45 hover:scale-[1.02] hover:opacity-80"
                  }`}
                  aria-label={`עבור לתמונה ${index + 1}: ${image.alt}`}
                  aria-current={index === current}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="112px"
                    quality={75}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          ) : null}

          {currentImage.alt ? (
            <p
              className="mt-3 text-center text-xs font-light tracking-wide text-ink-faint sm:text-sm"
              aria-live="polite"
            >
              {currentImage.alt}
            </p>
          ) : null}
        </div>
      </Reveal>

      {lightboxOpen ? (
        <Lightbox
          images={images.map((image) => ({
            src: image.src,
            alt: image.alt,
          }))}
          index={current}
          label="גלריית הצעות נישואין"
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrent}
        />
      ) : null}
    </>
  );
}
