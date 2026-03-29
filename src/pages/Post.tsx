/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "@/services/api";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  authorId: string;
  coverImage?: string;
  createdAt: string;
}

export default function PostPage() {

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [authorData, setAuthorData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axiosInstance.get(`/post/${id}`)
        setPost(response.data);

        const authorResponse = await axiosInstance.get(`/user/${response.data.authorId}`);
        setAuthorData(authorResponse.data)
      } catch (error) {
        setError("Failed to load post:");
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center">
      <div className="text-white/60">Loading...</div>
    </div>
  );
  if (error) return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center">
      <div className="text-red-400">{error}</div>
    </div>
  );
  if (!post) return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center">
      <div className="text-white/60">No post found.</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black px-4 sm:px-6 py-10 flex justify-center items-start">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div
        className="w-full max-w-4xl relative z-10 opacity-0 animate-[fadeInUpSmall_0.6s_ease-out_forwards]"
      >
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 text-white/60 hover:text-white transition-colors hover:scale-110 active:scale-95"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Home</span>
        </button>

        <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
          <article className="prose prose-invert max-w-none">
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-white/70 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-cyan-400" />
                  <span className="text-sm">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={18} className="text-purple-400" />
                  <span
                    className="text-sm font-medium cursor-pointer hover:text-cyan-400 transition-colors hover:scale-110 active:scale-95 inline-block"
                    onClick={() => navigate(`/profile/${authorData.userId}`)}
                  >
                    {authorData.name || "Unknown Author"}
                  </span>
                </div>
              </div>

              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt="Cover"
                  className="w-full rounded-xl border border-white/10 shadow-lg my-8 opacity-0 animate-[fadeInUpSmall_0.8s_ease-out_forwards]"
                />
              )}
            </div>

            <div className="prose prose-invert max-w-none text-white/90 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="border-t border-white/10 mt-12 pt-8 flex items-center gap-4">
              <img
                src={`https://api.dicebear.com/9.x/notionists/svg?seed=${authorData.name}`}
                alt={authorData.name}
                className="w-16 h-16 rounded-full border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20"
              />
              <div>
                <p className="text-white font-semibold text-lg">{authorData.name}</p>
                <p className="text-white/60 text-sm">@{authorData.email?.split("@")[0]}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
