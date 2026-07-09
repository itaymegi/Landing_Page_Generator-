import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Process } from "@/components/Process";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { WhyOlga } from "@/components/WhyOlga";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Process />
        <QuoteCalculator />
        <WhyOlga />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
