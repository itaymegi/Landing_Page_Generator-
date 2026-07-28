import dynamic from "next/dynamic";
import { site, creationItem } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/CTAButton";

const GalleryInteractive = dynamic(
  () => import("@/components/GalleryInteractive").then((mod) => mod.GalleryInteractive),
  {
    loading: () => (
      <div className="mt-8 sm:mt-12" aria-hidden="true">
        <div className="relative aspect-[5/6] w-full animate-pulse overflow-hidden rounded-2xl bg-blush/30 sm:aspect-[4/3] lg:aspect-[16/10]" />
        <div className="mt-3 flex gap-2 sm:mt-4 sm:gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-16 w-24 shrink-0 animate-pulse rounded-lg bg-blush/30 sm:h-20 sm:w-28" />
          ))}
        </div>
      </div>
    ),
  },
);

export function FeaturedCreations() {
  const { featuredCreations } = site;
  const items = featuredCreations.itemIds.map((id) => creationItem(id));

  return (
    <section id="gallery" className="section-py relative overflow-x-clip bg-gradient-to-b from-blush/10 via-ivory to-ivory">
      <div className="container-dreamline max-w-[96rem]">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
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

        <div className="mt-0">
          <GalleryInteractive items={items} />
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <CTAButton href={featuredCreations.ctaHref} label={featuredCreations.ctaLabel} variant="outline" size="sm" />
        </div>
      </div>
    </section>
  );
}
