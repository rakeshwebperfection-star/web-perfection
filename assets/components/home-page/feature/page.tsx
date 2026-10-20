import FeaturedWork from "@/assets/components/featuredWork";
import { homeProjects } from "@/assets/data/homeProjects";

export default function HomePage() {
  return (
    <>
      {/* Other homepage sections */}

      <FeaturedWork
        title="Our Featured Work"
        highlightedTitle="Featured Work"
        description="Have a look at some of our best work."
        projects={homeProjects}
        buttonText="Read More"
        buttonLink="/portfolio"
      />

      {/* Other homepage sections */}
    </>
  );
}
