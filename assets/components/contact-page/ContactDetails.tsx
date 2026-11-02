import { Home, Mail, Phone } from "lucide-react";

const contactDetails = [
  {
    title: "Visit Us",
    detail: (
      <>
        Cyber Cube, C-201/202, 2nd Floor
        <br />
        Cabin no. 201
        <br />
        Phase-8B, Mohali
      </>
    ),
    href: "https://maps.google.com/?q=Cyber+Cube+Phase+8B+Mohali",
    icon: Home,
  },
  {
    title: "Call Us",
    detail: "0172-4605800",
    href: "tel:+911724605800",
    icon: Phone,
  },
  {
    title: "Message Us",
    detail: "hrwebperfection@gmail.com",
    href: "mailto:hrwebperfection@gmail.com",
    icon: Mail,
  },
];

export default function ContactDetails() {
  return (
    <section className="bg-linear-to-b from-[#0d213b] via-[#020509] to-[#0d213b] px-5 py-10 text-white sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {contactDetails.map(({ title, detail, href, icon: Icon }) => (
          <a
            key={title}
            href={href}
            target={title === "Visit Us" ? "_blank" : undefined}
            rel={title === "Visit Us" ? "noopener noreferrer" : undefined}
            className="group flex min-h-40 flex-col items-center justify-center rounded-xl bg-[#1C1A2B] px-5 py-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-[#202033] hover:shadow-[0_12px_35px_rgba(0,132,255,0.12)]"
          >
            <Icon
              aria-hidden="true"
              className="mb-3 h-10 w-10 text-sky-500 transition-transform group-hover:scale-110"
              strokeWidth={1.6}
            />
            <h2 className="text-xl font-bold">{title}</h2>
            <span className="mt-2 text-sm leading-6 text-white/70">
              {detail}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
