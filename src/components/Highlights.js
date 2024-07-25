import { Box, Flex, Heading, Button } from '@chakra-ui/react'
import { Card, CardBody, Stack, Text, Image } from '@chakra-ui/react'
import greekSalad from '../assets/Greek Salad.jpg'
import { AspectRatio } from '@chakra-ui/react'

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
        <CardBody p={2} m={5}>
            <AspectRatio maxW='2xl' ratio={1}>
                <Image
                src={greekSalad}
                objectFit='cover'
                maxWidth='500px'
                alt='greekSalad'
                borderTopRadius='2xl'
                />
            </AspectRatio>
            <Stack mt='6' spacing='3'>
                <Flex align='center'>
                    <Text flex='8' fontSize='md' fontWeight='bold' color='brand.daark'>
                        Greek Salad
                    </Text>
                    <Text fontSize='md' fontWeight='bold' color='brand.red'>
                        $450
                    </Text>
                </Flex>
            <Text color='brand.daark'>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
            </Text>
            <Text color='brand.daark' fontSize='sm' fontWeight='semibold'>
                Order a delivery
            </Text>
            </Stack>
        </CardBody>
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