import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";

const SplineRobotSection = () => {
  return (
    <section className="py-16 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <Card className="w-full rounded-2xl md:rounded-3xl border border-border/50 bg-navy/95 relative overflow-hidden min-h-[400px] md:min-h-[500px]">
          <Spotlight
            className="z-10 from-primary/20 via-primary/10 to-transparent"
            size={300}
          />

          <div className="flex flex-col md:flex-row h-full min-h-[400px] md:min-h-[500px]">
            {/* Left content */}
            <div className="flex-1 p-6 md:p-12 relative z-10 flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-display text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4"
              >
                Let's Build
                <br />
                <span className="text-gradient">Something Cool</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary-foreground/60 text-sm md:text-base max-w-md leading-relaxed"
              >
                I bring ideas to life with clean code and creative vision.
                From interactive 3D experiences to full-stack platforms —
                let's create something extraordinary together.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 flex gap-3"
              >
                <a
                  href="mailto:vanshpandey@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-display text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary-foreground/20 text-primary-foreground/80 font-display text-sm font-semibold uppercase tracking-wider hover:border-primary-foreground/40 transition-colors"
                >
                  See Work
                </a>
              </motion.div>
            </div>

            {/* Right content - 3D Robot */}
            <div className="flex-1 relative min-h-[280px] md:min-h-full">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SplineRobotSection;
