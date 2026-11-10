import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Sparkles } from "lucide-react";
import HeroImg from "@/assets/images/services/hero.png";
import styles from "./service-overview.module.css";

export default function ServicesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <span className={styles.heroBadge}>
            <Sparkles size={14} aria-hidden="true" />
            Digital experiences, thoughtfully made
          </span>
          <h1 className={styles.heroTitle}>
            Our
            <span>Services</span>
          </h1>
          <p className={styles.heroDescription}>
            From the first sketch to the final launch, we bring design,
            technology, and clear thinking together to move your business
            forward.
          </p>
          <div className={styles.heroActions}>
            <Link href="/get-a-quote" className={styles.primaryButton}>
              Start a project <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="#our-services" className={styles.secondaryButton}>
              Browse services <ArrowDown size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className={styles.heroArt}>
          <div className={styles.imageGlow} />
          <div className={styles.imageOrbit} />
          <div className={styles.imageOrbitInner} />
          <div className={styles.imageFrame}>
            <Image
              src={HeroImg}
              alt="Web developer creating a digital project"
              priority
              sizes="(max-width: 1023px) 90vw, 45vw"
              className={styles.heroImage}
            />
          </div>
          <span className={`${styles.imageBadge} ${styles.imageBadgeTop}`}>
            <Check size={14} aria-hidden="true" />
            Strategy to launch
          </span>
          <span className={`${styles.imageBadge} ${styles.imageBadgeBottom}`}>
            <Sparkles size={14} aria-hidden="true" />
            Made around your goals
          </span>
        </div>
      </div>
    </section>
  );
}
