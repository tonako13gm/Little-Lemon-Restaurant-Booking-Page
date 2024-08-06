import { Box, HStack, VStack, Image, Text } from '@chakra-ui/react'
import logoPlain from '../assets/logoPlain.png'
import { Icon } from '@chakra-ui/react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiOutlineYoutube } from "react-icons/ai";
import NavLinks from './NavLinks'

function Footer() {
    return (
        <Box as='footer' bg='brand.green' py='10'>
            <HStack color='brand.light' fontSize='sm'>
                <Box flex='1' ></Box>
                <HStack flex='10'align='start' spacing='20'>
                    <Box as='test' flex='4' >
                    <VStack display='flex'>
                        <Box alignSelf='start'>
                            <Image src={logoPlain} alt='Little Lemon'/>
                        </Box>
                        <Box>
                            <Text noOfLines='3'fontSize='sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                            </Text>
                        </Box>
                        <Box alignSelf='start'>
                            <HStack fontSize='lg'>
                                <Icon as={AiFillFacebook} />
                                <Icon as={AiFillInstagram } />
                                <Icon as={AiFillTwitterCircle} />
                                <Icon as={AiOutlineYoutube} />
                            </HStack>
                        </Box>
                    </VStack>
                    </Box>
                    <Box flex='6' >
                        <HStack justify='space-evenly'align='start' spacing='20'>
                            <Box>
                                <VStack as='nav'>
                                    <Text fontWeight='bold'>NAVIGATION</Text>
                                    <NavLinks/>
                                </VStack>
                            </Box>
                            <Box>
                                <VStack>
                                    <Box>
                                        <Text fontWeight='bold'>HOURS</Text>
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
                                        <Text fontWeight='bold'>ADDRESS</Text>
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
                <Box flex='1' ></Box>
            </HStack>
        </Box>
    )
  }

  export default Footer;