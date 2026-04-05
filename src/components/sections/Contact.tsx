import { useState, type FormEvent } from 'react'
import type { SiteConfig } from '../../content/site'
import { Button } from '../ui/Button'
import { Section } from '../layout/Section'

export function Contact({ contact }: Pick<SiteConfig, 'contact'>) {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sent')
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={contact.title}
      subtitle={contact.subtitle}
    >
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-2">
          <p className="text-sm leading-relaxed text-text-muted sm:text-base">
            {contact.microcopy}
          </p>
          <ul className="mt-8 space-y-5">
            <li>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Email
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-1 inline-block text-text transition-colors hover:text-accent"
              >
                {contact.email}
              </a>
            </li>
            <li>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Phone
              </p>
              <a
                href={`tel:${contact.phone.replace(/\D/g, '')}`}
                className="mt-1 inline-block text-text transition-colors hover:text-accent"
              >
                {contact.phone}
              </a>
            </li>
            <li>
              <Button
                href={contact.whatsappUrl}
                variant="secondary"
                className="w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.whatsappLabel}
              </Button>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-surface-muted/70 p-6 sm:p-8 lg:col-span-3">
          {status === 'sent' ? (
            <p className="font-display text-lg font-semibold text-text">
              Thanks—your note is in. We will reply within one business day.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {contact.formFields.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-text"
                  >
                    {field.label}
                    {field.required ? (
                      <span className="text-accent"> *</span>
                    ) : null}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      placeholder={field.placeholder}
                      rows={4}
                      className="mt-2 w-full rounded-xl border border-border bg-page/80 px-4 py-3 text-text placeholder:text-text-muted/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="mt-2 w-full rounded-xl border border-border bg-page/80 px-4 py-3 text-text placeholder:text-text-muted/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 font-semibold text-page transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page sm:w-auto"
              >
                {contact.submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}
