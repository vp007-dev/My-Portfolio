import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-illustration.png";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [80, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -30]);

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text side */}
          <motion.div style={{ y: textY }}>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold text-3xl md:text-7xl text-primary mb-5 md:mb-8"
            >
              About
            </motion.h2>

            {[
              "Vansh Pandey is a full-stack developer and creative technologist with an insatiable curiosity about building exceptional digital experiences. With a focus on modern web technologies, he crafts performant, beautiful applications that push boundaries.",
              "His expertise spans across React, TypeScript, Node.js, cloud architecture, and developer tooling. He believes in writing code that is not just functional but elegant — blending engineering precision with creative expression.",
              "When not coding, you'll find him exploring space tech, contributing to open source, and experimenting with creative coding and generative art.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
                className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-4 md:mb-6"
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-5 md:mt-8 inline-block"
            >
              <span className="font-display font-extrabold text-2xl md:text-5xl text-secondary uppercase tracking-wider">
                PROCESS
              </span>
            </motion.div>
          </motion.div>

          {/* Image side with parallax */}
          <motion.div style={{ y: imgY }} className="relative order-first md:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-xl md:rounded-2xl overflow-hidden hover-lift"
            >
              <img
                src={aboutImg}
                alt="About Vansh Pandey - Developer illustration"
                className="w-full h-auto rounded-xl md:rounded-2xl"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
