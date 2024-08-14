import {React, useState} from 'react'
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
  Select,
} from '@chakra-ui/react'
import {
  Formik,
  Form,
  useField,
  Field
} from 'formik';
import * as Yup from 'yup';

function Booking () {

  const [timeSlotsList, setTimeSlotsList] = useState ([
    {time: '17:00'},
    {time: '18:00'},
    {time: '19:00'},
    {time: '20:00'},
    {time: '21:00'},
    {time: '22:00'}
  ])

  function updateTime (valueTime) {
    return (
      setTimeSlotsList(
        timeSlotsList.filter(a => a.time !== valueTime)
      )
    )
  }

  const AvailableTimes = (props) => {
    const timeSlots = props.data.map(time =>
      <option value={time.time}>{time.time}</option>
    )
    return (
      <>{timeSlots}</>
    )
  }



  const MyInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <>
        <FormControl isInvalid={meta.touched && meta.error} >
          <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
          <Field {...field} {...props}/>
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
                              initialValues={{
                                fullName: '',
                                email: '',
                                phoneNumber: '',
                                date: '',
                                numberOfGuest: '',
                                occassion: '',
                                time: '',
                                message: '',
                              }}
                              validationSchema={Yup.object({
                                fullName: Yup.string()
                                  .max(30, 'Must be 15 characters or less')
                                  .required('Required'),
                                email: Yup.string()
                                  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email address')
                                  .required('Required'),
                                phoneNumber: Yup.string()
                                  .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
                                  .required('Required')
                                  .min(10, 'too short')
                                  .max(10, 'too long')
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
                                  .min(10, 'Min of 100 characters')
                                  .required('Required'),
                              })}
                              onSubmit={(values, {setSubmitting, resetForm}) => {
                                setTimeout(() => {
                                  alert(JSON.stringify(values, null, 2));
                                  setSubmitting(false);
                                  resetForm();
                                  updateTime(values.time)
                                }, 100);
                              }}
                            >
                              <Form>
                                <>
                                  <Box pb='10'>

                                  <MyInput
                                    as={Input}
                                    label='Full Name'
                                    name='fullName'
                                    type='text'
                                    placeholder='TEST'
                                  />

                                  </Box>
                                  <Box pb='10'>
                                    <MyInput
                                      as={Input}
                                      label='Email'
                                      name='email'
                                      type='email'
                                      placeholder='TEST'
                                    />
                                  </Box>
                                  <Box pb='10'>
                                    <MyInput
                                      as={Input}
                                      label='Phone number'
                                      name='phoneNumber'
                                      type='number'
                                      placeholder='TEST'
                                    />
                                  </Box>
                                  <Box>
                                      <HStack>
                                          <Box flex='6' pb='10'>
                                            <MyInput
                                              as={Input}
                                              label='Date of reservation'
                                              name='date'
                                              type='date'
                                            />
                                          </Box>
                                          <Box flex='6' pb='10'>
                                            <MyInput
                                              as={Select}
                                              label='Time of reservation'
                                              name='time'
                                              placeholder=' '
                                            >
                                              <AvailableTimes data={timeSlotsList} />
                                            </MyInput>
                                          </Box>
                                      </HStack>
                                  </Box>
                                  <Box>
                                      <HStack>
                                          <Box flex='6' pb='10'>
                                            <MyInput
                                              as={Select}
                                              label='Number of guest'
                                              name='numberOfGuest'
                                              placeholder=' '
                                            >
                                              <option value='1-5 person/s'>1-5 person/s</option>
                                              <option value='5-10 persons'>5-10 persons</option>
                                              <option value='11-20 persons'>11-20 persons</option>
                                              <option value='21-50 persons'>21-50 persons</option>
                                              </MyInput>
                                          </Box>
                                          <Box flex='6' pb='10'>
                                            <MyInput
                                                as={Select}
                                                label='Occassion'
                                                name='occassion'
                                                placeholder=' '
                                              >
                                                <option value='Birthday'>Birthday</option>
                                                <option value='Wedding'>Wedding</option>
                                                <option value='Anniversary'>Anniversary</option>
                                              </MyInput>
                                          </Box>
                                      </HStack>
                                  </Box>
                                  <Box>
                                    <MyInput
                                      as={Textarea}
                                      label='Your Message'
                                      name='message'
                                      placeholder='mensahe'
                                    />
                                  </Box>
                                  <Box>
                                      <Button
                                          mt={4}
                                          colorScheme='teal'
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
