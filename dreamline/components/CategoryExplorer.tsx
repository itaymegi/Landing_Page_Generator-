import { site, creationItem } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { CategoryCard } from "@/components/ui/CategoryCard";

export function CategoryExplorer() {
  const { categories } = site;

  return (
    <section id="creations" className="section-py-tight relative overflow-x-clip bg-blush/20 sm:bg-ivory">
      <div
        className="pointer-events-none absolute inset-0 sm:hidden"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in oklab, var(--peach) 28%, transparent) 0%, transparent 55%)",
        }}
      />
      <div className="container-dreamline relative">
        <Reveal>
          <SectionHeading
            eyebrow={categories.eyebrow}
            title={categories.title}
            subtitle={categories.subtitle}
          />
        </Reveal>

        {/* Mobile/tablet: horizontal snap carousel */}
        <div
          className="rail-x mt-6 -mx-5 flex snap-x snap-mandatory gap-4 px-5 pb-1 lg:mx-0 lg:mt-14 lg:hidden lg:px-0"
          aria-label={categories.title}
        >
          {categories.items.map((category, index) => (
            <div key={category.id} className="w-[78vw] max-w-sm shrink-0 snap-start sm:w-[52vw]">
              <CategoryCard
                category={category}
                items={category.previewItemIds.map((id) => creationItem(id))}
                priority={index < 2}
                compact
              />
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="mt-14 hidden gap-x-16 gap-y-24 lg:mt-16 lg:grid lg:grid-cols-2">
          {categories.items.map((category, index) => (
            <Reveal key={category.id} delay={index * 80}>
              <CategoryCard
                category={category}
                items={category.previewItemIds.map((id) => creationItem(id))}
                priority={index < 2}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
