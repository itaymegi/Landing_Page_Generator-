import Link from "next/link";

/**
 * Place this below a form's submit button. Informs users that submitting
 * means they agree to be contacted per the privacy policy.
 */
export function FormConsent() {
  return (
    <p className="lp-form-consent">
      בלחיצה על שליחה אני מאשר/ת יצירת קשר בהתאם ל
      <Link href="/privacy" className="lp-inline-legal-link" prefetch>
        מדיניות הפרטיות
      </Link>.
    </p>
  );
}
