"use client";

import { useState } from "react";
import { ClinicSection } from "@/components/ui/ClinicSection";
import { Lightbox } from "@/components/ui/Lightbox";
import { ResultImage } from "@/components/ui/ResultImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { galleryImages, gallerySection } from "@/config/media";

export function ClinicGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ClinicSection
      id="clinic"
      tone="cream"
      editorialWord={gallerySection.editorialWord}
    >
      <div className="container-agam">
        <SectionHeader
          eyebrow={gallerySection.eyebrow}
          title={gallerySection.title}
          subtitle={gallerySection.subtitle}
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 sm:gap-7 lg:mt-20 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Reveal key={image.id} delay={index * 90} blur>
              <figure>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`הגדלת התמונה: ${image.caption}`}
                  className="group block w-full overflow-hidden rounded-[18px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
                >
                  <ResultImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 639px) 92vw, 44vw"
                    className="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                  />
                </button>

                <figcaption className="mt-4 flex items-center gap-3 text-[0.8125rem] tracking-[0.1em] text-ink-muted">
                  <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
                  {image.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null ? (
        <Lightbox
          images={galleryImages.map((image) => ({
            src: image.src,
            alt: image.alt,
            caption: image.caption,
          }))}
          index={activeIndex}
          label={gallerySection.lightboxLabel}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      ) : null}
    </ClinicSection>
  );
}
