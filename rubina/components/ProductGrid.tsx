"use client";

import { useState } from "react";
import type { ProductItem } from "@/config/site";
import { ProductCardImage } from "@/components/ui/ProductCardImage";
import { ProductModal } from "@/components/ui/ProductModal";
import { Reveal } from "@/components/ui/Reveal";

function ProductTitle({ title }: { title: string }) {
  if (title.includes("Gold")) {
    return (
      <>
        מארז <span className="font-display">Gold</span>
      </>
    );
  }
  if (title.includes("ARI")) {
    return (
      <>
        מארז <span className="font-display">ARI</span>
      </>
    );
  }
  return <>{title}</>;
}

type ProductGridProps = {
  items: ProductItem[];
};

export function ProductGrid({ items }: ProductGridProps) {
  const [active, setActive] = useState<ProductItem | null>(null);

  return (
    <>
      <div className="mt-16 grid gap-20 sm:gap-24 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-28">
        {items.map((product, index) => (
          <Reveal key={product.id} delay={index * 80}>
            <article className="group overflow-hidden rounded-xl border border-cream bg-white shadow-lg shadow-brown/8">
              <button
                type="button"
                onClick={() => setActive(product)}
                className="relative block w-full aspect-[3/4] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                aria-label={`פרטים על ${product.title}`}
              >
                <ProductCardImage product={product} priority={index < 2} />
              </button>

              <div className="px-6 pb-8 pt-8 sm:px-8">
                <p className="font-display text-xs uppercase tracking-[0.2em] text-gold/50">
                  מארז
                </p>
                <button
                  type="button"
                  onClick={() => setActive(product)}
                  className="mt-2 text-start font-serif text-2xl font-light tracking-wide text-brown transition-colors hover:text-gold-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:text-3xl"
                >
                  <ProductTitle title={product.title} />
                </button>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-text/70 sm:text-base">
                  {product.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <ProductModal
        product={active}
        onClose={() => setActive(null)}
      />
    </>
  );
}
