import { Box, Heading, HStack, VStack, Text, Image } from '@chakra-ui/react'
import chef1 from '../assets/chef1.jpg'
import chef2 from '../assets/chef2.jpg'

function About() {
    return (
        <Box as='main' bg='brand.light'>
            <HStack>
                <Box flex='1'></Box>
                <Box flex='4'>
                    <HStack>
                        <Box flex='6' zIndex='tooltip' >
                            <Image src={chef1} alt='Chef' pt={40} ml={20} />
                        </Box>
                        <Box flex='6'>
                            <Image src={chef2} alt='Chef' pb={20} mr={20}/>
                        </Box>
                    </HStack>
                </Box>
                <Box flex='4' ml={20}>
                    <VStack alignItems='right'>
                        <Heading color='brand.green' fontSize='xl'>
                            Little Lemmon
                        </Heading>
                        <Text color='brand.yellow' fontSize='lg'>
                            Chicago
                        </Text>
                        <Text color='brand.dark' fontSize='md'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                        </Text>
                    </VStack>
                </Box>
                <Box flex='3'></Box>
            </HStack>
        </Box>
    )
  }

  export default About;