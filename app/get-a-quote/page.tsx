import type { Metadata } from "next";
import CounterSection from "@/assets/components/CounterSection";
import Marquee from "@/assets/components/Marquee";
import QuoteHero from "@/assets/components/quote-page/QuoteHero";
import QuoteRequestForm from "@/assets/components/quote-page/QuoteRequestForm";

export const metadata: Metadata = {
  title: "Get a Quote | Web Perfection",
  description:
    "Tell us about your project and get a personalized quote from Web Perfection.",
};

export default function GetAQuotePage() {
  return (
    <>
      <QuoteHero />
      <QuoteRequestForm />
      <CounterSection />
      <Marquee />
    </>
  );
}
