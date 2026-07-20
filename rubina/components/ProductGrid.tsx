"use client";

import { useState } from "react";
import type { ProductItem } from "@/config/site";
import { ProductCardImage } from "@/components/ui/ProductCardImage";
import { HydrationSafeButton } from "@/components/ui/HydrationSafeButton";
import { ProductModal } from "@/components/ui/ProductModal";
import { ProductPrice } from "@/components/ui/ProductPrice";
import { Reveal } from "@/components/ui/Reveal";

function ProductTitle({ title }: { title: string }) {
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
              {/*
               * Image area — uses a plain div so that the carousel's
               * internal buttons are not nested inside another <button>.
               * A visually hidden "open details" button handles keyboard
               * access for users who tab onto the image area.
               */}
              <div className="relative block w-full aspect-[4/5] overflow-hidden">
                <ProductCardImage
                  product={product}
                  priority={index < 2}
                  fit={product.imageFit ?? "cover"}
                />
                {/* Invisible overlay that opens modal on click (not on nav buttons) */}
                <HydrationSafeButton
                  type="button"
                  onClick={() => setActive(product)}
                  className="absolute inset-0 z-20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                  style={{ pointerEvents: "none" }}
                  tabIndex={-1}
                  aria-hidden="true"
                />
              </div>

              <div className="px-6 pb-8 pt-8 sm:px-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-start font-serif text-2xl font-light tracking-wide text-brown sm:text-3xl">
                      <HydrationSafeButton
                        type="button"
                        onClick={() => setActive(product)}
                        className="w-full bg-transparent p-0 text-start font-inherit text-inherit transition-colors hover:text-gold-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                        aria-label={`פרטים על ${product.title}`}
                      >
                        <ProductTitle title={product.title} />
                      </HydrationSafeButton>
                    </h3>
                  </div>
                  <ProductPrice price={product.price} size="md" className="pt-1" />
                </div>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-text/70 sm:text-base">
                  {product.description}
                </p>

              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  );
}
