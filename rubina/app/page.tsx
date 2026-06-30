import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { Products } from "@/components/Products";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MobileWhatsAppBar } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-[calc(5rem+env(safe-area-inset-bottom))] sm:pb-0">
        <Hero />
        <OurStory />
        <Products />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <MobileWhatsAppBar />
    </>
  );
}
