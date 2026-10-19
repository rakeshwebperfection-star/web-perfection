
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AboutIllustration from "@/assets/images/home/about.png";
import aboutDecorationTop from "@/assets/images/home/about-decoration-top.png";
import aboutDecorationBottom from "@/assets/images/home/about-decoration-bottom.png";
import "./about.css";

function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-section ${visible ? "about-visible" : ""}`}
      id="about"
    >
      <div className="about-decoration about-decoration-top">
        <img className="about-illustration" src={aboutDecorationTop.src ?? aboutDecorationTop} alt="Creative team working together on digital projects" />
      </div>
      <div className="about-decoration about-decoration-bottom">
        <img className="about-illustration" src={aboutDecorationBottom.src ?? aboutDecorationBottom} alt="Creative team working together on digital projects" />
      </div>

      <div className="about-container">
        {/* Left Illustration */}
        <div className="about-visual">
          <div className="about-visual-glow" />

          <img className="about-illustration" src={AboutIllustration.src ?? AboutIllustration} alt="Creative team working together on digital projects" />

          <div className="about-floating-dot about-dot-one" />
          <div className="about-floating-dot about-dot-two" />
          <div className="about-floating-dot about-dot-three" />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <div className="about-heading-row">
            <h2 className="about-heading">
              About <span className="about-heading-accent">Us</span>
            </h2>
          </div>

          <div className="about-heading-line" />

          <p className="about-description">
            Web Perfection Technology is a prominent IT firm based in India,
            focused on building a strong presence across various freelancing
            platforms. Founded in October 2014, the company has swiftly gained
            recognition worldwide. Specializing in website design,
            development, graphic design, and social media marketing, we cater
            to clients across the globe, ensuring excellence in every aspect
            of our services.
          </p>

          <a href="/about" className="about-button">
            <span>Read More</span>
            <span className="about-button-arrow" aria-hidden="true">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1381 7.52867L10.4714 2.86201C10.3457 2.74057 10.1773 2.67337 10.0025 2.67489C9.82768 2.67641 9.66047 2.74652 9.53687 2.87013C9.41326 2.99373 9.34315 3.16094 9.34163 3.33574C9.34011 3.51054 9.40731 3.67894 9.52875 3.80467L13.0574 7.33334H1.33341C1.1566 7.33334 0.987034 7.40358 0.86201 7.5286C0.736986 7.65363 0.666748 7.8232 0.666748 8.00001C0.666748 8.17682 0.736986 8.34639 0.86201 8.47141C0.987034 8.59644 1.1566 8.66667 1.33341 8.66667H13.0574L9.52875 12.1953C9.46507 12.2568 9.41429 12.3304 9.37935 12.4117C9.34441 12.4931 9.32602 12.5806 9.32525 12.6691C9.32448 12.7576 9.34135 12.8454 9.37487 12.9273C9.40839 13.0092 9.45789 13.0837 9.52048 13.1463C9.58308 13.2089 9.65751 13.2584 9.73945 13.2919C9.82138 13.3254 9.90916 13.3423 9.99768 13.3415C10.0862 13.3407 10.1737 13.3223 10.255 13.2874C10.3364 13.2525 10.4099 13.2017 10.4714 13.138L15.1381 8.47134C15.2631 8.34632 15.3333 8.17678 15.3333 8.00001C15.3333 7.82323 15.2631 7.65369 15.1381 7.52867Z" fill="white"/>
                </svg>
            </span>
          </a>

          <div className="about-mini-stats">
            <div className="about-stat">
              <span className="about-stat-number">2014</span>
              <span className="about-stat-label">Established</span>
            </div>

            <div className="about-stat-divider" />

            <div className="about-stat">
              <span className="about-stat-number">Global</span>
              <span className="about-stat-label">Client Reach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
