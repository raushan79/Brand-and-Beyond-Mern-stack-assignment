import React from 'react'
import { Text ,Input,Flex,Button,Container} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <>
    <Flex display='flex' flexDirection={'column'} maxWidth='400px' margin={'auto'} alignItems='center' gap='15px'>
    <Text>Welcome</Text>
    <Text>Login to continue</Text>
    
    <Input placeholder='Email'type='email'/>
    <Input placeholder='Password' type='password'/>
    <Button>Login</Button>
    
    <Container display={'flex'} justifyContent='space-around'>
        Don't have Account ? <Link to='/signup'><Text color={'red'}>Signup</Text></Link>
    </Container>
    </Flex>
      
    </>
  )
}

export default Login
