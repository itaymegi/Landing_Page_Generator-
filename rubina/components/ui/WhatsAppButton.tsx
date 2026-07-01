import { siteWhatsAppHref } from "@/config/site";

type WhatsAppButtonProps = {
  label: string;
  message?: string;
  variant?: "primary" | "outline" | "dark" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
};

const variantClasses = {
  primary:
    "bg-gold text-white hover:bg-gold-deep shadow-md shadow-gold/20 hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5",
  outline:
    "border border-gold/80 text-gold-deep hover:bg-gold/8 hover:border-gold hover:-translate-y-0.5",
  dark: "bg-white text-charcoal hover:bg-cream shadow-md hover:-translate-y-0.5",
  ghost: "bg-gold/15 text-gold-deep hover:bg-gold/25",
  inverse:
    "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50",
};

const sizeClasses = {
  sm: "min-h-11 px-5 py-2 text-sm",
  md: "min-h-12 px-6 py-2.5 text-base",
  lg: "min-h-14 px-10 py-3.5 text-lg sm:min-h-[3.5rem]",
};

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function WhatsAppButton({
  label,
  message,
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
}: WhatsAppButtonProps) {
  return (
    <a
      href={siteWhatsAppHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <WhatsAppIcon />
      <span>{label}</span>
    </a>
  );
}

export function MobileWhatsAppBar() {
  return (
    <div className="mobile-whatsapp-bar fixed inset-x-0 bottom-0 z-50 border-t border-cream bg-parchment/98 px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-4px_24px_rgba(90,70,52,0.08)] backdrop-blur-lg sm:hidden">
      <WhatsAppButton label="הזמנה בוואטסאפ" size="md" fullWidth />
    </div>
  );
}
