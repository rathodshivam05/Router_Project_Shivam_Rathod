import { Box, Flex, HStack, Button,useColorModeValue, useColorMode,} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";
import { useContext } from "react";
import { Cartcontext } from "../context/Cartcontext";
import { AuthContext2 } from "../context/Authcontext2";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const { auth, setauth } = useContext(AuthContext2);

  const { cart } = useContext(Cartcontext);

  return (
    <>
      <Box
        bg={useColorModeValue("white")}
        color={useColorModeValue("black")}
        >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box fontSize="22px" fontWeight={"600"}>
              <Link to={"/"}> Home </Link>
            </Box>
            <Box>
              <Link to={"/product"}> Product </Link>
            </Box>
            <Box>
              <Link to={"/contact"}> Contact </Link>
            </Box>
            <Box>
              <Link to={"/about"}> About </Link>
            </Box>
            <Box>
              <Link to={"/faq"}> Faq </Link>
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <Link to={"/cartpage"}>
              <Button size={"sm"} mr={4}>
                <ImCart fontSize={"20px"} />
                <Box ml={"2"}  p={"5px"} borderRadius={"30%"}>
                  {cart.length}
                </Box>
              </Button>
            </Link>

            <Button
              size={"sm"}
               mr={4}
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Link to={"/login"}>
              <Button
                variant={"solid"}
                colorScheme={"blue"}
                size={"md"}
                mr={4}
                onClick={() => {
                  if (auth === true) {
                    setauth(false);
                  }
                }}
              >
                {!auth ? "Login" : "Logout"}
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
