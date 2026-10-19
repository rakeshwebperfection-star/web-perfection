"use client";

import React, { useEffect, useState } from "react";
import "@/assets/css/header.css";

function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

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
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown((current) => (current === name ? "" : name));
  };

  return (
    <header className="header">
      {/* Logo */}
      <a href="/" className="logo" aria-label="Home">
        <img src="https://webperfection.co.in/img/logowhite.png" alt="Logo" className="logo-icon" />
      </a>

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

        <a href="/" className="nav-link active" onClick={closeMenu}>Home</a>

        {/* About Dropdown */}
        <div className={`nav-item has-dropdown ${openDropdown === "about" ? "dropdown-open" : ""}`}>
          <div className="nav-item-heading">
            <a href="/about" className="nav-link" onClick={closeMenu}>About Us</a>

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
            <a href="/about" onClick={closeMenu}>About Us</a>
            <a href="/our-team" onClick={closeMenu}>Our Team</a>
            <a href="/mission" onClick={closeMenu}>Our Mission</a>
          </div>
        </div>

        {/* Services Dropdown */}
        <div className={`nav-item has-dropdown ${openDropdown === "services" ? "dropdown-open" : ""}`}>
          <div className="nav-item-heading">
            <a href="/services" className="nav-link" onClick={closeMenu}>Services</a>

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
            <a href="/services" onClick={closeMenu}>All Services</a>
            <a href="/web-development" onClick={closeMenu}>Web Development</a>
            <a href="/digital-marketing" onClick={closeMenu}>Digital Marketing</a>
            <a href="/ui-ux-design" onClick={closeMenu}>UI/UX Design</a>
          </div>
        </div>

        <a href="/career" className="nav-link" onClick={closeMenu}>Career</a>

        <a href="/blog" className="nav-link" onClick={closeMenu}>Blog</a>

        <a href="/contact" className="nav-link" onClick={closeMenu}>Contact Us</a>

        {/* Quote Button Inside Mobile Sidebar */}
        <a href="/contact" className="quote-btn mobile-quote" onClick={closeMenu}>
          <span>Get A Quote</span>
        </a>
      </nav>

      {/* Desktop Quote Button */}
      <a href="/contact" className="quote-btn desktop-quote">
        <span>Get A Quote</span>
      </a>

      {/* Scroll Progress */}
      <div className="scroll-progress-track">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>
    </header>
  );
}

export default Header;
