
import type { FeaturedProject } from "@/components/FeaturedWork";
import laurenMinesStudio from "@/assets/images/home/laurenminesstudio.png";
import bodyWellness from "@/assets/images/home/bodyWellness.png";
import alphaedge from "@/assets/images/home/alphaedge.png";
import codeDesign from "@/assets/images/home/codeDesign.png";
import moroccanbeauty from "@/assets/images/home/moroccanbeauty.png";
import Turkista from "@/assets/images/home/Turkista.png";
import DailyShake from "@/assets/images/home/DailyShake.png";
import SKAL from "@/assets/images/home/SKAL.png";

export const homeProjects = [
  {
    name: "Lauren Mines Studio",
    category: "Framework",
    image: laurenMinesStudio,
    imageAlt: "Lauren Mines Studio website preview",
    link: "/portfolio/lauren-mines",
    backgroundClass:
      "bg-gradient-to-br from-blue-300 to-violet-400",
  },
  {
    name: "Bodylab & Wellness",
    category: "Shopify",
    image: bodyWellness,
    imageAlt: "Framework website preview",
    link: "/portfolio/framework",
    backgroundClass:
      "bg-gradient-to-br from-pink-300 to-violet-300",
  },
  {
    name: "Alpha Edge",
    category: "Framework",
    image: alphaedge,
    imageAlt: "Project Three website preview",
    link: "/portfolio/project-three",
    backgroundClass:
      "bg-gradient-to-br from-emerald-100 to-yellow-100",
  },
  {
    name: "Codesign",
    category: "Framework",
    image: codeDesign,
    imageAlt: "Project Four website preview",
    link: "/portfolio/project-four",
    backgroundClass:
      "bg-gradient-to-br from-stone-300 to-amber-100",
  },
  {
    name: "Moroccan Beauty",
    category: "Shopify",
    image: moroccanbeauty,
    imageAlt: "Project Four website preview",
    link: "/portfolio/project-four",
    backgroundClass:
      "bg-gradient-to-br from-stone-300 to-amber-100",
  },
  {
    name: "Turkista",
    category: "Shopify",
    image: Turkista,
    imageAlt: "Project Four website preview",
    link: "/portfolio/project-four",
    backgroundClass:
      "bg-gradient-to-br from-stone-300 to-amber-100",
  },
  {
    name: "DailyShake",
    category: "Shopify",
    image: DailyShake,
    imageAlt: "Project Four website preview",
    link: "/portfolio/project-four",
    backgroundClass:
      "bg-gradient-to-br from-stone-300 to-amber-100",
  },
  {
    name: "Skal",
    category: "Wordpress",
    image: SKAL,
    imageAlt: "Project Four website preview",
    link: "/portfolio/project-four",
    backgroundClass:
      "bg-gradient-to-br from-stone-300 to-amber-100",
  },
] satisfies FeaturedProject[];
