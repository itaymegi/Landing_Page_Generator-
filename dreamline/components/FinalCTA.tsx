import { site, creationItem, siteWhatsAppHref } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArtworkFrame } from "@/components/ui/ArtworkFrame";

export function FinalCTA() {
  const { finalCta } = site;
  const image = creationItem(finalCta.imageId);

  return (
    <section id="final-cta" className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute -top-20 -end-20 h-72 w-72 rounded-full bg-terracotta/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-dreamline relative grid items-center gap-10 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
        <Reveal className="text-center lg:text-start">
          <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-white/60">
            {finalCta.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-lg text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:mx-0 lg:text-[2.75rem]">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0">
            {finalCta.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <CTAButton href={siteWhatsAppHref()} label={finalCta.primaryCtaLabel} external size="lg" />
            <a
              href={siteWhatsAppHref(site.contact.whatsappDefaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {finalCta.secondaryCtaLabel}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="mx-auto w-full max-w-xs lg:max-w-none">
          <ArtworkFrame item={image} rounded="rounded-[1.75rem]" className="shadow-2xl shadow-black/30 ring-1 ring-white/10" />
        </Reveal>
      </div>
    </section>
  );
}
