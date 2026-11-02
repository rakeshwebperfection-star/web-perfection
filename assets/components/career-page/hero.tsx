import React from 'react'
import AboutSection from "@/assets/components/HeroSection";
import HeroImg from "@/assets/images/career/hero.png"

function hero() {
  return (
    <div>
      <AboutSection
        title="Our Successful"
        highlightText="Journey"
        description="Create Your Career in Web Development"
        image={HeroImg}
        imageAlt="Our team working on a project"
        buttonText="Get A Quote"
        buttonHref="/get-a-quote"
        />
    </div>
  )
}

export default hero