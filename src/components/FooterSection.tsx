const FooterSection = () => {
  const leftLinks = [
    { label: "GITHUB", href: "#" },
    { label: "PROJECTS", href: "#work" },
    { label: "BLOG", href: "#" },
    { label: "RESUME", href: "#" },
  ];

  const rightLinks = [
    { label: "TWITTER", href: "#" },
    { label: "LINKEDIN", href: "#" },
    { label: "DRIBBBLE", href: "#" },
    { label: "DEVTO", href: "#" },
  ];

  return (
    <footer id="contact" className="section-blue py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Links grid */}
        <div className="grid grid-cols-2 gap-12 mb-20">
          <div>
            <p className="font-handwritten text-xl text-primary-foreground/60 mb-6">Explore</p>
            <div className="flex flex-col gap-3">
              {leftLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer-link text-primary-foreground">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="text-right">
            <p className="font-handwritten text-xl text-primary-foreground/60 mb-6">Social</p>
            <div className="flex flex-col gap-3 items-end">
              {rightLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer-link text-primary-foreground">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="text-center border-t border-primary-foreground/20 pt-12">
          <a
            href="mailto:vanshpandey@gmail.com"
            className="font-display font-extrabold text-2xl md:text-5xl text-primary-foreground hover:text-accent transition-colors duration-300"
          >
            vanshpandey@gmail.com
          </a>
          <p className="text-primary-foreground/50 text-sm mt-6 font-body">
            © {new Date().getFullYear()} Vansh Pandey. Built with React & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
