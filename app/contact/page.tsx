import type { Metadata } from "next";
import ContactForm from "@/assets/components/ContactForm";
import ContactDetails from "@/assets/components/contact-page/ContactDetails";
import ContactHero from "@/assets/components/contact-page/ContactHero";
import CounterSection from "@/assets/components/CounterSection";
import Marquee from "@/assets/components/Marquee";

export const metadata: Metadata = {
  title: "Contact Us | Web Perfection",
  description:
    "Contact Web Perfection to discuss your website, ecommerce, and digital growth needs.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm
        badgeText="Get in Touch with"
        title="You Can Contact Us"
        highlightedTitle="Directly At:"
        highlightStyle="italic"
        description=""
        directEmail="hrwebperfection@gmail.com"
        submitLabel="Send"
      />
      <ContactDetails />
      <CounterSection />
      <Marquee />
    </>
  );
}
