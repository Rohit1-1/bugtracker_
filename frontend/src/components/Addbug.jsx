import { Box, Button, FormControl, FormLabel, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Stack, useDisclosure, useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { EditIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import {v4} from "uuid";
import { addnewBug } from '../store/Appreducer/action';

const Addbug= () => {
    const [bug,setBug]=useState({})
    const bugdata = useSelector((store) => store.appReducer);
      const toast=useToast()
      const { isOpen, onOpen, onClose } = useDisclosure()
      const dispatch=useDispatch()
      const handleChange = (e) => {
          const { name, value} = e.target;
          let newbug={
            ...bug,
            [name]:value
          }
          setBug(newbug)
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          let newbug={...bug,id:v4()}
          console.log(bugdata[newbug.category],'rpetyert')
          if(bugdata[newbug.category].bugs.length<5){
            dispatch(addnewBug(newbug))
          }
          else{
            toast({
                title: "limit is exceeded",
                status: "warning",
                position: "top",
                duration: 5000,
                isClosable: true,
              });
          }
        
          onClose()
         console.log(newbug)
      
        
        };
  return (
    <Box>
         <Button colorScheme='blue' size='sm' onClick={onOpen}>Report Bug</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Bug</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Stack  w={'90%'} margin='auto' padding={'1.5rem'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
                    <form onSubmit={handleSubmit}>
                      <Stack spacing={2}>
                        <FormControl id="name" isRequired>
                          <FormLabel>Title</FormLabel>
                          <Input
                            type="text"
                            name="title"
                            onChange={handleChange}
                          />
                        </FormControl>

                        <FormControl id="name" isRequired>
                          <FormLabel>Type</FormLabel>
                          <Select
                          placeholder="Select topic"
                          name="category"
                          onChange={handleChange}
                        >
                          <option value="critical">Critical Severity</option>
                          <option value="major">Major Severity</option>
                          <option value="medium">Medium Severity</option>
                          <option value="low">Low Severity</option>
                        </Select>
                        </FormControl>
                      </Stack>
                      <Box marginTop='1rem'>
                        <Button
                            type="submit"
                            colorScheme="blue"
                            width={'90%'}
                           
                          >
                            Submit
                          </Button>
                        </Box>
                         
                    </form>
                  </Stack>
                </ModalBody>
              </ModalContent>
            </Modal>
     
    </Box>
  )
}

export default Addbug
