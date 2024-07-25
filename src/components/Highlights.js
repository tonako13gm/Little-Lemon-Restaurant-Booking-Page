import { Box, Flex, Heading, Button } from '@chakra-ui/react'
import { Card, CardBody, CardFooter, Stack, Text, Divider, ButtonGroup, Image } from '@chakra-ui/react'
import hero from '../assets/hero.png'

function HighlighsHeading() {
    return (
        <Flex as='section' border='1px' borderColor='BlackAlpha.900' w='100%' p={4} color='BlackAlpha.900'>
            <Box flex='1' border='1px' borderColor='BlackAlpha.900'>1</Box>
            <Box flex='10' border='1px' borderColor='BlackAlpha.900'>
                <Flex>
                    <Flex flex='6' border='1px' borderColor='BlackAlpha.900'>
                        <Heading fontSize='lg'>Specials</Heading>
                    </Flex>
                    <Flex flex='6' border='1px' borderColor='BlackAlpha.900' justify='end'>
                        <Button bg='brand.green'>Online Menu</Button>
                    </Flex>
                </Flex>
            </Box>
            <Box flex='1' border='1px' borderColor='BlackAlpha.900'>1</Box>
        </Flex>
    )
  }

function HighlightsCardItems() {
    return (
    <Card maxW='sm'>
        <CardBody>
            <Image
            src={hero}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Living room Sofa</Heading>
            <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
                $450
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
                Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
                Add to cart
            </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
    )
}

function HighlightsCard() {
    return (
        <Flex as='section' border='1px' borderColor='BlackAlpha.900' w='100%' p={4} color='BlackAlpha.900'>
            <Box flex='1' border='1px' borderColor='BlackAlpha.900'>1</Box>
            <Flex flex='10' border='1px' borderColor='BlackAlpha.900'>
                <Box flex='4' border='1px' borderColor='BlackAlpha.900'>
                    <HighlightsCardItems></HighlightsCardItems>
                </Box>
                <Box flex='4' border='1px' borderColor='BlackAlpha.900'>2</Box>
                <Box flex='4' border='1px' borderColor='BlackAlpha.900'>3</Box>
            </Flex>
            <Box flex='1' border='1px' borderColor='BlackAlpha.900'>1</Box>
        </Flex>
    )
}

function Highlights() {
    return (
        <Box>
            <HighlighsHeading></HighlighsHeading>
            <HighlightsCard></HighlightsCard>
        </Box>
    )
}

export default Highlights;