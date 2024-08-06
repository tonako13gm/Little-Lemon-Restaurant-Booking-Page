
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import TestLink from "./components/TestLink"
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
          path: "/try",
          element: <TestLink />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App

