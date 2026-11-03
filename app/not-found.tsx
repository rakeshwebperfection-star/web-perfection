import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Web Perfection",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="not-found-page relative isolate flex min-h-[65vh] items-center justify-center overflow-hidden px-5 py-20 text-center text-white sm:px-8">
      <div className="not-found-glow" aria-hidden="true" />
      <div className="not-found-stars" aria-hidden="true">
        <span style={{ left: "12%", top: "23%", animationDelay: "0s" }} />
        <span style={{ left: "23%", top: "72%", animationDelay: "1.1s" }} />
        <span style={{ left: "34%", top: "16%", animationDelay: "2.3s" }} />
        <span style={{ left: "68%", top: "22%", animationDelay: "0.7s" }} />
        <span style={{ left: "82%", top: "67%", animationDelay: "1.8s" }} />
        <span style={{ left: "91%", top: "36%", animationDelay: "2.8s" }} />
        <span style={{ left: "74%", top: "83%", animationDelay: "1.4s" }} />
        <span style={{ left: "7%", top: "55%", animationDelay: "2.1s" }} />
      </div>

      <div className="not-found-content relative z-10 mx-auto max-w-3xl">
        <p className="not-found-eyebrow mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
          Error 404
        </p>
        <div className="not-found-art" aria-hidden="true">
          <div className="not-found-orbit not-found-orbit-one" />
          <div className="not-found-orbit not-found-orbit-two" />
          <p className="not-found-number">404</p>
        </div>
        <h1 className="not-found-title mt-3 text-3xl font-bold sm:text-4xl">
          Looks like this page went missing.
        </h1>
        <p className="not-found-description mx-auto mt-4 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
          The page you&apos;re looking for may have moved or no longer exists.
          Let&apos;s get you back on track.
        </p>
        <div className="not-found-action">
          <Link href="/" className="about-button mt-8">
            Back to Home
            <span className="about-button-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
