import { ChakraProvider, Container } from '@chakra-ui/react'
// import Header from './components/Header'
// import Hero from './components/Hero';
// import Highlights from './components/Highlights';
// import Testimonials from './components/Testimonials';
// import About from './components/About';
// import Footer from './components/Footer';
import theme from './brand';
// import { Hide } from '@chakra-ui/react';
// import index from './index';
// import TestLink from './components/TestLink';
// import { Routes, Route } from 'react-router-dom';

// import React from 'react';
// import { Outlet } from 'react-router-dom'


// function App() {
//   return (
//     <ChakraProvider theme={theme}>
//       <Container maxW='container.xl'>
//         <Header/>
//         {/* <Hero/>
//         <Highlights/>
//         <Testimonials/>
//         <About/> */}
//         <Outlet/>
//         <Footer/>
//       </Container>
//     </ChakraProvider>
//   )
// }

// export default App;


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from "./Layout"
import TestLink from "./components/TestLink"
import Testimonials from "./components/Testimonials"



function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: [
        {
          path: "/",
          element: <Testimonials />,
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

