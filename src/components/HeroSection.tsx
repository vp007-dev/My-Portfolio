import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplineScene } from "@/components/ui/splite";
import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const dotsY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-8 md:pb-12">
      {/* Decorative dots */}
      <motion.div style={{ y: dotsY }} className="hidden md:block absolute top-32 left-8 w-3 h-3 rounded-full bg-primary opacity-60 animate-float" />
      <motion.div style={{ y: dotsY }} className="hidden md:block absolute top-48 right-12 w-2 h-2 rounded-full bg-secondary opacity-50 animate-float-delay" />
      <motion.div style={{ y: dotsY }} className="hidden md:block absolute bottom-40 left-1/4 w-4 h-4 rounded-full bg-accent opacity-40 animate-float" />

      {/* Main hero: text left, robot right */}
      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl mx-auto px-4 md:px-12 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          {/* Left: Text content */}
          <div className="flex-1 relative z-10">
            {/* Handwritten labels */}
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 mb-2">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-handwritten text-xl md:text-3xl text-primary"
              >
                Full-Stack Developer
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="font-handwritten text-xl md:text-3xl text-secondary"
              >
                Space Enthusiast
              </motion.span>
            </div>

            {/* Big Name */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-brush text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.9] tracking-tight text-foreground"
            >
              Vansh
              <br />
              <span className="text-gradient">Pandey</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6 mt-3 md:mt-4"
            >
              <span className="font-handwritten text-lg md:text-2xl text-muted-foreground">
                React • TypeScript • Node.js
              </span>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-5 md:mt-8 max-w-md"
            >
              <p className="text-muted-foreground text-sm leading-relaxed">
                &ldquo;Building digital experiences that merge clean code with creative vision. Turning complex problems into elegant, scalable solutions.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Right: 3D Robot - desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="hidden md:block flex-1 relative"
          >
            <div className="w-full h-[500px] lg:h-[600px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Hero illustration */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]) }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 md:px-12 w-full mt-6 md:mt-8"
      >
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden hover-lift">
          <img
            src={heroImg}
            alt="Developer workspace illustration"
            className="w-full h-auto object-cover rounded-xl md:rounded-2xl"
            loading="eager"
          />
        </div>
      </motion.div>

      {/* Scrolling marquee */}
      <motion.div style={{ x: marqueeX }} className="mt-10 md:mt-16 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="marquee-text mx-4 md:mx-8 !text-[4rem] md:!text-[8rem] lg:!text-[12rem]">
              Developer • Creator • Builder •
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
