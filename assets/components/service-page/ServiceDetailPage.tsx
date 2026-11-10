import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/assets/data/services";
import ServiceHeroArtwork from "@/assets/components/service-page/ServiceHeroArtwork";
import styles from "./service-detail.module.css";

type ServiceDetailPageProps = {
  service: Service;
};

export default function ServiceDetailPage({
  service,
}: ServiceDetailPageProps) {
  const [titleLead, ...titleHighlight] = service.title.split(" ");

  return (
    <div className={styles.page} data-service={service.slug}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <Link
              href="/services"
              className={styles.breadcrumb}
            >
              Services <span aria-hidden="true">/</span>{" "}
              <span className="text-white">{service.title}</span>
            </Link>
            <p className={styles.eyebrow}>
              {service.eyebrow}
            </p>
            <h1 className={styles.heroTitle}>
              {titleLead}{" "}
              <span className={styles.heroTitleHighlight}>
                {titleHighlight.join(" ")}
              </span>
            </h1>
            <p className={styles.heroDescription}>
              {service.summary}
            </p>
            <div className={styles.heroActions}>
              <Link
                href="/get-a-quote"
                className={styles.primaryAction}
              >
                Discuss your project <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                href="#what-we-do"
                className={styles.secondaryAction}
              >
                Explore the service
              </Link>
            </div>
          </div>
          <ServiceHeroArtwork icon={service.icon} />
        </div>
      </section>

      <section id="what-we-do" className={styles.featureSection}>
        <div className={styles.featureGrid}>
          <div className={styles.featureHeading}>
            <p className={styles.sectionEyebrow}>
              What we do
            </p>
            <h2 className={styles.featureTitle}>
              A practical approach to{" "}
              <span>
                {service.title}
              </span>
            </h2>
          </div>
          <div>
            <p className={styles.featureIntro}>{service.intro}</p>
            <div className={styles.capabilityGrid}>
              {service.capabilities.map((capability, index) => (
                <article key={capability.title} className={styles.capabilityCard}>
                  <span className={styles.capabilityNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.capabilityTitle}>
                    {capability.title}
                  </h3>
                  <p className={styles.capabilityDescription}>
                    {capability.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stepsSection}>
        <div className={styles.stepsInner}>
          <div className={styles.stepsHeading}>
            <p className={styles.sectionEyebrow}>
              How we work
            </p>
            <h2 className={styles.stepsTitle}>
              A clear path from idea to{" "}
              <span>
                delivery
              </span>
            </h2>
          </div>
          <ol className={styles.stepsList}>
            {service.steps.map((step, index) => (
              <li key={step} className={styles.stepCard}>
                <span className={styles.stepNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.stepTitle}>{step}</h3>
                {index < service.steps.length - 1 && (
                  <ArrowRight
                    className={styles.stepArrow}
                    size={18}
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaCopy}>
            <p className={styles.sectionEyebrow}>
              Let&apos;s make it happen
            </p>
            <h2 className={styles.ctaTitle}>
              Have a project in mind?
            </h2>
            <p className={styles.ctaDescription}>
              Tell us what you are working on and we&apos;ll help you plan the
              next steps for your project.
            </p>
          </div>
          <Link
            href="/get-a-quote"
            className={styles.primaryAction}
          >
            Get a quote <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
