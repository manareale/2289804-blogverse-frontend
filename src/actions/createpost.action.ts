import { submitPost } from "@/services/api";
import { PostForm } from "@/utils/types";
import { ActionFunctionArgs } from "react-router-dom";

async function createPostAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const method = request.method.toUpperCase();

  const handlers: Record<string, () => Promise<Response | { ok: boolean, error?: string, message?: string }>> = {
    POST: async () => {
      const userInfo: PostForm = {
        title: formData.get('title') as string,
        content: formData.get('content') as string,
      };
      try {
        await submitPost(userInfo);
        return { ok: true, message: "Post have been submitted !" }
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

export default createPostAction;