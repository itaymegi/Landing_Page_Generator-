import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { PremiumSection } from "@/components/ui/PremiumSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LuxuryCard } from "@/components/ui/LuxuryCard";

export function WhyOlga() {
  const { testimonials } = site;

  return (
    <PremiumSection id="testimonials" tone="blush" editorialWord="LOVE">
      <div className="container-olga">
        <SectionHeader
          title={testimonials.title}
          subtitle={testimonials.subtitle}
        />

        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:gap-6">
          {testimonials.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 60}>
              <LuxuryCard
                as="blockquote"
                className="flex h-full flex-col border-t-2 border-t-sage/30 bg-white/80 p-6 sm:p-7"
              >
                <p className="flex-1 text-sm leading-[1.85] text-text-muted sm:text-[0.95rem]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-5 border-t border-border/60 pt-4">
                  <cite className="not-italic font-serif text-base font-medium text-text">
                    {item.name}
                  </cite>
                  {item.venue ? (
                    <p className="mt-1 text-xs tracking-wide text-text-muted">
                      {item.venue}
                    </p>
                  ) : null}
                </footer>
              </LuxuryCard>
            </Reveal>
          ))}
        </div>
      </div>
    </PremiumSection>
  );
}
