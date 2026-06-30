import Image from "next/image";
import { site } from "@/config/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

function formatIndex(index: number): string {
  return String(index + 1).padStart(2, "0");
}

export function Products() {
  const { products, brand } = site;

  return (
    <section id="products" className="bg-cream py-20 sm:py-28 lg:py-32">
      <div className="container-rubina">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-deep">
            {brand.tagline}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-wide text-charcoal sm:text-4xl">
            {products.title}
          </h2>
          <span className="rule-gold mt-5" aria-hidden="true" />
        </Reveal>

        <div className="mt-14 grid gap-16 sm:gap-20 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-24">
          {products.items.map((product, index) => (
            <Reveal key={product.id} delay={index * 80}>
              <article className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-md shadow-charcoal/5 ring-1 ring-charcoal/5">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>

                <div className="mt-6 border-t border-charcoal/10 pt-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-sm text-gold/80">
                        {formatIndex(index)}
                      </span>
                      <h3 className="font-serif text-2xl font-light tracking-wide text-charcoal sm:text-3xl">
                        {product.title.includes("Gold") ? (
                          <>
                            מארז <span className="font-display">Gold</span>
                          </>
                        ) : (
                          product.title
                        )}
                      </h3>
                    </div>
                    {product.price ? (
                      <span className="shrink-0 rounded-full border border-gold/30 bg-white/60 px-3 py-1 text-xs text-charcoal/70">
                        {product.price}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/70 sm:text-base">
                    {product.description}
                  </p>

                  <div className="mt-6">
                    <WhatsAppButton
                      label={products.ctaLabel}
                      variant="outline"
                      size="sm"
                      message={`היי! אשמח לשמוע פרטים על ${product.title}`}
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
