import Image from "next/image";
import type { ProductItem } from "@/config/site";
import { site, siteWhatsAppHref } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppButton";

type ProductGridProps = {
  items: ProductItem[];
  ctaLabel: string;
};

export function ProductGrid({ items, ctaLabel }: ProductGridProps) {
  return (
    <div className="mt-14 grid gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-8">
      {items.map((product, index) => (
        <Reveal key={product.id} delay={index * 90}>
          <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-lg shadow-brown/8 transition-shadow duration-300 hover:shadow-xl hover:shadow-brown/12">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            <div className="flex flex-1 flex-col px-6 pb-7 pt-7 sm:px-7">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-gold/70">
                {site.products.cardLabel}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-light tracking-wide text-brown">
                {product.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text/70 sm:text-base">
                {product.description}
              </p>

              <a
                href={siteWhatsAppHref(product.orderMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2.5 self-start rounded-full border border-gold/80 px-6 text-sm font-medium text-gold-deep transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {ctaLabel}
              </a>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
