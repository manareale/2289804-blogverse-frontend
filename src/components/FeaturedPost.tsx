import { Post } from "@/utils/types";
import { Link } from "react-router-dom";


function FeaturedPost({ post }: { post: Post }) {
  return (
    <div className="mb-16">
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 backdrop-blur-md p-8 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 opacity-0 animate-[fadeInUpSmall_0.8s_ease-out_forwards]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-transparent to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-cyan-400 mb-4">
            ✨ Featured
          </div>
          <h3 className="text-3xl font-bold text-white mb-3 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-white/70 text-base mb-6 line-clamp-2">
            {post.summary}
          </p>
          <Link to={`/post/${post.postId}`}>
            <button
              className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Read Article
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;
