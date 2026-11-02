"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./vmost-analysis.module.css";

const values = [
  {
    letter: "V",
    title: "Vision",
    description:
      "Our vision is to excel on a global scale by delivering exceptionally creative web design and development services. We aspire to earn worldwide recognition, creating a reputation for our company and team through the quality and innovation of our work.",
  },
  {
    letter: "M",
    title: "Mission",
    description:
      "Our mission is to create, develop, and deliver accessible, profitable, adaptable, and thorough solutions for businesses. We build creative and reliable digital experiences that serve our clients today and support their growth into the future.",
  },
  {
    letter: "O",
    title: "Objectives",
    description:
      "We aim to enhance efficiency and security while fostering innovation. By delivering cutting-edge technology solutions, we exceed client expectations and drive sustainable growth in a rapidly evolving digital landscape.",
  },
  {
    letter: "S",
    title: "Strategy",
    description:
      "Through strategic planning and thoughtful services, we help websites attract and convert their target audiences. Our customized approach supports business growth and a stronger online presence.",
  },
  {
    letter: "T",
    title: "Tactics",
    description:
      "We elevate brands, captivate audiences, and turn ideas into measurable results. With precision in every detail, we drive digital success through innovative tactics and our expertise in marketing.",
  },
];

export default function VmostAnalysis() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    let animationFrame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const bounds = track.getBoundingClientRect();
        const progressPosition = window.innerHeight * 0.62;
        const nextProgress =
          bounds.height === 0
            ? 0
            : Math.max(
                0,
                Math.min(1, (progressPosition - bounds.top) / bounds.height),
              );
        setProgress(nextProgress);
      });
    };

    const scrollObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          updateProgress();
        }
      },
      { threshold: 0 },
    );
    scrollObserver.observe(section);

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    const cardObserver = new IntersectionObserver(
      (entries) => {
        const newlyVisible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => Number((entry.target as HTMLElement).dataset.index));

        if (newlyVisible.length > 0) {
          setVisibleCards((current) =>
            Array.from(new Set([...current, ...newlyVisible])),
          );
        }
      },
      { threshold: 0.2 },
    );

    section.querySelectorAll<HTMLElement>("[data-index]").forEach((card) => {
      cardObserver.observe(card);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      scrollObserver.disconnect();
      cardObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className='mx-auto min-h-125 max-w-360 px-5 py-16 sm:px-8 lg:px-12'>
        <h2 className="mb-6 text-center text-3xl font-semibold sm:text-4xl lg:text-5xl">
            VMOST  <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Analysis
              </span>
          </h2>

        <div className={styles.timeline}>
          <div className={styles.track} ref={trackRef} aria-hidden="true">
            <div
              className={styles.progress}
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          {values.map((value, index) => (
            <article
              className={`${styles.row} ${index % 2 === 0 ? styles.left : styles.right}`}
              key={value.letter}
            >
              <div
                className={`${styles.card} ${visibleCards.includes(index) ? styles.visible : ""}`}
                data-index={index}
              >
                <span className={styles.badge}>{value.letter}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
              <span className={styles.node} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
