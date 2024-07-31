import { Box, Flex, Image } from '@chakra-ui/react'
import logo from '../assets/logo.jpg'
import NavLinks from './NavLinks'
import { Routes, Route, Link } from "react-router-dom"



function Header() {
    return (
        <Flex as='header' color='brand.dark' my={5}>
            <Box flex='1'></Box>
            <Box flex='2'>
                <Image src={logo} alt='Little Lemmon'/>
            </Box>
            <Box as='nav'flex='8' alignContent="center" marginLeft={100}>
                <Flex direction="row" justifyContent="space-around">
                    <NavLinks/>
                </Flex>
            </Box>
            <Box flex='1'></Box>
        </Flex>
    )
  }

  export default Header;