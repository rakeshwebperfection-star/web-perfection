import blogHeroImage from "@/assets/images/blog/BlogHero.png";
import AboutSection from "@/assets/components/HeroSection";

export default function BlogHero() {
  return (
    <div>
      <AboutSection
        title=""
        highlightText="Blog"
        description="Blogs are all about opening up new knowledge, expertise, processes and goals to your customers. Blogs are online chronicals that updated frequently, even monthly."
        image={blogHeroImage}
        imageAlt="Our team working on a project"
        buttonText="Get A Quote"
        buttonHref="/get-a-quote"
        />
    </div>
  );
}
