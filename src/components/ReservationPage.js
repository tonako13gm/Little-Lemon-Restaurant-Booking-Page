import { useForm } from "react-hook-form";
import heroBG from '../assets/heroBG.jpg'
import lobby from '../assets/lobby.jpg'
import {
  Heading,
  Center,
  Flex,
  Box,
  VStack,
  Text,
  HStack
} from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  Select
} from '@chakra-ui/react'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  fullName: yup.string()
    .required('Required')
    .max(30, 'Must be 15 characters or less'),
  email: yup.string()
    .required('Required')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email address'),
  phoneNumber: yup.string()
    .required('Required')
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
    .required('Required')
    .min(10, 'too short')
    .max(10, 'too long'),
  date: yup.date()
    .required('Required'),
  numberOfGuest: yup.string()
    .required('Required'),
  occassion: yup.string()
    .required('Required'),
  time: yup.string()
    .required('Required'),
  message: yup.string()
    .required('Required')
    .min(100, 'Min of 100 characters'),
}).required();

export default function App() {
  const { register, handleSubmit, formState:{ errors, isSubmitting  } } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur", // "onChange"
  });

  // function onSubmit(data, e) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       alert(JSON.stringify(data, null, 2))
  //       resolve()
  //     }, 3000)
  //   })
  // }


  const onSubmit = data => console.log(data);
   
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
                            <form onSubmit={handleSubmit(onSubmit)}>
              
                                  <Box pb='10'>
                                    <FormControl isInvalid={errors.fullName}>
                                      <FormLabel htmlFor='fullName'>Full name</FormLabel>
                                      <Input {...register("fullName")} />
                                      <FormErrorMessage>
                                        {errors.fullName?.message}
                                      </FormErrorMessage>
                                    </FormControl>
                                  </Box>
                                  <Box pb='10'>
                                    <FormControl isInvalid={errors.email}> 
                                      <FormLabel htmlFor='email'>Email</FormLabel>
                                      <Input {...register("email")} />
                                      <FormErrorMessage>
                                        {errors.email && errors.email.message}
                                      </FormErrorMessage>
                                    </FormControl>
                                  </Box>
                                  <Box pb='10'>
                                    <FormControl isInvalid={errors.phoneNumber}> 
                                      <FormLabel htmlFor='phoneNumber'>Contact number</FormLabel>
                                      <Input {...register("phoneNumber")} />
                                      <FormErrorMessage>
                                        {errors.phoneNumber && errors.phoneNumber.message}
                                      </FormErrorMessage>
                                    </FormControl>
                                  </Box>
                                  <Box>
                                      <HStack>
                                          <Box flex='6' pb='10'>
                                            <FormControl isInvalid={errors.date}> 
                                              <FormLabel htmlFor='date'>Contact number</FormLabel>
                                              <Input type="date" {...register("date")} />
                                              <FormErrorMessage>
                                                {errors.date?.message}
                                              </FormErrorMessage>
                                            </FormControl>                                          </Box>
                                          <Box flex='6' pb='10'>
                                          <FormControl isInvalid={errors.time}> 
                                            <FormLabel htmlFor='time'>Contact number</FormLabel>
                                            <Select {...register("time")} >
                                              <option value='1-5 person/s'>1-5 person/s</option>
                                              <option value='5-10 persons'>5-10 persons</option>
                                            </Select>
                                            <FormErrorMessage>
                                              {errors.time && errors.time.message}
                                            </FormErrorMessage>
                                          </FormControl>
                                          </Box>
                                      </HStack>
                                  </Box>
                                  <Box>
                                      <HStack>
                                          <Box flex='6' pb='10'>
                                          <FormControl isInvalid={errors.numberOfPersons}>
                                            <FormLabel htmlFor='numberOfPersons'>Number of person/s</FormLabel>
                                              <Select {...register("numberOfPersons")}>
                                                <option value='1-5 person/s'>1-5 person/s</option>
                                                <option value='5-10 persons'>5-10 persons</option>
                                                <option value='11-20 persons'>11-20 persons</option>
                                                <option value='21-50 persons'>21-50 persons</option>
                                              </Select>
                                              <FormErrorMessage>
                                                {errors.numberOfPersons && errors.numberOfPersons.message}
                                              </FormErrorMessage>
                                            </FormControl>
                                          </Box>
                                          <Box flex='6' pb='10'>
                                          <FormControl isInvalid={errors.occassion}>
                                            <FormLabel htmlFor='occassion'>Occassion</FormLabel>
                                              <Select {...register("occassion")}>
                                                <option value='Birthday'>Birthday</option>
                                                <option value='Wedding'>Wedding</option>
                                                <option value='Anniversary'>Anniversary</option>
                                              </Select>
                                              <FormErrorMessage>
                                                {errors.occassion && errors.occassion.message}
                                              </FormErrorMessage>
                                            </FormControl>
                                          </Box>
                                      </HStack>
                                  </Box>
                                  <Box>
                                    <FormControl isInvalid={errors.message}>
                                      <FormLabel htmlFor='message'>Message</FormLabel>
                                      <Textarea {...register("message")} />
                                      <FormErrorMessage>
                                        {errors.message && errors.message.message}
                                      </FormErrorMessage>
                                    </FormControl>
                                  </Box>

                                  <Box>
                                    <Button type='submit' isLoading={isSubmitting}>Submit</Button>
                                  </Box>

                              </form>
                          </VStack>
                        </Center>
                      </Box>
                  </Box>
              <Box flex='1'></Box>
          </Flex>
        </>
  );
}