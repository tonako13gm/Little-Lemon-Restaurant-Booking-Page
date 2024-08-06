import { Flex, Box, VStack, Text, Heading, Button, AbsoluteCenter } from '@chakra-ui/react'
import orderBG from '../assets/orderBG.jpg'
import { MdOutlineLocalDining } from "react-icons/md";

function AboutPage() {
    return  (
        <Flex as='section' backgroundImage={orderBG} backgroundRepeat="no-repeat" color='brand.light' py={20}>
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
                        <MdOutlineLocalDining />
                    </Box>
                    <Box fontSize='sm'>
                        <VStack>
                            <Text>OPENING HOURS</Text>
                            <Text>Monday - Friday: 08:00 AM - 22:00 PM</Text>
                            <Text>Weekends: 10:00 AM - 04:00 PM</Text>
                        </VStack>
                    </Box>
                    <Box pt={5}>
                        <Button backgroundColor='transparent' color='brand.light' border='1px'>Reserve a table</Button>
                    </Box>
                </VStack>
            </Box>
            <Box flex='1'></Box> 
        </Flex>
    )
}

export default AboutPage