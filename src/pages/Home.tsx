import HomeBanner from "@/components/HomeBanner";
import HomeTags from "@/components/HomeTags";
import FeaturedPost from "@/components/FeaturedPost";
import TrendingPosts from "@/components/TrendingPosts";
import AboutSection from "@/components/AboutSection";
import OtherPosts from "@/components/OtherPosts";
import CTA from "@/components/CTA";
import { useLoaderData } from "react-router-dom";
import { shufflePosts } from "@/utils/utils";
import { Post } from "@/utils/types";


export default function Home() {
  const posts = useLoaderData() as Post[];
  const randomIndex: number = Math.floor(Math.random() * posts.length);
  const featuredPost = posts[randomIndex];
  const trendingPosts = shufflePosts(posts).slice(1, 4);
  const otherPosts = shufflePosts(posts).slice(2);

  return (
    <main>
      {/* Banner */}
      <HomeBanner />

      {/* Tags */}
      <HomeTags />

      {/* CTA */}
      <CTA />

      {/* Featured */}
      {featuredPost && <FeaturedPost post={featuredPost} />}

      {/* Trending */}
      {trendingPosts.length > 0 && <TrendingPosts posts={trendingPosts} />}

      {/* Other Posts */}
      <OtherPosts posts={otherPosts} />

      {/* Author & Newsletter */}
      <AboutSection />
    </main>
  );
}
