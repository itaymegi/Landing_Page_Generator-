import { site, siteWhatsAppHref } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppButton";

export function FloatingWhatsApp() {
  const { floatingWhatsApp, contact } = site;

  return (
    <a
      href={siteWhatsAppHref(contact.whatsappFloatingMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa-pulse fixed bottom-5 start-5 z-50 flex min-h-12 items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:bottom-6 sm:start-6 sm:px-5 sm:text-base"
      aria-label={floatingWhatsApp.label}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      <span className="hidden sm:inline">{floatingWhatsApp.label}</span>
    </a>
  );
}
