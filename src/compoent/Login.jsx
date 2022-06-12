import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext2 } from '../context/Authcontext2';
import { Navigate } from "react-router-dom";

  
  export default function Login() {

    const { auth ,token,  getToken, setauth} = useContext(AuthContext2);

    const [cred, setcred] = useState({
      Email:"",
      Pass:"",
    });

    const handleonchange=(e)=>{
      const {name,val} = e.target;

      setcred({
        ...cred,
        [name]:val,
      })
    }

    const handlesubmit = () =>{
      getToken(cred.Email,cred.Pass);
      setauth(true);
      <Navigate to="/product"/>
    }


    return (
      <>
      {auth ? <Navigate to="/product"/> : ""}

      <Stack minH={'100vh'} m="20px" direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="Email" onChange={handleonchange}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="Pass" onChange={handleonchange} />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'} onClick={handlesubmit}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
      </>
    );
  }