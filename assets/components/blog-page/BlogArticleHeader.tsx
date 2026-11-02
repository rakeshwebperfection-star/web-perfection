import Image from "next/image";
import Link from "next/link";
import type { BlogArticle } from "@/assets/data/blogArticles";

export default function BlogArticleHeader({ article }: { article: BlogArticle }) {
  return (
    <div className="relative isolate overflow-hidden border-b border-[#104169] bg-[#030609] px-5 pb-10 pt-8 text-white sm:px-8 sm:pb-14 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-44 -top-60 h-152 w-152 rounded-full opacity-30 [background:repeating-radial-gradient(ellipse_at_center,transparent_0_10px,rgba(67,117,166,0.2)_11px_12px)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-7 text-sm text-white/60">
          <Link href="/blog" className="transition-colors hover:text-cyan-300">
            Blog
          </Link>
          <span className="mx-2 text-cyan-400" aria-hidden="true">
            /
          </span>
          <span className="text-white/85">{article.category}</span>
        </nav>

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-sky-500/60 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
              {article.category}
            </span>
            <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              <span className="bg-linear-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                {article.title}
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              {article.introduction}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/60 sm:text-sm">
              <time>{article.date}</time>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-cyan-400" />
              <span>{article.readingTime}</span>
            </div>
          </div>

          <div className="relative aspect-[1.45/1] overflow-hidden rounded-2xl border border-white/10 bg-[#071521] shadow-[0_20px_70px_rgba(0,125,255,0.12)]">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#030609]/30 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
