import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticleBody from "@/assets/components/blog-page/BlogArticleBody";
import BlogArticleHeader from "@/assets/components/blog-page/BlogArticleHeader";
import ContactForm from "@/assets/components/ContactForm";
import CounterSection from "@/assets/components/CounterSection";
import Marquee from "@/assets/components/Marquee";
import { blogArticles } from "@/assets/data/blogArticles";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    return { title: "Blog | Web Perfection" };
  }

  return {
    title: `${article.title} | Web Perfection`,
    description: article.description,
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <BlogArticleHeader article={article} />
      <BlogArticleBody article={article} />
      <ContactForm />
      <CounterSection />
      <Marquee />
    </>
  );
}
