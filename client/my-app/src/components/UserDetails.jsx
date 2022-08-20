import React, { useState } from 'react'
import { Heading,Flex } from '@chakra-ui/react'

const UserDetails = () => {
    const [user,setUser]=useState();
  return (
    <>
    <Flex display={'flex'} flexDirection='column' gap={'10px'} alignItems='center'>
    <Heading>User List</Heading>
   


    </Flex>
      
    </>
  )
}

export default UserDetails
