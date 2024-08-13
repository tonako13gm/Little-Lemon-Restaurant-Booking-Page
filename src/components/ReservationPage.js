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
    Select,
  } from '@chakra-ui/react'

import { Formik, Form, useField, Field } from 'formik';
import * as Yup from 'yup';
import { date } from 'yup';

function Booking () {

  // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ ;

  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <>
        <FormControl isInvalid={meta.touched && meta.error} >
          <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
          <Field as={Select} className="text-input" {...field} {...props}/>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      </>
    );
  };

  const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <>
        <FormControl isInvalid={meta.touched && meta.error} >
          <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
          <Field as={Textarea} className="text-input" {...field} {...props}/>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      </>
    );
  };

  const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    
    
    return (
      <>
        <FormControl isInvalid={meta.touched && meta.error} >
          <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
          <Field as={Input} className="text-input" {...field} {...props}/>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>

      </>
    );
  };

  const MyEmailInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    // function validateEmail(value) {
    //   let error;
    //   if (!value) {
    //     error = 'Required TEST';
    //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    //     error = 'Invalid email address';
    //   }
    //   return error;
    // }

    return (
      <>
        <FormControl isInvalid={meta.touched && meta.error} >
          <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
          {/* <Field as={Input} {...field} {...props} validate={validateEmail}/> */}
          <Field as={Input} {...field} {...props}/>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      </>
    );
  };

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
                                        initialValues={{ firstName: '' }}
                                        validationSchema={Yup.object({
                                          firstName: Yup.string()
                                            .max(15, 'Must be 15 characters or less')
                                            .required('Required'),
                                          lastName: Yup.string()
                                            .max(20, 'Must be 20 characters or less')
                                            .required('Required'),
                                          email: Yup.string()
                                            // .email('Invalid email address')
                                            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email address')
                                            .required('Required'),
                                          phoneNumber: Yup.string()
                                            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
                                            .required('Required')
                                            .min(10, "too short")
                                            .max(10, "too long")
                                            .required('Required'),
                                          date: Yup.date()
                                            .required('Required'),
                                          numberOfGuest: Yup.string()
                                            .required('Required'),
                                          occassion: Yup.string()
                                            .required('Required'),
                                          time: Yup.string()
                                            .required('Required'),
                                          message: Yup.string()
                                            .min(100, "Min of 100 characters")
                                            .required('Required'),
                                          jobType: Yup.string()
                                            .oneOf(
                                              ['designer', 'development', 'product', 'other'],
                                              'Invalid Job Type'
                                            )
                                            .required('Required'),
                                        })}
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

                                            <MyTextInput
                                              label="First Name"
                                              name="firstName"
                                              type="text"
                                              placeholder="TEST"
                                            />

                                            </Box>
                                        
                                            <Box pb='10'>
                                              <MyEmailInput
                                                label="Email"
                                                name="email"
                                                type="email"
                                                placeholder="TEST"
                                              />
                                            </Box>
                                    
                                            <Box pb='10'>
                                              <MyTextInput
                                                label="Phone number"
                                                name="phoneNumber"
                                                type="number"
                                                placeholder="TEST"
                                              />
                                            </Box>

                                            <Box>
                                                <HStack>
                                                    <Box flex='6' pb='10'>
                                                      <MyTextInput
                                                        label="Date of reservation"
                                                        name="date"
                                                        type="date"
                                                      />
                                                    </Box>
                                                    <Box flex='6' pb='10'>
                                                      <MySelect
                                                        label="Time of reservation"
                                                        name="time"
                                                        placeholder=' '
                                                      >
                                                        <option value='17:00'>17:00</option>
                                                        <option value='18:00'>18:00</option>
                                                        <option value='19:00'>19:00</option>
                                                        <option value='20:00'>20:00</option>
                                                        <option value='21:00'>21:00</option>
                                                        <option value='22:00'>22:00</option>
                                                      </MySelect>
                                                    </Box>
                                                </HStack>
                                            </Box>
                                            <Box>
                                                <HStack>
                                                    <Box flex='6' pb='10'>
                                                      <MySelect
                                                        label="Number of guest"
                                                        name="numberOfGuest"
                                                        placeholder=' '
                                                      >
                                                        <option value='1-5 person/s'>1-5 person/s</option>
                                                        <option value='5-10 persons'>5-10 persons</option>
                                                        <option value='11-20 persons'>11-20 persons</option>
                                                        <option value='21-50 persons'>21-50 persons</option>
                                                        </MySelect>
                                                    </Box>
                                                    <Box flex='6' pb='10'>
                                                      <MySelect
                                                          label="Occassion"
                                                          name="occassion"
                                                          placeholder=' '
                                                        >
                                                          <option value='Birthday'>Birthday</option>
                                                          <option value='Wedding'>Wedding</option>
                                                          <option value='Anniversary'>Anniversary</option>
                                                        </MySelect>
                                                    </Box>
                                                </HStack>
                                            </Box>

                                            <Box>
                                              <MyTextArea
                                                label="Your Message"
                                                name="message"
                                                placeholder="mensahe"
                                              />
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

// console.log(firstName);

export default Booking
