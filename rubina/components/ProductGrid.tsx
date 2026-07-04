"use client";

import { useState } from "react";
import type { ProductItem } from "@/config/site";
import { ProductCardImage } from "@/components/ui/ProductCardImage";
import { ProductModal } from "@/components/ui/ProductModal";
import { ProductPrice } from "@/components/ui/ProductPrice";
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
              {/*
               * Image area — uses a plain div so that the carousel's
               * internal buttons are not nested inside another <button>.
               * A visually hidden "open details" button handles keyboard
               * access for users who tab onto the image area.
               */}
              <div className="relative block w-full aspect-[3/4] overflow-hidden">
                <ProductCardImage product={product} priority={index < 2} />
                {/* Invisible overlay that opens modal on click (not on nav buttons) */}
                <button
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
                    <p className="text-xs uppercase tracking-[0.2em] text-gold/50">
                      מארז
                    </p>
                    <button
                      type="button"
                      onClick={() => setActive(product)}
                      className="mt-2 text-start font-serif text-2xl font-light tracking-wide text-brown transition-colors hover:text-gold-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:text-3xl"
                      aria-label={`פרטים על ${product.title}`}
                    >
                      <ProductTitle title={product.title} />
                    </button>
                  </div>
                  <ProductPrice price={product.price} size="md" className="pt-5" />
                </div>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-text/70 sm:text-base">
                  {product.description}
                </p>

                <button
                  type="button"
                  onClick={() => setActive(product)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-deep transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  לפרטים נוספים
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  );
}
