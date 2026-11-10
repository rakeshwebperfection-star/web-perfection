import type { Metadata } from "next";
import CounterSection from "@/assets/components/CounterSection";
import Marquee from "@/assets/components/Marquee";
import TestimonialsPage from "@/assets/components/testimonial-page/TestimonialsPage";

export const metadata: Metadata = {
  title: "Client Testimonials | Web Perfection",
  description:
    "Read what Web Perfection clients say about their web design and development experience.",
};

export default function TestimonialPage() {
  return (
    <>
      <TestimonialsPage />
      <CounterSection />
      <Marquee />
    </>
  );
}
