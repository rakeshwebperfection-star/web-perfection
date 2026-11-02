import Link from "next/link";
import { blogArticles, type BlogArticle } from "@/assets/data/blogArticles";

export default function BlogArticleBody({ article }: { article: BlogArticle }) {
  const recentArticles = blogArticles.filter(
    (recentArticle) => recentArticle.slug !== article.slug,
  );

  return (
    <section className="bg-linear-to-b from-[#07172a] via-[#061426] to-[#030609] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-14">
        <article className="min-w-0">
          <p className="mb-8 border-l-2 border-cyan-400 pl-5 text-base leading-8 text-white/85 sm:text-lg">
            {article.introduction}
          </p>

          <div className="space-y-9">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.points && (
                  <ul className="mt-5 space-y-3">
                    {section.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-7 text-white/80 sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <Link
            href="/blog"
            className="about-button mt-10 min-h-0 px-5 py-3 text-sm"
          >
            <span aria-hidden="true">←</span>
            Back to Blog
          </Link>
        </article>

        <aside className="lg:sticky lg:top-24">
          <div className="rounded-2xl border border-[#123e59] bg-[#071521]/90 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Keep Reading
            </p>
            <h2 className="mt-2 text-xl font-semibold">Recent Articles</h2>
            <div className="mt-5 divide-y divide-white/10">
              {recentArticles.map((recentArticle) => (
                <Link
                  key={recentArticle.slug}
                  href={recentArticle.link}
                  className="group block py-4 first:pt-0 last:pb-0"
                >
                  <span className="text-[11px] text-white/50">
                    {recentArticle.category} · {recentArticle.date}
                  </span>
                  <span className="mt-1 block text-sm font-medium leading-6 text-white/85 transition-colors group-hover:text-cyan-300">
                    {recentArticle.title}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-cyan-400">
                    Read article <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-[#123e59] bg-linear-to-br from-[#0b2032] to-[#07111b] p-5 sm:p-6">
            <h2 className="text-lg font-semibold">Have a project in mind?</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Talk to our team about creating the right digital experience for
              your business.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-200"
            >
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
