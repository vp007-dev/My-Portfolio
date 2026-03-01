import { useEffect, useRef } from "react";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add("shadow-md", "bg-background/90", "backdrop-blur-md");
        } else {
          navRef.current.classList.remove("shadow-md", "bg-background/90", "backdrop-blur-md");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Work", "About", "Contact"];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#" className="font-display font-extrabold text-xl tracking-tight text-foreground">
          VP<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link text-foreground">
              {link}
            </a>
          ))}
        </div>
        <a
          href="mailto:vanshpandey@gmail.com"
          className="nav-link text-foreground hidden md:block"
        >
          Say Hello
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
