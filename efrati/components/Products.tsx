import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { ProductGrid } from "@/components/ProductGrid";

export function Products() {
  const { products } = site;

  return (
    <section id="products" className="section-py bg-parchment">
      <div className="container-rubina">
        <Reveal>
          <h2 className="font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl lg:text-5xl">
            {products.title}
          </h2>
          <span className="rule-gold mt-6" aria-hidden="true" />
        </Reveal>

        <ProductGrid items={products.items} />
      </div>
    </section>
  );
}
