"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type LightboxProps = {
  images: { src: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const [mounted, setMounted] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const open = index !== null;
  const total = images.length;

  const goNext = useCallback(() => {
    if (index === null || total === 0) return;
    onNavigate((index + 1) % total);
  }, [index, total, onNavigate]);

  const goPrev = useCallback(() => {
    if (index === null || total === 0) return;
    onNavigate((index - 1 + total) % total);
  }, [index, total, onNavigate]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // RTL: ArrowRight = previous, ArrowLeft = next
      if (e.key === "ArrowRight") goPrev();
      if (e.key === "ArrowLeft") goNext();
    },
    [onClose, goNext, goPrev],
  );

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, handleKeyDown]);

  if (!open || !mounted || index === null) return null;

  const current = images[index];

  return createPortal(
    <div
      className="fixed inset-0 z-[220] flex items-center justify-center bg-charcoal/92 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        onPointerDown={(e) => {
          if (e.pointerType === "touch") {
            e.preventDefault();
            onClose();
          }
        }}
        className="absolute end-4 top-[calc(0.75rem+env(safe-area-inset-top))] z-10 flex min-h-12 min-w-12 touch-manipulation cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold active:scale-[0.98]"
        aria-label="סגור"
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {total > 1 ? (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute end-4 top-1/2 z-10 flex min-h-12 min-w-12 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="הקודם"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute start-4 top-1/2 z-10 flex min-h-12 min-w-12 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="הבא"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5l-7.5-7.5 7.5-7.5" />
            </svg>
          </button>
        </>
      ) : null}

      <div
        className="relative max-h-[85vh] w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => setTouchStartX(e.touches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          if (touchStartX === null) return;
          const delta = (e.changedTouches[0]?.clientX ?? touchStartX) - touchStartX;
          if (Math.abs(delta) > 50) {
            // RTL swipe: swipe left -> next, swipe right -> prev
            if (delta < 0) goNext();
            else goPrev();
          }
          setTouchStartX(null);
        }}
      >
        <div className="relative aspect-[3/4] w-full sm:aspect-[4/5]">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            unoptimized
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
