import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  { img: work1, title: "Analytics Dashboard", category: "Web App" },
  { img: work2, title: "Mobile Commerce", category: "React Native" },
  { img: work3, title: "API Gateway", category: "Backend" },
  { img: work4, title: "Launch Platform", category: "Full Stack" },
  { img: work5, title: "DevTools Suite", category: "Open Source" },
  { img: work6, title: "Neural Engine", category: "AI / ML" },
  { img: work7, title: "Cloud Infra", category: "DevOps" },
  { img: work8, title: "Creative Lab", category: "WebGL" },
  { img: work9, title: "Web3 Protocol", category: "Blockchain" },
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
    <section ref={sectionRef} id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section headers with parallax slide-in */}
        <div className="flex items-center justify-between mb-16 overflow-hidden">
          <motion.h2
            style={{ x: headerLeftX, opacity: headerOpacity }}
            className="font-display font-extrabold text-4xl md:text-6xl text-primary"
          >
            Frontend Dev
          </motion.h2>
          <motion.h2
            style={{ x: headerRightX, opacity: headerOpacity }}
            className="font-display font-extrabold text-4xl md:text-6xl text-secondary"
          >
            Full Stack
          </motion.h2>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="work-card group"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-end p-6">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <p className="font-handwritten text-lg text-accent">{project.category}</p>
                    <h3 className="font-display font-bold text-xl text-primary-foreground">{project.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
