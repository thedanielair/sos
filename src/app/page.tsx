import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection/AboutSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection/FeaturesSection";
import { RequirementsSection } from "@/components/sections/RequirementsSection/RequirementsSection";
import { QuotesSection } from "@/components/sections/QuotesSection/QuotesSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection/NewsletterSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <RequirementsSection />
        <QuotesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
