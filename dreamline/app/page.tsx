import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { CategoryExplorer } from "@/components/CategoryExplorer";
import { FeaturedCreations } from "@/components/FeaturedCreations";
import { IllustrationStory } from "@/components/IllustrationStory";
import { GiftBoxStory } from "@/components/GiftBoxStory";
import { KeepsakeStory } from "@/components/KeepsakeStory";
import { OccasionExplorer } from "@/components/OccasionExplorer";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyDreamLine } from "@/components/WhyDreamLine";
import { About } from "@/components/About";
import { SocialGallery } from "@/components/SocialGallery";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/ui/MobileCTABar";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] sm:pb-0">
        <Hero />
        <TrustStrip />
        <CategoryExplorer />
        <FeaturedCreations />
        <IllustrationStory />
        <GiftBoxStory />
        <KeepsakeStory />
        <OccasionExplorer />
        <HowItWorks />
        <WhyDreamLine />
        <About />
        <SocialGallery />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
