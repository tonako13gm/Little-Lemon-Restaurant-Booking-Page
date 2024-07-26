import { Box, Text, CardBody, Image, HStack, Card } from '@chakra-ui/react'
import person1 from '../assets/person1.png'

function Testimonials() {
    return (
        <Card maxW='sm'>
            <CardBody>
                <HStack>
                    <Box flex='6'>
                        <Image
                            src={person1}
                            alt='Alice Smith'
                            borderRadius='full'
                            />
                    </Box>
                    <Box flex='6'>
                        <Text>
                            Alice Smith
                        </Text>
                    </Box>
                </HStack>
                <Text noOfLines={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis magna ac ante condimentum dapibus eget et elit. Donec nibh diam, sodales ut pellentesque et, ultrices in orci. Suspendisse vitae massa in mauris porta viverra. Vestibulum sagittis nisl sed quam dignissim malesuada. Etiam tellus justo, malesuada eu ipsum eget, maximus commodo ex. Suspendisse neque augue, scelerisque eget vestibulum vitae, pretium vehicula velit. Etiam vitae molestie diam. Quisque dignissim odio at massa tincidunt, id aliquam felis mollis. Vestibulum eget massa mauris. Proin id mollis urna, id faucibus diam. 
                </Text>
            </CardBody>
        </Card>
    )
  }

  export default Testimonials;