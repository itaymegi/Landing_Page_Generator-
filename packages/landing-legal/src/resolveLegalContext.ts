import type { LegalContext, ResolveLegalContextInput } from "./types";

/**
 * Merges the app's legal config with optional contact/business fields
 * and fills in sensible fallbacks. Returns a fully resolved LegalContext
 * that can be passed to any legal page or component in this package.
 */
export function resolveLegalContext(
  input: ResolveLegalContextInput,
): LegalContext {
  const { legal, contact, business } = input;

  const email =
    legal.email ?? contact?.email ?? "";
  const phone =
    legal.phone ??
    contact?.phoneDisplay ??
    contact?.phones?.[0] ??
    "";
  const deliveryAreas =
    legal.deliveryAreas ?? business?.deliveryAreas ?? "";

  return {
    businessName: legal.businessName,
    businessOwner: legal.businessOwner ?? "",
    email,
    phone,
    address: legal.address ?? "",
    websiteUrl: legal.websiteUrl ?? input.websiteUrl ?? "",
    lastUpdated: legal.lastUpdated,
    privacyContactEmail: legal.privacyContactEmail ?? email,
    accessibilityContactName:
      legal.accessibilityContactName ?? legal.businessOwner ?? "",
    accessibilityContactPhone: legal.accessibilityContactPhone ?? phone,
    accessibilityContactEmail: legal.accessibilityContactEmail ?? email,
    deliveryAreas,
    usesAnalytics: legal.usesAnalytics ?? false,
    usesWhatsApp: legal.usesWhatsApp ?? true,
    usesInstagram: legal.usesInstagram ?? false,
    instagram: contact?.instagram ?? "",
  };
}
