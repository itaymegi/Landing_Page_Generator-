import { site, creationItem } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { ArtworkFrame } from "@/components/ui/ArtworkFrame";

export function IllustrationStory() {
  const { illustrationStory } = site;
  const colored = illustrationStory.coloredItemIds.map((id) => creationItem(id));

  return (
    <section id="illustration-story" className="section-py overflow-x-clip bg-blush/25 max-lg:pt-10">
      <div className="container-dreamline">
        <Reveal>
          <SectionHeading
            eyebrow={illustrationStory.eyebrow}
            title={illustrationStory.title}
            subtitle={illustrationStory.subtitle}
            align="center"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex items-center gap-3 sm:mt-12">
            <span className="rule" aria-hidden="true" />
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-ink-soft">
              {illustrationStory.coloredLabel}
            </p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
            {colored.map((item) => (
              <div key={item.id}>
                <ArtworkFrame
                  item={item}
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 32vw, 19vw"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
