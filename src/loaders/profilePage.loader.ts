import axiosInstance, { requireAuth } from "@/services/api"
import { Post, User, UserProfileData } from "@/utils/types"

async function profilePageLoader(): Promise<UserProfileData> {
  await requireAuth()
  const userProfileRes = await axiosInstance.get(`/user/me`)
  const userPostsRes = await axiosInstance.get(`/post/myposts`)

  return {
    user: userProfileRes.data as User,
    userPosts: userPostsRes.data as Post[]
  } as UserProfileData
}

export default profilePageLoader;