"use client";

import { services } from "@/config/services";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/services/ServiceCard";

export function Services() {
  const { services: servicesCopy } = site;

  return (
    <section id="services" className="section-py bg-card">
      <div className="container-dflowers">
        <Reveal>
          <h2 className="font-serif text-3xl font-light tracking-wide text-text sm:text-4xl lg:text-5xl">
            {servicesCopy.title}
          </h2>
          <span className="rule-gold mt-5" aria-hidden="true" />
          <p className="mt-4 max-w-xl text-base text-text-muted sm:text-lg">
            {servicesCopy.subtitle}
          </p>
        </Reveal>

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
    </section>
  );
}
