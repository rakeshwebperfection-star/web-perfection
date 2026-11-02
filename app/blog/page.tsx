import type { Metadata } from "next";
import BlogHero from "@/assets/components/blog-page/BlogHero";
import BlogListing from "@/assets/components/blog-page/BlogListing";
import ContactForm from "@/assets/components/ContactForm";
import CounterSection from "@/assets/components/CounterSection";
import Marquee from "@/assets/components/Marquee";

export const metadata: Metadata = {
  title: "Blog | Web Perfection",
  description:
    "Explore the latest insights on ecommerce, web development, and AI tools from Web Perfection.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogListing />
      <ContactForm />
      <CounterSection />
      <Marquee />
    </>
  );
}
