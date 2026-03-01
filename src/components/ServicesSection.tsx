import { motion } from "framer-motion";
import { Code2, Gamepad2, Brain, Globe, Cpu, Rocket } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description: "Modern, performant web apps with React, Next.js, TypeScript, and Node.js. From landing pages to complex SaaS platforms.",
    tags: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Interactive browser games and immersive experiences using PhaserJS, Unity, SDL2, and WebGL. From concept to deployment.",
    tags: ["Unity", "PhaserJS", "SDL2", "C#"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent systems — from computer vision and NLP to predictive models. Python-powered AI solutions for real-world problems.",
    tags: ["Python", "TensorFlow", "OpenCV", "ML"],
  },
  {
    icon: Globe,
    title: "Open Source Contributions",
    description: "Active contributor to projects like Simple Icons. Building tools and libraries that benefit the developer community.",
    tags: ["Git", "GitHub", "Community", "OSS"],
  },
  {
    icon: Cpu,
    title: "IoT & Embedded Systems",
    description: "Hardware meets software — Arduino, embedded vision, smart surveillance, and automation systems with real-time processing.",
    tags: ["Arduino", "C", "NASM", "Embedded"],
  },
  {
    icon: Rocket,
    title: "Creative & Research Projects",
    description: "Pushing boundaries at the intersection of code and science — space simulations, physics research, and experimental tech.",
    tags: ["NASA", "Space", "Research", "WebGL"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16 gap-4">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold text-3xl md:text-7xl text-primary"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-handwritten text-xl md:text-2xl text-muted-foreground max-w-md"
          >
            What I bring to the table — from pixels to production
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group bg-card border border-border rounded-xl md:rounded-2xl p-6 md:p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-display font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
