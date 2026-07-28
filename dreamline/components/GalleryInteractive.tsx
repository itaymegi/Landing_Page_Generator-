"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CreationItem } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { HydrationSafeButton } from "@/components/ui/HydrationSafeButton";
import { PlaceholderArtwork } from "@/components/ui/PlaceholderArtwork";
import { IMAGE_QUALITY } from "@/lib/image";
import { useHorizontalSwipe } from "@/lib/useHorizontalSwipe";

type GalleryInteractiveProps = {
  items: CreationItem[];
};

const STAGE_ASPECT = "aspect-[5/6] w-full sm:aspect-[4/3] lg:aspect-[16/10]";

export function GalleryInteractive({ items }: GalleryInteractiveProps) {
  const images = items;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % images.length) + images.length) % images.length);
    },
    [images.length],
  );

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const onSwipe = useCallback(
    (direction: "prev" | "next") => {
      if (direction === "prev") {
        setCurrent((c) => (c - 1 + images.length) % images.length);
      } else {
        setCurrent((c) => (c + 1) % images.length);
      }
    },
    [images.length],
  );

  const stageRef = useHorizontalSwipe(onSwipe, images.length > 1 && !lightboxOpen);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.15,
    });
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
    const targetLeft = thumb.offsetLeft - container.clientWidth / 2 + thumb.offsetWidth / 2;
    container.scrollTo({ left: targetLeft, behavior: "auto" });
  }, [current]);

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

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    document.body.dataset.modalOpen = lightboxOpen ? "true" : "false";
    return () => {
      document.body.style.overflow = "";
      delete document.body.dataset.modalOpen;
    };
  }, [lightboxOpen]);

  if (images.length === 0) return null;

  const currentItem = images[current];
  const canLightbox = !currentItem.isPlaceholder && !!currentItem.image;

  return (
    <>
      <Reveal delay={100}>
        <div
          ref={sectionRef}
          className="mt-8 sm:mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={stageRef}
            className="carousel-stage relative overflow-hidden rounded-2xl bg-ink shadow-2xl shadow-ink/20"
          >
            <div className={`relative ${STAGE_ASPECT}`}>
              {images.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
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
                      style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                      sizes="(max-width: 1280px) 100vw, 1920px"
                      quality={IMAGE_QUALITY}
                      priority={index <= 1}
                      loading={index <= 2 ? "eager" : "lazy"}
                    />
                  )}
                </div>
              ))}

              <div
                className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Small zoom control — full-area button was blocking swipe */}
              {canLightbox ? (
                <HydrationSafeButton
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="carousel-control absolute start-3 top-3 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
                  aria-label={`הגדלת תמונה: ${currentItem.title}`}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16zM11 8v6M8 11h6" />
                  </svg>
                </HydrationSafeButton>
              ) : null}

              {images.length > 1 ? (
                <>
                  <HydrationSafeButton
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    className="carousel-control absolute end-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta active:scale-95 sm:h-12 sm:w-12"
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
                    className="carousel-control absolute start-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta active:scale-95 sm:h-12 sm:w-12"
                    aria-label="תמונה הבאה"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </HydrationSafeButton>
                </>
              ) : null}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-4 pb-4 sm:px-6 sm:pb-5">
                {images.length > 1 ? (
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
                          idx === current ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                        }`}
                        aria-label={`תמונה ${idx + 1}`}
                        aria-current={idx === current}
                      />
                    ))}
                  </div>
                ) : (
                  <span />
                )}
                <span className="rounded-full bg-ink/50 px-3 py-1 text-xs text-white/90 backdrop-blur-sm">
                  {current + 1} / {images.length}
                </span>
              </div>

              {images.length > 1 && !isPaused ? (
                <div className="absolute inset-x-0 bottom-0 z-30 h-0.5 overflow-hidden bg-white/10">
                  <div
                    key={current}
                    className="h-full origin-left animate-progress-fill bg-terracotta"
                    style={{ animationDuration: "5000ms" }}
                  />
                </div>
              ) : null}
            </div>
          </div>

          {images.length > 1 ? (
            <div
              ref={thumbnailsRef}
              className="rail-x mt-3 flex gap-2 pb-1 sm:mt-4 sm:gap-3"
              style={{ scrollbarWidth: "none" }}
              aria-label="תמונות ממוזערות"
            >
              {images.map((item, index) => (
                <HydrationSafeButton
                  key={item.id}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta sm:h-20 sm:w-28 ${
                    index === current
                      ? "scale-[1.04] opacity-100 ring-2 ring-terracotta ring-offset-2 ring-offset-ivory"
                      : "opacity-45 hover:scale-[1.02] hover:opacity-80"
                  }`}
                  aria-label={`עבור לתמונה ${index + 1}: ${item.title}`}
                  aria-current={index === current}
                >
                  {item.isPlaceholder || !item.image ? (
                    <PlaceholderArtwork category={item.category} label={item.title} />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      fill
                      className="object-cover"
                      sizes="112px"
                      quality={IMAGE_QUALITY}
                      loading="lazy"
                    />
                  )}
                </HydrationSafeButton>
              ))}
            </div>
          ) : null}

          {currentItem.title ? (
            <p className="mt-3 text-center text-xs font-light tracking-wide text-ink-soft sm:text-sm" aria-live="polite">
              {currentItem.title}
            </p>
          ) : null}
        </div>
      </Reveal>

      {canLightbox && currentItem.image ? (
        <Lightbox
          src={currentItem.image}
          alt={currentItem.imageAlt ?? currentItem.title}
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      ) : null}
    </>
  );
}
