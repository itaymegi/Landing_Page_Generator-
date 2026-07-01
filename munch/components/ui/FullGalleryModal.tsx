"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { GalleryImage } from "@/config/site";
import { filterGalleryImages } from "@/config/site";

type FullGalleryModalProps = {
  open: boolean;
  title: string;
  closeLabel: string;
  images: GalleryImage[];
  onClose: () => void;
  onImageClick: (index: number) => void;
};

export function FullGalleryModal({
  open,
  title,
  closeLabel,
  images,
  onClose,
  onImageClick,
}: FullGalleryModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!open || !mounted) return null;

  const galleryImages = filterGalleryImages(images);

  return createPortal(
    <div
      className="fixed inset-0 z-[200] overflow-y-auto overscroll-contain bg-parchment"
      role="dialog"
      aria-modal="true"
      aria-label={title}
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
        className="fixed end-4 top-[calc(0.75rem+env(safe-area-inset-top))] z-[210] flex min-h-12 min-w-12 touch-manipulation cursor-pointer items-center justify-center gap-2 rounded-full border border-border bg-white px-4 text-sm font-medium text-brown shadow-md transition-colors hover:border-gold/50 hover:text-gold-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold active:scale-[0.98]"
        aria-label={closeLabel}
      >
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <span className="hidden sm:inline">{closeLabel}</span>
      </button>

      <header className="border-b border-border/80 bg-parchment/95 px-5 pb-4 pt-[calc(1.5rem+env(safe-area-inset-top))] backdrop-blur-sm sm:px-8">
        <h3 className="pe-14 font-serif text-xl font-light tracking-wide text-brown sm:text-2xl">
          {title}
        </h3>
      </header>

      <div className="container-munch py-6 sm:py-10">
        <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4 [&>figure]:mb-3 sm:[&>figure]:mb-4">
          {galleryImages.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className="group relative block break-inside-avoid overflow-hidden rounded-xl bg-beige"
            >
              <button
                type="button"
                onClick={() => onImageClick(index)}
                className="block w-full touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                aria-label={`הגדל תמונה: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <span
                  className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10"
                  aria-hidden="true"
                />
              </button>
            </figure>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
