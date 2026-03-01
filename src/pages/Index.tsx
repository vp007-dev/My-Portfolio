import { Component as KineticNav } from "@/components/ui/sterling-gate-kinetic-navigation";
import HeroSection from "@/components/HeroSection";
import WorkGrid from "@/components/WorkGrid";
import FeaturedWork from "@/components/FeaturedWork";
import PinBoard from "@/components/PinBoard";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <KineticNav />
      <HeroSection />
      <PinBoard />
      <WorkGrid />
      <FeaturedWork />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default Index;
