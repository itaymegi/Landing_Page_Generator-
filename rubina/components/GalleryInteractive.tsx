"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { filterGalleryImages, type GalleryImage } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { FullGalleryModal } from "@/components/ui/FullGalleryModal";
import { Lightbox } from "@/components/ui/Lightbox";

const layoutClasses = [
  "col-span-2 aspect-[16/10] sm:aspect-[16/9]",
  "col-span-1 aspect-[3/4]",
  "col-span-1 aspect-square",
  "col-span-1 aspect-[3/4]",
  "col-span-1 aspect-square",
  "col-span-2 aspect-[16/10] sm:aspect-[16/9]",
];

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
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
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
    setLightboxImage(null);
  };

  useEffect(() => {
    const modalActive = fullGalleryOpen || lightboxImage !== null;
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
  }, [fullGalleryOpen, lightboxImage]);

  return (
    <>
      {galleryPreview.length > 0 ? (
        <Reveal delay={100}>
          <div className="mt-12 grid grid-cols-2 gap-2 sm:mt-16 sm:gap-3 lg:grid-cols-4 lg:gap-4">
            {galleryPreview.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className={`group relative cursor-pointer overflow-hidden bg-beige ${layoutClasses[index % layoutClasses.length]}`}
            >
              <button
                type="button"
                onClick={() => setLightboxImage(image)}
                className="absolute inset-0 z-10 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                aria-label={`הגדל תמונה: ${image.alt}`}
              />
              <Image
                src={image.src}
                alt={image.alt}
                fill
                unoptimized
                className="pointer-events-none object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/15"
                aria-hidden="true"
              />
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
          className="pointer-events-auto inline-flex min-h-12 min-w-[12rem] touch-manipulation cursor-pointer items-center justify-center rounded-full border border-gold/80 bg-white px-8 text-sm font-medium tracking-wide text-gold-deep shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-parchment active:scale-[0.98] sm:text-base"
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
        onImageClick={setLightboxImage}
      />

      <Lightbox
        src={lightboxImage?.src ?? ""}
        alt={lightboxImage?.alt ?? ""}
        open={lightboxImage !== null}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
}
