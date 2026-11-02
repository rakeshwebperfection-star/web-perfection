import ValuesSection from "@/assets/components/ValuesSection";
import { valuesData } from "@/assets/data/ourdeveloper";
import BrandsSection from "@/assets/components/service-page/brands";

export default function OurDevlop() {
  return (
    <>
      <ValuesSection
        title="Our Developers Adopt a Streamlined"
        highlight="Development Process"
        description="A well laid development process is what we have continued to focus on.Our well-equipped Mean Developers follow a meticulously designed 5 step process as explained below."
        items={valuesData}
      />
      <BrandsSection />
    </>
  );
}
