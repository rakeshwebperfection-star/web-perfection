
import FeaturedBlog from "@/assets/components/FeaturedBlog";
import { blogPosts } from "@/assets/data/blogPosts";

export default function HomePage() {
  return (
    <main>
      <FeaturedBlog posts={blogPosts} />
    </main>
  );
}
