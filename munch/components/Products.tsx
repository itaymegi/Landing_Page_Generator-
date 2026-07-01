import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { ProductGrid } from "@/components/ProductGrid";

export function Products() {
  const { products } = site;

  return (
    <section id="products" className="section-py bg-parchment">
      <div className="container-munch">
        <Reveal>
          <p className="font-display text-sm uppercase tracking-[0.28em] text-gold-deep">
            {products.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl lg:text-5xl">
            {products.title}
          </h2>
          <span className="rule-gold mt-6" aria-hidden="true" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brown/60 sm:text-lg">
            {products.subtitle}
          </p>
        </Reveal>

        <ProductGrid items={products.items} ctaLabel={products.ctaLabel} />
      </div>
    </section>
  );
}
