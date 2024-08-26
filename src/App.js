
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import AboutPage from "./components/AboutPage"
import Home from "./components/Home"
import Booking from "./components/Booking"
import UnderMaintenace from "./components/UderMaintenace"

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: 
        <Layout />,
      // child route components
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/booking",
          element: <Booking />,
        },
        {
          path: "/Under_Maintenace",
          element: <UnderMaintenace />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App

