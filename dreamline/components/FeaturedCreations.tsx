import { site, creationItem } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { GalleryItem } from "@/components/ui/GalleryItem";
import { CTAButton } from "@/components/ui/CTAButton";

export function FeaturedCreations() {
  const { featuredCreations } = site;
  const items = featuredCreations.itemIds.map((id) => creationItem(id));

  return (
    <section className="section-py bg-ivory">
      <div className="container-dreamline">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow={featuredCreations.eyebrow}
              title={featuredCreations.title}
              subtitle={featuredCreations.subtitle}
            />
            <CTAButton
              href={featuredCreations.ctaHref}
              label={featuredCreations.ctaLabel}
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
            />
          </div>
        </Reveal>

        {/* Mobile — horizontal exploration */}
        <div className="mt-10 -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 sm:hidden" style={{ scrollbarWidth: "none" }}>
          {items.map((item) => (
            <div key={item.id} className="w-[68%] shrink-0">
              <GalleryItem item={item} sizes="68vw" />
            </div>
          ))}
        </div>

        {/* Desktop / tablet — editorial masonry */}
        <div className="mt-12 hidden columns-2 gap-5 sm:block lg:columns-3">
          {items.map((item) => (
            <div key={item.id} className="mb-5 break-inside-avoid">
              <GalleryItem item={item} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <CTAButton href={featuredCreations.ctaHref} label={featuredCreations.ctaLabel} variant="outline" size="sm" />
        </div>
      </div>
    </section>
  );
}
