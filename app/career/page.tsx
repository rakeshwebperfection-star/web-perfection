import Hero from '@/assets/components/career-page/hero'
import CareerBenefits from '@/assets/components/career-page/benefits'
import CareerApplicationForm from '@/assets/components/career-page/application-form'
import CounterSection from '@/assets/components/CounterSection';
import Marquee from '@/assets/components/Marquee';
import React from 'react'

function page() {
  return (
    <div>
      <Hero />
      <CareerBenefits />
      <CareerApplicationForm />
      <CounterSection />
      <Marquee />
    </div>
  )
}

export default page
