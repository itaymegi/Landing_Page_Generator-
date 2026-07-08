"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { GalleryImage } from "@/config/site";
import { site } from "@/config/site";
import {
  filterGalleryByService,
  getAllPortfolioImages,
  getGalleryFilters,
  getPortfolioPreviewImages,
} from "@/config/services";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { MasonryImage } from "@/components/ui/MasonryImage";
import { PremiumSection } from "@/components/ui/PremiumSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollLock } from "@/components/ui/useScrollLock";

const allImages = getAllPortfolioImages();
const previewImages = getPortfolioPreviewImages();
const galleryFilters = getGalleryFilters();

function GalleryModal({
  open,
  onClose,
  images,
  onImageClick,
  lightboxOpen,
}: {
  open: boolean;
  onClose: () => void;
  images: GalleryImage[];
  onImageClick: (index: number) => void;
  lightboxOpen: boolean;
}) {
  useScrollLock(open);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && !lightboxOpen) onClose();
    },
    [onClose, lightboxOpen],
  );

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleKeyDown]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto bg-background"
          role="dialog"
          aria-modal="true"
          aria-label={site.gallery.title}
          data-lenis-prevent
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card/95 px-5 py-4 backdrop-blur-md sm:px-8">
            <h3 className="font-serif text-xl text-text sm:text-2xl">
              {site.gallery.title}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent-deep"
              aria-label="סגור גלריה"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="container-dflowers py-8 sm:py-12">
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
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImages, setActiveImages] = useState<GalleryImage[]>(previewImages);

  const filteredPreview = useMemo(
    () => filterGalleryByService(previewImages, activeFilter),
    [activeFilter],
  );

  const filteredAll = useMemo(
    () => filterGalleryByService(allImages, activeFilter),
    [activeFilter],
  );

  const openLightbox = (images: GalleryImage[], index: number) => {
    setActiveImages(images);
    setLightboxIndex(index);
  };

  const lightboxOpen = lightboxIndex !== null;

  return (
    <PremiumSection id="gallery" tone="white" editorialWord="GALLERY" floral="heading">
      <div className="container-dflowers">
        <SectionHeader
          title={gallery.title}
          subtitle={gallery.subtitle}
          variant="editorial-bg"
          editorialWord="PORTFOLIO"
        />

        <Reveal delay={80}>
          <div
            className="mt-8 flex flex-wrap gap-2 sm:mt-10"
            role="group"
            aria-label="סינון גלריה"
          >
            {galleryFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={activeFilter === filter.id}
                className={`min-h-10 rounded-full border px-4 text-sm font-medium transition-all sm:px-5 ${
                  activeFilter === filter.id
                    ? "border-accent-deep bg-accent-deep text-white shadow-[0_4px_16px_rgba(168,137,79,0.3)]"
                    : "border-accent/25 bg-background-white text-text-muted hover:border-accent/50 hover:text-accent-deep"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 sm:mt-14">
            {filteredPreview.length > 0 ? (
              <div className="masonry-grid">
                {filteredPreview.map((image, index) => (
                  <MasonryImage
                    key={`preview-${image.src}-${index}`}
                    image={image}
                    index={index}
                    onClick={(i) => openLightbox(filteredPreview, i)}
                    priority={index < 2}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-text-muted">אין תמונות בקטגוריה זו.</p>
            )}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex justify-center sm:mt-12">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-accent/60 px-8 text-base font-medium text-accent-deep transition-all hover:border-accent hover:bg-accent/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {gallery.viewAllLabel}
            </button>
          </div>
        </Reveal>
      </div>

      <GalleryModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        images={filteredAll}
        onImageClick={(index) => openLightbox(filteredAll, index)}
        lightboxOpen={lightboxOpen}
      />

      <Lightbox
        images={activeImages}
        initialIndex={lightboxIndex ?? 0}
        open={lightboxOpen}
        onClose={() => setLightboxIndex(null)}
      />
    </PremiumSection>
  );
}
