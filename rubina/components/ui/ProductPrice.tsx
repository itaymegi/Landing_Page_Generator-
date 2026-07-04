type ProductPriceProps = {
  price?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: {
    amount: "text-xl sm:text-2xl",
    currency: "text-xs",
  },
  md: {
    amount: "text-2xl sm:text-3xl",
    currency: "text-sm",
  },
  lg: {
    amount: "text-3xl sm:text-4xl",
    currency: "text-base",
  },
};

export function ProductPrice({
  price,
  size = "md",
  className = "",
}: ProductPriceProps) {
  if (price == null) return null;

  const styles = sizeClasses[size];

  return (
    <p
      className={`inline-flex shrink-0 items-baseline gap-1 ${className}`}
      aria-label={`מחיר: ${price} שקלים`}
    >
      <span
        className={`font-serif font-light tabular-nums leading-none tracking-wide text-gold-deep ${styles.amount}`}
      >
        {price.toLocaleString("he-IL")}
      </span>
      <span className={`font-medium text-gold/75 ${styles.currency}`}>₪</span>
    </p>
  );
}
