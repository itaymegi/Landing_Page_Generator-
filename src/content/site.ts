import {
  CLIENT_IDS,
  getSiteConfig,
  type ClientId,
} from './clients/registry'

export type {
  BenefitItem,
  Cta,
  FaqItem,
  FooterLink,
  FormFieldSpec,
  NavLink,
  ServiceItem,
  SiteConfig,
  SiteMeta,
  SiteTheme,
  SocialLink,
  TestimonialItem,
  WhyUsStep,
} from './types'

export { applyTheme } from './applyTheme'
export { northline } from './clients/northline'
export { exampleCafe } from './clients/example-cafe'
export { godelivery } from './clients/godelivery'
export { CLIENT_IDS, getSiteConfig, type ClientId }

/** Active site: from `VITE_CLIENT_ID` in `.env` / `.env.example` or default `northline`. */
export const site = getSiteConfig()
