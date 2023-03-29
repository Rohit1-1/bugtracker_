import {  Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex padding={'1rem'} height={'60px'} gap={6} justifyContent='center' alignItems={'center'}  boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
      <Text><Link to={'/signin'}>Sign in</Link></Text>
      <Text><Link to={'/dashboard'}>Dashboard Page</Link></Text>
      <Text><Link to={'/signup'}>Sign up</Link></Text>
    </Flex>
  )
}

export default Navbar
