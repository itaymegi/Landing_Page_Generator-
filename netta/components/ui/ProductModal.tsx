"use client";

import { useCallback, useEffect } from "react";
import type { ProductItem } from "@/config/site";
import { ProductCardImage } from "@/components/ui/ProductCardImage";
import { HydrationSafeButton } from "@/components/ui/HydrationSafeButton";
import { ProductPrice } from "@/components/ui/ProductPrice";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { site } from "@/config/site";

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
          <WhatsAppButton
            label={site.contactSection.whatsappLabel}
            message={whatsappMessage}
            variant="primary"
            size="md"
            fullWidth
            className="mt-6"
          />
        </div>
      </div>
    </div>
  );
}
