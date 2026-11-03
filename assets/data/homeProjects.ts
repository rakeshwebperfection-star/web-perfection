
import type { FeaturedProject } from "@/assets/components/featuredWork";
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
    filters: ["Frameworks", "UI/UX Design"],
    image: laurenMinesStudio,
    imageAlt: "Lauren Mines Studio website preview",
    link: "/portfolio/lauren-mines",
    backgroundClass:
      "bg-gradient-to-br from-blue-300 to-violet-400",
  },
  {
    name: "Bodylab & Wellness",
    category: "Shopify",
    filters: ["E-Commerce", "UI/UX Design"],
    image: bodyWellness,
    imageAlt: "Bodylab & Wellness responsive online store",
    link: "/portfolio/framework",
    backgroundClass:
      "bg-gradient-to-br from-pink-300 to-violet-300",
  },
  {
    name: "Alpha Edge",
    category: "Framework",
    filters: ["Frameworks", "UI/UX Design"],
    image: alphaedge,
    imageAlt: "Alpha Edge responsive website",
    link: "/portfolio/project-three",
    backgroundClass:
      "bg-gradient-to-br from-emerald-100 to-yellow-100",
  },
  {
    name: "Codesign",
    category: "Framework",
    filters: ["Frameworks", "UI/UX Design"],
    image: codeDesign,
    imageAlt: "Codesign responsive website",
    link: "/portfolio/project-four",
    backgroundClass:
      "bg-gradient-to-br from-stone-300 to-amber-100",
  },
  {
    name: "Moroccan Beauty",
    category: "Shopify",
    filters: ["E-Commerce", "UI/UX Design"],
    image: moroccanbeauty,
    imageAlt: "Moroccan Beauty responsive online store",
    link: "/portfolio/project-four",
    backgroundClass:
      "bg-gradient-to-br from-stone-300 to-amber-100",
  },
  {
    name: "Turkista",
    category: "Shopify",
    filters: ["E-Commerce", "UI/UX Design"],
    image: Turkista,
    imageAlt: "Turkista responsive online store",
    link: "/portfolio/project-four",
    backgroundClass:
      "bg-gradient-to-br from-stone-300 to-amber-100",
  },
  {
    name: "DailyShake",
    category: "Shopify",
    filters: ["E-Commerce", "UI/UX Design"],
    image: DailyShake,
    imageAlt: "DailyShake responsive online store",
    link: "/portfolio/project-four",
    backgroundClass:
      "bg-gradient-to-br from-stone-300 to-amber-100",
  },
  {
    name: "Skal",
    category: "Wordpress",
    filters: ["CMS", "UI/UX Design"],
    image: SKAL,
    imageAlt: "Skal responsive WordPress website",
    link: "/portfolio/project-four",
    backgroundClass:
      "bg-gradient-to-br from-stone-300 to-amber-100",
  },
] satisfies FeaturedProject[];
