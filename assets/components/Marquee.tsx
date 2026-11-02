const services = [
  { text: "Web Development", outline: true },
  { text: "UI/UX Design", outline: false },
  { text: "Web Design", outline: true },
  { text: "Websites Development", outline: false },
];

export default function Marquee() {
  return (
    <section className="marquee">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {services.map((service) => (
              <span
                key={service.text}
                className={
                  service.outline
                    ? "marquee-text outline"
                    : "marquee-text italic"
                }
              >
                {service.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
