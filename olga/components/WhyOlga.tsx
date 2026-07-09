import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { PremiumSection } from "@/components/ui/PremiumSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LuxuryCard } from "@/components/ui/LuxuryCard";

export function WhyOlga() {
  const { whyOlga } = site;

  return (
    <PremiumSection id="why-olga" tone="blush" editorialWord="BOUTIQUE">
      <div className="container-olga">
        <SectionHeader title={whyOlga.title} subtitle={whyOlga.subtitle} />

        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {whyOlga.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <LuxuryCard
                as="article"
                className="h-full border-t-2 border-t-sage/30 bg-white/80 p-6"
              >
                <h3 className="font-serif text-lg font-medium text-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </LuxuryCard>
            </Reveal>
          ))}
        </div>
      </div>
    </PremiumSection>
  );
}
