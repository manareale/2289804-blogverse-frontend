import axiosInstance, { requireAuth } from "@/services/api";
import { Post } from "@/utils/types";

async function homeLoader(): Promise<Post[]> {
  await requireAuth()
  try {
    const res = await axiosInstance.get('/post')
    const posts = res.data as Post[];
    return posts

  } catch (error) {
    console.log("Failed to load profile.", error);
    return []
  }

}

export default homeLoader;