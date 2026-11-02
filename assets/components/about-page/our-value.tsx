import ValuesSection from "@/assets/components/ValuesSection";
import { valuesData } from "@/assets/data/values";

export default function AboutPage() {
  return (
    <>
      <ValuesSection
        title="Our"
        highlight="Values"
        items={valuesData}
      />
    </>
  );
}
