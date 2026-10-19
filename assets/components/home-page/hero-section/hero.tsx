
"use client";

import React, { useEffect, useState } from "react";
import "./hero.css";

function Hero() {
  const words = ["Agency", "Studio", "Partner"];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const nextText = currentWord.substring(
            0,
            displayText.length + 1
          );

          setDisplayText(nextText);

          if (nextText === currentWord) {
            setTimeout(() => setDeleting(true), 1200);
          }
        } else {
          const nextText = currentWord.substring(
            0,
            displayText.length - 1
          );

          setDisplayText(nextText);

          if (nextText === "") {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      !deleting && displayText === currentWord ? 1300 : deleting ? 65 : 130
    );

    return () => clearTimeout(timeout);
  }, [displayText, deleting, wordIndex]);

  return (
    <section className="hero-section">
      <div className="hero-background-lines" />

      <div className="hero-container">
        <div className="hero-welcome">
          <span>Welcome to</span> Web Perfection
        </div>

        <div className="hero-heading-wrap">
          <h1 className="hero-heading">
            <span className="hero-heading-first">Creative</span>

            <span className="hero-heading-second">
              <span className="hero-decor-icon" aria-hidden="true">
                <span>✳</span>
              </span>

              <span className="hero-title-line">
                Digital{" "}
                <span className="hero-gradient-text">
                  {displayText}
                  <span className="typing-cursor">|</span>
                </span>
              </span>
            </span>
          </h1>
        </div>

        <div className="hero-content">
          <div className="hero-description">
            <p>We harness the power of meticulous strategy and planning to expand your website&apos;s reach, attracting a larger target audience and effectively converting them into loyal customers.</p>

            <a href="/about" className="hero-button">
              <span>Discover More</span>
              <span className="hero-button-arrow" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1381 7.52867L10.4714 2.86201C10.3457 2.74057 10.1773 2.67337 10.0025 2.67489C9.82768 2.67641 9.66047 2.74652 9.53687 2.87013C9.41326 2.99373 9.34315 3.16094 9.34163 3.33574C9.34011 3.51054 9.40731 3.67894 9.52875 3.80467L13.0574 7.33334H1.33341C1.1566 7.33334 0.987034 7.40358 0.86201 7.5286C0.736986 7.65363 0.666748 7.8232 0.666748 8.00001C0.666748 8.17682 0.736986 8.34639 0.86201 8.47141C0.987034 8.59644 1.1566 8.66667 1.33341 8.66667H13.0574L9.52875 12.1953C9.46507 12.2568 9.41429 12.3304 9.37935 12.4117C9.34441 12.4931 9.32602 12.5806 9.32525 12.6691C9.32448 12.7576 9.34135 12.8454 9.37487 12.9273C9.40839 13.0092 9.45789 13.0837 9.52048 13.1463C9.58308 13.2089 9.65751 13.2584 9.73945 13.2919C9.82138 13.3254 9.90916 13.3423 9.99768 13.3415C10.0862 13.3407 10.1737 13.3223 10.255 13.2874C10.3364 13.2525 10.4099 13.2017 10.4714 13.138L15.1381 8.47134C15.2631 8.34632 15.3333 8.17678 15.3333 8.00001C15.3333 7.82323 15.2631 7.65369 15.1381 7.52867Z" fill="white"/>
                </svg>
              </span>
            </a>
          </div>

          <div className="hero-image-wrap">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85" alt="Modern creative agency office workspace" className="hero-image" />
            <div className="hero-image-overlay" />
          </div>
        </div>
      </div>  
    </section>
  );
}

export default Hero;
