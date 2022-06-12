import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Box, Heading, Text,Stack, Image, Button, SimpleGrid, Center, HStack,} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdOutlineAccountBalance } from "react-icons/md";
import { Cartcontext } from "../context/Cartcontext";
import { useToast } from "@chakra-ui/react";

export default function Product() {
  const toast = useToast();
  const [products, setproducts] = useState([]);
  const { cart, setcart } = useContext(Cartcontext);

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((e) => setproducts(e.data));
  }, []);

  return (
    <>
      <SimpleGrid minChildWidth="300px" spacing="50px" m={"0px 50px"} column={4}>
        {products.map((item) => {
          return (
            <Box
              m={"50px 25px"}
              padding="20px"
              borderRadius={"15px"}
              height="auto"
              key={item.id}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
            >
              <Link to={"/productid/" + item.id}>
                <Center>
                  <Image
                    rounded={"lg"}
                    height={230}
                    width={230}
                    src={item.image}
                  />
                </Center>

                <Stack pt={10}>
                  <Center>
                    <Heading
                      noOfLines={1}
                      fontSize={"lg"}
                      fontFamily={"italic"}
                      fontWeight={500}
                    >
                      <Text>{item.title}</Text>
                    </Heading>
                  </Center>
                  <HStack spacing={"80px"}>
                    <Box>
                      <HStack>
                        <BsStarFill color="orange" />
                        <BsStarFill color="orange" />
                        <BsStarFill color="orange" />
                        <BsStarFill color="orange" />
                        <BsStarHalf color="orange" />
                        <Text fontWeight="600">${item.rating.rate}</Text>
                      </HStack>
                    </Box>
                    <Box>
                      <HStack>
                        <MdOutlineAccountBalance color="orange" />
                        <Text fontWeight="600">{item.rating.count}</Text>
                      </HStack>
                    </Box>
                  </HStack>
                  <Center>
                    <Stack direction={"row"}>
                      <Text fontWeight={800} fontSize={"xl"}>
                        ${item.price}
                      </Text>
                      <Text textDecoration={"line-through"} color={"gray.800"}>
                        ${item.price * 3}
                      </Text>
                    </Stack>
                  </Center>
                </Stack>
              </Link>
              <Center mt={"20px"}>
                <Button
                  width={"150px"}
                  colorScheme={"blue"}
                  onClick={() => {
                    let check = true;
                    cart.map((el) => {
                      if (item.id === el.id) {
                        check = false;
                        toast({
                          title: "You already added this product",
                          status: "warning",
                          position: "top",
                          duration: 4000,
                          isClosable: true,
                        });
                      }
                    });
                    if (check === true) {
                      setcart([
                        ...cart,
                        {
                          id: item.id,
                          qty:1,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                        },
                      ]);
                    }
                  }}
                >
                  Add To Cart
                </Button>
              </Center>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
}
