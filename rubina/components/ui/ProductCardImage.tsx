import Image from "next/image";
import type { ProductItem } from "@/config/site";

type ProductCardImageProps = {
  product: ProductItem;
  sizes?: string;
  priority?: boolean;
  hover?: boolean;
};

export function ProductCardImage({
  product,
  sizes = "(max-width: 1024px) 100vw, 45vw",
  priority = false,
  hover = true,
}: ProductCardImageProps) {
  const hoverClass = hover
    ? "transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    : "";

  if (product.images && product.images.length >= 2) {
    const [left, right] = product.images;
    return (
      <div className="flex h-full w-full" dir="ltr">
        <div className="relative h-full w-1/2 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={left.src}
            alt={left.alt}
            loading={priority ? "eager" : "lazy"}
            className={`h-full w-full object-cover object-center ${hoverClass}`}
          />
        </div>
        <div className="w-px shrink-0 bg-cream/80" aria-hidden="true" />
        <div className="relative h-full w-1/2 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={right.src}
            alt={right.alt}
            loading={priority ? "eager" : "lazy"}
            className={`h-full w-full object-cover object-center ${hoverClass}`}
          />
        </div>
      </div>
    );
  }

  return (
    <Image
      src={product.image}
      alt={product.imageAlt}
      fill
      className={`object-cover ${hoverClass}`}
      sizes={sizes}
      priority={priority}
    />
  );
}
