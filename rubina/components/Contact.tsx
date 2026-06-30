import type { ReactNode } from "react";
import { site } from "@/config/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function ContactLink({
  href,
  label,
  icon,
  external = false,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-white/25 bg-white/8 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/15 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:min-h-16 sm:text-lg"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export function Contact() {
  const { contact, contactSection } = site;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-charcoal py-20 text-white sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(184,150,90,0.12)_0%,transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-[#1f1a18]"
        aria-hidden="true"
      />

      <div className="container-rubina relative mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="font-serif text-3xl font-light tracking-wide sm:text-4xl">
            {contactSection.heading}
          </h2>
          <span className="rule-gold rule-gold-center mt-5" aria-hidden="true" />
          <p className="mt-6 text-base leading-relaxed text-white/78 sm:text-lg">
            {contactSection.subtitle}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col gap-3 sm:gap-4">
            <WhatsAppButton
              label={contactSection.whatsappLabel}
              variant="primary"
              size="lg"
              fullWidth
            />
            <ContactLink
              href={contact.instagram}
              label={contactSection.instagramLabel}
              icon={<InstagramIcon />}
              external
            />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 rounded-sm border border-white/10 bg-white/5 px-5 py-6 sm:px-8">
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-white/65 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2 sm:text-base">
              <p>{contactSection.deliveryAreas}</p>
              <span className="hidden text-white/25 sm:inline" aria-hidden="true">
                ·
              </span>
              <p>{contactSection.deliveryInfo}</p>
              <span className="hidden text-white/25 sm:inline" aria-hidden="true">
                ·
              </span>
              <p>{contactSection.pickupInfo}</p>
            </div>
            <p className="mt-4 border-t border-white/10 pt-4 text-xs text-white/45 sm:text-sm">
              {contactSection.accessibilityNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
