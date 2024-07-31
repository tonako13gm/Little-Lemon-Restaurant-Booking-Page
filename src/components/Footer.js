import { Box, HStack, VStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.jpg'

function Footer() {
    return (
        <Box as='footer' border='1px' borderColor='BlackAlpha.900' w='100%' p={4} color='BlackAlpha.900'>
            <HStack>
                <Box flex='2' border='1px' borderColor='BlackAlpha.900'></Box>
                <Box flex='3' border='1px' borderColor='BlackAlpha.900'>
                    <VStack>
                        <Box border='1px' borderColor='BlackAlpha.900'>
                            <Image src={logo} alt='Dan Abramov' />
                        </Box>
                        <Box border='1px' borderColor='BlackAlpha.900'>
                            <Text noOfLines='3'fontSize='sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                            </Text>
                        </Box>
                        <Box border='1px' borderColor='BlackAlpha.900'>
                        </Box>
                    </VStack>
                </Box>
                <Box flex='5' border='1px' borderColor='BlackAlpha.900'>5</Box>
                <Box flex='2' border='1px' borderColor='BlackAlpha.900'>2</Box>
            </HStack>
        </Box>
    )
  }

  export default Footer;