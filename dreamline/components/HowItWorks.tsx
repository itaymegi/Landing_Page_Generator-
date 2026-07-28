import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/CTAButton";

export function HowItWorks() {
  const { howItWorks } = site;

  return (
    <section id="how-it-works" className="section-py bg-ivory">
      <div className="container-dreamline">
        <Reveal>
          <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} subtitle={howItWorks.subtitle} align="center" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {howItWorks.steps.map((step, index) => (
            <Reveal key={step.index} delay={index * 90}>
              <div className="relative h-full rounded-[1.5rem] bg-white/70 p-6 sm:p-7">
                <span className="font-display text-3xl font-medium text-terracotta/35">{step.index}</span>
                <h3 className="mt-4 text-lg font-medium text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex justify-center">
            <CTAButton href="#final-cta" label={howItWorks.ctaLabel} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
