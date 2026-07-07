"use client";

import { useCallback, useEffect } from "react";
import type { ProductItem } from "@/config/site";
import { ProductCardImage } from "@/components/ui/ProductCardImage";
import { HydrationSafeButton } from "@/components/ui/HydrationSafeButton";
import { ProductPrice } from "@/components/ui/ProductPrice";
import { site, siteWhatsAppHref } from "@/config/site";

type ProductModalProps = {
  product: ProductItem | null;
  onClose: () => void;
};

function ProductTitle({ title }: { title: string }) {
  return <>{title}</>;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!product) return;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, handleKeyDown]);

  if (!product) return null;

  const hasMultipleImages =
    product.images && product.images.length > 1;

  const whatsappMessage = `היי ${site.brand.name}! אשמח לשמוע פרטים על ${product.title}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-brown/60 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={product.title}
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full overflow-y-auto rounded-t-2xl bg-parchment shadow-2xl sm:max-w-lg sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image carousel */}
        <div
          className={`group relative w-full overflow-hidden sm:rounded-t-2xl ${
            hasMultipleImages ? "aspect-[3/4]" : "aspect-[3/4]"
          }`}
        >
          <ProductCardImage
            product={product}
            sizes="(max-width: 640px) 100vw, 512px"
            priority
            hover={false}
          />

          {/* Close button */}
          <HydrationSafeButton
            type="button"
            onClick={onClose}
            className="absolute end-3 top-3 z-40 flex min-h-10 min-w-10 items-center justify-center rounded-full bg-charcoal/50 text-white backdrop-blur-sm transition-colors hover:bg-charcoal/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold active:scale-95"
            aria-label="סגור"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </HydrationSafeButton>
        </div>

        {/* Product info */}
        <div className="p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-gold/50">
            מהתפריט
          </p>
          <div className="mt-2 flex items-start justify-between gap-4">
            <h3 className="font-serif text-2xl font-light tracking-wide text-brown sm:text-3xl">
              <ProductTitle title={product.title} />
            </h3>
            <ProductPrice price={product.price} size="lg" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text/75 sm:text-base">
            {product.description}
          </p>

          {/* CTA */}
          <a
            href={siteWhatsAppHref(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 active:scale-[0.98] sm:text-base"
          >
            <svg
              className="h-5 w-5 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {site.contactSection.whatsappLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
