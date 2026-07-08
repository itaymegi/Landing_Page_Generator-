import Image from "next/image";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { PremiumSection } from "@/components/ui/PremiumSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SoftGlowImage } from "@/components/ui/SoftGlowImage";
import { LuxuryCard } from "@/components/ui/LuxuryCard";

export function About() {
  const { about } = site;

  return (
    <>
      <PremiumSection id="about" tone="ivory" editorialWord="STORY" floral="corners">
        <div className="container-dflowers">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative lg:order-1 lg:-translate-y-2">
              <SoftGlowImage>
                <div
                  className="absolute -bottom-3 -start-3 -z-10 h-full w-full bg-border/50"
                  aria-hidden="true"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-border sm:aspect-[5/6] lg:min-h-[28rem]">
                  <Image
                    src={about.image}
                    alt={about.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </SoftGlowImage>
            </Reveal>

            <Reveal className="lg:order-2" delay={120}>
              <SectionHeader
                label={about.title}
                title={about.headline}
                variant="label-first"
                delay={120}
              />

              <div className="mt-5 max-w-xl space-y-3 text-sm leading-[1.75] text-text-muted sm:text-base">
                <p>{about.intro}</p>
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </PremiumSection>

      <PremiumSection id="values" tone="white" className="pt-16 sm:pt-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          aria-hidden="true"
        />
        <div className="container-dflowers">
          <Reveal>
            <h3 className="font-serif text-xl font-light tracking-wide text-text sm:text-2xl">
              {about.pillarsTitle}
            </h3>
            <span className="rule-gold mt-4" aria-hidden="true" />

            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
              {about.pillars.map((pillar) => (
                <LuxuryCard
                  key={pillar.title}
                  as="article"
                  className="border-t-2 border-t-accent/30 bg-background-warm/80 px-4 py-5 sm:px-5"
                >
                  <h4 className="font-serif text-base font-medium text-text">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-text-muted sm:text-sm">
                    {pillar.description}
                  </p>
                </LuxuryCard>
              ))}
            </div>
          </Reveal>
        </div>
      </PremiumSection>
    </>
  );
}
