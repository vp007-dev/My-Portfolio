import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ArrowUpRight, Mail, Github, Linkedin, Twitter } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

export function Component() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Scroll-aware header
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add("scrolled");
        } else {
          headerRef.current.classList.remove("scrolled");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial Setup & Hover Effects
  useEffect(() => {
    if (!containerRef.current) return;

    try {
      if (!gsap.parseEase("main")) {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
        gsap.defaults({ ease: "main", duration: 0.7 });
      }
    } catch (e) {
      console.warn("CustomEase failed to load, falling back to default.", e);
      gsap.defaults({ ease: "power2.out", duration: 0.7 });
    }

    const ctx = gsap.context(() => {
      const menuItems = containerRef.current!.querySelectorAll(".menu-list-item[data-shape]");
      const shapesContainer = containerRef.current!.querySelector(".ambient-background-shapes");

      menuItems.forEach((item) => {
        const shapeIndex = item.getAttribute("data-shape");
        const shape = shapesContainer
          ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`)
          : null;

        if (!shape) return;

        const shapeEls = shape.querySelectorAll(".shape-element");

        const onEnter = () => {
          if (shapesContainer) {
            shapesContainer.querySelectorAll(".bg-shape").forEach((s) => s.classList.remove("active"));
          }
          shape.classList.add("active");
          gsap.fromTo(
            shapeEls,
            { scale: 0.5, opacity: 0, rotation: -10 },
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "back.out(1.7)",
              overwrite: "auto",
            }
          );
        };

        const onLeave = () => {
          gsap.to(shapeEls, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => shape.classList.remove("active"),
            overwrite: "auto",
          });
        };

        item.addEventListener("mouseenter", onEnter);
        item.addEventListener("mouseleave", onLeave);

        (item as any)._cleanup = () => {
          item.removeEventListener("mouseenter", onEnter);
          item.removeEventListener("mouseleave", onLeave);
        };
      });
    }, containerRef);

    return () => {
      ctx.revert();
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll(".menu-list-item[data-shape]");
        items.forEach((item: any) => item._cleanup && item._cleanup());
      }
    };
  }, []);

  // Menu Open/Close Animation
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper");
      const menu = containerRef.current!.querySelector(".menu-content");
      const overlay = containerRef.current!.querySelector(".overlay");
      const bgPanels = containerRef.current!.querySelectorAll(".backdrop-layer");
      const menuLinks = containerRef.current!.querySelectorAll(".menu-content .nav-link");
      const fadeTargets = containerRef.current!.querySelectorAll("[data-menu-fade]");
      const menuButton = containerRef.current!.querySelector(".nav-close-btn");
      const menuButtonTexts = menuButton?.querySelectorAll("p");
      const menuButtonIcon = menuButton?.querySelector(".menu-button-icon");

      const tl = gsap.timeline();

      if (isMenuOpen) {
        if (navWrap) navWrap.setAttribute("data-nav", "open");

        tl.set(navWrap, { display: "block" })
          .set(menu, { xPercent: 0 }, "<")
          .fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.2 })
          .fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315 }, "<")
          .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
          .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
          .fromTo(
            menuLinks,
            { yPercent: 140, rotate: 10 },
            { yPercent: 0, rotate: 0, stagger: 0.05 },
            "<+=0.35"
          );

        if (fadeTargets.length) {
          tl.fromTo(
            fadeTargets,
            { autoAlpha: 0, yPercent: 50 },
            { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all" },
            "<+=0.2"
          );
        }
      } else {
        if (navWrap) navWrap.setAttribute("data-nav", "closed");

        tl.to(overlay, { autoAlpha: 0 })
          .to(menu, { xPercent: 120 }, "<")
          .to(menuButtonTexts, { yPercent: 0 }, "<")
          .to(menuButtonIcon, { rotate: 0 }, "<")
          .set(navWrap, { display: "none" });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isMenuOpen]);

  // Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { label: "Work", href: "#work", shape: "1" },
    { label: "About", href: "#about", shape: "2" },
    { label: "Process", href: "#services", shape: "3" },
    { label: "Blog", href: "/blog", shape: "4", isRoute: true },
    { label: "Contact", href: "#contact", shape: "5" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:vanshpandey@gmail.com", label: "Email" },
  ];

  return (
    <div ref={containerRef} className="kinetic-nav-container">
      {/* Top Header Bar */}
      <header ref={headerRef} className="kinetic-header">
        <div className="kinetic-header-inner">
          <div className="kinetic-header-content">
            <div className="kinetic-header-left">
              <a href="#" className="kinetic-logo">
                VP<span className="text-primary">.</span>
              </a>

              {/* Center: Say Hello link */}
              <a
                href="mailto:vanshpandey@gmail.com"
                className="kinetic-hello hidden md:flex items-center gap-2 font-display text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Say Hello
              </a>

              {/* Menu Toggle Button */}
              <button
                onClick={toggleMenu}
                className="nav-close-btn group"
                aria-label="Toggle menu"
              >
                <div className="menu-btn-text-wrap">
                  <p className="text-xs uppercase tracking-widest font-display font-semibold">Menu</p>
                  <p className="text-xs uppercase tracking-widest font-display font-semibold">Close</p>
                </div>

                <div className="menu-button-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="9" y1="0" x2="9" y2="18" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="0" y1="9" x2="18" y2="9" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Nav Overlay */}
      <div className="nav-overlay-wrapper" data-nav="closed" style={{ display: "none" }}>
        <div className="nav-overlay-inner">
          {/* Click-to-close overlay */}
          <div className="overlay" onClick={closeMenu} />

          <div className="menu-content">
            {/* Backdrop panels for animation */}
            <div className="backdrop-layer" />
            <div className="backdrop-layer" />
            <div className="backdrop-layer" />

            {/* Abstract shapes container */}
            <div className="ambient-background-shapes">
              {/* Shape 1: Floating circles */}
              <div className="bg-shape bg-shape-1">
                <div className="shape-element w-20 h-20 rounded-full bg-primary/15 absolute top-[8%] left-[8%] blur-sm" />
                <div className="shape-element w-12 h-12 rounded-full bg-secondary/20 absolute top-[28%] left-[22%]" />
                <div className="shape-element w-8 h-8 rounded-full bg-accent/25 absolute top-[55%] left-[12%]" />
                <div className="shape-element w-14 h-14 rounded-full bg-primary/10 absolute top-[75%] left-[18%] blur-sm" />
              </div>

              {/* Shape 2: Wave lines */}
              <div className="bg-shape bg-shape-2">
                <div className="shape-element w-40 h-[2px] bg-gradient-to-r from-primary/30 to-transparent absolute top-[18%] left-[3%] rotate-6" />
                <div className="shape-element w-28 h-[2px] bg-gradient-to-r from-secondary/25 to-transparent absolute top-[48%] left-[8%] -rotate-3" />
              </div>

              {/* Shape 3: Grid dots */}
              <div className="bg-shape bg-shape-3">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="shape-element w-1.5 h-1.5 rounded-full bg-foreground/10 absolute"
                    style={{
                      top: `${15 + Math.floor(i / 5) * 22}%`,
                      left: `${4 + (i % 5) * 7}%`,
                    }}
                  />
                ))}
              </div>

              {/* Shape 4: Organic blobs */}
              <div className="bg-shape bg-shape-4">
                <div className="shape-element w-24 h-24 rounded-[40%] bg-accent/10 absolute top-[18%] left-[8%] rotate-45 blur-md" />
                <div className="shape-element w-16 h-16 rounded-[50%] bg-primary/8 absolute top-[58%] left-[18%] -rotate-12 blur-sm" />
              </div>

              {/* Shape 5: Diagonal lines */}
              <div className="bg-shape bg-shape-5">
                <div className="shape-element w-28 h-[1px] bg-foreground/10 absolute top-[12%] left-[4%] rotate-45" />
                <div className="shape-element w-22 h-[1px] bg-foreground/10 absolute top-[38%] left-[10%] rotate-45" />
                <div className="shape-element w-18 h-[1px] bg-foreground/10 absolute top-[62%] left-[6%] rotate-45" />
              </div>
            </div>

            {/* Menu Links */}
            <nav className="menu-links-wrapper">
              <ul className="menu-links-list">
                {menuItems.map((item, index) => (
                  <li
                    key={item.label}
                    className="menu-list-item"
                    data-shape={item.shape}
                  >
                    <a
                      href={item.href}
                      className="nav-link group"
                      onClick={(e) => {
                        e.preventDefault();
                        closeMenu();
                        if ((item as any).isRoute) {
                          navigate(item.href);
                        } else {
                          const el = document.querySelector(item.href);
                          if (el) {
                            setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 600);
                          }
                        }
                      }}
                    >
                      <span className="nav-link-number font-display">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="nav-link-text font-display">
                        {item.label}
                      </span>
                      <ArrowUpRight className="nav-link-arrow" />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Bottom section: Social links */}
              <div className="menu-bottom" data-menu-fade>
                <div className="menu-bottom-divider" />
                <div className="menu-bottom-content">
                  <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                    Connect
                  </span>
                  <div className="menu-social-links">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="menu-social-link"
                        aria-label={social.label}
                        onClick={closeMenu}
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 font-body">
                  © 2026 Vansh Pandey. All rights reserved.
                </p>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
