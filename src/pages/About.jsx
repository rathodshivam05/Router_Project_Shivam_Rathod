import { Center, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <div>
        <Center>
            <VStack>

            <Heading>About us</Heading>
            <img src="https://sixads.net/wp-content/uploads/2021/01/airbnb-about-us-page.jpg" alt="about" style={{width:"1345px"}}/>
            <br />
            </VStack>
        </Center>

    </div>
  )
}

export default About