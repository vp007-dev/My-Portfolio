import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const FooterSection = () => {
  const leftLinks = [
    { label: "GITHUB", href: "https://github.com/vp007-dev" },
    { label: "PROJECTS", href: "#work" },
    { label: "BLOG", href: "/blog", isRoute: true },
    { label: "ORCID", href: "https://orcid.org/0009-0005-1975-6363" },
  ];

  const rightLinks = [
    { label: "TWITTER / X", href: "https://twitter.com/Vp007" },
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/vansh-pandey-502451319/" },
    { label: "PORTFOLIO", href: "https://vanshcreates.me" },
    { label: "SIMPLE ICONS", href: "https://github.com/simple-icons/simple-icons" },
  ];

  return (
    <footer id="contact" className="section-blue py-14 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Links grid */}
        <div className="grid grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-handwritten text-lg md:text-xl text-primary-foreground/60 mb-4 md:mb-6"
            >
              Explore
            </motion.p>
            <div className="flex flex-col gap-2 md:gap-3">
              {leftLinks.map((link, i) => {
                const MotionEl = link.isRoute ? motion(Link) : motion.a;
                const linkProps = link.isRoute
                  ? { to: link.href }
                  : { href: link.href, target: link.href.startsWith("http") ? "_blank" : undefined, rel: link.href.startsWith("http") ? "noopener noreferrer" : undefined };
                return (
                  <MotionEl
                    key={link.label}
                    {...(linkProps as any)}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    className="footer-link text-primary-foreground !text-base md:!text-2xl"
                  >
                    {link.label}
                  </MotionEl>
                );
              })}
            </div>
          </div>
          <div className="text-right">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-handwritten text-lg md:text-xl text-primary-foreground/60 mb-4 md:mb-6"
            >
              Social
            </motion.p>
            <div className="flex flex-col gap-2 md:gap-3 items-end">
              {rightLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: -8, transition: { duration: 0.2 } }}
                  className="footer-link text-primary-foreground !text-base md:!text-2xl"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center border-t border-primary-foreground/20 pt-8 md:pt-12"
        >
          <a
            href="mailto:vansh@vanshcreates.me"
            className="font-display font-extrabold text-lg md:text-5xl text-primary-foreground hover:text-accent transition-colors duration-300 break-all md:break-normal"
          >
            vansh@vanshcreates.me
          </a>
          <p className="text-primary-foreground/50 text-xs md:text-sm mt-4 md:mt-6 font-body">
            © {new Date().getFullYear()} Vansh Pandey. Built with React & TypeScript.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
