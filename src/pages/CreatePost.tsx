import { Link, useFetcher } from "react-router-dom";
import { createPostAction } from "@/actions";
import { PostForm } from "@/utils/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/Textarea";

export default function CreatePost() {
  const fetcher = useFetcher<typeof createPostAction>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostForm>();

  const onSubmit: SubmitHandler<PostForm> = (data) => {
    fetcher.submit({ ...data }, { method: 'POST', action: '/create' });
  };
  const disabled = fetcher.state !== 'idle';

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black px-4 sm:px-6 py-10 flex justify-center items-start">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div
        className="w-full max-w-3xl relative z-10 opacity-0 animate-[fadeInUpSmall_0.6s_ease-out_forwards]"
      >
        <div className="mb-10 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-2 opacity-0 animate-[fadeIn_0.6s_ease-out_0.3s_forwards]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Create New Article
            </span>
          </h1>
          <p className="text-white/60 text-base">Share your thoughts and ideas with the community</p>
        </div>

        <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-10 shadow-2xl">
          {fetcher.data?.error &&
            <div className="bg-red-200 border border-red-800 text-red-800 px-3 py-2 rounded relative mb-5" role="alert">
              <strong className="font-bold">Error : </strong>
              <span className="block sm:inline ">{fetcher.data.error}</span>
            </div>

          }
          <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Article Title
              </label>
              <input
                type="text"
                placeholder="Give your article a compelling title..."
                id="title"
                {...register("title", {
                  required: "Title is required",
                })}
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 px-5 py-4 rounded-lg focus:bg-white/10 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 text-base"
              />
              {errors.title && <p role="alert" className="text-red-500 text-sm mt-1">{errors.title.message}</p>}

            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Content
              </label>
              <Textarea
                placeholder="Write your article content here..."
                id="content"
                {...register("content", {
                  required: "Content is required",
                })}
              />
              {errors.content && <p role="alert" className="text-red-500 text-sm mt-1">{errors.content.message}</p>}

            </div>
            {fetcher.data?.ok &&
              <div className="bg-green-200 border border-green-800 text-green-800 px-3 py-2 rounded relative mt-5">
                <strong className="font-bold">Success: </strong>
                <span className="block sm:inline ">{fetcher.data.message}</span>
              </div>

            }

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={disabled}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 active:scale-95"
              >
                {disabled ? 'Publishing...' : 'Publish article'}
              </button>
              <Link to={"/"}>
                <button
                  type="button"
                  className="flex-1 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-semibold py-4 rounded-lg transition-all duration-300 active:scale-95"
                >
                  Cancel
                </button>

              </Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
