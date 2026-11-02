import HeroSection from "@/assets/components/HeroSection";
import quoteHeroImage from "@/assets/images/services/hero.png";

export default function QuoteHero() {
  return (
    <HeroSection
      title="GET A"
      highlightText="QUOTE"
      description="Complete the provided form, and we’ll respond with a personalized quote tailored to your specific requirements."
      image={quoteHeroImage}
      imageAlt="Web professional ready to help with your project"
      showButton={false}
      compact
    />
  );
}
