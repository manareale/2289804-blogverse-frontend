import { Post } from "@/utils/types";
import { Link } from "react-router-dom";

function TrendingPosts({ posts }: { posts: Post[] }) {
  return (
    <div className="mb-16">
      <div className="text-white/60 text-sm font-medium tracking-wide mb-6">
        Trending Now
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post: Post, idx) => (
          <Link to={`/post/${post.postId}`} key={`trending-post-${post.postId}`}>
            <div
              style={{
                animationDelay: `${idx * 0.1}s`
              }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 shadow-md hover:shadow-lg hover:shadow-purple-500/20 hover:border-white/20 transition-all duration-300 cursor-pointer hover:-translate-y-1 opacity-0 animate-[slideUpSmall_0.5s_ease-out_forwards]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
              <div className="relative z-10">
                <div className="inline-block px-2 py-1 rounded-full bg-red-500/20 border border-red-500/50 text-xs font-semibold text-red-300 mb-3">
                  🔥 Trending
                </div>
                <h4 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-white/60 line-clamp-2">
                  {post.content}
                </p>
                <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                  Read More <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </Link>

        ))}
      </div>
    </div>
  );
}

export default TrendingPosts;