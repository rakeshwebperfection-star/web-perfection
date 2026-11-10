import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CounterSection from "@/assets/components/CounterSection";
import Marquee from "@/assets/components/Marquee";
import ServiceDetailPage from "@/assets/components/service-page/ServiceDetailPage";
import { services } from "@/assets/data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Services | Web Perfection" };
  }

  return {
    title: `${service.title} | Web Perfection`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetailPage service={service} />
      <CounterSection />
      <Marquee />
    </>
  );
}
