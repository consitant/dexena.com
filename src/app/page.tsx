import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import KontaktLeiste from "@/components/KontaktLeiste";
import PartnerLogos from "@/components/PartnerLogos";
import LeistungenSection from "@/components/LeistungenSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import AblaufSection from "@/components/AblaufSection";
import UeberUnsSection from "@/components/UeberUnsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LetsTalkSection from "@/components/LetsTalkSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <KontaktLeiste />
        <PartnerLogos />
        <LeistungenSection />
        <CaseStudiesSection />
        <AblaufSection />
        <UeberUnsSection />
        <TestimonialsSection />
        <LetsTalkSection />
      </main>
      <Footer />
    </>
  );
}
