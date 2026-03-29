import { login } from "@/services/api";
import { LoginForm } from "@/utils/types";
import { ActionFunctionArgs, redirect } from "react-router-dom";

async function loginAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const method = request.method.toUpperCase();

  const handlers: Record<string, () => Promise<Response | { error: string; }>> = {
    POST: async () => {
      const creds: LoginForm = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      };
      const pathname = new URL(request.url)
        .searchParams.get("redirectTo") || "/"

      try {
        await login(creds)
        return redirect(pathname)
      } catch (error) {
        console.error(error)
        return { ok: false, error: "Invalid email or password" }
      }
    },
  };

  if (handlers[method]) {
    return handlers[method]();
  }

  return null;
};

export default loginAction