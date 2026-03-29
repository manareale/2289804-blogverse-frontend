import { LoaderFunctionArgs, redirect } from "react-router-dom"

function loginLoader({ request }: LoaderFunctionArgs) {
  const isLoggedIn = localStorage.getItem("token") || false
  return !isLoggedIn ?
    new URL(request.url).searchParams.get("message")
    :
    redirect("/")
}

export default loginLoader;