import {
  PrivacyPolicyContent,
  LegalPageLayout,
  createLegalMetadata,
} from "@landing-legal/core";
import { legalContext } from "@/config/legal";

export const metadata = createLegalMetadata("privacy", legalContext);

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="מדיניות פרטיות" context={legalContext}>
      <PrivacyPolicyContent context={legalContext} />
    </LegalPageLayout>
  );
}
