import React from 'react'
import { Heading,Text,Flex } from '@chakra-ui/react'

const Home = () => {
  return (
    <Flex display={'flex'} flexDirection='column' gap={'10px'} alignItems='center'>
      <Heading>Dashboard for user</Heading>
      <Text>When user Login then show Dash Board content</Text>
    </Flex>
  )
}

export default Home
