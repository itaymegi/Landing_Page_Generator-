type LeadField = {
  id: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea'
  required: boolean
  value: string
}

type LeadPayload = {
  clientId: string
  locale: 'en' | 'he'
  brandName: string
  subject: string
  channel?: string
  submittedAt: string
  pageUrl: string
  consent: boolean
  fields: LeadField[]
}

function getReplyTo(fields: LeadField[]): string {
  const emailField = fields.find((f) => f.type === 'email')
  return emailField?.value?.trim() ?? ''
}

function buildSummary(lead: LeadPayload): string {
  const lines = [
    '--- Lead metadata ---',
    `Brand: ${lead.brandName}`,
    `Client ID: ${lead.clientId}`,
    `Locale: ${lead.locale}`,
    `Channel: ${lead.channel ?? 'landing-page'}`,
    `Submitted (UTC): ${lead.submittedAt}`,
    `Page: ${lead.pageUrl}`,
    `Marketing consent: ${lead.consent ? 'yes' : 'no'}`,
    '',
    '--- Contact fields ---',
  ]
  for (const f of lead.fields) {
    lines.push(`${f.label} (${f.id}): ${f.value || '-'}`)
  }
  return lines.join('\n')
}

function validateLead(body: unknown): { ok: true; value: LeadPayload } | { ok: false; message: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, message: 'Invalid lead payload' }
  }
  const lead = body as Partial<LeadPayload>
  if (!lead.clientId || !lead.locale || !lead.brandName || !lead.subject) {
    return { ok: false, message: 'Missing lead metadata' }
  }
  if (!Array.isArray(lead.fields)) {
    return { ok: false, message: 'Missing lead fields' }
  }
  return { ok: true, value: lead as LeadPayload }
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const parsed = validateLead(req.body)
  if (!parsed.ok) {
    return res.status(400).json({ error: parsed.message })
  }
  const lead = parsed.value

  const deliveryMode = process.env.LEAD_DELIVERY_MODE?.trim() || 'formspree_relay'
  if (deliveryMode !== 'formspree_relay') {
    return res.status(501).json({
      error: 'Lead delivery mode is not configured on this deployment',
    })
  }

  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT?.trim()
  if (!formspreeEndpoint) {
    return res.status(500).json({ error: 'FORMSPREE_ENDPOINT is missing' })
  }

  const subjectPrefix = process.env.LEAD_SUBJECT_PREFIX?.trim()
  const subject = subjectPrefix ? `${subjectPrefix} ${lead.subject}` : lead.subject

  const fd = new FormData()
  fd.set('_subject', subject)
  fd.set('meta_client_id', lead.clientId)
  fd.set('meta_locale', lead.locale)
  fd.set('meta_brand', lead.brandName)
  fd.set('meta_submitted_at', lead.submittedAt)
  fd.set('meta_page_url', lead.pageUrl)
  fd.set('meta_marketing_consent', lead.consent ? 'yes' : 'no')
  fd.set('meta_channel', lead.channel ?? 'landing-page')
  fd.set('meta_summary', buildSummary(lead))

  const replyTo = getReplyTo(lead.fields)
  if (replyTo) {
    fd.set('_replyto', replyTo)
  }

  for (const field of lead.fields) {
    fd.set(field.id, field.value)
  }

  try {
    const relayRes = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: fd,
    })
    if (!relayRes.ok) {
      let detail = ''
      try {
        const j = (await relayRes.json()) as { error?: string; message?: string }
        detail = j.error || j.message || ''
      } catch {
        /* ignore relay parse errors */
      }
      return res.status(502).json({
        error: detail || `Relay failed with status ${relayRes.status}`,
      })
    }
    return res.status(200).json({ ok: true })
  } catch {
    return res.status(502).json({ error: 'Lead relay network error' })
  }
}

