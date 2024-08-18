import {React, useState, useEffect, memo, useMemo } from 'react'
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from '@chakra-ui/react'
import {
  Formik,
  Form,
  useField,
  Field,
  useFormikContext,
  useFormik,
  withFormik
} from 'formik';
import * as Yup from 'yup';


function Booking () {
  const [timeSlotsList, setTimeSlotsList] = useState ([])

  const submitAPI = function(formData) {
    return true
  };

  const [dateSelected, setDateSelected] = useState()

  useEffect(() => {
    const day = new Date(dateSelected)
    setTimeSlotsList(fetchAPI(day))

  }, [dateSelected]);
  
  const FormValues = () => {
    const { values } = useFormikContext();
    setDateSelected(values.date)
  }

  const AvailableTimes = (props) => {
    const timeSlots = props.data.map(time =>
      <option value={time}>{time}</option>
    )
    return (
      <>{timeSlots}</>
    )
  }

  function updateTime (valueTime) {
    return (
      setTimeSlotsList(
        timeSlotsList.filter(a => a !== valueTime)
      )
    )
  }

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }
  
  const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());
  
    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
  };



  const [modalSwitch, setModalSwitch] =  useState(false)
  console.log(modalSwitch)

  const { isOpen, onOpen, onClose } = useDisclosure()


    function AlertDialogExample() {
      
      // const cancelRef = React.useRef()
    
      return (
        <>
    
          <AlertDialog
            isOpen={isOpen}
            // leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                  Delete Customer
                </AlertDialogHeader>
    
                <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>
    
                <AlertDialogFooter>
                  {/* <Button ref={cancelRef} onClick={onClose}> */}
                  <Button onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='red' onClick={onClose} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </>
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
                                date: Yup.date(),
                                  // .required('Required'),
                                numberOfGuest: Yup.string(),
                                  // .required('Required'),
                                occassion: Yup.string(),
                                  // .required('Required'),
                                time: Yup.string(),
                                  // .required('Required'),
                                message: Yup.string()
                                  .min(100, 'Min of 100 characters')
                                  // .required('Required'),
                              })}
                              onSubmit={(values, {setSubmitting, resetForm}) => {
                                setTimeout(() => {
                                  alert(JSON.stringify(values, null, 2))
                                  setSubmitting(false);
                                  submitAPI(values)
                                  resetForm();
                                  // updateTime(values.time)
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
                                                <FormValues />
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
                                          // onClick={onOpen}
                                          disabled={Formik.isSubmitting}
                                      >
                                          Submit
                                      </Button>
                                      <Button
                                          mt={4}
                                          colorScheme='teal'
                                          type='reset'
                                      >
                                          Reset
                                      </Button>

              <AlertDialogExample/>
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
