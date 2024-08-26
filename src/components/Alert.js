import {
  Button,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Modal,
  Heading,
  Flex,
  Center,
} from "@chakra-ui/react";

import { Box, Text } from "@chakra-ui/react";
import lobby from '../assets/lobbyBG.jpg'


import { useAlertContext } from "./contex/alertContex";
import { useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, onOpen, onClose } = useAlertContext()
  return (
    <>
      
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay bgImage={lobby} bgRepeat='no-repeat' bgSize='cover'/>
          <Flex>
            <ModalContent bgColor='brand.green'>
              <Box p={10} color='brand.light'> 
                <Center>
                  <Heading py='10'>Your reservation has been confirmed!</Heading>
                </Center>
                <ModalCloseButton />
                <ModalBody>
                  <Center flexDir='column'>
                      <Text py='3'>
                        We look forward to welcoming you.
                      </Text>
                      <Text py='3'>
                        Feel free to review your reservation details in the profile section.
                      </Text>
                  </Center>
                </ModalBody>
              </Box>
            </ModalContent>
          </Flex>
      </Modal>
    </>
  )
}

export default Alert;
