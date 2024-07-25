import { Box, Flex, Image } from '@chakra-ui/react'
import logo from '../assets/logo.jpg'
import TestLink from "../components/TestLink";
import { Routes, Route, Link } from "react-router-dom";



function Header() {
    return (
        <Flex as='header' border='1px' borderColor='BlackAlpha.900' w='100%' p={4} color='BlackAlpha.900'>
            <Box flex='2'></Box>
            <Box flex='2'>
                <Image src={logo} alt='Little Lemmon' />
            </Box>
            <Box as='nav'flex='6' alignContent="center">
                <Flex direction="row" justifyContent="space-around">
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Menu</Link>
                    <Link to="/">Reservations</Link>
                    <Link to="/">Order Online</Link>
                    <Link to="/">Login</Link>
                </Flex>
                <Routes> 
                    <Route path="../components/TestLink" element={<TestLink />}></Route>
                    {/* <Route path="/about" element={<AboutLittleLemon />}></Route>
                    <Route path="/contact" element={<Contact />}></Route> */}
                </Routes> 
            </Box>
            <Box flex='2'></Box>
        </Flex>
    )
  }

  export default Header;