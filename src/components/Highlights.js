import { Box, Flex, Heading, Button, HStack } from '@chakra-ui/react'
import { Card, CardBody, Stack, Text, Image } from '@chakra-ui/react'
import greekSalad from '../assets/Greek Salad.jpg'
import { AspectRatio } from '@chakra-ui/react'

function HighlighsHeading() {
    return (
        <Flex p={4}>
            <Box flex='1'></Box>
            <Box flex='10'>
                <Flex>
                    <Flex flex='6'>
                        <Heading fontSize='lg'>Specials</Heading>
                    </Flex>
                    <Flex flex='6' justify='end'>
                        <Button bg='brand.green'>Online Menu</Button>
                    </Flex>
                </Flex>
            </Box>
            <Box flex='1'></Box>
        </Flex>
    )
  }

function HighlightsCardItems() {
    return (
    <Card maxW='sm' boxShadow='none'>
        <CardBody p={1} m={5}>
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
        <Flex as='section' p={4} color='BlackAlpha.900'>
            <Box flex='1'></Box>
            <Flex flex='10'>
                    <HighlightsCardItems></HighlightsCardItems>
            </Flex>
            <Box flex='1'></Box>
        </Flex>
    )
}

function Highlights() {
    return (
        <Box>
            <HighlighsHeading></HighlighsHeading>
            <HStack>
                <HighlightsCard></HighlightsCard>
                <HighlightsCard></HighlightsCard>
                <HighlightsCard></HighlightsCard>
            </HStack>
        </Box>
    )
}

export default Highlights;