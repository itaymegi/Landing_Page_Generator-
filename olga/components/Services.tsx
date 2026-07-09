"use client";

import Image from "next/image";
import Link from "next/link";
import { getServiceHref, serviceItems } from "@/config/gallery";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { PremiumSection } from "@/components/ui/PremiumSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SoftGlowImage } from "@/components/ui/SoftGlowImage";

export function Services() {
  const { services } = site;

  return (
    <PremiumSection id="services" tone="beige" editorialWord="DESIGN" floral="corners">
      <div className="container-olga">
        <SectionHeader title={services.title} subtitle={services.subtitle} />

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {serviceItems.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60}>
              <Link
                href={getServiceHref(service.slug)}
                className="luxury-card group block h-full overflow-hidden rounded-[20px]"
              >
                <SoftGlowImage>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-text/65 via-text/10 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <h3 className="font-serif text-xl font-light tracking-wide text-white sm:text-2xl">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </SoftGlowImage>

                <div className="px-5 py-5 sm:px-6">
                  <p className="text-sm leading-relaxed text-text-muted">
                    {service.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </PremiumSection>
  );
}
