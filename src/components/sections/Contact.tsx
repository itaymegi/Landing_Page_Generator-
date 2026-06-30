import { useState, type FormEvent } from 'react'
import type { Locale, SiteConfig } from '../../content/site'
import { Container } from '../ui/Container'

export type ContactLeadMeta = {
  clientId: string
  locale: Locale
  brandName: string
}

function composeLeadSubject(leadMeta: ContactLeadMeta, contact: SiteConfig['contact']): string {
  const contentPrefix = contact.submission?.subjectPrefix?.trim()
  const prefix = contentPrefix ?? ''
  const base = `New lead | ${leadMeta.brandName} | ${leadMeta.locale}`
  return prefix ? `${prefix} ${base}` : base
}

type LeadPayload = {
  clientId: string
  locale: Locale
  brandName: string
  subject: string
  channel?: string
  submittedAt: string
  pageUrl: string
  consent: boolean
  fields: Array<{
    id: string
    label: string
    type: SiteConfig['contact']['formFields'][number]['type']
    required: boolean
    value: string
  }>
}

function buildLeadPayload(
  form: HTMLFormElement,
  contact: SiteConfig['contact'],
  leadMeta: ContactLeadMeta,
): LeadPayload {
  const subject = composeLeadSubject(leadMeta, contact)
  const submittedAt = new Date().toISOString()
  const pageUrl = typeof window !== 'undefined' ? window.location.href : ''
  const consentEl = form.elements.namedItem('marketing-consent') as HTMLInputElement | null

  return {
    clientId: leadMeta.clientId,
    locale: leadMeta.locale,
    brandName: leadMeta.brandName,
    subject,
    channel: contact.submission?.channel,
    submittedAt,
    pageUrl,
    consent: Boolean(consentEl?.checked),
    fields: contact.formFields.map((f) => {
      const el = form.elements.namedItem(f.id)
      let value = ''
      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
        value = el.value.trim()
      }
      return {
        id: f.id,
        label: f.label,
        type: f.type,
        required: Boolean(f.required),
        value,
      }
    }),
  }
}

/** Submit / WhatsApp pill — tighter on mobile. */
const bandCtaClass =
  'inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-md transition-colors text-[color:var(--color-contact-band,var(--color-accent))] hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-contact-band,var(--color-accent))] sm:w-auto sm:px-6 sm:py-4 sm:text-base'

const contactBandFg =
  'text-[color:var(--color-contact-band-foreground,var(--color-accent-foreground))]'

