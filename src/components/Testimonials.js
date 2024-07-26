import { Box, Text, CardBody, Image, HStack, Card, Center, Heading, Divider } from '@chakra-ui/react'
import person1 from '../assets/person1.png'
import person2 from '../assets/person2.png'
import person3 from '../assets/person3.png'
import person4 from '../assets/person4.png'
import { StarIcon } from '@chakra-ui/icons'

function TestimonialsItem(props) {
    return (
        <Card maxW='3xs'>
            <CardBody>
                <HStack>
                    <Box flex='6'>
                        <Center>
                            <Image
                                src={props.image}
                                alt={props.alt}
                                borderRadius='full'
                            />
                        </Center>
                    </Box>
                    <Box flex='6'>
                        <Center>
                            <Text fontSize='sm'>
                                {props.name}
                            </Text>
                        </Center>
                    </Box>
                </HStack>
                <StarIcon/>
                <Divider/>
                <Box mt={5} pb={5}>
                    <Text noOfLines={4}>
                        {props.comment}
                    </Text>
                </Box>
            </CardBody>
        </Card>
    )
  }

  function TestimonialsCard () {
    return (
        <Box as='section' bg='brand.green' py='20'>
            <Box flex='1'></Box>
            <Box flex='10' mx='28'>
                <Box pb='10'>
                    <Center>
                        <Heading color='brand.light'>
                            Testimonials
                        </Heading>
                    </Center>
                </Box>
                <HStack justify='space-between'>
                    <TestimonialsItem
                        image={person1}
                        alt = 'Alice Smith'
                        name = 'Alice Smith'
                        comment = 'Great food and friendly service. I loved the atmosphere!'
                    />
                    <TestimonialsItem
                        image={person2}
                        alt = 'John Doe'
                        name = 'John Doe'
                        comment = 'The food was delicious, especially the lemon chicken!'
                    />
                    <TestimonialsItem
                        image={person3}
                        alt = 'Ralitsa Lefterova'
                        name = 'Ralitsa Lefterova'
                        comment = 'Very nice place, cozy environment. The desserts were amazing!'
                    />
                    <TestimonialsItem
                        image={person4}
                        alt = 'Michael Brown'
                        name = 'Michael Brown'
                        comment = 'Decent food, but the wait was a bit long. Overall, a good experience.'
                    />
                </HStack>
            </Box>
            <Box flex='1'></Box>
        </Box>
    )
  }

  function Testimonials () {
    return (
        <TestimonialsCard></TestimonialsCard>
    )
  }

  export default Testimonials;