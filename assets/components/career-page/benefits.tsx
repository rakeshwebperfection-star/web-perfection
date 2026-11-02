import {
  BadgeCheck,
  BrainCircuit,
  Clock3,
  Handshake,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const benefits = [
  {
    title: "Flexible Environment",
    description:
      "Enjoy a flexible work environment that helps you balance your personal and professional life.",
    icon: Handshake,
  },
  {
    title: "Learning & Development",
    description:
      "Build new skills with mentorship, learning resources, and opportunities to grow.",
    icon: BrainCircuit,
  },
  {
    title: "Better Growth Opportunities",
    description:
      "Take on meaningful work and grow your career with clear opportunities to advance.",
    icon: TrendingUp,
  },
  {
    title: "Appreciation & Recognition",
    description:
      "Your ideas and contributions matter. We celebrate great work and shared success.",
    icon: BadgeCheck,
  },
  {
    title: "On Time Salary & Increment",
    description:
      "Get paid on time and have regular performance conversations as you grow with us.",
    icon: Clock3,
  },
  {
    title: "Client Satisfaction",
    description:
      "Work alongside a supportive team to create thoughtful experiences for our clients.",
    icon: UsersRound,
  },
];

export default function CareerBenefits() {
  return (
    <section className="relative overflow-hidden bg-[#030609] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#0b2440] to-transparent"
      />
      <div className="relative mx-auto max-w-300">
        <h2 className="mb-8 text-center text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
          Why Work{" "}
          <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            With Us?
          </span>
        </h2>

        <div className="grid grid-cols-2 gap-3 min-[420px]:grid-cols-3 sm:gap-5">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group flex min-h-32 flex-col items-center rounded-lg border border-white/5 bg-[#191827] px-3 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-[#201f32] sm:min-h-40 sm:px-5 sm:py-6"
            >
              <Icon
                aria-hidden="true"
                className="mb-4 size-6 shrink-0 text-sky-500 transition-transform duration-300 group-hover:scale-110 sm:size-13"
                strokeWidth={1.5}
              />
              <h3 className="mb-3 text-2xl font-semibold leading-snug sm:text-xl">
                {title}
              </h3>
              <p className="text-md leading-relaxed text-white/70 sm:text-md">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
