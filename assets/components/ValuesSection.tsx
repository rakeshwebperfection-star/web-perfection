import {
  BrainCircuit,
  UsersRound,
  Trophy,
  UserRoundStar,
} from "lucide-react";

import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";

import aboutDecorationTop from "@/assets/images/home/about-decoration-top.png";
import aboutDecorationBottom from "@/assets/images/home/about-decoration-bottom.png";

const iconMap = {
  innovation: BrainCircuit,
  teamwork: UsersRound,
  satisfaction: Trophy,
  clients: UserRoundStar,
};

export type ValueItem = {
  title: string;
  description: string;
  icon?: keyof typeof iconMap;
  customIcon?: ReactNode | StaticImageData | string;
};

type ValuesSectionProps = {
  title?: string;
  highlight?: string;
  description?: string;
  items: ValueItem[];
};

const iconClass = "mb-7 size-11 shrink-0 text-[#00aeff] transition-transform duration-300 group-hover:scale-110";

function renderIcon(item: ValueItem) {
  const { icon, customIcon } = item;

  // 1) Custom icon: image import ya path (png/svg/webp)
  if (
    typeof customIcon === "string" ||
    (customIcon && typeof customIcon === "object" && "src" in customIcon)
  ) {
    const src = customIcon as string | StaticImageData;
    return (
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        width={44}
        height={44}
        className="mb-7 size-11 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110"
      />
    );
  }

  // 2) Custom icon: JSX / SVG component
  if (customIcon) {
    return <div className={iconClass}>{customIcon}</div>;
  }

  // 3) Default lucide icon
  if (icon) {
    const Icon = iconMap[icon];
    return <Icon aria-hidden="true" className={iconClass} strokeWidth={1.35} />;
  }

  return null;
}

export default function ValuesSection({
  title = "Our",
  highlight = "Values",
  description = " ",
  items,
}: ValuesSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#030609] px-5 py-16 text-white sm:px-8 lg:py-20">
      {/* Decorative background rings */}
      <div className="about-decoration about-decoration-top">
        <Image className="about-illustration" src={aboutDecorationTop.src ?? aboutDecorationTop} alt="Creative team working together on digital projects" width={700} height={560} />
      </div>
      <div className="about-decoration about-decoration-bottom">
        <Image className="about-illustration" src={aboutDecorationBottom.src ?? aboutDecorationBottom} alt="Creative team working together on digital projects" width={380} height={340} />
      </div>

      <div className="mx-auto max-w-360">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl mb-6 pb-6">
          <h2 className="mb-3 text-center text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
            {title}{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {highlight}
            </span>
          </h2>
          <p className="text-center">{description}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            return (
              <article
                key={`${item.title}-${index}`}
                className="group flex min-h-65 flex-col rounded-xl border-b-4 border-[#3996df] bg-[#07131f] p-6 duration-300 hover:bg-[#0b1b2a] hover:-translate-y-1 sm:p-6"
              >
                {renderIcon(item)}

                <h3 className="mb-3 text-[24px] font-semibold leading-snug">
                  {item.title}
                </h3>

                <p className="text-[15px] leading-[1.75] text-gray-200">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}