import { useEffect, useRef, useState } from "react";
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

const WorkGrid = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section headers like reference */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-primary">
            Frontend Dev
          </h2>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-secondary">
            Full Stack
          </h2>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`work-card group transition-all duration-700 ${
                visibleItems.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
