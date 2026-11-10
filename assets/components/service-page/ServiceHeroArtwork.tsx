import {
  BarChart3,
  Check,
  CircleCheck,
  FileText,
  MapPin,
  Palette,
  Search,
  UsersRound,
} from "lucide-react";
import type { ComponentType } from "react";
import type { ServiceIcon } from "@/assets/data/services";
import styles from "./service-detail.module.css";

type ServiceHeroArtworkProps = {
  icon: ServiceIcon;
};

function DesignArtwork() {
  return (
    <div className={styles.designScreen}>
      <div className={styles.designToolbar}>
        <span />
        <span />
        <span />
        <i>Studio board</i>
      </div>
      <div className={styles.designContent}>
        <div className={styles.designSidebar}>
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={styles.designCanvas}>
          <div className={styles.designBanner}>
            <span />
            <i />
          </div>
          <div className={styles.designCards}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.designSwatches}>
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeArtwork() {
  return (
    <div className={styles.codeScreen}>
      <div className={styles.codeToolbar}>
        <span />
        <span />
        <span />
        <i>webpage.tsx</i>
      </div>
      <div className={styles.codeBody}>
        <div className={styles.codeNumbers}>01<br />02<br />03<br />04<br />05<br />06</div>
        <div className={styles.codeLines}>
          <i /><i /><i /><i /><i /><i />
        </div>
      </div>
      <div className={styles.codeStatus}><CircleCheck size={14} /> Build completed</div>
    </div>
  );
}

function AppArtwork() {
  return (
    <div className={styles.deviceStage}>
      <div className={styles.phoneBack}>
        <span />
        <i />
        <i />
        <i />
      </div>
      <div className={styles.phoneFront}>
        <div className={styles.phoneNotch} />
        <span className={styles.phoneGreeting}>Good morning</span>
        <span className={styles.phoneAvatar}><UsersRound size={17} /></span>
        <span className={styles.phoneBlock} />
        <span className={styles.phoneBlockShort} />
        <span className={styles.phoneButton}>Continue</span>
      </div>
    </div>
  );
}

function TestingArtwork() {
  return (
    <div className={styles.testPanel}>
      <div className={styles.testPanelHeader}>
        <span className={styles.testShield}><Check size={24} /></span>
        <div><i /><i /></div>
      </div>
      <div className={styles.testScore}><strong>All systems go</strong><span>Quality check complete</span></div>
      {["Core features", "Responsive layout", "Browser checks"].map((item) => (
        <div className={styles.testRow} key={item}>
          <CircleCheck size={16} /><span>{item}</span><i>Passed</i>
        </div>
      ))}
    </div>
  );
}

function WritingArtwork() {
  return (
    <div className={styles.documentStage}>
      <div className={styles.documentCard}>
        <span className={styles.documentTag}>THE BRAND JOURNAL</span>
        <strong>Ideas worth<br />sharing.</strong>
        <i className={styles.documentImage}><FileText size={28} /></i>
        <span className={styles.documentLine} />
        <span className={styles.documentLine} />
        <span className={styles.documentLineShort} />
      </div>
      <span className={styles.documentPencil}><Palette size={20} /></span>
    </div>
  );
}

function LocalArtwork() {
  return (
    <div className={styles.mapCard}>
      <div className={styles.mapGrid}>
        <span /><span /><span /><span /><span /><span />
        <svg viewBox="0 0 300 220" aria-hidden="true">
          <path d="M-20 165 82 92l53 27 68-86 115 51" />
          <path d="M42 240 101 151l81-12 57 89" />
          <path d="M-10 48 87 76l55-82" />
        </svg>
        <span className={styles.mapPin}><MapPin size={31} fill="currentColor" /></span>
      </div>
      <div className={styles.mapResult}><MapPin size={16} /><span>Right where customers look</span></div>
    </div>
  );
}

function SocialArtwork() {
  return (
    <div className={styles.socialBoard}>
      <div className={styles.socialTop}>
        <span className={styles.socialLogo}><UsersRound size={20} /></span>
        <span><i /><i /></span>
        <span className={styles.socialFollow}>Follow</span>
      </div>
      <div className={styles.socialFeature}><span /><i /><i /></div>
      <div className={styles.socialMetrics}>
        <span><strong>2.4k</strong><i>community</i></span>
        <span><strong>128</strong><i>new stories</i></span>
      </div>
      <div className={styles.socialAvatars}><i /><i /><i /><i /><span>+18</span></div>
    </div>
  );
}

function SearchArtwork() {
  return (
    <div className={styles.searchBoard}>
      <div className={styles.searchTop}>
        <span className={styles.searchIcon}><Search size={16} /></span>
        <i />
        <span className={styles.searchDot} />
      </div>
      <div className={styles.searchRank}>
        <span>Visibility overview</span>
        <strong>+38.6%</strong>
      </div>
      <div className={styles.chart}>
        <div><i /><i /><i /><i /></div>
        <svg viewBox="0 0 300 120" aria-hidden="true">
          <path d="m0 100 48-18 42 8 50-42 45 14 48-39 67-16" />
          <path className={styles.chartArea} d="m0 100 48-18 42 8 50-42 45 14 48-39 67-16v113H0z" />
        </svg>
      </div>
      <div className={styles.searchFooter}><BarChart3 size={15} /> Steady organic growth</div>
    </div>
  );
}

const artworkByService: Record<ServiceIcon, ComponentType> = {
  palette: DesignArtwork,
  code: CodeArtwork,
  app: AppArtwork,
  testing: TestingArtwork,
  writing: WritingArtwork,
  local: LocalArtwork,
  social: SocialArtwork,
  search: SearchArtwork,
};

export default function ServiceHeroArtwork({ icon }: ServiceHeroArtworkProps) {
  const Artwork = artworkByService[icon];

  return (
    <div className={styles.artwork} aria-hidden="true">
      <div className={styles.artHalo} />
      <div className={styles.artOrbit} />
      <div className={styles.artOrbitInner} />
      <div className={styles.artFrame}>
        <div className={styles.artFrameTop}>
          <span />
          <span />
          <span />
          <i>WEB PERFECTION / {icon.toUpperCase()}</i>
        </div>
        <Artwork />
      </div>
      <div className={styles.artFloatTop}><Check size={14} /> Made for your goals</div>
      <div className={styles.artFloatBottom}><span /> Thoughtful by design</div>
    </div>
  );
}
