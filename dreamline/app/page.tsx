import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { FeaturedCreations } from "@/components/FeaturedCreations";
import { Suitability } from "@/components/Suitability";
import { HowItWorks } from "@/components/HowItWorks";
import { OrderPlanner } from "@/components/OrderPlanner";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/ui/MobileCTABar";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="overflow-x-clip pb-[calc(3.75rem+env(safe-area-inset-bottom))] sm:pb-0">
        <Hero />
        <About />
        <ServicesShowcase />
        <FeaturedCreations />
        <Suitability />
        <HowItWorks />
        <OrderPlanner />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
