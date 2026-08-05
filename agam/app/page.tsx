import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TreatmentCategories } from "@/components/TreatmentCategories";
import { PremiumBrands } from "@/components/PremiumBrands";
import { WhyAgam } from "@/components/WhyAgam";
import { PatientJourney } from "@/components/PatientJourney";
import { Testimonials } from "@/components/Testimonials";
import { BeforeAfter } from "@/components/BeforeAfter";
import { LeadForm } from "@/components/LeadForm";
import { FAQ } from "@/components/FAQ";
import { ClinicGallery } from "@/components/ClinicGallery";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/ui/MobileCTABar";

/**
 * Opening: hero + story. Proof (testimonials + results) before the lead form.
 * Clinic gallery after FAQ. Tones alternate between neighbors.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="overflow-x-clip pb-[calc(110px+env(safe-area-inset-bottom))] sm:pb-0"
      >
        <Hero />
        <About />
        <TreatmentCategories />
        <PremiumBrands />
        <WhyAgam />
        <PatientJourney />
        <Testimonials />
        <BeforeAfter />
        <LeadForm />
        <FAQ />
        <ClinicGallery />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
