"use client";

import { useState } from "react";
import type { GalleryImage } from "@/config/site";
import { MasonryImage } from "@/components/ui/MasonryImage";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";

type ServicePortfolioGalleryProps = {
  images: GalleryImage[];
  title?: string;
};

export function ServicePortfolioGallery({
  images,
  title = "גלריית עבודות",
}: ServicePortfolioGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section className="section-py bg-background">
        <div className="container-dflowers">
          <Reveal>
            <h2 className="font-serif text-2xl font-light tracking-wide text-text sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            <span className="rule-gold mt-5" aria-hidden="true" />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 sm:mt-14">
              <div className="masonry-grid">
                {images.map((image, index) => (
                  <MasonryImage
                    key={`${image.src}-${index}`}
                    image={image}
                    index={index}
                    onClick={setLightboxIndex}
                    priority={index < 2}
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Lightbox
        images={images}
        initialIndex={lightboxIndex ?? 0}
        open={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
      />
    </>
  );
}
