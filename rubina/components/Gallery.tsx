import dynamic from "next/dynamic";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

const GalleryInteractive = dynamic(
  () =>
    import("@/components/GalleryInteractive").then(
      (mod) => mod.GalleryInteractive,
    ),
  {
    loading: () => (
      <div className="mt-12 sm:mt-16" aria-hidden="true">
        {/* Main slide skeleton */}
        <div className="relative aspect-[4/5] w-full animate-pulse overflow-hidden rounded-2xl bg-cream/60 sm:aspect-[4/3] lg:aspect-[16/10]" />
        {/* Thumbnails skeleton */}
        <div className="mt-3 flex gap-2 sm:mt-4 sm:gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-16 w-24 shrink-0 animate-pulse rounded-lg bg-cream/60 sm:h-20 sm:w-28"
            />
          ))}
        </div>
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
