import dynamic from "next/dynamic";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const GalleryInteractive = dynamic(
  () =>
    import("@/components/GalleryInteractive").then(
      (mod) => mod.GalleryInteractive,
    ),
  {
    loading: () => (
      <div className="mt-12 sm:mt-16" aria-hidden="true">
        {/* Main slide skeleton */}
        <div className="relative aspect-[4/3] w-full animate-pulse overflow-hidden rounded-2xl bg-cream/60 sm:aspect-[16/9]" />
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
  const { gallery, contact } = site;

  return (
    <section
      id="gallery"
      className="bg-parchment pt-[4.5rem] pb-10 sm:pt-[6.25rem] sm:pb-14 lg:pt-[8.75rem]"
    >
      <div className="container-rubina max-w-[96rem]">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl">
              {gallery.title}
            </h2>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold-deep underline-offset-4 transition-colors hover:text-brown hover:underline"
            >
              <InstagramIcon />
              {gallery.instagramCta}
            </a>
          </div>
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
