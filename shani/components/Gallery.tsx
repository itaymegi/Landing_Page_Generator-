"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import type { GalleryImage } from "@/config/site";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";

function MasonryImage({
  image,
  index,
  onClick,
  priority = false,
}: {
  image: GalleryImage;
  index: number;
  onClick: (index: number) => void;
  priority?: boolean;
}) {
  const heights = ["h-48", "h-56", "h-64", "h-52", "h-60", "h-48", "h-56", "h-64"];
  const heightClass = heights[index % heights.length];

  return (
    <figure className={`masonry-item group relative cursor-pointer overflow-hidden rounded-xl bg-beige ${heightClass}`}>
      <button
        type="button"
        onClick={() => onClick(index)}
        className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
        aria-label={`הגדל תמונה: ${image.alt}`}
      />
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 50vw, 33vw"
        loading={priority ? "eager" : "lazy"}
        priority={priority}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-brown/0 transition-colors duration-500 group-hover:bg-brown/10"
        aria-hidden="true"
      />
    </figure>
  );
}

function GalleryModal({
  open,
  onClose,
  images,
  onImageClick,
}: {
  open: boolean;
  onClose: () => void;
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, handleKeyDown]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto bg-background"
          data-lenis-prevent
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-beige bg-background/95 px-5 py-4 backdrop-blur-md sm:px-8">
            <h3 className="font-serif text-xl text-brown sm:text-2xl">
              {site.gallery.title}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full bg-beige text-brown transition-colors hover:bg-accent/20"
              aria-label="סגור גלריה"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="container-shani py-8 sm:py-12">
            <div className="masonry-grid">
              {images.map((image, index) => (
                <MasonryImage
                  key={`full-${image.src}-${index}`}
                  image={image}
                  index={index}
                  onClick={onImageClick}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function Gallery() {
  const { gallery } = site;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImages, setActiveImages] = useState<GalleryImage[]>(
    gallery.previewImages,
  );

  const openLightbox = (images: GalleryImage[], index: number) => {
    setActiveImages(images);
    setLightboxIndex(index);
  };

  return (
    <section id="gallery" className="section-py bg-background">
      <div className="container-shani">
        <Reveal>
          <h2 className="font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl lg:text-5xl">
            {gallery.title}
          </h2>
          <span className="rule-accent mt-5" aria-hidden="true" />
          <p className="mt-4 max-w-xl text-base text-text/70 sm:text-lg">
            {gallery.subtitle}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 sm:mt-14">
            <div className="masonry-grid">
              {gallery.previewImages.map((image, index) => (
                <MasonryImage
                  key={`preview-${image.src}-${index}`}
                  image={image}
                  index={index}
                  onClick={(i) => openLightbox(gallery.previewImages, i)}
                  priority={index < 2}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex justify-center sm:mt-12">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-accent/60 bg-transparent px-8 text-base font-medium text-accent-deep transition-all hover:border-accent hover:bg-accent/8"
            >
              {gallery.viewAllLabel}
            </button>
          </div>
        </Reveal>
      </div>

      <GalleryModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        images={gallery.allImages}
        onImageClick={(index) => openLightbox(gallery.allImages, index)}
      />

      <Lightbox
        images={activeImages}
        initialIndex={lightboxIndex ?? 0}
        open={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
      />
    </section>
  );
}
