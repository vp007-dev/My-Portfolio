import { useEffect, useRef, useState } from "react";
import featuredImg from "@/assets/featured-work.png";

const FeaturedWork = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-handwritten text-4xl md:text-6xl text-primary text-center mb-12">
          Featured Work
        </h2>

        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="relative max-w-3xl mx-auto hover-lift rounded-2xl overflow-hidden">
            <img
              src={featuredImg}
              alt="Featured project showcase"
              className="w-full h-auto rounded-2xl"
              loading="lazy"
            />
          </div>
          <p className="text-center text-muted-foreground mt-6 font-handwritten text-xl">
            Full-Stack SaaS Platform • React • Node.js • PostgreSQL
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
