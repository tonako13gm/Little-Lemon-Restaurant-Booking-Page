import { Box, HStack, VStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.jpg'
import { Routes, Route, Link } from "react-router-dom"
import TestLink from "../components/testLink"

function Footer() {
    return (
        <Box as='footer' bg='brand.green'>
            <HStack>
                <Box flex='2' ></Box>
                <HStack flex='8'align='start'>
                    <Box flex='3' >
                    <VStack>
                        <Box>
                            <Image src={logo} alt='Dan Abramov' />
                        </Box>
                        <Box >
                            <Text noOfLines='3'fontSize='sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                            </Text>
                        </Box>
                        <Box>
                        </Box>
                    </VStack>
                    </Box>
                    <Box flex='5' >
                        <HStack justify='space-evenly'align='start'>
                            <Box>
                                <VStack>
                                    <Text>NAVIGATION</Text>
                                    <Link to="/">Home</Link>
                                    <Link to="/">About</Link>
                                    <Link to="/">Menu</Link>
                                    <Link to="/">Reservations</Link>
                                    <Link to="/">Order Online</Link>
                                    <Link to="/">Login</Link>
                                    <Routes> 
                                        <Route path="../components/TestLink" element={<TestLink />}></Route>
                                        {/* <Route path="/about" element={<AboutLittleLemon />}></Route>
                                        <Route path="/contact" element={<Contact />}></Route> */}
                                    </Routes> 
                                </VStack>
                            </Box>
                            <Box>
                                <VStack>
                                    <Box>
                                        <Text>HOURS</Text>
                                    </Box>
                                    <Box>
                                        <Text>Monday - Friday</Text>
                                        <Text>8am - 10pm</Text>
                                    </Box>
                                    <Box>
                                        <Text>Monday - Friday</Text>
                                        <Text>8am - 10pm</Text>
                                    </Box>
                                    <Box>
                                        <Text>Monday - Friday</Text>
                                        <Text>8am - 10pm</Text>
                                    </Box>
                                </VStack>
                            </Box>
                            <Box>
                                <VStack>
                                    <Box>
                                        <Text>ADDRESS</Text>
                                    </Box>
                                    <Box>
                                        <Text>Address here...</Text>
                                        <Text>Phone number</Text>
                                        <Text>Email</Text>
                                    </Box>
                                </VStack>
                            </Box>
                        </HStack>
                    </Box>
                </HStack>
                <Box flex='2' ></Box>
            </HStack>
        </Box>
    )
  }

  export default Footer;