import type { SiteTheme } from './types'

const THEME_KEYS: (keyof SiteTheme)[] = [
  'page',
  'surface',
  'surfaceMuted',
  'border',
  'text',
  'textMuted',
  'accent',
  'accentHover',
  'accentSubtle',
]

function cssVarName(key: keyof SiteTheme): string {
  const map: Record<string, string> = {
    surfaceMuted: 'surface-muted',
    textMuted: 'text-muted',
    accentHover: 'accent-hover',
    accentSubtle: 'accent-subtle',
  }
  return map[key as string] ?? key
}

/** Apply client theme to `:root`. Pass `undefined` to clear inlined vars (stylesheet defaults). */
export function applyTheme(theme?: SiteTheme) {
  const root = document.documentElement
  for (const key of THEME_KEYS) {
    const prop = `--color-${cssVarName(key)}`
    const value = theme?.[key]
    if (value) {
      root.style.setProperty(prop, value)
    } else {
      root.style.removeProperty(prop)
    }
  }
}