function BelowFormPlaceholderLink({
  placeholderLink,
  fg,
}: {
  placeholderLink: NonNullable<
    NonNullable<SiteConfig['contact']['belowForm']>['placeholderLink']
  >
  fg: string
}) {
  const href = placeholderLink.href.trim() === '' ? '#' : placeholderLink.href
  const isPlaceholder = href === '#'
  const hasLabel = Boolean(placeholderLink.label?.trim())

  return (
    <a
      href={href}
      onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
      className={`min-h-[1em] text-sm underline-offset-4 transition-colors hover:underline sm:text-base ${fg} ${isPlaceholder ? 'cursor-default opacity-80' : ''}`}
      aria-label={hasLabel ? undefined : 'Link'}
      aria-disabled={isPlaceholder}
      {...(!isPlaceholder && href.startsWith('http')
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      {hasLabel ? placeholderLink.label : '\u00a0'}
    </a>
  )
}

/** Privacy link + creator line on the contact band (e.g. after BrandSocialStrip when `deferBelowForm`). */
export function ContactBelowFormBand({
  contact,
}: Pick<SiteConfig, 'contact'>) {
  const belowForm = contact.belowForm
  if (!belowForm) return null
  const fg = contactBandFg

  return (
    <section
      className={`bg-[color:var(--color-contact-band,var(--color-accent))] py-5 pt-2 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] ${fg}`}
    >
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-2">
          <a
            href={belowForm.appPrivacyLink.href}
            className={`text-sm font-medium underline-offset-4 transition-colors hover:underline sm:text-base ${fg}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {belowForm.appPrivacyLink.label}
          </a>
          <p
            className={`max-w-sm text-[0.72rem] font-medium uppercase tracking-[0.24em] text-white/60 sm:text-xs sm:tracking-[0.2em]`}
          >
            {belowForm.creatorLine}
          </p>
          {belowForm.placeholderLink ? (
            <BelowFormPlaceholderLink
              placeholderLink={belowForm.placeholderLink}
              fg={fg}
            />
          ) : null}
        </div>
      </Container>
    </section>
  )
}

export function Contact({
  contact,
  ui,
  /** When set with `belowForm`, legal/privacy block renders after BrandSocialStrip (see App). */
  deferBelowForm,
  leadMeta,
}: Pick<SiteConfig, 'contact' | 'ui'> & {
  deferBelowForm?: boolean
  leadMeta: ContactLeadMeta
}) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [consentError, setConsentError] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const next: Record<string, string> = {}
    let valid = form.checkValidity()
    if (!valid) {
      for (const el of form.elements) {
        if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
          if (!el.validity.valid && el.name) {
            next[el.name] = el.validationMessage || 'Required'
          }
        }
      }
    }
    if (contact.marketingConsent?.required) {
      const box = form.elements.namedItem('marketing-consent') as HTMLInputElement | null
      if (!box?.checked) {
        setConsentError('Required')
        valid = false
      } else {
        setConsentError(null)
      }
    }
    setErrors(next)
    setSubmitError(null)
    if (!valid) return

    if (!contact.submission || contact.submission.mode !== 'api') {
      setStatus('sent')
      return
    }

    setStatus('submitting')

    try {
      const payload = buildLeadPayload(form, contact, leadMeta)
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        let detail = ''
        try {
          const j = (await res.json()) as { error?: string; message?: string }
          detail = j.error || j.message || ''
        } catch {
          /* ignore */
        }
        if (res.status === 404 || res.status === 501) {
          throw new Error(ui.contactEndpointMissing)
        }
        throw new Error(detail || ui.contactSubmitError)
      }

      setStatus('sent')
    } catch (err) {
      setStatus('idle')
      if (err instanceof Error && err.message) {
        setSubmitError(err.message)
      } else {
        setSubmitError(ui.contactSubmitError)
      }
    }
  }

  const fg = contactBandFg
  const fgMuted = `${fg} opacity-[0.88]`
  const fgSoft = `${fg} opacity-[0.72]`

  const inputClass =
    'mt-2 w-full rounded-xl border border-black/[0.08] bg-white px-3 py-3 text-sm text-[#1a1a1a] placeholder:text-neutral-500 focus:border-black/25 focus:outline-none focus:ring-2 focus:ring-black/15 sm:px-4 sm:py-3.5 sm:text-base'

  const belowForm = contact.belowForm

  return (
    <section
      id="contact"
      className={`scroll-mt-24 bg-[color:var(--color-contact-band,var(--color-accent))] py-[var(--spacing-section-y)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] ${fg}`}
    >
      <Container>
        <header className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <p
            className={`mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] ${fgMuted}`}
          >
            {ui.eyebrowContact}
          </p>
          <h2 className="font-display text-[length:var(--text-section-title)] font-bold leading-tight tracking-tight">
            {contact.title}
          </h2>
          {contact.subtitle ? (
            <p className={`mt-4 text-base leading-relaxed sm:text-lg ${fgMuted}`}>
              {contact.subtitle}
            </p>
          ) : null}
        </header>

        <div className="mx-auto max-w-xl">
          {status === 'sent' ? (
            <p className="text-center font-display text-lg font-semibold">
              {ui.contactSuccessMessage}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-5"
              noValidate
              aria-busy={status === 'submitting'}
            >
              {contact.formFields.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className={`block text-sm font-medium ${fg}`}
                  >
                    {field.label}
                    {field.required ? (
                      <span className="opacity-80"> *</span>
                    ) : null}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      placeholder={field.placeholder}
                      rows={4}
                      dir="auto"
                      aria-invalid={Boolean(errors[field.id])}
                      aria-describedby={
                        errors[field.id] ? `${field.id}-err` : undefined
                      }
                      className={inputClass}
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      dir="auto"
                      aria-invalid={Boolean(errors[field.id])}
                      aria-describedby={
                        errors[field.id] ? `${field.id}-err` : undefined
                      }
                      className={inputClass}
                    />
                  )}
                  {errors[field.id] ? (
                    <p id={`${field.id}-err`} className="mt-1 text-sm font-medium text-amber-100">
                      {errors[field.id]}
                    </p>
                  ) : null}
                </div>
              ))}

              {contact.marketingConsent ? (
                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="marketing-consent"
                    name="marketing-consent"
                    type="checkbox"
                    required={contact.marketingConsent.required}
                    className="mt-1 h-4 w-4 shrink-0 rounded border-white/35 bg-white/10 text-[color:var(--color-contact-band,var(--color-accent))] focus:ring-2 focus:ring-white/40"
                  />
                  <label
                    htmlFor="marketing-consent"
                    className={`text-sm leading-relaxed ${fgMuted}`}
                  >
                    {contact.marketingConsent.label}
                  </label>
                </div>
              ) : null}
              {consentError ? (
                <p className="text-sm font-medium text-amber-100">{consentError}</p>
              ) : null}

              {submitError ? (
                <p className="text-center text-sm font-medium text-amber-100" role="alert">
                  {submitError}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`mt-2 ${bandCtaClass} disabled:pointer-events-none disabled:opacity-70`}
              >
                {status === 'submitting' ? ui.contactSubmitting : contact.submitLabel}
              </button>
            </form>
          )}
        </div>

        {belowForm && deferBelowForm
          ? null
          : (
        <div
          className={`mx-auto mt-12 max-w-xl border-t border-white/20 pt-10 text-center sm:mt-14`}
        >
          {belowForm ? (
            <div className="flex flex-col items-center gap-2">
              <a
                href={belowForm.appPrivacyLink.href}
                className={`text-sm font-medium underline-offset-4 transition-colors hover:underline sm:text-base ${fg}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {belowForm.appPrivacyLink.label}
              </a>
              <p
                className={`max-w-sm text-[0.72rem] font-medium uppercase tracking-[0.24em] text-white/60 sm:text-xs sm:tracking-[0.2em]`}
              >
                {belowForm.creatorLine}
              </p>
              {belowForm.placeholderLink ? (
                <BelowFormPlaceholderLink
                  placeholderLink={belowForm.placeholderLink}
                  fg={fg}
                />
              ) : null}
            </div>
          ) : (
            <>
              {contact.microcopy ? (
                <p className={`text-sm leading-relaxed sm:text-base ${fgMuted}`}>
                  {contact.microcopy}
                </p>
              ) : null}
              <ul className="mt-8 space-y-6 text-start sm:mt-10">
                <li>
                  <p className={`text-xs font-semibold uppercase tracking-wider ${fgSoft}`}>
                    {ui.emailLabel}
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className={`mt-1 inline-block font-medium underline-offset-2 transition-colors hover:underline ${fg}`}
                  >
                    {contact.email}
                  </a>
                </li>
                <li>
                  <p className={`text-xs font-semibold uppercase tracking-wider ${fgSoft}`}>
                    {ui.phoneLabel}
                  </p>
                  <a
                    href={`tel:${contact.phone.replace(/\D/g, '')}`}
                    className={`mt-1 inline-block font-medium underline-offset-2 transition-colors hover:underline ${fg}`}
                  >
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={contact.whatsappUrl}
                    className={bandCtaClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.whatsappLabel}
                  </a>
                </li>
              </ul>
            </>
          )}
        </div>
            )}
      </Container>
    </section>
  )
}
