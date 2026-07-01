import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Products } from "@/components/Products";
import { Gallery } from "@/components/Gallery";
import { AboutLin } from "@/components/AboutLin";
import { WhyUs } from "@/components/WhyUs";
import { OrderPlanner } from "@/components/OrderPlanner";
import { SocialProof } from "@/components/SocialProof";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <Gallery />
        <AboutLin />
        <WhyUs />
        <OrderPlanner />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
