import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryInteractive } from "@/components/GalleryInteractive";

export function Gallery() {
  const { gallery } = site;

  return (
    <section
      id="gallery"
      className="bg-parchment pt-[4.5rem] pb-10 sm:pt-[6.25rem] sm:pb-14 lg:pt-[8.75rem]"
    >
      <div className="container-rubina max-w-[96rem]">
        <Reveal>
          <h2 className="font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl">
            {gallery.title}
          </h2>
          <span className="rule-gold mt-5" aria-hidden="true" />
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
