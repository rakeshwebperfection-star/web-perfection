
import Image from "next/image";
import Link from "next/link";

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
  link: string;
}

interface FeaturedBlogProps {
  title?: string;
  highlightedTitle?: string;
  description?: string;
  posts: BlogPost[];
  className?: string;
}

export default function FeaturedBlog({
  title = "Our",
  highlightedTitle = "Featured Blog",
  description = "All about the technology in our latest articles.",
  posts,
  className = "",
}: FeaturedBlogProps) {
  return (
    <section
      className={`w-full bg-[#030609] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-18 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            {title}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-600 bg-clip-text text-transparent">
              {highlightedTitle}
            </span>
          </h2>

          <p className="mt-3 text-sm text-gray-300 sm:text-base">
            {description}
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.link}
              className="group flex h-full flex-col overflow-hidden rounded-xl bg-[#07121d] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Featured image */}
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

                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>

              {/* Article content */}
              <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
                <h3 className="text-base font-medium leading-[1.4] text-white sm:text-[23px]">
                  <Link
                    href={post.link}
                    className="transition-colors duration-200 hover:text-cyan-400"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-3 text-md leading-[1.8] text-gray-200">
                  {post.description}
                </p>

                <time className="mt-3 block text-[12px] font-medium text-white">
                  {post.date}
                </time>

                <div className="mt-auto pt-6">
                  <Link
                    href={post.link}
                    className="inline-flex items-center gap-1.5 text-[14px] uppercase font-semibold tracking-wide text-[#00baff] transition-all duration-200 hover:gap-3 hover:text-cyan-300"
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