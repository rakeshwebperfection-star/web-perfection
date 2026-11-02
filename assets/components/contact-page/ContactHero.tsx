import HeroSection from "@/assets/components/HeroSection";
import contactHeroImage from "@/assets/images/services/hero.png";

export default function ContactHero() {
  return (
    <HeroSection
      title="Contact"
      highlightText="Us"
      description="We are delighted to discover that our service has achieved significant success, proving to be highly lucrative for numerous individuals and businesses alike."
      image={contactHeroImage}
      imageAlt="Web professional working on a laptop"
      showButton={false}
      compact
    />
  );
}
