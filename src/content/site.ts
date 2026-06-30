import {
  CLIENT_IDS,
  getLocaleFromEnv,
  getSiteConfig,
  type ClientId,
} from './clients/registry'

export type {
  BenefitItem,
  Cta,
  FaqItem,
  FooterLink,
  FormFieldSpec,
  Locale,
  LocalizedClientConfig,
  NavLink,
  ServiceItem,
  SiteConfig,
  SiteMeta,
  SiteTheme,
  SiteUi,
  SocialLink,
  TestimonialItem,
  WhyUsStep,
} from './types'

export { applyTheme } from './applyTheme'
export { northlineLocales, northline } from './clients/northline'
export { exampleCafeLocales, exampleCafe } from './clients/example-cafe'
export { godeliveryLocales, godelivery } from './clients/godelivery'
export {
  CLIENT_IDS,
  getLocaleFromEnv,
  getSiteConfig,
  type ClientId,
}

/** Active locale: `VITE_LOCALE` in `.env` / `.env.example` (default `en`). */
export const locale = getLocaleFromEnv()

/** Active site: `VITE_CLIENT_ID` + `VITE_LOCALE`. */
export const site = getSiteConfig(undefined, locale)
