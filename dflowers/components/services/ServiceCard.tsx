import Image from "next/image";
import Link from "next/link";
import type { ServiceCategory } from "@/config/services";
import { getServiceHref } from "@/config/services";
import { site } from "@/config/site";
import { SoftGlowImage } from "@/components/ui/SoftGlowImage";

type ServiceCardProps = {
  service: ServiceCategory;
  featured?: boolean;
};

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const href = getServiceHref(service.slug);

  return (
    <Link
      href={href}
      className="luxury-card group block h-full overflow-hidden rounded-[16px] transition-all duration-500"
    >
      <SoftGlowImage>
        <div
          className={`relative overflow-hidden ${featured ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/5]"}`}
        >
          <Image
            src={service.coverImage}
            alt={service.coverImageAlt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 25vw"
            }
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-text/60 via-text/10 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="font-serif-en text-xs tracking-[0.2em] text-white/75 italic sm:text-sm">
              {service.subtitleEn}
            </p>
            <h3
              className={`mt-2 font-serif font-light tracking-wide text-white ${
                featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
              }`}
            >
              {service.title}
            </h3>
          </div>
        </div>
      </SoftGlowImage>

      <div className="flex items-center justify-between gap-4 border-t border-border/80 px-5 py-5 sm:px-6 sm:py-5">
        <span className="text-sm font-medium text-accent-deep transition-colors group-hover:text-accent">
          {site.services.viewPortfolioLabel}
        </span>
        <span
          className="text-accent transition-transform duration-300 group-hover:-translate-x-1"
          aria-hidden="true"
        >
          ←
        </span>
      </div>
    </Link>
  );
}
