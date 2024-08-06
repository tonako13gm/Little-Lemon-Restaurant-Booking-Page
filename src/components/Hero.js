import { Box, Flex, Text, Heading, Image, Button } from '@chakra-ui/react'
import hero from '../assets/hero.png'
import heroBG from '../assets/heroBG.jpg'
import { Hide } from '@chakra-ui/react'

function Hero() {
    return (
        <Flex as='main' backgroundImage={heroBG} backgroundRepeat="no-repeat" mb={20}>
            <Box flex='1'></Box>
            <Hide breakpoint='(max-width: 767px)'>
                <Box flex={{ md:'3'}} px={5} mt={-5}>
                    <Image src={hero} alt='Main Dish'/>
                </Box>
                <Box flex='1'></Box>
            </Hide>
            <Box flex={{base:'10', md:'5'}} my={{ base:'5'}}>
                <Heading color='brand.yellow' fontSize={{ base: 'lg', md: 'xl'}} >Little Lemon</Heading>
                <Text color='brand.light' fontSize={{ base: 'md', md: 'lg'}} mb={{base:'5'}}>Chicago</Text>
                <Text color='brand.light' fontSize={{ base: 'xs', md: 'sm'}} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                </Text>
                <Button bg='brand.yellow' mt={{base:'5', md:'10'}} >Reserve a table</Button>
            </Box>
            <Box flex='1'></Box>
            <Box flex='1'></Box>
        </Flex>
    )
  }

  export default Hero;