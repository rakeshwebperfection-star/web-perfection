
import React from "react";
import "@/assets/css/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICE", href: "/services" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT US", href: "/contact" },
  ];


const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.8-.1-1.6-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V13h2.7v8z"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M22 5.9a8 8 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8 12 12 0 0 1-8.7-4.4 4.2 4.2 0 0 0 1.3 5.6 4.1 4.1 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.3 4.3 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.5 8.5 0 0 1 1.4 19a12 12 0 0 0 18.5-10.1v-.6A8.5 8.5 0 0 0 22 5.9"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M5.2 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4M3.5 9h3.4v11H3.5zm5.5 0h3.3v1.5h.1a3.6 3.6 0 0 1 3.2-1.8c3.5 0 4.1 2.3 4.1 5.2V20h-3.4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H9z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.5" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
];


  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Footer */}
        <div className="footer-main">
          <a href="/" className="logo" aria-label="Home">
            <img src="https://webperfection.co.in/img/logowhite.png" alt="Logo" className="logo-icon" />
        </a>

          <nav className="footer-navigation" aria-label="Footer navigation">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                className="footer-nav-link"
                key={link.name}
                style={{ "--link-index": index }}
              >
                {link.name}
                <span className="footer-link-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                className="footer-social-link"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                style={{ "--social-index": index }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            Copyrights 2014–{currentYear} © Web Perfection Technology
          </p>

          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <span className="legal-divider">|</span>
            <a href="/terms-and-conditions">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
