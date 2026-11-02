import type { ValueItem } from "@/assets/components/ValuesSection";
import Initiation from "@/assets/icon/initiation.png";
import Prototyping from "@/assets/icon/prototyping.png";
import Coding from "@/assets/icon/coding.png";
import Maintenance from "@/assets/icon/maintenance.png";

export const valuesData: ValueItem[] = [
  {
    customIcon: Initiation,
    title: "Initiation",
    description:
      "During this stage, the focus is on thoroughly examining the extent of the project, understanding the business needs, operational necessities, and technical specifications.",
  },
  {
    customIcon: Prototyping,
    title: "Design and Prototyping",
    description:
      "Design and prototyping form the dynamic duo, shaping ideas into tangible solutions through thoughtful planning and iterative testing.",
  },
  {
    customIcon: Coding,
    title: "Implementation and Coding",
    description:
      "Implementation and coding bridge the gap between concept and reality, turning designs into functional solutions through precise, executable instructions.",
  },
  {
    customIcon: Maintenance,
    title: "Deployment and Maintenance",
    description:
      "Deployment and maintenance ensure the seamless integration and sustained functionality of a product in the ever-evolving landscape of technology.",
  },
];