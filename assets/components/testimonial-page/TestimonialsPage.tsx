"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Aj",
    message:
      "Fast, tidy, creative, spot-on work as always. It is such a pleasure being able to trust great delivery, knowing quality work and speedy outcomes.",
  },
  {
    name: "Lily",
    message:
      "Thank you so much for your help today. I will contact you again for future projects for sure.",
  },
  {
    name: "Jeremy",
    message:
      "Really good working with Web Perfection again, and I will be using them for further projects moving forward.",
  },
  {
    name: "Sarah",
    message:
      "Excellent service and professional communication throughout the entire project. Highly recommended!",
  },
  {
    name: "Michael",
    message:
      "The team delivered exactly what we needed. Great attention to detail and fantastic results.",
  },
  {
    name: "Emma",
    message:
      "Amazing experience from start to finish. Looking forward to working together again.",
  },
];

const featuredReviews = [
  { name: "Aj", quote: testimonials[0].message },
  { name: "Lily", quote: testimonials[1].message },
  { name: "Jeremy", quote: testimonials[2].message },
];

function Rating() {
  return (
    <div className="flex gap-1 text-lime-400" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 3);

  return (
    <div className="overflow-hidden bg-[#030609] text-white">
      <section className="relative isolate overflow-hidden bg-[#030609]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-56 h-[36rem] w-[36rem] rounded-full border border-white/[0.045] [box-shadow:0_0_0_28px_rgba(255,255,255,0.015),0_0_0_56px_rgba(255,255,255,0.012),0_0_0_84px_rgba(255,255,255,0.01)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-72 -right-36 h-[34rem] w-[34rem] rounded-full border border-white/[0.05] [box-shadow:0_0_0_25px_rgba(255,255,255,0.015),0_0_0_50px_rgba(255,255,255,0.012),0_0_0_75px_rgba(255,255,255,0.01)]"
        />

        <div className="relative mx-auto grid min-h-[480px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:min-h-[530px] lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/60 px-4 py-2 text-xs font-medium text-white sm:text-sm">
              <Star size={13} aria-hidden="true" />
              <span className="text-sky-400">Your success,</span> our mission
            </span>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Client
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              We are delighted to share how our work has helped businesses
              bring their ideas to life. Read the experiences of the people
              we have worked with.
            </p>
            <Link
              href="#client-reviews"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
            >
              Explore client reviews <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div
            aria-label="Illustration of positive client feedback"
            role="img"
            className="relative mx-auto flex aspect-[1.25] w-full max-w-[540px] items-center justify-center"
          >
            <div className="absolute inset-[12%] rounded-full bg-sky-500/10 blur-3xl" />
            <div className="relative w-[76%] rounded-3xl border border-white/10 bg-gradient-to-br from-[#10233a] to-[#10101e] p-6 shadow-[0_25px_90px_rgba(10,115,255,0.18)] sm:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-sky-300">
                    Client experience
                  </p>
                  <p className="mt-3 text-3xl font-semibold sm:text-4xl">
                    5.0<span className="text-lg text-white/50"> / 5</span>
                  </p>
                </div>
                <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                  <Quote size={26} fill="currentColor" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-5">
                <Rating />
              </div>
              <p className="mt-5 max-w-xs text-sm leading-6 text-white/75">
                Great delivery, thoughtful work, and a team clients are happy
                to come back to.
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-violet-500 text-sm font-bold">
                  WP
                </div>
                <div>
                  <p className="text-sm font-semibold">Web Perfection</p>
                  <p className="text-xs text-white/50">Built on collaboration</p>
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-[20%] rounded-2xl border border-white/10 bg-[#181728]/95 p-4 shadow-xl sm:left-[2%]">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-400/20 text-xs font-semibold text-sky-200">
                  A
                </span>
                <span className="text-sm font-medium">Aj</span>
              </div>
              <div className="mt-2 flex gap-0.5 text-amber-300" aria-hidden="true">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={12} fill="currentColor" />
                ))}
              </div>
            </div>
            <div className="absolute bottom-[13%] right-0 rounded-2xl border border-white/10 bg-[#101c2b]/95 p-4 shadow-xl sm:right-[1%]">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-400/20 text-xs font-semibold text-violet-200">
                  L
                </span>
                <span className="text-sm font-medium">Lily</span>
              </div>
              <p className="mt-2 text-xs text-white/60">A pleasure to work with</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="client-reviews"
        className="scroll-mt-24 border-y border-sky-950/70 bg-gradient-to-b from-[#0a1421] via-[#080b10] to-[#080b10] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[270px_1fr] lg:gap-12">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              What our clients say
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Our Client
              <br />
              <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
              Real stories from people we have partnered with to make great
              things happen.
            </p>
            <a
              href="#featured-reviews"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-xs font-semibold uppercase tracking-wide transition-colors hover:border-sky-400 hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
            >
              More client stories <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {visibleTestimonials.map((testimonial, index) => (
                <article
                  key={testimonial.name}
                  className={`relative flex min-h-52 flex-col overflow-hidden rounded-2xl border border-white/[0.05] p-5 sm:p-6 ${
                    index % 2 === 0
                      ? "bg-[#1b1929]"
                      : "bg-gradient-to-br from-[#0a1c30] to-[#09111e]"
                  }`}
                >
                  <div className="pointer-events-none absolute -right-5 -top-8 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl" />
                  <div className="relative flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white/80">
                      {testimonial.name.slice(0, 1)}
                    </span>
                    <h3 className="text-base font-semibold">{testimonial.name}</h3>
                  </div>
                  <p className="relative mt-5 flex-1 text-sm leading-6 text-white/75">
                    &ldquo;{testimonial.message}&rdquo;
                  </p>
                  <div className="mt-5">
                    <Rating />
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((current) => !current)}
                aria-expanded={showAll}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
              >
                {showAll ? "Show fewer reviews" : "Load more reviews"}
                <ArrowRight
                  size={16}
                  className={showAll ? "-rotate-90" : "rotate-90"}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="featured-reviews"
        className="bg-[#030609] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Featured reviews
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Good work is remembered.
              <br />
              <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
                So are the people behind it.
              </span>
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/65 sm:text-base">
              A few kind words from clients who have trusted us with their
              projects.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {featuredReviews.map((review) => (
              <article
                key={review.name}
                className="relative flex min-h-64 flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#1b1929] to-[#11121b] p-6"
              >
                <Quote
                  className="absolute right-5 top-5 text-sky-400/20"
                  size={42}
                  fill="currentColor"
                  aria-hidden="true"
                />
                <Rating />
                <p className="relative mt-6 flex-1 text-base leading-7 text-white/80">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold">{review.name}</p>
                  <p className="mt-1 text-xs text-white/50">Client feedback</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
