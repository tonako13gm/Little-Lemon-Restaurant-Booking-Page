import { Box, Flex, Heading, Button, HStack, VStack } from '@chakra-ui/react'
import { Card, CardBody, Stack, Text, Image } from '@chakra-ui/react'
import greekSalad from '../assets/Greek Salad.jpg'
import bruschetta from '../assets/Bruschetta.jpg'
import lemonDessert from '../assets/Lemmon Dessert.jpg'
import { AspectRatio } from '@chakra-ui/react'
import OrderIcon from '../assets/order.svg'

function HighlighsHeading() {
    return (
        <Flex p={4}>
            <Box flex='1'></Box>
            <Box flex='10'>
                <Flex>
                    <Flex flex='6'>
                        <Heading fontSize='lg' color='brand.dark'>Specials</Heading>
                    </Flex>
                    <Flex flex='6' justify='end'>
                        <Button bg='brand.green' color='brand.light'>Online Menu</Button>
                    </Flex>
                </Flex>
            </Box>
            <Box flex='1'></Box>
        </Flex>
    )
  }

function HighlightsCardItems(props) {
    return (
    <Card maxW='sm' bg='brand.light'>
        <CardBody p={1} m={12}>
            <AspectRatio maxW='2xl' ratio={1}>
                <Image
                src={props.image}
                objectFit='cover'
                maxWidth='500px'
                alt={props.photoDesctiption}
                borderTopRadius='2xl'
                />
            </AspectRatio>
            <Stack mt='6' spacing='3'>
                <Flex align='center'>
                    <Text flex='8' fontSize='md' fontWeight='bold' color='brand.daark'>
                        {props.menuName}
                    </Text>
                    <Text fontSize='md' fontWeight='bold' color='brand.red'>
                        {props.price}
                    </Text>
                </Flex>
                <Text color='brand.daark' noOfLines={4}>
                    {props.description}
                </Text>
                <HStack color='brand.dark' fontSize='sm' fontWeight='semibold' mt={10}>
                    <Text>
                        Order a delivery 
                    </Text>
                    <Box ml={10}>
                        <img src={OrderIcon} alt="Your SVG"/>
                    </Box>
                </HStack>
            </Stack>
        </CardBody>
    </Card>
    )
}

function HighlightsCard() {
    return (
        <HStack p={4} color='BlackAlpha.900' justify='space-evenly'>
                    <HighlightsCardItems
                        image={greekSalad}
                        photoDesctiption='GreekSalad'
                        menuName='Greek Salad'
                        price='$12.95'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel metus et arcu eleifend tincidunt. Sed quis arcu consectetur, consequat velit at, sagittis mi.'
                        >
                    </HighlightsCardItems>
                    <HighlightsCardItems
                        image={bruschetta}
                        photoDesctiption='Bruschetta'
                        menuName='Bruschetta'
                        price='$5.90'
                        description='Duis dapibus mauris tortor, nec maximus ipsum maximus sit amet. Suspendisse elementum iaculis erat, ut molestie massa rutrum pellentesque.'
                        >
                    </HighlightsCardItems>
                    <HighlightsCardItems
                        image={lemonDessert}
                        photoDesctiption='Lemon Dessert'
                        menuName='Lemon Dessert'
                        price='$5.00'
                        description='Donec molestie ligula commodo sem tempor venenatis. Aenean ut ligula sit amet erat interdum scelerisque vitae nec ipsum.'
                        >
                    </HighlightsCardItems>
        </HStack>
    )
}

function Highlights() {
    return (
        <Box as='section'>
            <HighlighsHeading></HighlighsHeading>
            <HighlightsCard></HighlightsCard>
        </Box>
    )
}

export default Highlights;