import { ChakraProvider, Container } from '@chakra-ui/react'
import Header from './components/Header'
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import theme from './brand';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth='container.xl'>
        <Header/>
        <Hero/>
        <Highlights/>
        <Testimonials/>
        <About/>
        <Footer/>
      </Container>
    </ChakraProvider>
  )
}

export default App;
