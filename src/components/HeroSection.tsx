import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-12">
      {/* Decorative dots */}
      <div className="absolute top-32 left-8 w-3 h-3 rounded-full bg-primary opacity-60 animate-float" />
      <div className="absolute top-48 right-12 w-2 h-2 rounded-full bg-secondary opacity-50 animate-float-delay" />
      <div className="absolute bottom-40 left-1/4 w-4 h-4 rounded-full bg-accent opacity-40 animate-float" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Handwritten labels */}
        <div className="flex items-center gap-6 mb-2">
          <span className="font-handwritten text-2xl md:text-3xl text-primary animate-slide-up">
            Full-Stack Developer
          </span>
          <span className="font-handwritten text-2xl md:text-3xl text-secondary animate-slide-up-delay">
            Space Enthusiast
          </span>
        </div>

        {/* Big Name */}
        <h1 className="font-brush text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.9] tracking-tight text-foreground animate-slide-up">
          Vansh
          <br />
          <span className="text-gradient">Pandey</span>
        </h1>

        {/* Subtitle labels */}
        <div className="flex items-center gap-6 mt-4">
          <span className="font-handwritten text-xl md:text-2xl text-muted-foreground animate-slide-up-delay">
            React • TypeScript • Node.js
          </span>
        </div>

        {/* Quote */}
        <div className="mt-8 max-w-md animate-slide-up-delay-2">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            &ldquo;Building digital experiences that merge clean code with creative vision. Turning complex problems into elegant, scalable solutions.&rdquo;
          </p>
        </div>
      </div>

      {/* Hero illustration */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-8">
        <div className="relative rounded-2xl overflow-hidden hover-lift">
          <img
            src={heroImg}
            alt="Developer workspace illustration"
            className="w-full h-auto object-cover rounded-2xl"
            loading="eager"
          />
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="mt-16 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="marquee-text mx-8">
              Developer • Creator • Builder •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
