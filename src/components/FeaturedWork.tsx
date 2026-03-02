import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import featuredImg from "@/assets/featured-work.png";

const FeaturedWork = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const textX = useTransform(scrollYProgress, [0, 0.5], [-60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} className="py-16 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
          {/* Text side */}
          <motion.div
            style={{ x: textX, opacity: textOpacity }}
            className="md:col-span-4 order-2 md:order-1"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-display text-xs uppercase tracking-wider mb-4">
              ⭐ Featured
            </span>
            <h3 className="font-display font-extrabold text-2xl md:text-5xl text-foreground mb-3 leading-tight">
              Life<span className="text-gradient">Link</span>
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
              Emergency SOS platform with real-time location sharing, instant alerts, and life-saving response coordination. Built for when every second counts.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["React", "TypeScript", "Real-time", "Maps API"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full border border-border text-xs font-display text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/vp007-dev/LifeLink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold text-primary hover:text-secondary transition-colors group"
            >
              View Project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Image side */}
          <motion.div
            style={{ scale: imgScale, y: imgY }}
            className="md:col-span-8 order-1 md:order-2"
          >
            <div className="relative group rounded-xl md:rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_hsl(var(--foreground)/0.15)]">
              <img
                src={featuredImg}
                alt="LifeLink — Emergency SOS Platform"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
