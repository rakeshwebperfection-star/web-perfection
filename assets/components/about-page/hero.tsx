import React from 'react'
import AboutSection from "@/assets/components/HeroSection";
import HeroImg from "@/assets/images/about/AboutHero.png"

function hero() {
  return (
    <div>
      <AboutSection
        title="About"
        highlightText="Us"
        description="We boast a proficient team skilled in both design and development, diligently attending to every task entrusted to them. Through our expertise and efficient work ethic, we're swiftly emerging as a leading company in North India. Client satisfaction reigns as our foremost priority, and we consistently strive to exceed their expectations."
        image={HeroImg}
        imageAlt="Our team working on a project"
        buttonText="Get A Quote"
        buttonHref="/get-a-quote"
        />
    </div>
  )
}

export default hero
