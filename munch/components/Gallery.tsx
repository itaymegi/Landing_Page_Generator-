import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryInteractive } from "@/components/GalleryInteractive";

export function Gallery() {
  const { gallery } = site;

  return (
    <section id="gallery" className="section-py bg-cream">
      <div className="container-munch max-w-[96rem]">
        <Reveal>
          <p className="font-display text-sm uppercase tracking-[0.28em] text-gold-deep">
            {gallery.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl lg:text-5xl">
            {gallery.title}
          </h2>
          <span className="rule-gold mt-6" aria-hidden="true" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brown/60 sm:text-lg">
            {gallery.subtitle}
          </p>
        </Reveal>

        <GalleryInteractive
          title={gallery.title}
          openLabel={gallery.openLabel}
          closeLabel={gallery.closeLabel}
          previewImages={gallery.previewImages}
          allImages={gallery.allImages}
        />
      </div>
    </section>
  );
}
