import axios from 'axios';
import { redirect } from 'react-router-dom';
import { removeToken, saveToken } from "@/utils/auth";
import { LoginForm, PostForm, SignUpForm } from '@/utils/types';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const token = localStorage.getItem('token');
if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default axiosInstance;

export async function requireAuth() {
  const token = localStorage.getItem("token") || false;
  if (!token) {
    throw redirect('/login');
  }
  return true;
}

export async function login(userCreds: LoginForm) {
  try {
    const res = await axiosInstance.post('/auth/signin', userCreds);
    const data = res.data;
    console.log(data)
    saveToken(data.token);

  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err.response?.data
    } else {
      throw {
        message: "Unexpected error while login in..."
      }
    }
  }
}

export async function signUp(userInfo: SignUpForm): Promise<boolean> {
  try {
    const res = await axiosInstance.post('/auth/signup', userInfo);
    saveToken(res.data.token);
    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.status)
      console.error(error.response);
    } else {
      console.error(error);
    }
    return false;
  }
}

export async function logout() {
  removeToken();
}

export async function submitPost(post: PostForm) {
  try {
    const res = await axiosInstance.post("/post", {
      ...post,
      isPublished: true,
    });

    if (res.data) {
      return redirect("/");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data
    } else {
      throw {
        message: "Unexpected error while creating post..."
      }
    }

  }
}