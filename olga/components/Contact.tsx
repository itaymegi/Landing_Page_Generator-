"use client";

import { useState } from "react";
import { site, buildContactMessage, siteWhatsAppHref } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { PremiumSection } from "@/components/ui/PremiumSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LuxuryCard } from "@/components/ui/LuxuryCard";
import { FormConsent } from "@landing-legal/core";

const inputClass =
  "w-full rounded-2xl border border-border bg-background-white px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/20";

export function Contact() {
  const { contactForm, quoteCalculator } = site;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildContactMessage(form);
    window.open(siteWhatsAppHref(message), "_blank", "noopener,noreferrer");
  };

  return (
    <PremiumSection id="contact" tone="ivory" floral="heading">
      <div className="container-olga mx-auto max-w-3xl">
        <SectionHeader
          title={contactForm.title}
          subtitle={contactForm.subtitle}
        />

        <Reveal delay={100}>
          <LuxuryCard className="mt-10 p-6 sm:mt-12 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-text">
                    {contactForm.fields.name}
                  </span>
                  <input
                    type="text"
                    required
                    className={inputClass}
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-text">
                    {contactForm.fields.phone}
                  </span>
                  <input
                    type="tel"
                    required
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-text">
                    {contactForm.fields.eventType}
                  </span>
                  <select
                    required
                    className={inputClass}
                    value={form.eventType}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, eventType: e.target.value }))
                    }
                  >
                    <option value="">בחרי...</option>
                    {quoteCalculator.eventTypes.map((t) => (
                      <option key={t.value} value={t.label}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-text">
                    {contactForm.fields.date}
                  </span>
                  <input
                    type="date"
                    className={inputClass}
                    value={form.date}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, date: e.target.value }))
                    }
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-text">
                  {contactForm.fields.message}
                </span>
                <textarea
                  rows={4}
                  className={`${inputClass} resize-none`}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent-deep px-8 text-base font-serif font-medium text-white transition-all hover:bg-floral sm:w-auto"
              >
                {contactForm.submitLabel}
              </button>
              <FormConsent />
            </form>
          </LuxuryCard>
        </Reveal>
      </div>
    </PremiumSection>
  );
}
