import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import featuredImg from "@/assets/featured-work.png";

const FeaturedWork = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -40]);

  return (
    <section ref={sectionRef} className="py-16 md:py-32 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-handwritten text-3xl md:text-6xl text-primary text-center mb-8 md:mb-12"
        >
          Featured Work
        </motion.h2>

        <motion.div style={{ scale: imgScale, y: imgY }}>
          <div className="relative max-w-3xl mx-auto hover-lift rounded-xl md:rounded-2xl overflow-hidden">
            <img
              src={featuredImg}
              alt="Featured project showcase"
              className="w-full h-auto rounded-xl md:rounded-2xl"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-muted-foreground mt-4 md:mt-6 font-handwritten text-lg md:text-xl"
        >
          Full-Stack SaaS Platform • React • Node.js • PostgreSQL
        </motion.p>
      </div>
    </section>
  );
};

export default FeaturedWork;
