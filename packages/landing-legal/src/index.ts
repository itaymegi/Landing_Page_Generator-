// Types
export type { LegalConfig, LegalContext, ResolveLegalContextInput } from "./types";

// Config resolver
export { resolveLegalContext } from "./resolveLegalContext";

// Hebrew content components
export { PrivacyPolicyContent } from "./content/privacy.he";
export { AccessibilityStatementContent } from "./content/accessibility.he";
export { TermsOfUseContent } from "./content/terms.he";

// UI components
export { LegalPageLayout } from "./components/LegalPageLayout";
export { FooterLegalLinks } from "./components/FooterLegalLinks";
export { FormConsent } from "./components/FormConsent";
export { WhatsAppConsentNote } from "./components/WhatsAppConsentNote";

// Next.js helpers
export { createLegalMetadata } from "./helpers/metadata";
export { legalSitemapEntries } from "./helpers/sitemap";
