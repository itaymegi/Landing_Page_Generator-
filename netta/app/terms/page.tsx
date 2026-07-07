import {
  TermsOfUseContent,
  LegalPageLayout,
  createLegalMetadata,
} from "@landing-legal/core";
import { legalContext } from "@/config/legal";

export const metadata = createLegalMetadata("terms", legalContext);

export default function TermsPage() {
  return (
    <LegalPageLayout title="תנאי שימוש" context={legalContext}>
      <TermsOfUseContent context={legalContext} />
    </LegalPageLayout>
  );
}
