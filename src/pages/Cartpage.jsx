import {
  Button,
  Center,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useToast } from '@chakra-ui/react';
import { MdOutlineRemoveCircle } from "react-icons/md";
import { Cartcontext } from "../context/Cartcontext";
import { Navigate} from 'react-router-dom'

const Cartpage = () => {
  const { cart, setcart } = useContext(Cartcontext);
  const [ setnewid] = useState("");
  const toast = useToast();
  const [go, setgo] = useState(false);
  let sum =0;
  const removepord = (id) => {
    console.log(id);
    const newlist = cart.filter((item) => item.id !== id);
    setcart(newlist);
  };


  if(go) return <Navigate to="/" replace={true} />
  return (
    <div style={{ width: "90vw", margin: "20px auto" }}>
      <TableContainer>
        <Table
          fontFamily={"monospace"}
          fontSize="19px"
          border={"red"}
          variant="striped"
          colorScheme="blackAlpha"
        >
          <TableCaption>Thank you for using our service.</TableCaption>
          <Thead>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>SubTotal</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((item) => {
              sum = (sum+ (item.qty * item.price))
             return (
                <Tr key={item.id}>
                  <Td width="100px">
                    <Center>
                      <button onClick={() => removepord(item.id)}>
                        <MdOutlineRemoveCircle size={"30px"} color={"red"} />
                      </button>
                    </Center>
                  </Td>
                  <Td width="200px">
                    <Center>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ height: "100px", width: "8vw" }}
                      />
                    </Center>
                  </Td>
                  <Td whiteSpace="break-spaces" width={"250px"}>
                    {item.title}
                  </Td>
                  <Td>${item.price}</Td>
                  <Td>
                    <Button
                      colorScheme={"blue"}
                      onClick={() => {
                        item.qty++;
                        setnewid(Date.now());
                      }}
                    >
                      +
                    </Button>

                    <Button>{item.qty}</Button>

                    <Button
                      colorScheme={"blue"}
                      onClick={() => {
                        if (item.qty > 1) {
                          item.qty--;
                          setnewid(Date.now());
                        }
                      }}
                    >
                      -
                    </Button>
                  </Td>
                  <Td> $ {(item.qty * item.price).toFixed(2)}                  
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td>
              <Button onClick={()=>{
                toast({
                  title: 'Your order is placed. ',
                  description: `Your order will be delivered in shortly time.`,
                  status: 'success',
                  duration: 3000,
                  position:'top',
                  isClosable: true,
                })

                setTimeout(() => {
                  setgo(true)
                  setcart([]);
                  
                },5000);


              }} colorScheme={'blue'}>
                
                Buy Now
                </Button>
                
            </Td>
            <Td>Total</Td>
              <Td> ${  sum.toFixed(2)  }</Td>
            </Tr>
          </Tfoot>

          
        </Table>
      </TableContainer>
    </div>
  );
};

export default Cartpage;
