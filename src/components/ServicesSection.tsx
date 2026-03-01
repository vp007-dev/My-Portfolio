import { FeatureSteps } from "@/components/ui/feature-section";
import featureDevImg from "@/assets/feature-dev.png";

const features = [
  {
    step: "Step 1",
    title: "Full-Stack Development",
    content: "Building scalable web apps with React, Next.js, Node.js, and modern cloud infrastructure.",
    image: featureDevImg,
  },
  {
    step: "Step 2",
    title: "Game Development",
    content: "Creating immersive gaming experiences with Unity, PhaserJS, and custom game engines.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "AI & Machine Learning",
    content: "Developing intelligent systems with Python, TensorFlow, and cutting-edge ML pipelines.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
  },
  {
    step: "Step 4",
    title: "Space & IoT Projects",
    content: "NASA Space Apps winner — building IoT solutions and space-tech prototypes that push boundaries.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&auto=format&fit=crop",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-32 bg-muted/30">
      <FeatureSteps
        features={features}
        title="My Process"
        autoPlayInterval={4000}
        imageHeight="h-[350px] md:h-[450px]"
      />
    </section>
  );
};

export default ServicesSection;
