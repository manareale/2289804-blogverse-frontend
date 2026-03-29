
export interface LoginForm {
  email: string,
  password: string
}

export interface Post {
  postId: string
  title: string,
  author: string,
  content: string,
  date: string,
  summary: string,
}

export interface SignUpForm {
  name: string,
  email: string,
  password: string
}

export interface Post {
  postId: string,
  title: string,
  excerpt: string,
  content: string,
  createdAt: string,
}

export interface User {
  id: string,
  userId: string,
  name: string,
  email: string,
}

export interface UserProfileData {
  user: User,
  userPosts: Post[]
}

export interface PostForm {
  title: string,
  content: string,
  isPublished?: boolean
}