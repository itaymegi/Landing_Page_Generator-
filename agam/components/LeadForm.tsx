"use client";

import { useId, useState, type FormEvent } from "react";
import { FormConsent } from "@landing-legal/core";
import { ClinicSection } from "@/components/ui/ClinicSection";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/icons";
import { leadWhatsAppHref, site } from "@/config/site";
import { treatmentCategories } from "@/config/treatments";

type Errors = {
  name?: string;
  phone?: string;
};

function isValidIlMobile(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("972")) {
    return /^9725\d{8}$/.test(digits);
  }
  return /^05\d{8}$/.test(digits);
}

export function LeadForm() {
  const { leadForm } = site;
  const baseId = useId();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const fieldClass =
    "mt-2 w-full rounded-xl border border-line bg-marble px-4 py-3.5 text-[0.9375rem] text-ink transition-colors duration-400 placeholder:text-ink-faint hover:border-gold/40 focus:border-gold focus:outline-none";
  const labelClass = "text-[0.6875rem] tracking-[0.16em] text-ink-faint";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Errors = {};
    if (name.trim().length < 2) nextErrors.name = leadForm.errorName;
    if (!isValidIlMobile(phone.trim())) nextErrors.phone = leadForm.errorPhone;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const href = leadWhatsAppHref({
      name: name.trim(),
      phone: phone.trim(),
      treatment,
      message: message.trim(),
    });

    window.open(href, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <ClinicSection id="contact-form" tone="ivory">
      <div className="container-agam">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <Reveal>
              <p className="eyebrow">{leadForm.eyebrow}</p>
            </Reveal>

            <Reveal delay={80} blur>
              <h2 className="mt-4 font-serif text-[clamp(1.875rem,4.5vw,3rem)] font-light leading-[1.22] text-charcoal">
                {leadForm.title}
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <span className="rule-gold mx-auto mt-7" aria-hidden="true" />
            </Reveal>

            <Reveal delay={200}>
              <p className="mx-auto mt-7 max-w-md text-base leading-[2] text-ink-muted">
                {leadForm.subtitle}
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="clinic-card mt-10 p-6 sm:mt-12 sm:p-9"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${baseId}-name`} className={labelClass}>
                    {leadForm.nameLabel}
                  </label>
                  <input
                    id={`${baseId}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder={leadForm.namePlaceholder}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? `${baseId}-name-error` : undefined
                    }
                    className={fieldClass}
                  />
                  {errors.name ? (
                    <p
                      id={`${baseId}-name-error`}
                      className="mt-2 text-[0.75rem] text-gold-deep"
                    >
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor={`${baseId}-phone`} className={labelClass}>
                    {leadForm.phoneLabel}
                  </label>
                  <input
                    id={`${baseId}-phone`}
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    dir="ltr"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder={leadForm.phonePlaceholder}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={
                      errors.phone ? `${baseId}-phone-error` : undefined
                    }
                    className={`${fieldClass} text-start`}
                  />
                  {errors.phone ? (
                    <p
                      id={`${baseId}-phone-error`}
                      className="mt-2 text-[0.75rem] text-gold-deep"
                    >
                      {errors.phone}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor={`${baseId}-treatment`} className={labelClass}>
                  {leadForm.treatmentLabel}
                </label>
                <div className="relative">
                  <select
                    id={`${baseId}-treatment`}
                    name="treatment"
                    value={treatment}
                    onChange={(event) => setTreatment(event.target.value)}
                    className={`${fieldClass} appearance-none pe-11`}
                  >
                    <option value="">{leadForm.treatmentPlaceholder}</option>
                    {treatmentCategories.map((category) => (
                      <option key={category.id} value={category.title}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                  <svg
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    className="pointer-events-none absolute end-4 top-1/2 h-3 w-3 translate-y-[calc(-50%+0.25rem)] text-gold-deep"
                  >
                    <path
                      d="M2.5 4.5 6 8l3.5-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor={`${baseId}-message`} className={labelClass}>
                  {leadForm.messageLabel}
                  <span className="ms-2 tracking-normal text-ink-faint">
                    ({leadForm.optionalHint})
                  </span>
                </label>
                <textarea
                  id={`${baseId}-message`}
                  name="message"
                  rows={3}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={leadForm.messagePlaceholder}
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="btn-sheen mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full border border-charcoal bg-charcoal px-8 text-sm tracking-[0.06em] text-ivory transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-charcoal-soft hover:bg-charcoal-soft"
              >
                <WhatsAppIcon className="h-[1.125rem] w-[1.125rem]" />
                {leadForm.submitLabel}
              </button>

              <div className="mt-4 text-center text-[0.75rem] leading-[1.8] text-ink-faint [&_a]:text-gold-deep [&_a]:underline">
                <FormConsent />
              </div>

              <p
                role="status"
                aria-live="polite"
                className="mt-4 text-center text-[0.75rem] leading-[1.8] text-ink-faint"
              >
                {sent ? leadForm.successNote : leadForm.note}
              </p>

              <ul className="mt-6 grid gap-3 border-t border-line pt-6 text-center text-[0.75rem] leading-[1.7] text-ink-muted sm:grid-cols-3 sm:gap-0">
                {leadForm.assurances.map((point, index) => (
                  <li
                    key={point}
                    className={`sm:px-3 ${
                      index > 0 ? "sm:border-s sm:border-line" : ""
                    }`}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </form>
          </Reveal>
        </div>
      </div>
    </ClinicSection>
  );
}
