import Link from "next/link";
import { ClinicSection } from "@/components/ui/ClinicSection";
import { ResultImage } from "@/components/ui/ResultImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowIcon } from "@/components/ui/icons";
import { site, type Testimonial } from "@/config/site";
import { treatmentHref } from "@/config/treatments";

export function Testimonials() {
  const { testimonials } = site;

  return (
    <ClinicSection id="testimonials" tone="cream">
      <div className="container-agam">
        <SectionHeader
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          subtitle={testimonials.subtitle}
        />

        <ul className="mt-14 grid items-start gap-5 sm:gap-6 lg:mt-20 lg:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 80}>
              <TestimonialCard item={item} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-[0.8125rem] leading-[1.85] text-ink-faint">
            {testimonials.note}
          </p>
        </Reveal>
      </div>
    </ClinicSection>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  const { transcriptLabel } = site.testimonials;

  return (
    <li className="clinic-card group flex flex-col overflow-hidden">
      <div className="bg-cream p-4 sm:p-5">
        <ResultImage
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          sizes="(max-width: 1023px) 88vw, 30vw"
          rounded="rounded-[10px]"
          className="shadow-[0_10px_28px_rgba(31,30,28,0.08)]"
        />
      </div>

      {/* The screenshot carries no machine readable text, so the message is
          repeated here for screen readers and search engines. */}
      <div className="sr-only">
        <p>{transcriptLabel}:</p>
        {item.transcript.map((line) => (
          <p key={line.slice(0, 24)}>{line}</p>
        ))}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3 border-t border-line pt-5">
          <Link
            href={treatmentHref(item.treatmentSlug)}
            className="inline-flex min-h-11 items-center gap-2 text-[0.75rem] tracking-[0.12em] text-gold-deep transition-colors duration-400 hover:text-charcoal"
          >
            {item.treatment}
            <ArrowIcon className="h-3 w-3 transition-transform duration-500 group-hover:-translate-x-1" />
          </Link>
          <span className="text-[0.75rem] text-ink-faint">{item.meta}</span>
        </div>
      </div>
    </li>
  );
}
