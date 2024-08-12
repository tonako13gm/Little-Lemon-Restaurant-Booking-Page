import { Heading, Center, Flex, Box, VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";
import heroBG from '../assets/heroBG.jpg'
import lobby from '../assets/lobby.jpg'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    NumberInput,
    NumberInputField,
    Textarea,
    Button,
  } from '@chakra-ui/react'

import { Form, Formik, Field } from "formik";

function Booking () {

    // Validation -----------------------------------------
    function validateName(value) {
        let error
        if (!value) {
          error = 'Name is required'
        } else if (value.toLowerCase() !== 'naruto') {
          error = "Jeez! You're not a fan 😱"
        }
        return error
      }

    return (
        <>
            
            <Flex bgImage={heroBG}>
                <Box flex='1'></Box>
                    <Box flex='10'>
                        <Center>
                            <Heading py={20} color='brand.light'>
                                Welcome to our restaurant reservation form!
                            </Heading>
                        </Center>
                    </Box>
                <Box flex='1'></Box>
            </Flex>

            <Flex bgImage={lobby} bgRepeat='no-repeat' bgSize='cover'>
                <Box flex='1'></Box>
                    <Box flex='10'>
                        <Box flex='12' bgColor='brand.green' color='brand.light' py={10}>
                            <Center>
                                <VStack>
                                    <Box >
                                        <Center>
                                            <VStack>
                                                <Text>
                                                    This form allows you to reserve a table at our restaurant for your upcoming dining experience.
                                                </Text>
                                                <Text>
                                                    Please fill out the following details to secure your reservation.
                                                </Text>
                                            </VStack>
                                        </Center>
                                    </Box>
                                </VStack>
                            </Center>
                        </Box>
                        <Box flex='12' bgColor='pink' color='brand.dark' py={10}>
                            <Center>
                                <VStack>
                                    <Formik
                                        initialValues={{ name: 'Sasuke' }}
                                        onSubmit={(values, actions) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(values, null, 2))
                                            actions.setSubmitting(false)
                                        }, 1000)
                                        }}
                                    >
                                        <Form>

                                            <>
                                            <Box pb='10'>

                                            <Field name='name' validate={validateName}>
                                                {({ field, form }) => (

                                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                                        <FormLabel>Full name</FormLabel>
                                                        <Input {...field} placeholder='name' />
                                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                                    </FormControl>

                                                )}
                                                </Field>

                                            </Box>
                                        
                                            <Box pb='10'>
                                                <FormControl>
                                                    <FormLabel>Email address</FormLabel>
                                                    <Input type='email' />
                                                    <FormHelperText>We'll never share your email.</FormHelperText>
                                                </FormControl>
                                            </Box>
                                    
                                            <Box pb='10'>
                                                <FormControl>
                                                    <FormLabel>Phone Number</FormLabel>
                                                    <NumberInput max={50} min={10}>
                                                        <NumberInputField />
                                                    </NumberInput>
                                                </FormControl>
                                            </Box>

                                            <Box>
                                                <HStack>
                                                    <Box flex='6' pb='10'>
                                                        <FormControl>
                                                            <FormLabel>Date of your reservation</FormLabel>
                                                            <Input type='text' />
                                                        </FormControl>
                                                    </Box>
                                                    <Box flex='6' pb='10'>
                                                        <FormControl>
                                                            <FormLabel>Choose the time of reservation</FormLabel>
                                                            <Input type='text' />
                                                        </FormControl>
                                                    </Box>
                                                </HStack>
                                            </Box>
                                            <Box>
                                                <HStack>
                                                    <Box flex='6' pb='10'>
                                                        <FormControl>
                                                            <FormLabel>Number of guest</FormLabel>
                                                            <Input type='text' />
                                                        </FormControl>
                                                    </Box>
                                                    <Box flex='6' pb='10'>
                                                        <FormControl>
                                                            <FormLabel>Occassion</FormLabel>
                                                            <Input type='text' />
                                                        </FormControl>
                                                    </Box>
                                                </HStack>
                                            </Box>

                                            <Box>
                                                <FormControl>
                                                    <FormLabel>Your Message</FormLabel>
                                                    <Textarea placeholder='' />
                                                </FormControl>
                                            </Box>

                                            <Box>
                                                <Button
                                                    mt={4}
                                                    colorScheme='teal'
                                                    // isLoading={props.isSubmitting}
                                                    type='submit'
                                                >
                                                    Submit
                                                </Button>
                                            </Box>
                                            </>

                                        </Form>
                                    </Formik>
                                </VStack>
                            </Center>
                        </Box>
                    </Box>
                <Box flex='1'></Box>
            </Flex>

        </>
       
    )
}

export default Booking
