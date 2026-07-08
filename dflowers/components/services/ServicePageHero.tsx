import Image from "next/image";
import type { ServiceCategory } from "@/config/services";

type ServicePageHeroProps = {
  service: ServiceCategory;
};

export function ServicePageHero({ service }: ServicePageHeroProps) {
  return (
    <section className="relative min-h-[50vh] overflow-hidden sm:min-h-[55vh] lg:min-h-[60vh]">
      <div className="absolute inset-0">
        <Image
          src={service.coverImage}
          alt={service.coverImageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-text/75 via-text/35 to-text/15"
          aria-hidden="true"
        />
      </div>

      <div className="relative flex min-h-[50vh] flex-col justify-end pb-12 pt-28 sm:min-h-[55vh] sm:pb-16 lg:min-h-[60vh]">
        <div className="container-dflowers">
          <p className="font-serif-en text-sm tracking-[0.25em] text-white/75 italic sm:text-base">
            {service.subtitleEn}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-3xl font-light leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {service.description}
          </p>
        </div>
      </div>
    </section>
  );
}
