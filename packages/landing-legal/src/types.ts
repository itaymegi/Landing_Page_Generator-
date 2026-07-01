/** Fields the app developer fills in per client. */
export type LegalConfig = {
  /** Displayed business name, e.g. "Munch Cookies by Lin" */
  businessName: string;
  /** Owner / contact person name (optional) */
  businessOwner?: string;
  /** Public contact email */
  email?: string;
  /** Display phone number, e.g. "052-608-5111" */
  phone?: string;
  /** Physical address (optional) */
  address?: string;
  /** Full production URL, e.g. "https://munch-cookies.com" */
  websiteUrl: string;
  /** ISO date string, e.g. "2026-07-01" */
  lastUpdated: string;
  /** Email for privacy inquiries (falls back to email) */
  privacyContactEmail?: string;
  /** Accessibility coordinator name (falls back to businessOwner) */
  accessibilityContactName?: string;
  /** Accessibility coordinator phone (falls back to phone) */
  accessibilityContactPhone?: string;
  /** Accessibility coordinator email (falls back to email) */
  accessibilityContactEmail?: string;
  /** Delivery / service areas — used in Terms page */
  deliveryAreas?: string;
  /** Whether the site uses analytics (GA / Plausible etc.) */
  usesAnalytics?: boolean;
  /** Whether orders go through WhatsApp */
  usesWhatsApp?: boolean;
  /** Whether the business uses Instagram */
  usesInstagram?: boolean;
};

/** Partial app-side contact/business config — all fields optional. */
export type AppContactHint = {
  email?: string;
  phoneDisplay?: string;
  phones?: string[];
  instagram?: string;
  whatsappNumber?: string;
};

export type AppBusinessHint = {
  deliveryAreas?: string;
};

export type ResolveLegalContextInput = {
  legal: LegalConfig;
  contact?: AppContactHint;
  business?: AppBusinessHint;
  /** Override websiteUrl (e.g. from getSiteUrl()) */
  websiteUrl?: string;
};

/** Fully resolved context passed to all legal components and content builders. */
export type LegalContext = {
  businessName: string;
  businessOwner: string;
  email: string;
  phone: string;
  address: string;
  websiteUrl: string;
  lastUpdated: string;
  privacyContactEmail: string;
  accessibilityContactName: string;
  accessibilityContactPhone: string;
  accessibilityContactEmail: string;
  deliveryAreas: string;
  usesAnalytics: boolean;
  usesWhatsApp: boolean;
  usesInstagram: boolean;
  instagram: string;
};
