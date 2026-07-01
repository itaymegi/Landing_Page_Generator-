import dynamic from "next/dynamic";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

const GalleryInteractive = dynamic(
  () =>
    import("@/components/GalleryInteractive").then((mod) => mod.GalleryInteractive),
  {
    loading: () => (
      <div
        className="mt-12 grid grid-cols-2 gap-2 sm:mt-16 sm:gap-3 lg:grid-cols-4 lg:gap-4"
        aria-hidden="true"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`animate-pulse bg-cream/60 ${index === 0 || index === 5 ? "col-span-2 aspect-[16/10]" : "col-span-1 aspect-square"}`}
          />
        ))}
      </div>
    ),
  },
);

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
