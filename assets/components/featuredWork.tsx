
"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export interface FeaturedProject {
  name: string;
  image: string | StaticImageData;
  link: string;
  category?: string;
  filters?: string[];
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  backgroundClass?: string;
}

export interface FeaturedWorkProps {
  title?: string;
  highlightedTitle?: string;
  description?: string;
  projects: FeaturedProject[];
  buttonText?: string;
  buttonLink?: string;
  className?: string;
  columns?: 3 | 4;
  filterCategories?: string[];
  initialVisibleCount?: number;
  loadMoreStep?: number;
}

export default function FeaturedWork({
  title = "Our Featured Work",
  highlightedTitle = "Featured Work",
  description = "Have a look at some of our best work.",
  projects,
  buttonText = "Read More",
  buttonLink = "/portfolio",
  className = "",
  columns = 4,
  filterCategories,
  initialVisibleCount,
  loadMoreStep = 6,
}: FeaturedWorkProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(
    initialVisibleCount ?? projects.length
  );
  const highlightIndex = highlightedTitle
    ? title.indexOf(highlightedTitle)
    : -1;

  const hasHighlight = highlightIndex !== -1;
  const hasFilters = Boolean(filterCategories?.length);
  const filteredProjects =
    hasFilters && activeFilter !== "All"
      ? projects.filter((project) => project.filters?.includes(activeFilter))
      : projects;
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const gridColumns =
    columns === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className={`relative overflow-hidden bg-[linear-gradient(180deg,#0D2649_0%,#121418_10%,#020509_50%,#121418_90%,#0D2649_100%)] px-5 py-16 text-white sm:px-8 lg:px-14 lg:py-20 ${className}`}>

      <div className="relative mx-auto max-w-350">
        {/* Section heading */}
        <header className="mb-8 text-center sm:mb-10">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            {hasHighlight ? (
              <>
                {title.slice(0, highlightIndex)}
                <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {highlightedTitle}
                </span>
                {title.slice(highlightIndex + highlightedTitle.length)}
              </>
            ) : (
              title
            )}
          </h2>

          {description && (
            <p className="mt-3 text-sm text-gray-300 sm:text-base">
              {description}
            </p>
          )}
        </header>

        {hasFilters && (
          <div
            className="mx-auto mb-7 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-full bg-[#0b2440] p-2 sm:mb-8"
            role="group"
            aria-label="Filter projects"
          >
            {filterCategories?.map((category) => {
              const isActive = activeFilter === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => {
                    setActiveFilter(category);
                    setVisibleCount(initialVisibleCount ?? projects.length);
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-colors cursor-pointer sm:px-5 sm:text-sm ${
                    isActive
                      ? "bg-linear-to-r from-blue-400 to-purple-600 text-white"
                      : "bg-[#18375d] text-white/90 hover:bg-[#244b78]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}

        <div className={`grid ${gridColumns} gap-5`}>
          {visibleProjects.map((project) => (
            <Link
              key={`${project.name}-${project.link}`}
              href={project.link}
              aria-label={`View ${project.name}`}
              className="group relative rounded-xl bg-[#10294b] p-3.5
                transition-all duration-300 hover:bg-[#183b69]
                hover:shadow-xl hover:shadow-blue-950/30
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-blue-400"
            >
              {/* Image wrapper */}
              <div className={`relative aspect-[1.18/1] overflow-hidden rounded-lg ${project.backgroundClass ?? "bg-slate-200"}`}>
                {/* Project image */}
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? project.name}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className={`transition-transform object-cover duration-700 ease-out
                    group-hover:scale-110 ${
                      project.imageFit === "cover"
                        ? "object-cover"
                        : "object-contain"
                    }`}
                />

                {/* Theme gradient overlay */}
                <div aria-hidden="true"
                  className="absolute inset-0 z-1
                    bg-linear-to-t
                    from-indigo-950/95
                    via-purple-700/45
                    to-blue-500/10
                    opacity-0 transition-opacity duration-500
                    group-hover:opacity-100
                    group-focus-visible:opacity-100" />

                {/* Hover content */}
                <div className="absolute inset-0 z-2 flex flex-col justify-end items-center p-4
                  text-white opacity-0 translate-y-3
                    transition-all duration-500 ease-out
                    group-hover:translate-y-0 group-hover:opacity-100
                    group-focus-visible:translate-y-0
                    group-focus-visible:opacity-100 sm:p-5">
                
                  <h3 className="mb-1 text-lg font-semibold leading-snug sm:text-xl">
                    {project.name}
                  </h3>
                  <span className="text-sm italic font-medium
                    text-white/80 tracking-wider">
                    {project.category ?? "Featured Project"}
                  </span>
                </div>
              </div>

            </Link>
          ))}
        </div>

        {hasFilters && filteredProjects.length === 0 && (
          <p className="py-12 text-center text-sm text-white/70" role="status">
            No projects found in this category yet.
          </p>
        )}

        {/* Read More button */}
        {buttonText && !hasFilters && buttonLink && (
          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              href={buttonLink}
              className="about-button">
              {buttonText}
              <span aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1381 7.52867L10.4714 2.86201C10.3457 2.74057 10.1773 2.67337 10.0025 2.67489C9.82768 2.67641 9.66047 2.74652 9.53687 2.87013C9.41326 2.99373 9.34315 3.16094 9.34163 3.33574C9.34011 3.51054 9.40731 3.67894 9.52875 3.80467L13.0574 7.33334H1.33341C1.1566 7.33334 0.987034 7.40358 0.86201 7.5286C0.736986 7.65363 0.666748 7.8232 0.666748 8.00001C0.666748 8.17682 0.736986 8.34639 0.86201 8.47141C0.987034 8.59644 1.1566 8.66667 1.33341 8.66667H13.0574L9.52875 12.1953C9.46507 12.2568 9.41429 12.3304 9.37935 12.4117C9.34441 12.4931 9.32602 12.5806 9.32525 12.6691C9.32448 12.7576 9.34135 12.8454 9.37487 12.9273C9.40839 13.0092 9.45789 13.0837 9.52048 13.1463C9.58308 13.2089 9.65751 13.2584 9.73945 13.2919C9.82138 13.3254 9.90916 13.3423 9.99768 13.3415C10.0862 13.3407 10.1737 13.3223 10.255 13.2874C10.3364 13.2525 10.4099 13.2017 10.4714 13.138L15.1381 8.47134C15.2631 8.34632 15.3333 8.17678 15.3333 8.00001C15.3333 7.82323 15.2631 7.65369 15.1381 7.52867Z" fill="white"></path></svg></span>
            </Link>
          </div>
        )}
        {hasFilters && buttonText && visibleProjects.length < filteredProjects.length && (
          <div className="mt-10 flex justify-center sm:mt-12">
            <button
              type="button"
              className="about-button"
              onClick={() =>
                setVisibleCount((current) =>
                  Math.min(current + loadMoreStep, filteredProjects.length)
                )
              }
            >
              {buttonText}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
