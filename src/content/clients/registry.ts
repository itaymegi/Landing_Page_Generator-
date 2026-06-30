import type { Locale, LocalizedClientConfig, SiteConfig } from '../types'
import { exampleCafeLocales } from './example-cafe'
import { godeliveryLocales } from './godelivery'
import { northlineLocales } from './northline'

const registry = {
  northline: northlineLocales,
  'example-cafe': exampleCafeLocales,
  godelivery: godeliveryLocales,
} as const satisfies Record<string, LocalizedClientConfig>

export type ClientId = keyof typeof registry

export const CLIENT_IDS = Object.keys(registry) as ClientId[]

function parseLocale(raw: string | undefined): Locale {
  if (raw === undefined || raw === '' || raw === 'en') return 'en'
  if (raw === 'he') return 'he'
  throw new Error(
    `Unknown locale "${raw}". Set VITE_LOCALE to en or he (e.g. in .env).`,
  )
}

/** Active locale from `VITE_LOCALE` (default `en`). */
export function getLocaleFromEnv(): Locale {
  return parseLocale(import.meta.env.VITE_LOCALE as string | undefined)
}

export function getSiteConfig(
  clientId?: string,
  locale?: Locale,
): SiteConfig {
  const envId = import.meta.env.VITE_CLIENT_ID as string | undefined
  const raw = clientId ?? envId ?? 'northline'
  if (!(raw in registry)) {
    const allowed = CLIENT_IDS.join(', ')
    throw new Error(
      `Unknown client "${raw}". Set VITE_CLIENT_ID to one of: ${allowed}`,
    )
  }
  const loc = locale ?? getLocaleFromEnv()
  const bundle = registry[raw as ClientId]
  const config = bundle[loc] ?? bundle.en
  return { ...config, locale: loc }
}
