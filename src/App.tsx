import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import { CreatePost, Post, Home, Login, Signup, Profile } from './pages'
import { homeLoader, loginLoader, profilePageLoader } from './loaders'
import { loginAction, signUpAction, createPostAction } from './actions'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route
        path='/login'
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route path='/signup'
        element={<Signup />}
        action={signUpAction}
      />
      <Route
        path='/'
        element={<Layout />}>
        <Route
          index
          element={<Home />}
          loader={homeLoader}
        />
        <Route
          path='create'
          element={<CreatePost />}
          action={createPostAction}
        />
        <Route
          path='post/:id'
          element={<Post />}
        />
        <Route
          path='profile'
          element={<Profile />}
          loader={profilePageLoader}
        />
        <Route
          path='profile/:id'
          element={<Profile />}
        />
      </Route>
    </Route>
  ))
  return <RouterProvider router={router} />

}

export default App
