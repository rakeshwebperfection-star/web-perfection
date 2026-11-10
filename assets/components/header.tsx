"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "@/assets/css/header.css";
import Link from "next/link";
import Image from "next/image";

function HeaderContent({ pathname }: { pathname: string }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [suppressHover, setSuppressHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollableHeight > 0
          ? (window.scrollY / scrollableHeight) * 100
          : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Lock background scroll while sidebar is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setOpenDropdown("");
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown("");
    setSuppressHover(true); // click ke baad hover-open block
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown((current) => (current === name ? "" : name));
  };

  return (
    <header className="header">
      {/* Logo */}
      <Link href="/" className="logo" aria-label="Home">
        <Image src="https://webperfection.co.in/img/logowhite.png" alt="Logo" className="logo-icon" width={180} height={60} />
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Sidebar Backdrop */}
      <div className={`menu-backdrop ${menuOpen ? "show" : ""}`} onClick={closeMenu} aria-hidden="true" />

      {/* Navigation Sidebar */}
      <nav id="primary-navigation" className={`nav-menu ${menuOpen ? "menu-open" : ""}`} aria-label="Main navigation" aria-hidden={!menuOpen && undefined}>
        <button type="button" className="sidebar-close" onClick={closeMenu} aria-label="Close navigation menu">&times;</button>

        <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`} onClick={closeMenu}>Home</Link>

        {/* About Dropdown */}
        <div className={`nav-item has-dropdown ${openDropdown === "about" ? "dropdown-open" : ""} ${suppressHover ? "no-hover" : ""}`} onMouseLeave={() => setSuppressHover(false)}>
          <div className="nav-item-heading">
            <Link href="/about" className={`nav-link ${pathname === "/about" || pathname === "/testimonial" ? "active" : ""}`} onClick={closeMenu}>About Us</Link>

            <button
              type="button"
              className="dropdown-toggle"
              aria-label="Toggle About Us submenu"
              aria-expanded={openDropdown === "about"}
              onClick={() => toggleDropdown("about")}
            >
              <span className="arrow"></span>
            </button>
          </div>

          <div className="dropdown-menu">
            <Link href="/portfolio" onClick={closeMenu}>Portfolio</Link>
            <Link href="/testimonial" className={pathname === "/testimonial" ? "active" : ""} aria-current={pathname === "/testimonial" ? "page" : undefined} onClick={closeMenu}>Testimonial</Link>
          </div>
        </div>

        {/* Services Dropdown */}
        <div className={`nav-item has-dropdown ${openDropdown === "services" ? "dropdown-open" : ""} ${suppressHover ? "no-hover" : ""}`} onMouseLeave={() => setSuppressHover(false)} >
          <div className="nav-item-heading">
            <Link href="/services" className={`nav-link ${pathname.startsWith("/services") ? "active" : ""}`} onClick={closeMenu}>Services</Link>

            <button
              type="button"
              className="dropdown-toggle"
              aria-label="Toggle Service submenu"
              aria-expanded={openDropdown === "services"}
              onClick={() => toggleDropdown("services")}
            >
              <span className="arrow"></span>
            </button>
          </div>

          <div className="dropdown-menu">
            <Link href="/services/ui-ux-design" className={pathname === "/services/ui-ux-design" ? "active" : ""} aria-current={pathname === "/services/ui-ux-design" ? "page" : undefined} onClick={closeMenu}>UI/UX Design</Link>
            <Link href="/services/web-development" className={pathname === "/services/web-development" ? "active" : ""} aria-current={pathname === "/services/web-development" ? "page" : undefined} onClick={closeMenu}>Web Development</Link>
            <Link href="/services/app-development" className={pathname === "/services/app-development" ? "active" : ""} aria-current={pathname === "/services/app-development" ? "page" : undefined} onClick={closeMenu}>App Development</Link>
            <Link href="/services/software-testing" className={pathname === "/services/software-testing" ? "active" : ""} aria-current={pathname === "/services/software-testing" ? "page" : undefined} onClick={closeMenu}>Software Testing</Link>
            <Link href="/services/content-writing" className={pathname === "/services/content-writing" ? "active" : ""} aria-current={pathname === "/services/content-writing" ? "page" : undefined} onClick={closeMenu}>Content Writing</Link>
            <Link href="/services/gmb-optimization" className={pathname === "/services/gmb-optimization" ? "active" : ""} aria-current={pathname === "/services/gmb-optimization" ? "page" : undefined} onClick={closeMenu}>GMB Optimization</Link>
            <Link href="/services/social-media-optimization" className={pathname === "/services/social-media-optimization" ? "active" : ""} aria-current={pathname === "/services/social-media-optimization" ? "page" : undefined} onClick={closeMenu}>Social Media Optimization</Link>
            <Link href="/services/search-engine-optimization" className={pathname === "/services/search-engine-optimization" ? "active" : ""} aria-current={pathname === "/services/search-engine-optimization" ? "page" : undefined} onClick={closeMenu}>Search Engine Optimization</Link>
          </div>
        </div>

        <Link href="/career" className={`nav-link ${pathname === "/career" ? "active" : ""}`} onClick={closeMenu}>Career</Link>

        <Link href="/blog" className={`nav-link ${pathname === "/blog" ? "active" : ""}`} onClick={closeMenu}>Blog</Link>

        <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`} onClick={closeMenu}>Contact Us</Link>

        {/* Quote Button Inside Mobile Sidebar */}
        <Link href="/get-a-quote" className="quote-btn mobile-quote" onClick={closeMenu}>
          <span>Get A Quote</span>
        </Link>
      </nav>

      {/* Desktop Quote Button */}
      <Link href="/get-a-quote" className="quote-btn desktop-quote">
        <span>Get A Quote</span>
      </Link>

      {/* Scroll Progress */}
      <div className="scroll-progress-track">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>
    </header>
  );
}

function Header() {
  const pathname = usePathname();

  return <HeaderContent key={pathname} pathname={pathname} />;
}

export default Header;
