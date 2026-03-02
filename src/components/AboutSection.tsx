import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutImg from "@/assets/about-illustration.png";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Shipped", value: "20+" },
  { label: "Technologies", value: "15+" },
];

const skills = [
  "React", "TypeScript", "Node.js", "Cloud Architecture",
  "Creative Coding", "Developer Tooling",
];

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-40 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 md:px-12 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <span className="font-handwritten text-2xl md:text-3xl text-secondary rotate-[-3deg] inline-block">
            Get to know me
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">02 / About</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start">
          {/* Image side — compact, styled */}
          <motion.div
            style={{ y: imageY }}
            className="md:col-span-5 relative"
          >
            <div className="relative max-w-[320px] mx-auto md:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-3 md:-inset-4 border-2 border-accent/40 rounded-2xl rotate-2" />
              <div className="absolute -inset-3 md:-inset-4 border-2 border-secondary/20 rounded-2xl -rotate-1" />
              
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.2)]">
                <img
                  src={aboutImg}
                  alt="About Vansh Pandey"
                  className="w-full h-auto aspect-[3/4] object-cover object-top"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-primary-foreground px-4 py-2 md:px-5 md:py-3 rounded-xl font-display font-bold text-sm md:text-base shadow-lg rotate-3">
                Full-Stack Dev ⚡
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            style={{ y: textY }}
            className="md:col-span-7 md:pl-8"
          >
            <h2 className="font-display font-extrabold text-4xl md:text-7xl text-primary mb-2">
              About
            </h2>
            <p className="font-brush text-xl md:text-2xl text-accent mb-6 md:mb-8">
              crafting digital experiences
            </p>

            <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
                Vansh Pandey is a full-stack developer and creative technologist with an insatiable curiosity about
                building exceptional digital experiences. With a focus on modern web technologies, he crafts performant,
                beautiful applications that push boundaries.
              </p>
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
                His expertise spans across React, TypeScript, Node.js, cloud architecture, and developer tooling. He
                believes in writing code that is not just functional but elegant — blending engineering precision with
                creative expression.
              </p>
            </div>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-border text-xs md:text-sm font-display font-medium text-foreground/80 hover:border-primary hover:text-primary transition-colors duration-300 cursor-default"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-display font-extrabold text-2xl md:text-4xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
