"use client";

import Image, { type ImageProps } from "next/image";
import Link from "next/link";

import aboutDecorationTop from "@/assets/images/home/about-decoration-top.png";
import aboutDecorationBottom from "@/assets/images/home/about-decoration-bottom.png";

type AboutSectionProps = {
  title: string;
  highlightText?: string;
  description: string;
  image: ImageProps["src"];
  imageAlt?: string;
  buttonText?: string;
  buttonHref?: string;
  showButton?: boolean;
  compact?: boolean;
};

export default function HeroSection({
  title,
  highlightText,
  description,
  image,
  imageAlt = "",
  buttonText = "Get A Quote",
  buttonHref = "/contact",
  showButton = true,
  compact = false,
}: AboutSectionProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-blue-900/50 bg-[#030609] text-white">
      {/* Decorative background */}
      <div className="about-decoration about-decoration-top">
        <Image className="about-illustration" src={aboutDecorationTop.src ?? aboutDecorationTop} alt="Creative team working together on digital projects" width={700} height={560} />
      </div>
      <div className="about-decoration about-decoration-bottom">
        <Image className="about-illustration" src={aboutDecorationBottom.src ?? aboutDecorationBottom} alt="Creative team working together on digital projects" width={380} height={340} />
      </div>

      <div
        className={`mx-auto grid ${
          compact
            ? "min-h-[24rem] max-w-7xl gap-5 py-10 lg:min-h-[24rem]"
            : "min-h-125 max-w-360 gap-10 py-16 lg:min-h-150 lg:gap-12"
        } grid-cols-1 items-center px-5 sm:px-8 lg:grid-cols-2 lg:px-12`}
      >
        {/* Left content */}
        <div className="max-w-162">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            {title}{" "}
            {highlightText && (
              <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {highlightText}
              </span>
            )}
          </h1>

          <p className="mb-8 text-base leading-7 text-white/90 sm:text-lg sm:leading-7">
            {description}
          </p>

          {showButton && (
            <Link href={buttonHref} className="about-button">
              {buttonText}
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>

        {/* Right image */}
        <div className="relative mx-auto w-full max-w-162">
          <div className="relative aspect-4/3 w-full">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}