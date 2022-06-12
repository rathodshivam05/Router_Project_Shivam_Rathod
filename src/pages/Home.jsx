import { Center,   VStack } from '@chakra-ui/react'
import React from 'react';
import styles from '../compoent/All.module.css'

const Home = () => {
  return (
    <div>
        <Center>
            <VStack>

        <img src="https://img.freepik.com/free-vector/informational-poster-written-family-shopping_81522-4156.jpg" alt="Home" className={styles.img}/>
        <br />
            </VStack>
        </Center>
    </div>
  )
}

export default Home