
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  image: string | StaticImageData;
  imageAlt: string;
  link: string;
}

interface FeaturedBlogProps {
  title?: string;
  highlightedTitle?: string;
  description?: string;
  posts: BlogPost[];
  className?: string;
  variant?: "featured" | "archive";
  showHeading?: boolean;
}

export default function FeaturedBlog({
  title = "Our",
  highlightedTitle = "Featured Blog",
  description = "All about the technology in our latest articles.",
  posts,
  className = "",
  variant = "featured",
  showHeading = true,
}: FeaturedBlogProps) {
  const isArchive = variant === "archive";

  return (
    <section
      className={`w-full px-5 text-white sm:px-8 lg:px-12 ${
        isArchive
          ? "bg-linear-to-b from-[#07172a] via-[#061426] to-[#030609] pb-14 pt-10 sm:pt-12 lg:pb-12 lg:pt-24"
          : "bg-[#030609] py-14 lg:py-18"
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              {title}{" "}
              <span className="bg-linear-to-r from-blue-400 to-violet-600 bg-clip-text text-transparent">
                {highlightedTitle}
              </span>
            </h2>

            <p className="mt-3 text-sm text-gray-300 sm:text-base">
              {description}
            </p>
          </div>
        )}

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${isArchive ? "gap-3 sm:gap-4" : "gap-5"}`}>
          {posts.map((post, index) => (
            <article
              key={`${post.link}-${index}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl bg-[#07121d] transition-transform duration-300 hover:-translate-y-1"
            >
              <Link
                href={post.link}
                aria-label={`Read ${post.title}`}
                className="relative block aspect-[1.38/1] overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-indigo-950/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>

              <div className={`flex flex-1 flex-col ${isArchive ? "px-4 pb-5 pt-4" : "px-5 pb-6 pt-5"}`}>
                <h3 className={`font-medium leading-[1.3] text-white ${isArchive ? "text-sm sm:text-[23px]" : "text-base sm:text-base"}`}>
                  <Link
                    href={post.link}
                    className="transition-colors duration-200 hover:text-cyan-400"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className={`mt-2 text-gray-200 ${isArchive ? "line-clamp-2 text-[10px] leading-[1.6] sm:text-sm" : "text-md leading-[1.8]"}`}>
                  {post.description}
                </p>

                <time className={`mt-2 block font-semibold text-white ${isArchive ? "text-[12px]" : "text-[10px]"}`}>
                  {post.date}
                </time>

                <div className={`mt-auto ${isArchive ? "pt-5" : "pt-6"}`}>
                  <Link
                    href={post.link}
                    className={`inline-flex items-center gap-1.5 uppercase font-semibold tracking-wide text-[#00baff] transition-all duration-200 hover:gap-3 hover:text-cyan-300 ${isArchive ? "text-[13px]" : "text-[12px]"}`}
                  >
                    READ MORE
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}