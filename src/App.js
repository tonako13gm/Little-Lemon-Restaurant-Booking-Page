import { ChakraProvider, Container } from '@chakra-ui/react'
import Header from './components/Header'
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import theme from './brand';
import { Hide } from '@chakra-ui/react';



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW='container.xl'>
        <Header/>
<Hide breakpoint='(max-width: 767px)'>
        <Hero/>
        <Highlights/>
        <Testimonials/>
        <About/>
        <Footer/>
</Hide>
      </Container>
    </ChakraProvider>
  )
}

export default App;
