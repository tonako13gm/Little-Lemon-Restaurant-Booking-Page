import { Box, Flex, HStack, VStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.jpg'
import NavLinks from './NavLinks'
import { Show, Hide } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'



function Header() {
    return (
        <Flex as='header' color='brand.dark' my={5} border='1px' borderColor='red'>
            <Box flex='1'></Box>
            <Box flex={{ sm: '8', md: '2'}} border='1px' borderColor='green'>
                <Image src={logo} alt='Little Lemmon'/>
            </Box>
            <Box as='nav'flex={{ base: '2', md: '8'}} alignContent="center" marginLeft={100} border='1px' borderColor='green'>
                <Hide breakpoint='(max-width: 767px)'>
                    <Flex direction="row" justifyContent="space-around">
                        <NavLinks/>
                    </Flex>
                </Hide>
                <Show breakpoint='(max-width: 767px)'>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
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