import type { Metadata } from "next";
import CounterSection from "@/assets/components/CounterSection";
import FeaturedWork from "@/assets/components/featuredWork";
import HeroSection from "@/assets/components/HeroSection";
import Marquee from "@/assets/components/Marquee";
import { homeProjects } from "@/assets/data/homeProjects";
import portfolioHero from "@/assets/images/services/hero.png";

export const metadata: Metadata = {
  title: "Our Portfolio | Web Perfection",
  description:
    "Explore Web Perfection's e-commerce, CMS, framework, and UI/UX projects.",
};

const portfolioFilters = [
  "All",
  "E-Commerce",
  "CMS",
  "Frameworks",
  "Mobile App",
  "UI/UX Design",
];

export default function PortfolioPage() {
  return (
    <>
      <HeroSection
        title="Our"
        highlightText="Portfolio"
        description="At Web Perfection Technology, we specialize in expertly handling a range of content management systems, including WordPress, Shopify, Magento, Joomla, and Drupal. We also build with frameworks like CakePHP and Laravel, and seamlessly customize existing themes."
        image={portfolioHero}
        imageAlt="Web developer creating a digital project"
        showButton={false}
        compact
      />
      <FeaturedWork
        title="Our Project Portfolio"
        highlightedTitle="Portfolio"
        description=""
        projects={homeProjects}
        buttonText="Load More"
        buttonLink=""
        columns={3}
        filterCategories={portfolioFilters}
        initialVisibleCount={6}
        loadMoreStep={3}
        className="py-12 sm:py-14 lg:py-16"
      />
      <CounterSection />
      <Marquee />
    </>
  );
}
