import React from 'react'
import { Text ,Input,Flex,Button,Select,Container} from '@chakra-ui/react'
import {Link} from 'react-router-dom'


const Signup = () => {
  return (
    <>
      <Flex display='flex' flexDirection={'column'} maxWidth='400px' margin={'auto'} alignItems='center' gap='15px'>
        <Text>Welcome</Text>
        <Text>Signup to continue</Text>
        <Input placeholder='Email'type='email'/>
    <Input placeholder='Password' type='password'/>
    <Input placeholder='Confirm Password' type='password'/>
    <Select placeholder='Select Role'>
  <option value='admin'>Admin</option>
  <option value='user'>User</option>
 
</Select>
    <Button>Signup</Button>
        
    <Container display={'flex'} justifyContent='space-around'>
        Already have Account ? <Link to='/login' ><Text color={'red'}>Login</Text></Link>
    </Container>
    </Flex>
        
      
    </>
  )
}

export default Signup
