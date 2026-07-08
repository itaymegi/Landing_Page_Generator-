"use client";

import { services } from "@/config/services";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { PremiumSection } from "@/components/ui/PremiumSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Services() {
  const { services: servicesCopy } = site;

  return (
    <PremiumSection id="services" tone="beige" editorialWord="DESIGN" floral="corners">
      <div className="container-dflowers">
        <SectionHeader
          title={servicesCopy.title}
          subtitle={servicesCopy.subtitle}
        />

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={index * 60}
              className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <ServiceCard service={service} featured={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </PremiumSection>
  );
}
