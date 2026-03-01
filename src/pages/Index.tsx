import { Component as KineticNav } from "@/components/ui/sterling-gate-kinetic-navigation";
import HeroSection from "@/components/HeroSection";
import WorkGrid from "@/components/WorkGrid";
import FeaturedWork from "@/components/FeaturedWork";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <KineticNav />
      <HeroSection />
      <ServicesSection />
      <WorkGrid />
      <FeaturedWork />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default Index;
