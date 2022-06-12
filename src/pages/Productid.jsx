import {Container,SimpleGrid,Image, Flex, Heading, Text, Stack, StackDivider, Icon, useColorModeValue,Center, } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useToast } from "@chakra-ui/react";
  import {FaWallet,FaShoppingCart} from 'react-icons/fa';
  import {RiMoneyDollarBoxFill} from 'react-icons/ri';
import {  useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Cartcontext } from '../context/Cartcontext';
import {Navigate } from 'react-router-dom';
  
  
  const Feature = ({ text, icon, iconBg }) => {

    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Productid() {
    const [buygo, setbuygo] = useState(false);

    const toast = useToast();  
    const {id}  = useParams();
    const [sproducts, setsproducts] = useState([]);
    
  const { cart, setcart } = useContext(Cartcontext);
  
    useEffect(() => {
      axios
        .get(`http://localhost:8080/products/${id}`)
        .then((e) => setsproducts(e.data));
    }, []);


    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={4} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={700}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              {sproducts.category}
            </Text>
            <Heading noOfLines={3}>{sproducts.title}</Heading>
            <Text color={'gray.500'} noOfLines={3} fontSize={'lg'}>
            {sproducts.description}
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={RiMoneyDollarBoxFill} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={sproducts.price}
              />
              <button onClick={() => {
                    let check = true;
                    cart.map((el) => {
                      if (sproducts.id === el.id) {
                        check = false;
                        toast({
                          title: "You already add this product in your cart",
                          status: "warning",
                          position: "top",
                          duration: 4000,
                          isClosable: true,
                        });
                      }
                      return 0;
                    });
                    if (check === true) {
                      setcart([
                        ...cart,
                        {
                          id: sproducts.id,
                          qty:1,
                          title: sproducts.title,
                          image: sproducts.image,
                          price: sproducts.price,
                        },
                      ]);
                    }
                  }}>

              <Feature
              
              icon={<Icon as={FaShoppingCart} color={'green.500'} w={5} h={5} cursor={'pointer'} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Add To Cart'}       
              />
              </button >

              <button onClick={() => {
                    let check = true;
                    cart.map((el) => {
                      if (sproducts.id === el.id) {
                        check = false;
                      }
                      return 0;
                    });
                    if (check === true) {
                      setcart([
                        ...cart,
                        {
                          id: sproducts.id,
                          qty:1,
                          title: sproducts.title,
                          image: sproducts.image,
                          price: sproducts.price,
                        },
                        
                      ]);
                    }
                    setbuygo(true)                       
                  }}
                  
                  >
                  {buygo ? <Navigate to="/cartpage"/> : "" }  

              <Feature
                icon={
                  <Icon as={FaWallet} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Buy Now'}
              />
              </button>

            </Stack>
          </Stack>
          <Flex>
              <Center>
            <Image
              boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
              rounded={'md'}
              alt={'feature image'}
              src={sproducts.image}
              height='25rem'
              padding={'20px'}
              width={'35vw'}
              />
              </Center>
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }