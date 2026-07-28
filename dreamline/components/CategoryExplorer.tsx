import { site, creationItem } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { CategoryCard } from "@/components/ui/CategoryCard";

export function CategoryExplorer() {
  const { categories } = site;

  return (
    <section id="creations" className="section-py bg-ivory">
      <div className="container-dreamline">
        <Reveal>
          <SectionHeading eyebrow={categories.eyebrow} title={categories.title} subtitle={categories.subtitle} />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {categories.items.map((category, index) => (
            <Reveal key={category.id} delay={index * 70}>
              <CategoryCard category={category} item={creationItem(category.previewItemId)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
