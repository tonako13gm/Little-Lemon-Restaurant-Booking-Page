import { Box, Flex } from '@chakra-ui/react'

function Header() {
    return (
        <Flex as='header' border='1px' borderColor='BlackAlpha.900' w='100%' p={4} color='BlackAlpha.900'>
            <Box flex='2' border='1px' borderColor='BlackAlpha.900' h={3}></Box>
            <Box flex='2' border='1px' borderColor='BlackAlpha.900' h={3}></Box>
            <Box flex='6' border='1px' borderColor='BlackAlpha.900' h={3}></Box>
            <Box flex='2' border='1px' borderColor='BlackAlpha.900' h={3}></Box>
        </Flex>
    )
  }

  export default Header;