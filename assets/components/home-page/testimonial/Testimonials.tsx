
"use client";

import { useEffect, useState } from "react";

interface Testimonial {
  name: string;
  message: string;
  rating: number;
}

interface TestimonialsProps {
  className?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aj",
    message:
      "Fast, Tidy, Creative, Spot-On Work As Always. Is Such A Pleasure Being Able To Trust Great Delivery, Knowing Quality Work & Speedy Outcomes.",
    rating: 5,
  },
  {
    name: "Lily",
    message:
      "Thank You So Much For Your Help Today, Will Contact You Again For Future Project For Sure...",
    rating: 5,
  },
  {
    name: "Jeremy",
    message:
      "Really Good Working With WebPerfection Again And Will Be Using For Further Projects Moving Forwards.",
    rating: 5,
  },
  {
    name: "Sarah",
    message:
      "Excellent Service And Professional Communication Throughout The Entire Project. Highly Recommended!",
    rating: 5,
  },
  {
    name: "Michael",
    message:
      "The Team Delivered Exactly What We Needed. Great Attention To Detail And Fantastic Results.",
    rating: 5,
  },
  {
    name: "Emma",
    message:
      "Amazing Experience From Start To Finish. Looking Forward To Working Together Again.",
    rating: 5,
  },
];

export default function Testimonials({
  className = "",
}: TestimonialsProps) {
  const [visibleCards, setVisibleCards] = useState(3);
  const [activeIndex, setActiveIndex] = useState(3);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const updateVisibleCards = () => {
      const count =
        window.innerWidth < 768
          ? 1
          : window.innerWidth < 1024
            ? 2
            : 3;

      setAnimate(false);
      setVisibleCards(count);
      setActiveIndex(count);
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  // Clone cards at both ends for an infinite loop.
  const loopedTestimonials = [
    ...testimonials.slice(-visibleCards),
    ...testimonials,
    ...testimonials.slice(0, visibleCards),
  ];

  const goToNext = () => {
    if (!animate) setAnimate(true);
    setActiveIndex((current) => current + 1);
  };

  const goToPrevious = () => {
    if (!animate) setAnimate(true);
    setActiveIndex((current) => current - 1);
  };

  const handleTransitionEnd = () => {
    if (activeIndex >= testimonials.length + visibleCards) {
      setAnimate(false);
      setActiveIndex(visibleCards);
    } else if (activeIndex < visibleCards) {
      setAnimate(false);
      setActiveIndex(testimonials.length + visibleCards - 1);
    }
  };

  const goToSlide = (index: number) => {
    setAnimate(true);
    setActiveIndex(visibleCards + index);
  };

  const currentIndex =
    ((activeIndex - visibleCards) % testimonials.length +
      testimonials.length) %
    testimonials.length;

  return (
    <section
      className={`relative overflow-hidden bg-[linear-gradient(180deg,_#08172a_0%,_#03080d_25%,_#020609_75%,_#08172a_100%)] px-5 py-16 text-white sm:px-8 lg:px-14 lg:py-20 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-12">
          <span className="inline-flex rounded-full border border-sky-500 px-4 py-1.5 text-[13px] font-medium">
            What They&apos;re Say{" "}
            <span className="ml-1 text-sky-400">About Us?</span>
          </span>

          <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Testimonials
          </h2>

          <p className="mx-auto mt-3 max-w-lg leading-[1.7] text-gray-300 sm:text-md">
            Our success in creating business solutions is due in large part
            especially to talented and highly committed team.
          </p>
        </div>

        {/* Slider */}
        <div className="relative py-4 px-2">
          <div className="overflow-hidden">
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex items-stretch ${
                animate
                  ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : "transition-none"
              } motion-reduce:transition-none`}
              style={{
                transform: `translateX(-${
                  (activeIndex * 100) / visibleCards
                }%)`,
              }}
            >
              {loopedTestimonials.map((testimonial, index) => {
                const isCenter =
                  index === activeIndex + Math.floor(visibleCards / 2);

                return (
                  <div
                    key={`${testimonial.name}-${index}`}
                    className="shrink-0 px-3 py-3"
                    style={{ width: `${100 / visibleCards}%` }}
                  >
                    <article
                      className={`relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-xl border p-5 sm:p-6 ${
                        isCenter
                          ? "border-sky-500/50 bg-[linear-gradient(145deg,_#081a2c,_#0a2344_65%,_#07121e)] shadow-[0_0_25px_rgba(14,165,233,0.14)]"
                          : "border-white/[0.04] bg-[#1c1a2a]"
                      } ${
                        isCenter
                          ? "z-10 scale-[1.03] lg:scale-[1.06]"
                          : "scale-100"
                      } transition-[transform,box-shadow,border-color] duration-500 ease-out`}
                    >
                      {/* Glow effects */}
                      <div className="pointer-events-none absolute -right-3 top-8 h-28 w-28 rounded-full bg-purple-500/15 blur-3xl transition-colors duration-500" />

                      <div className="pointer-events-none absolute right-12 top-16 h-16 w-16 rounded-full bg-cyan-400/10 blur-2xl" />

                      {/* Profile */}
                      <div className="relative z-10 flex items-center gap-3">
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-200"
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 40 40"
                            className="h-full w-full"
                            fill="none"
                          >
                            <circle
                              cx="20"
                              cy="14"
                              r="8"
                              fill="#aab1b5"
                            />
                            <path
                              d="M5 35c0-8.3 6.7-14 15-14s15 5.7 15 14"
                              fill="#aab1b5"
                            />
                          </svg>
                        </div>

                        <h3 className="text-base font-lg sm:text-xl">
                          {testimonial.name}
                        </h3>
                      </div>

                      {/* Review */}
                      <p className="relative z-10 mt-5 text-xs italic leading-[1.7] text-gray-100 sm:text-[16px]">
                        &ldquo;{testimonial.message}&rdquo;
                      </p>

                      {/* Rating */}
                      <div
                        className="relative z-10 mt-auto flex gap-0.5 pt-5 text-xl leading-none text-lime-400"
                        aria-label={`${testimonial.rating} out of 5 stars`}
                      >
                        {Array.from(
                          { length: testimonial.rating },
                          (_, starIndex) => (
                            <span key={starIndex} aria-hidden="true">
                              ★
                            </span>
                          )
                        )}
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Previous arrow - vertically centered */}
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-sky-500/40 bg-[#081523] text-sky-400 transition-all duration-300 hover:border-sky-400 hover:bg-sky-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:h-10 sm:w-10 cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Next arrow - vertically centered */}
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-sky-500/40 bg-[#081523] text-sky-400 transition-all duration-300 hover:border-sky-400 hover:bg-sky-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:h-10 sm:w-10 cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div className="mt-5 flex justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-5 bg-sky-400"
                  : "w-2 bg-sky-900 hover:bg-sky-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
