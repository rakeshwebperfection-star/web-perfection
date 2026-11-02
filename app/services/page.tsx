import React from 'react'
import Hero from '@/assets/components/service-page/hero';
import ServiceProcess from '@/assets/components/service-page/process';
import OurDevlop from '@/assets/components/service-page/our-developer';
import FormSection from '@/assets/components/ContactForm';
import CounterSection from '@/assets/components/CounterSection';
import Marquee from '@/assets/components/Marquee';

function page() {
  return (
    <div>
      <Hero />
      <ServiceProcess />
      <OurDevlop />
      <FormSection />
      <CounterSection />
      <Marquee />
    </div>
  )
}

export default page
