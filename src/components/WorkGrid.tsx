import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";
import work5 from "@/assets/work-5.png";
import work6 from "@/assets/work-6.png";
import work7 from "@/assets/work-7.png";
import work8 from "@/assets/work-8.png";
import work9 from "@/assets/work-9.png";

const projects = [
  { img: work1, title: "CRUISE 2K26", category: "College Fest", tech: ["React", "GSAP"], link: "https://github.com/vp007-dev", featured: true },
  { img: work2, title: "Vidhya Swaroop", category: "NGO Website", tech: ["React", "Tailwind"], link: "https://github.com/vp007-dev/Vidhya-Swaroop" },
  { img: work3, title: "Savera", category: "AI / Utility", tech: ["Python", "ML"], link: "https://github.com/vp007-dev/Savera" },
  { img: work4, title: "Moon Treasures", category: "E-Commerce", tech: ["Next.js", "Stripe"], link: "https://github.com/vp007-dev", featured: true },
  { img: work5, title: "BECONIX", category: "Startup / Brand", tech: ["React", "Node.js"], link: "https://github.com/vp007-dev/BECONIX" },
  { img: work6, title: "BEACON", category: "AI & IoT", tech: ["Python", "IoT"], link: "https://github.com/vp007-dev/BEACON" },
  { img: work7, title: "LifeLink", category: "Emergency SOS", tech: ["React", "Real-time"], link: "https://github.com/vp007-dev/LifeLink", featured: true },
  { img: work8, title: "E-Invitation", category: "Interactive Web", tech: ["Canvas", "GSAP"], link: "https://github.com/vp007-dev" },
  { img: work9, title: "GovGuard", category: "Civic Tech", tech: ["React", "TypeScript"], link: "https://github.com/vp007-dev/GovGuard" },
];

const WorkGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={sectionRef} id="work" className="py-16 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Section header */}
        <motion.div style={{ y: headerY, opacity: headerOpacity }} className="mb-10 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">03 / Work</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2 className="font-display font-extrabold text-3xl md:text-7xl text-foreground">
              Selected <span className="text-gradient">Projects</span>
            </h2>
            <span className="font-handwritten text-xl md:text-2xl text-secondary rotate-[-2deg]">
              things I've built ✦
            </span>
          </div>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {projects.map((project, index) => {
            // Make featured projects span 2 cols on desktop
            const isFeatured = project.featured;
            const colSpan = isFeatured ? "md:col-span-2" : "col-span-1";
            const rowSpan = isFeatured ? "md:row-span-2" : "row-span-1";

            return (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 4) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`${colSpan} ${rowSpan} relative group rounded-xl md:rounded-2xl overflow-hidden cursor-pointer`}
              >
                {/* Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "scale-100 saturate-[0.3]"
                      : "group-hover:scale-110 saturate-100"
                  }`}
                  loading="lazy"
                />

                {/* Gradient overlay — always visible on mobile, hover on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent md:from-foreground/0 md:via-foreground/0 md:to-transparent md:group-hover:from-foreground/80 md:group-hover:via-foreground/30 transition-all duration-500" />

                {/* Project number */}
                <span className="absolute top-3 left-3 md:top-4 md:left-4 font-mono text-[10px] md:text-xs text-primary-foreground/60 md:text-foreground/40 md:group-hover:text-primary-foreground/60 transition-colors bg-foreground/20 md:bg-muted/60 md:group-hover:bg-foreground/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Arrow icon */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary-foreground/20 md:bg-transparent md:group-hover:bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary-foreground" />
                </div>

                {/* Info — bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <p className="font-handwritten text-xs md:text-sm text-accent md:text-accent/0 md:group-hover:text-accent transition-colors duration-300">
                        {project.category}
                      </p>
                      <h3 className="font-display font-bold text-sm md:text-lg text-primary-foreground md:text-primary-foreground/0 md:group-hover:text-primary-foreground transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    {/* Tech pills — desktop only */}
                    <div className="hidden md:flex gap-1 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] rounded-full bg-primary-foreground/15 text-primary-foreground/80 backdrop-blur-sm font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 md:mt-12 flex justify-center"
        >
          <a
            href="https://github.com/vp007-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-foreground/15 hover:border-primary hover:bg-primary/5 font-display text-sm font-semibold uppercase tracking-wider text-foreground transition-all duration-300"
          >
            View All on GitHub
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkGrid;
