import React from 'react'
import Hero from '@/assets/components/home-page/hero-section/hero';
import About from '@/assets/components/home-page/about/about';
import Technologies from '@/assets/components/home-page/technologies/page';
import FeaturedWork from '@/assets/components/home-page/feature/page';
import FeaturedBlog from '@/assets/components/home-page/featureBlog/page';
import Testimonials from '@/assets/components/home-page/testimonial/Testimonials';
import Process from '@/assets/components/home-page/our-process/process';
import FormSection from '@/assets/components/ContactForm';
import CounterSection from '@/assets/components/CounterSection';

function Homepage() {
  return (
    <div>
      <Hero />
      <About />
      <Technologies />
      <FeaturedWork />
      <FeaturedBlog />
      <Testimonials />
      <Process />
      <FormSection />
      <CounterSection />
    </div>
  )
}

export default Homepage
