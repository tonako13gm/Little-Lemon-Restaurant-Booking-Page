import { Box, Flex, Text, Heading, Image, Button, Hide } from '@chakra-ui/react'
import hero from '../assets/hero.png'
import heroBG from '../assets/heroBG.jpg'

function Hero() {
    return (
        <Flex as='main' backgroundImage={heroBG} backgroundRepeat="no-repeat" mb={20}>
            <Box flex='1'></Box>
            <Box flex='4' px={5} mt={-5}>
                <Image src={hero} alt='Main Dish'/>
            </Box>
            <Box flex='1'></Box>
            <Box flex='4' alignContent='center'>
                <Heading color='brand.yellow' fontSize='xl'>Little Lemon</Heading>
                <Text color='brand.light' fontSize='lg'>Chicago</Text>
                <Text color='brand.light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                </Text>
                <Button bg='brand.yellow' mt={10}>Reserve a table</Button>
            </Box>
            <Box flex='1'></Box>
            <Box flex='1'></Box>
        </Flex>
    )
  }

  export default Hero;