import type { SiteConfig } from '../types'
import { exampleCafe } from './example-cafe'
import { godelivery } from './godelivery'
import { northline } from './northline'

const registry = {
  northline,
  'example-cafe': exampleCafe,
  godelivery,
} as const satisfies Record<string, SiteConfig>

export type ClientId = keyof typeof registry

export const CLIENT_IDS = Object.keys(registry) as ClientId[]

export function getSiteConfig(clientId?: string): SiteConfig {
  const envId = import.meta.env.VITE_CLIENT_ID as string | undefined
  const raw = clientId ?? envId ?? 'northline'
  if (!(raw in registry)) {
    const allowed = CLIENT_IDS.join(', ')
    throw new Error(
      `Unknown client "${raw}". Set VITE_CLIENT_ID to one of: ${allowed}`,
    )
  }
  return registry[raw as ClientId]
}
