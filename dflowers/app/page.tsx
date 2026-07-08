import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Gallery } from "@/components/Gallery";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { EventPlanner } from "@/components/EventPlanner";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Process />
        <Gallery />
        <Stats />
        <Testimonials />
        <EventPlanner />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
