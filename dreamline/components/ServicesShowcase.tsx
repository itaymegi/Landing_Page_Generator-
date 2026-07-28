import { site, creationItem } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { CategoryCard } from "@/components/ui/CategoryCard";

export function ServicesShowcase() {
  const { categories } = site;

  return (
    <section id="creations" className="section-py-tight relative overflow-x-clip bg-blush/15">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 10%, color-mix(in oklab, var(--peach) 22%, transparent) 0%, transparent 55%)",
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

        {/* Vertical stack (mobile) / 2-col grid (desktop) — image carousel inside each card */}
        <div className="mt-8 flex flex-col gap-10 sm:mt-12 sm:gap-14 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16 xl:gap-x-16">
          {categories.items.map((category, index) => (
            <Reveal key={category.id} delay={index * 80}>
              <CategoryCard
                category={category}
                items={category.previewItemIds.map((id) => creationItem(id))}
                priority={index < 2}
                showPlannerCta
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
