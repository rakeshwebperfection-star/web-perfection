import React from 'react'
import AboutSection from "@/assets/components/HeroSection";
import HeroImg from "@/assets/images/services/hero.png"

function hero() {
  return (
    <div>
      <AboutSection
        title="Our"
        highlightText="Services"
        description="At Web Perfection Technology, we excel in Web and Graphic Design, Web Development, SEO, Shopify, and E-commerce solutions. Leveraging extensive experience, we deliver dynamic solutions meeting global client needs."
        image={HeroImg}
        imageAlt="Our team working on a project"
        buttonText="Get A Quote"
        buttonHref="/get-a-quote"
        />
    </div>
  )
}

export default hero
