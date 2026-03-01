import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
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
  { img: work1, title: "CRUISE 2K26", category: "College Fest", link: "https://github.com/vp007-dev" },
  { img: work2, title: "Vidhya Swaroop", category: "NGO Website", link: "https://github.com/vp007-dev/Vidhya-Swaroop" },
  { img: work3, title: "Savera", category: "AI / Utility", link: "https://github.com/vp007-dev/Savera" },
  { img: work4, title: "Moon Treasures", category: "E-Commerce", link: "https://github.com/vp007-dev" },
  { img: work5, title: "BECONIX", category: "Startup / Brand", link: "https://github.com/vp007-dev/BECONIX" },
  { img: work6, title: "BEACON", category: "AI & IoT", link: "https://github.com/vp007-dev/BEACON" },
  { img: work7, title: "LifeLink", category: "Emergency SOS", link: "https://github.com/vp007-dev/LifeLink" },
  { img: work8, title: "E-Invitation", category: "Interactive Web", link: "https://github.com/vp007-dev" },
  { img: work9, title: "GovGuard", category: "Civic Tech", link: "https://github.com/vp007-dev/GovGuard" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: (i % 3) * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const WorkGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerLeftX = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
  const headerRightX = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={sectionRef} id="work" className="py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Section headers with parallax slide-in */}
        <div className="flex items-center justify-between mb-8 md:mb-16 overflow-hidden">
          <motion.h2
            style={{ x: headerLeftX, opacity: headerOpacity }}
            className="font-display font-extrabold text-2xl md:text-6xl text-primary"
          >
            My Projects
          </motion.h2>
          <motion.h2
            style={{ x: headerRightX, opacity: headerOpacity }}
            className="font-display font-extrabold text-2xl md:text-6xl text-secondary"
          >
            Real Work
          </motion.h2>
        </div>

        {/* Mobile: 2-col compact grid | Desktop: 3-col */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="work-card group block"
            >
              {/* Mobile: shorter aspect ratio for breathing room */}
              <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-lg md:rounded-xl bg-muted">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Desktop: hover overlay */}
                <div className="hidden md:flex absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 items-end p-6">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <p className="font-handwritten text-lg text-accent">{project.category}</p>
                    <h3 className="font-display font-bold text-xl text-primary-foreground">{project.title}</h3>
                  </div>
                </div>
              </div>

              {/* Mobile: always-visible label below image */}
              <div className="md:hidden mt-2 mb-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-sm text-foreground leading-tight">{project.title}</h3>
                    <p className="font-handwritten text-xs text-muted-foreground">{project.category}</p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
