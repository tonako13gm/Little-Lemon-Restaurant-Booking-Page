import { Flex, Box, VStack, HStack, Text, Heading, Button, Image } from '@chakra-ui/react'
import orderBG from '../assets/orderBG.jpg'
import { MdOutlineLocalDining } from "react-icons/md";
import { Divider } from '@chakra-ui/react'
import lobby from '../assets/lobby.jpg'
import { Link } from 'react-router-dom'

function AboutPage() {
    return  (
        <>
            <Flex as='section' backgroundImage={orderBG} backgroundRepeat="no-repeat" color='brand.light' py={10}>
                <Box flex='1' ></Box>
                <Box flex='10'>
                    <VStack>
                        <Box>
                            <Text fontSize='md'>Little Lemon Medeteranian Cuisine</Text>
                        </Box>
                        <Box>
                            <Heading fontSize='xl'>Shoreline Gourmet Experience</Heading>
                        </Box>
                        <Box>
                            <HStack fontSize='xxl'>
                                <Divider borderColor='brand.light' />
                                <MdOutlineLocalDining />
                                <Divider borderColor='brand.light' />
                            </HStack>
                        </Box>
                        <Box fontSize='sm'>
                            <VStack>
                                <Text>OPENING HOURS</Text>
                                <Text>Monday - Friday: 08:00 AM - 22:00 PM</Text>
                                <Text>Weekends: 10:00 AM - 04:00 PM</Text>
                            </VStack>
                        </Box>
                        <Box pt={5}>
                            <Button backgroundColor='transparent' color='brand.light' border='1px' variant='brandSecondary'>
                                <Link to="/booking">Reserve a Table</Link>
                            </Button>
                        </Box>
                    </VStack>
                </Box>
                <Box flex='1'></Box> 
            </Flex>

            <Flex as='section' color='brand.dark' py={10}>
                    <Box flex='1'></Box>
                    <Box flex='10' >
                        <HStack>
                            <Box flex='6' mr={10}>
                                <VStack>
                                    <Heading justifySelf='left'>Welcome To Our Restaurant</Heading>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna rpl aliqua. Ut enim rpl ad minim veniam, quis nostrud exercitation rpl ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis rpl aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur rpl sint occaecat cupidatat non proident, sunt in culpa rpl qui officia deserunt mollit rpl anim id est laborum.
                                    </Text>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna rpl aliqua. Ut enim rpl ad minim veniam, quis nostrud exercitation rpl ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis rpl aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    </Text>
                                </VStack>
                            </Box>
                            <Box flex='4' >
                                <Image src={lobby} alt='Cafe Lobby'/>
                            </Box>
                        </HStack>
                    </Box> 
                    <Box flex='1'></Box> 
            </Flex>
        </>
    )
}

export default AboutPage