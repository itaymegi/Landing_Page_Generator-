import {
  AccessibilityStatementContent,
  LegalPageLayout,
  createLegalMetadata,
} from "@landing-legal/core";
import { legalContext } from "@/config/legal";

export const metadata = createLegalMetadata("accessibility", legalContext);

export default function AccessibilityPage() {
  return (
    <LegalPageLayout title="הצהרת נגישות" context={legalContext}>
      <AccessibilityStatementContent context={legalContext} />
    </LegalPageLayout>
  );
}
