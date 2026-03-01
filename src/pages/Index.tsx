import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkGrid from "@/components/WorkGrid";
import FeaturedWork from "@/components/FeaturedWork";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WorkGrid />
      <FeaturedWork />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default Index;
