import { siteWhatsAppHref, site } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppButton";

export function FloatingWhatsApp() {
  const { floating } = site;

  return (
    <a
      href={siteWhatsAppHref(floating.message)}
      target="_blank"
      rel="noopener noreferrer"
      className="mobile-whatsapp-bar group fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] start-4 z-50 inline-flex min-h-13 items-center gap-2.5 rounded-full bg-gold px-4 py-3 text-white shadow-lg shadow-brown/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-parchment sm:px-5"
      aria-label={floating.label}
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      <span className="text-sm font-medium">{floating.label}</span>
    </a>
  );
}
