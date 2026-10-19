
import React from "react";
import "../css/technologiesSection.css";

export interface TechnologyCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor?: string;
}

interface TechnologiesSectionProps {
  title: string;
  highlight: string;
  description: string;
  cards: TechnologyCard[];
  className?: string;
}

function TechnologiesSection({
  title,
  highlight,
  description,
  cards,
  className = "",
}: TechnologiesSectionProps) {
  return (
    <section className={`technologies-section ${className}`}>
      <div className="technologies-container">
        <header className="technologies-header">
          <h2 className="technologies-heading">
            {title}{" "}
            <span>{highlight}</span>
          </h2>

          <p className="technologies-intro">
            {description}
          </p>
        </header>

        <div className="technologies-grid">
          {cards.map((card, index) => (
            <article
              className="technology-card"
              key={`${card.title}-${index}`}
              style={
                {
                  "--card-index": index,
                  "--icon-color": card.iconColor || "#55c6b0",
                } as React.CSSProperties
              }
            >
              <div className="technology-icon">
                {card.icon}
              </div>

              <h3 className="technology-title">
                {card.title}
              </h3>

              <p className="technology-description">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;
