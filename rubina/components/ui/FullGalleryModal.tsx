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
  onImageClick: (image: GalleryImage) => void;
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
      className="fixed inset-0 z-[200] overflow-y-auto overscroll-contain bg-parchment pb-[calc(5rem+env(safe-area-inset-bottom))] sm:pb-0"
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
        className="fixed end-4 top-[calc(0.75rem+env(safe-area-inset-top))] z-[210] flex min-h-12 min-w-12 touch-manipulation cursor-pointer items-center justify-center gap-2 rounded-full border border-cream bg-white px-4 text-sm font-medium text-brown shadow-md transition-colors hover:border-gold/50 hover:text-gold-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold active:scale-[0.98]"
        aria-label={closeLabel}
      >
        <svg
          className="h-5 w-5 shrink-0"
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
        <span className="hidden sm:inline">{closeLabel}</span>
      </button>

      <header className="border-b border-cream/80 bg-parchment/95 px-4 pb-4 pt-[calc(4.5rem+env(safe-area-inset-top))] backdrop-blur-sm sm:px-6">
        <h3 className="pe-14 font-serif text-xl font-light tracking-wide text-brown sm:text-2xl">
          {title}
        </h3>
      </header>

      <div className="container-rubina py-6 sm:py-10">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
          {galleryImages.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className="group relative aspect-square cursor-pointer overflow-hidden bg-beige"
            >
              <button
                type="button"
                onClick={() => onImageClick(image)}
                className="absolute inset-0 z-10 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                aria-label={`הגדל תמונה: ${image.alt}`}
              />
              <Image
                src={image.src}
                alt={image.alt}
                fill
                unoptimized
                className="pointer-events-none object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10"
                aria-hidden="true"
              />
            </figure>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
