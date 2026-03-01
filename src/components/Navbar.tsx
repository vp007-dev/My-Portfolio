import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
    <motion.nav
      ref={navRef}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#" className="font-display font-extrabold text-xl tracking-tight text-foreground">
          VP<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="nav-link text-foreground"
            >
              {link}
            </motion.a>
          ))}
        </div>
        <motion.a
          href="mailto:vanshpandey@gmail.com"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="nav-link text-foreground hidden md:block"
        >
          Say Hello
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
