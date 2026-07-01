import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Gallery } from "@/components/Gallery";
import { Services } from "@/components/Services";
import { EventPlanner } from "@/components/EventPlanner";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <main className="pb-[calc(5rem+env(safe-area-inset-bottom))]">
        <Hero />
        <TrustBar />
        <Gallery />
        <Services />
        <EventPlanner />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
