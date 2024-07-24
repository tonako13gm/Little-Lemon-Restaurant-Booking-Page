import { Box, Heading } from '@chakra-ui/react'

function Hero() {
    return (
        <Box as='main' border='1px' borderColor='BlackAlpha.900' w='100%' p={4} color='BlackAlpha.900'>
            <Heading fontSize='32px'>
                Hero
            </Heading>
        </Box>
    )
  }

  export default Hero;