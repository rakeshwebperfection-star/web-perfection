import React from 'react'
import Hero from '@/assets/components/about-page/hero';
import VmostAnalysis from '@/assets/components/about-page/vmost-analysis';
import OurValue from '@/assets/components/about-page/our-value';
import FormSection from '@/assets/components/ContactForm';
import CounterSection from '@/assets/components/CounterSection';
import Marquee from '@/assets/components/Marquee';

function page() {
  return (
    <div>
      <Hero />
      <VmostAnalysis />
      <OurValue />
      <FormSection />
      <CounterSection />
      <Marquee />
    </div>
  )
}

export default page
