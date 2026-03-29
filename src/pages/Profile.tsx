// import { useState, useEffect } from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";
import { Edit, ArrowLeft } from "lucide-react";
import { UserProfileData } from "@/utils/types";



function Profile() {
  const { user, userPosts } = useLoaderData<UserProfileData>()
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-start px-4 sm:px-6 py-10">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div
        className="w-full max-w-4xl relative z-10 opacity-0 animate-[fadeInUpSmall_0.6s_ease-out_forwards]"
      >
        <Link to={"/"}>
          <button
            className="mb-8 flex items-center gap-2 text-white/60 hover:text-white transition-colors hover:scale-110 active:scale-95"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </button>
        </Link>

        {user ? (
          <div className="space-y-8">
            {/* Profile Card */}
            <div
              className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-12 shadow-2xl opacity-0 animate-[fadeInUpSmall_0.6s_ease-out_forwards]"
            >
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <img
                  src={`https://api.dicebear.com/9.x/notionists/svg?seed=${user.name}`}
                  alt={user.name}
                  className="w-24 h-24 rounded-full border-3 border-cyan-500/50 shadow-lg shadow-cyan-500/30"
                />
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-white mb-2">{user.name}</h1>
                  <p className="text-white/60 text-base mb-4">{user.email}</p>
                  <div className="flex items-center gap-3">
                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-white/70 text-sm">{userPosts.length} articles published</p>
                    </div>
                    {!id && (
                      <button
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        <Edit size={16} />
                        Edit Profile
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Articles */}
            <div
              className="opacity-0 animate-[fadeInUpSmall_0.6s_ease-out_0.1s_forwards]"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Published Articles</h2>

              {userPosts && userPosts.length > 0 ? (
                <div className="space-y-4">
                  {userPosts.map((post, idx) => (
                    <Link to={`/post/${post.postId}`} key={post.postId}>
                      <div
                        style={{
                          animationDelay: `${idx * 0.1}s`
                        }}
                        className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-md hover:shadow-lg hover:shadow-purple-500/20 hover:border-white/20 transition-all duration-300 cursor-pointer hover:-translate-y-1 opacity-0 animate-[slideUpSmall_0.5s_ease-out_forwards]"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                        <div className="relative z-10">
                          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-white/70 text-sm line-clamp-2 mb-3">
                            {post.content || post.excerpt}
                          </p>
                          <div className="text-xs text-white/50">
                            {new Date(post.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric"
                            })}
                          </div>
                        </div>
                      </div>
                    </Link>

                  ))}
                </div>
              ) : (
                <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center">
                  <p className="text-white/60">No articles published yet</p>
                  <Link to={"/create"}>
                    <button
                      className="mt-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      Write Your First Article
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center">
            <p className="text-white/60">User not found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
