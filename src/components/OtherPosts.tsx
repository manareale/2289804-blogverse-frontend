import { Post } from "@/utils/types";
import { Link } from "react-router-dom";

function OtherPosts({ posts }: { posts: Post[] }) {
  return (
    <div className="mb-16">
      <div className="text-white/60 text-sm font-medium tracking-wide mb-6">
        All Articles
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, idx) => (
          <Link to={`/post/${post.postId}`} key={`other-post-${post.postId}`}>
            <div
              style={{
                animationDelay: `${idx * 0.1}s`
              }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-md hover:shadow-lg hover:shadow-purple-500/20 hover:border-white/20 transition-all duration-300 cursor-pointer hover:-translate-y-1 opacity-0 animate-[slideUpSmall_0.5s_ease-out_forwards]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
              <div className="relative z-10">
                <div className="text-xs text-white/50 font-medium mb-3">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                  })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {post.content}
                </p>
                <div className="flex items-center text-cyan-400 text-sm font-medium">
                  Continue Reading <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>)
}

export default OtherPosts;
