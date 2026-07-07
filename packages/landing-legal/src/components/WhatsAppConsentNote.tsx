/**
 * Place near any WhatsApp CTA button. Notifies users that they will be
 * transferred to WhatsApp and that WhatsApp's own privacy policy applies.
 */
export function WhatsAppConsentNote() {
  return (
    <p className="lp-wa-note">
      בלחיצה על כפתור ההזמנה תועברו ל-WhatsApp.
      השימוש ב-WhatsApp כפוף{" "}
      <a
        href="https://www.whatsapp.com/legal/privacy-policy-eea"
        target="_blank"
        rel="noopener noreferrer"
      >
        למדיניות הפרטיות של WhatsApp
      </a>
      .
    </p>
  );
}
