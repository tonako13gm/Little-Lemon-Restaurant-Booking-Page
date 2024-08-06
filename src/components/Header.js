import { Box, Flex, VStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.jpg'
import NavLinks from './NavLinks'
import { Show, Hide } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

function Header() {
    return (
        <Flex as='header' color='brand.dark' my={5}>
            <Box flex='1'></Box>
            <Box flex={{ sm: '8', md: '2'}}>
                <Image src={logo} alt='Little Lemmon'/>
            </Box>
            <Box flex={{ base: '2', md: '8'}} alignContent="center" marginLeft={100}>
                <Hide breakpoint='(max-width: 767px)'>
                    <Flex as='nav' direction="row" justifyContent="space-around">
                        <NavLinks/>
                    </Flex>
                </Hide>
                <Show breakpoint='(max-width: 767px)'>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon color='brand.green' fontSize='lg'/>}
                            variant='outline'
                            size='lg'
                        />
                        <MenuList>
                            <VStack>
                                <NavLinks/>
                            </VStack>
                        </MenuList>
                    </Menu>
                </Show>
            </Box>
            <Box flex='1'></Box>
        </Flex>
    )
  }

  export default Header;