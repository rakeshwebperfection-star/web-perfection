import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  MapPin,
  Palette,
  PenTool,
  Search,
  Share2,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import Hero from "@/assets/components/service-page/hero";
import ServiceProcess from "@/assets/components/service-page/process";
import OurDevlop from "@/assets/components/service-page/our-developer";
import FormSection from "@/assets/components/ContactForm";
import CounterSection from "@/assets/components/CounterSection";
import Marquee from "@/assets/components/Marquee";
import { services, type ServiceIcon } from "@/assets/data/services";
import styles from "@/assets/components/service-page/service-overview.module.css";

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  palette: Palette,
  code: Code2,
  app: Smartphone,
  testing: ShieldCheck,
  writing: PenTool,
  local: MapPin,
  social: Share2,
  search: Search,
};

export const metadata: Metadata = {
  title: "Our Services | Web Perfection",
  description:
    "Explore UI/UX design, web and app development, software testing, content writing, local SEO, social media, and search optimization services.",
};

function ServicesOverview() {
  return (
    <section id="our-services" className={styles.overview}>
      <div className={styles.overviewInner}>
        <div className={styles.overviewHeading}>
          <p className={styles.overviewEyebrow}>
            What we can do for you
          </p>
          <h2 className={styles.overviewTitle}>
            Services for every stage of{" "}
            <span>
              your digital journey
            </span>
          </h2>
          <p className={styles.overviewDescription}>
            Explore each service to see how we can help bring your next idea
            to life.
          </p>
        </div>
        <div className={styles.overviewGrid}>
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];

            return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={styles.serviceCard}
            >
              <span className={styles.serviceIcon}>
                <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span className={styles.serviceNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.serviceCardTitle}>{service.title}</h3>
              <p className={styles.serviceCardDescription}>
                {service.summary}
              </p>
              <span className={styles.serviceCardAction}>
                Explore service
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ServiceProcess />
      <OurDevlop />
      <FormSection />
      <CounterSection />
      <Marquee />
    </>
  );
}
