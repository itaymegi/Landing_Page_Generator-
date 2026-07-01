"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { filterGalleryImages, type GalleryImage } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { FullGalleryModal } from "@/components/ui/FullGalleryModal";
import { Lightbox } from "@/components/ui/Lightbox";

type GalleryInteractiveProps = {
  title: string;
  openLabel: string;
  closeLabel: string;
  previewImages: GalleryImage[];
  allImages: GalleryImage[];
};

export function GalleryInteractive({
  title,
  openLabel,
  closeLabel,
  previewImages,
  allImages,
}: GalleryInteractiveProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [fullGalleryOpen, setFullGalleryOpen] = useState(false);
  const openingRef = useRef(false);
  const galleryPreview = filterGalleryImages(previewImages);
  const galleryAll = filterGalleryImages(allImages);

  const openFullGallery = useCallback(() => {
    if (openingRef.current) return;
    openingRef.current = true;
    setFullGalleryOpen(true);
    window.setTimeout(() => {
      openingRef.current = false;
    }, 400);
  }, []);

  const handleCloseFullGallery = () => {
    setFullGalleryOpen(false);
    setLightboxIndex(null);
  };

  useEffect(() => {
    const modalActive = fullGalleryOpen || lightboxIndex !== null;
    if (modalActive) {
      document.body.dataset.modalOpen = "true";
      document.body.style.overflow = "hidden";
    } else {
      delete document.body.dataset.modalOpen;
      document.body.style.overflow = "";
    }

    return () => {
      delete document.body.dataset.modalOpen;
      document.body.style.overflow = "";
    };
  }, [fullGalleryOpen, lightboxIndex]);

  return (
    <>
      {galleryPreview.length > 0 ? (
        <Reveal delay={100}>
          <div className="mt-12 columns-2 gap-3 sm:mt-16 sm:gap-4 lg:columns-3 [&>figure]:mb-3 sm:[&>figure]:mb-4">
            {galleryPreview.map((image, index) => (
              <figure
                key={`${image.src}-${index}`}
                className="group relative block break-inside-avoid overflow-hidden rounded-xl bg-beige"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="block w-full touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                  aria-label={`הגדל תמונה: ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={1000}
                    className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  />
                  <span
                    className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/15"
                    aria-hidden="true"
                  />
                </button>
              </figure>
            ))}
          </div>
        </Reveal>
      ) : null}

      {galleryAll.length > 0 ? (
        <div className="relative z-20 mt-10 flex justify-center sm:mt-12">
          <button
            type="button"
            onClick={openFullGallery}
            onPointerDown={(e) => {
              if (e.pointerType === "touch") {
                e.preventDefault();
                openFullGallery();
              }
            }}
            className="pointer-events-auto inline-flex min-h-12 min-w-[13rem] touch-manipulation cursor-pointer items-center justify-center rounded-full border border-gold/80 bg-white px-8 text-sm font-medium tracking-wide text-gold-deep shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-parchment active:scale-[0.98] sm:text-base"
          >
            {openLabel}
          </button>
        </div>
      ) : null}

      <FullGalleryModal
        open={fullGalleryOpen}
        title={title}
        closeLabel={closeLabel}
        images={galleryAll}
        onClose={handleCloseFullGallery}
        onImageClick={setLightboxIndex}
      />

      <Lightbox
        images={fullGalleryOpen ? galleryAll : galleryPreview}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
