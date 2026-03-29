import { Link, useFetcher } from "react-router-dom";
import { signUpAction } from "@/actions";
import { useForm, SubmitHandler } from "react-hook-form"
import { SignUpForm } from "@/utils/types";


function Signup() {
  const fetcher = useFetcher<typeof signUpAction>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>();

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    fetcher.submit({ ...data }, { method: 'POST', action: '/signup' });
  };
  const disabled = fetcher.state !== 'idle';

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center px-4 py-8">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div
        className="w-full max-w-md relative z-10 opacity-0 animate-[fadeInUpSmall_0.7s_ease-out_forwards]"
      >
        <div className="mb-8 text-center">
          <h1
            className="text-4xl font-bold text-white mb-2 opacity-0 animate-[fadeIn_0.6s_ease-out_0.3s_forwards]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Join Us
            </span>
          </h1>
          <p className="text-white/60 text-sm">Create your account to get started</p>
        </div>

        <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 shadow-2xl">
          {fetcher.data?.error &&
            <div className="bg-red-200 border border-red-800 text-red-800 px-3 py-2 rounded relative mb-5" role="alert">
              <strong className="font-bold">Error : </strong>
              <span className="block sm:inline ">{fetcher.data.error}</span>
            </div>

          }
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                id="name"
                {...register("name", {
                  required: "Full name is required",
                })}
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 px-4 py-3 rounded-lg focus:bg-white/10 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300"
              />
              {errors.name && <p role="alert" className="text-red-500 text-sm mt-1">{errors.name.message}</p>}

            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}

                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 px-4 py-3 rounded-lg focus:bg-white/10 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <p role="alert" className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                id="password"
                {...register("password", { required: "Password is required" })}
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 px-4 py-3 rounded-lg focus:bg-white/10 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300"
              />
              {errors.password && <p role="alert" className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

            </div>

            <button
              type="submit"
              disabled={disabled}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 mt-6 active:scale-95"
            >
              {disabled ? 'Creating...' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-white/60 text-sm mt-6">
            Already have an account?{" "}
            <Link to={"/login"} >
              <span
                className="text-pink-400 hover:text-pink-300 font-semibold cursor-pointer transition-colors hover:scale-105 inline-block"
              >
                Sign in
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;