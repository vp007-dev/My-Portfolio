import { useEffect, useRef, useState } from "react";
import aboutImg from "@/assets/about-illustration.png";

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 md:py-32">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 md:px-12 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <h2 className="font-display font-extrabold text-5xl md:text-7xl text-primary mb-8">About</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Vansh Pandey is a full-stack developer and creative technologist with an insatiable curiosity about
              building exceptional digital experiences. With a focus on modern web technologies, he crafts performant,
              beautiful applications that push boundaries.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              His expertise spans across React, TypeScript, Node.js, cloud architecture, and developer tooling. He
              believes in writing code that is not just functional but elegant — blending engineering precision with
              creative expression.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              When not coding, you'll find him exploring space tech, contributing to open source, and experimenting with
              creative coding and generative art.
            </p>

            {/* Process label like reference */}
            <div className="mt-8 inline-block"></div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden hover-lift">
              <img
                src={aboutImg}
                alt="About Vansh Pandey - Developer illustration"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
