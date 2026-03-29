import { Form, Link, useFetcher } from "react-router-dom";
import { LoginForm } from "@/utils/types";
import { Button } from "@/components/ui/Button";
import { LoginInputs } from "@/utils/constants";
import { loginAction } from "@/actions";
import { SubmitHandler, useForm } from "react-hook-form";

function Login() {
  const fetcher = useFetcher<typeof loginAction>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    fetcher.submit({ ...data }, { method: 'POST', action: '/login' });
  };
  const disabled = fetcher.state !== 'idle';

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center px-4 py-8">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div
        className="w-full max-w-md relative z-10 opacity-0 animate-[fadeInUpSmall_0.7s_ease-out_forwards]"
      >
        <div className="mb-8 text-center">
          <h1
            className="text-4xl font-bold text-white mb-2 opacity-0 animate-[fadeIn_0.6s_ease-out_0.3s_forwards]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              BlogVerse
            </span>
          </h1>
          <p className="text-white/60 text-sm">Sign in to continue</p>
        </div>

        <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 shadow-2xl">

          <Form
            method="POST"
            className="space-y-5"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div>
              {fetcher.data?.error &&
                <div className="bg-red-200 border border-red-800 text-red-800 px-3 py-2 rounded relative mb-5" role="alert">
                  <strong className="font-bold">Error : </strong>
                  <span className="block sm:inline ">{fetcher.data.error}</span>
                </div>

              }
              <label className="block text-sm font-semibold text-white mb-2">
                Email Address
              </label>
              <input
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 px-4 py-3 rounded-lg focus:bg-white/10 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                type={LoginInputs.EMAIL}
                id={LoginInputs.EMAIL}
                placeholder={LoginInputs.EMAIL_PLACEHOLDER}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}

              />
              {errors.email && <p role="alert" className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Password
              </label>
              <input
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 px-4 py-3 rounded-lg focus:bg-white/10 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                type={LoginInputs.PASSWORD}
                id={LoginInputs.PASSWORD}
                placeholder={LoginInputs.PASSWORD_PLACEHOLDER}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p role="alert" className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

            </div>
            <Button
              type="submit"
              disabled={disabled}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold shadow-md transition-all duration-300"
            >
              {disabled
                ? "Signing in..."
                : "Sign in"
              }
            </Button>
          </Form>

          <p className="text-center text-white/60 text-sm mt-6">
            Don't have an account?{"  "}
            <Link to="/signup" >
              <span
                className="text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer transition-colors hover:scale-105 inline-block"
              >
                Create one
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;