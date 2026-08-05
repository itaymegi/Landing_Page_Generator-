import { Collections } from "@/components/Collections";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { Process } from "@/components/Process";
import { OurPromise } from "@/components/OurPromise";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";
import { MobileCTABar } from "@/components/ui/MobileCTABar";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <OurPromise />
        <Collections />
        <Gallery />
        <WhyUs />
        <Process />
        <Testimonials />
        <LeadForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
