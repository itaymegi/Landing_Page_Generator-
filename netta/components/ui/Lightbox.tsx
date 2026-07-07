"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { HydrationSafeButton } from "@/components/ui/HydrationSafeButton";

type LightboxProps = {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
};

export function Lightbox({ src, alt, open, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, handleKeyDown]);

  // `open` starts false so SSR and first client render both return null,
  // avoiding a hydration mismatch. The portal only mounts after a user action.
  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[220] flex items-center justify-center bg-charcoal/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <HydrationSafeButton
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </HydrationSafeButton>

      <div
        className="relative max-h-[85vh] w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/5] w-full sm:aspect-[4/3] lg:aspect-[16/10]">
          <Image
            src={src}
            alt={alt}
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
