import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { TextScramble } from "@/components/ui/text-scramble";

const AsciiArt = () => {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:flex border border-border rounded-2xl bg-card/60 backdrop-blur-sm shadow-sm shrink-0 items-center justify-center overflow-hidden"
      style={{ width: 380, height: 380 }}
    >
      <pre className="text-[0.72rem] xl:text-[0.78rem] leading-[1.4] font-mono text-foreground/70 select-none whitespace-pre p-5">
{`$ ./build_future                    v2.0.1

╦  ╦╔═╗╔╗╔╔═╗╦ ╦   ╔═╗╔═╗╔╗╔╔╦╗╔═╗╦ ╦
╚╗╔╝╠═╣║║║╚═╗╠═╣   ╠═╝╠═╣║║║ ║║║╣ ╚╦╝
 ╚╝ ╩ ╩╝╚╝╚═╝╩ ╩   ╩  ╩ ╩╝╚╝═╩╝╚═╝ ╩

> compiling............. ✓   ████░░ 72%
> linking modules....... ✓   ██████ done
> optimizing AST........ ✓   ██████ done
> deploying build....... ✓   ██████ done

┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐
│  01  │──│  fn  │──│  ()  │──│  >>  │
└──┬───┘  └──┬───┘  └──┬───┘  └──┬───┘
   │         │         │         │
┌──▼───┐  ┌──▼───┐  ┌──▼───┐  ┌──▼───┐
│  {}  │──│  =>  │──│  ██  │──│  ✓!  │
└──────┘  └──────┘  └──────┘  └──────┘

status: online${cursorVisible ? "█" : " "}        mem: 128MB | cpu: 3%`}
      </pre>
    </motion.div>
  );
};

const phrases = [
  "Building immersive digital experiences",
  "Merging code with creativity & science",
  "From games to AI-driven platforms",
  "NASA Space Apps • Open Source • IoT",
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [trigger, setTrigger] = useState(true);

  const handleScrambleComplete = useCallback(() => {
    setTimeout(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      setTrigger(false);
      requestAnimationFrame(() => setTrigger(true));
    }, 2000);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const dotsY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Stagger letter animation for the name
  const firstNameLetters = "Vansh".split("");
  const lastNameLetters = "Pandey".split("");

  return (
    <section ref={sectionRef} className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-4 md:pb-12">
      {/* Ambient floating dots */}
      <motion.div style={{ y: dotsY }} className="hidden md:block absolute top-32 left-8 w-3 h-3 rounded-full bg-primary opacity-60 animate-float" />
      <motion.div style={{ y: dotsY }} className="hidden md:block absolute top-48 right-12 w-2 h-2 rounded-full bg-secondary opacity-50 animate-float-delay" />
      <motion.div style={{ y: dotsY }} className="hidden md:block absolute bottom-40 left-1/4 w-4 h-4 rounded-full bg-accent opacity-40 animate-float" />

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[45%] left-0 right-0 h-[1px] bg-border/40 origin-left hidden md:block"
      />

      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl mx-auto px-4 md:px-12 w-full relative z-10">
        {/* Subtitle tags */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-primary/30 bg-primary/5 font-display text-xs md:text-sm font-medium text-primary tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Full-Stack Developer
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-secondary/30 bg-secondary/5 font-display text-xs md:text-sm font-medium text-secondary tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Game Dev & AI/ML
          </motion.span>
        </div>

        {/* Name + ASCII art row */}
        <div className="flex items-center justify-between gap-6 lg:gap-10">
          {/* Main name — creative mixed typography */}
          <h1 className="flex-1 relative">
            {/* First name — outlined stroke style */}
            <span className="block relative">
              <span className="block text-[4.5rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] font-brush font-black leading-[0.85] tracking-tight">
                {firstNameLetters.map((letter, i) => (
                  <motion.span
                    key={`f-${i}`}
                    initial={{ opacity: 0, y: 100, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.3 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block hero-stroke-text"
                    style={{ transformOrigin: "bottom" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              {/* Decorative accent line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -right-2 md:right-4 top-1/2 -translate-y-1/2 w-16 md:w-24 h-1 md:h-1.5 bg-secondary rounded-full origin-left hidden sm:block"
              />
            </span>

            {/* Last name — filled gradient with glow */}
            <span className="block text-[4.5rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] font-brush font-black leading-[0.85] tracking-tight relative">
              {lastNameLetters.map((letter, i) => (
                <motion.span
                  key={`l-${i}`}
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.6 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block text-gradient"
                  style={{ transformOrigin: "bottom" }}
                >
                  {letter}
                </motion.span>
              ))}
              {/* Handwritten role annotation */}
              <motion.span
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 right-0 md:-bottom-10 lg:-bottom-12 md:right-8 font-handwritten text-lg md:text-3xl text-secondary whitespace-nowrap"
              >
                ← that's me!
              </motion.span>
            </span>
          </h1>

          {/* ASCII art on right */}
          <div className="hidden lg:flex items-center shrink-0">
            <AsciiArt />
          </div>
        </div>

        {/* Tech stack + scramble text row */}
        <div className="mt-5 md:mt-8 flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-1.5 md:gap-2"
          >
            {["React", "Next.js", "Python", "C++", "Unity"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 md:px-3 md:py-1 rounded border border-border/60 bg-muted/40 font-body text-[10px] md:text-xs text-muted-foreground tracking-wide"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="h-8 md:h-10 flex items-center"
          >
            <span className="text-muted-foreground/40 mr-3 hidden md:inline">—</span>
            <TextScramble
              as="span"
              trigger={trigger}
              duration={1}
              speed={0.03}
              onScrambleComplete={handleScrambleComplete}
              className="text-foreground text-sm md:text-base font-display font-medium leading-relaxed"
            >
              {phrases[phraseIndex]}
            </TextScramble>
          </motion.div>
        </div>
      </motion.div>



      {/* Marquee */}
      <motion.div style={{ x: marqueeX }} className="mt-8 md:mt-16 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="marquee-text mx-3 md:mx-8 !text-[2.5rem] md:!text-[8rem] lg:!text-[12rem]">Developer • Creator • Builder •</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
