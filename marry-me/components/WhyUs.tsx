import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { site } from "@/config/site";

export function WhyUs() {
  const { whyUs } = site;

  return (
    <SectionShell id="why" tone="ivory" hairline>
      <div className="container-marry">
        <Reveal>
          <SectionTitle
            eyebrow={whyUs.eyebrow}
            title={whyUs.title}
            subtitle={whyUs.subtitle}
          />
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-3">
          {whyUs.featured.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="group relative min-h-[18rem] overflow-hidden rounded-[1.35rem] sm:min-h-[22rem]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 33vw"
                  quality={90}
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <span
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/40 to-charcoal/10"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-start">
                  <p className="font-serif-en text-[0.65rem] tracking-[0.28em] text-gold-soft">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-light text-warm-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[28ch] text-sm leading-[1.7] text-warm-white/75">
                    {item.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <ul className="mx-auto mt-8 max-w-3xl divide-y divide-line/80 border-y border-line/80 sm:mt-10">
          {whyUs.compact.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <li className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <h3 className="font-serif text-lg font-light text-charcoal">
                  {item.title}
                </h3>
                <p className="max-w-[36ch] text-sm leading-[1.7] text-ink-muted sm:text-end">
                  {item.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
