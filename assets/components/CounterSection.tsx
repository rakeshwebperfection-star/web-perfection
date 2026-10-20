
"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 6000, suffix: "+", label: "Happy Customer", display: "6K+" },
  { value: 7000, suffix: "+", label: "Successful Projects", display: "7K+" },
  { value: 50, suffix: "+", label: "Expert Member", display: "50+" },
  { value: 12, suffix: "+", label: "Years Of Experience", display: "12+" },
];

export default function CounterSection() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const startTime = performance.now();
    let frameId: number;

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCounts(stats.map((stat) => Math.floor(stat.value * eased)));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCounts(stats.map((stat) => stat.value));
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#030609] px-4 py-14 sm:px-6 sm:py-16 lg:px-10"
    >
      <div className="mx-auto max-w-[1200px] rounded-xl bg-[#111315] px-3 py-7 shadow-[0_0_45px_rgba(71,134,224,0.25)] sm:px-5 sm:py-9 lg:px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center px-2 py-4 text-center md:py-1 ${
                index < 2 ? "border-b border-[#12334b] md:border-b-0" : ""
              } ${
                index % 2 === 0
                  ? "md:border-r md:border-[#12334b]"
                  : index !== 3
                    ? "md:border-r md:border-[#12334b]"
                    : ""
              }`}
            >
              <p className="text-4xl font-semibold text-[#079cff] sm:text-[52px]">
                {counts[index] >= 1000
                  ? `${Math.floor(counts[index] / 1000)}K`
                  : counts[index]}
                {stat.suffix}
              </p>

              <p className="mt-3 text-[15px] text-white/90 sm:text-md">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}