import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";

const pillarAccents = ["bg-blush", "bg-peach", "bg-butter", "bg-powder-blue"];

export function WhyDreamLine() {
  const { whyDreamLine } = site;

  return (
    <section className="section-py relative overflow-x-clip bg-gradient-to-b from-peach/10 via-sage/25 to-sage/20">
      <div className="container-dreamline">
        <Reveal>
          <SectionHeading eyebrow={whyDreamLine.eyebrow} title={whyDreamLine.title} align="center" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {whyDreamLine.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 90}>
              <div className="flex h-full flex-col items-center gap-3 rounded-[1.5rem] bg-white/70 p-7 text-center">
                <span className={`h-2.5 w-2.5 rounded-full ${pillarAccents[index % pillarAccents.length]}`} aria-hidden="true" />
                <h3 className="text-lg font-medium text-ink">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
