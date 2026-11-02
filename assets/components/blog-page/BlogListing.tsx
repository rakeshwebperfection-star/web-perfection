"use client";

import { useState } from "react";
import FeaturedBlog from "@/assets/components/FeaturedBlog";
import { blogPosts } from "@/assets/data/blogPosts";

const archivePosts = [
  ...blogPosts,
  blogPosts[2],
  blogPosts[2],
  blogPosts[2],
];

export default function BlogListing() {
  const [showLatestMessage, setShowLatestMessage] = useState(false);

  return (
    <div>
      <FeaturedBlog
        posts={archivePosts}
        variant="archive"
        showHeading={false}
      />
      <div className="bg-[#030609] pb-12 text-center sm:pb-16">
        <button
          type="button"
          onClick={() => setShowLatestMessage(true)}
          className="about-button min-h-0 px-4 py-2 text-xs"
          disabled={showLatestMessage}
        >
          {showLatestMessage ? "You’re all caught up" : "Load More"}
          {!showLatestMessage && <span aria-hidden="true">→</span>}
        </button>
      </div>
    </div>
  );
}
