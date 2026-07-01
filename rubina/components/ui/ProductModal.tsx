"use client";

import { useCallback, useEffect } from "react";
import type { ProductItem } from "@/config/site";
import { ProductCardImage } from "@/components/ui/ProductCardImage";

type ProductModalProps = {
  product: ProductItem | null;
  onClose: () => void;
};

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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-brown/60 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={product.title}
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full overflow-y-auto rounded-t-xl bg-parchment shadow-2xl sm:max-w-lg sm:rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden sm:rounded-t-2xl">
          <ProductCardImage
            product={product}
            sizes="(max-width: 640px) 100vw, 512px"
            priority
            hover={false}
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute end-3 top-3 flex min-h-10 min-w-10 items-center justify-center rounded-full bg-brown/50 text-white backdrop-blur-sm transition-colors hover:bg-brown/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
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
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="font-serif text-2xl font-light tracking-wide text-brown sm:text-3xl">
            <ProductTitle title={product.title} />
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-text/75 sm:text-base">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
