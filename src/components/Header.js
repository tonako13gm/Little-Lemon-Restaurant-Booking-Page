import { Box } from '@chakra-ui/react'

function Header() {
    return (
        <Box as='header' border='1px' borderColor='BlackAlpha.900' w='100%' p={4} color='BlackAlpha.900'>
            <text fontSize='32px'>
                HEADER
            </text>
        </Box>
    )
  }

  export default Header;