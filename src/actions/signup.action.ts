import { signUp } from "@/services/api";
import { SignUpForm } from "@/utils/types";
import { ActionFunctionArgs, redirect } from "react-router-dom";

async function signUpAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const method = request.method.toUpperCase();

  const handlers: Record<string, () => Promise<Response | { ok: boolean, error: string }>> = {
    POST: async () => {
      const userInfo: SignUpForm = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      };
      try {
        await signUp(userInfo);
        return redirect("/")
      } catch (error) {
        console.error(error)
        return { ok: false, error: "Something went wrong" }
      }
    },
  };

  if (handlers[method]) {
    return handlers[method]();
  }

  return null;
};

export default signUpAction;