
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import AboutPage from "./components/AboutPage"
import Home from "./components/Home"

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // other pages....
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App

