import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const registration = () => {
    fetch("http://localhost:5000/auth/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((response) => {
      if (response.status === 200 || response.status === 201) {
        response.json();
        navigate("/");
      }
    });
  };

  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div className="login">
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg="rgba(0,0,0,.75)"
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box
            rounded={"lg"}
            bg="rgba(0,0,0,.75)"
            boxShadow={"lg"}
            height="100%"
            width="100%"
            p={8}
          >
            <Stack align={"start"} marginBottom="30px">
              <Heading fontSize={"4xl"}>Registrati</Heading>
            </Stack>
            <Stack spacing={4}>
              <Flex flexDirection="row">
                <FormControl id="name" marginRight="10px">
                  <FormLabel>Nome</FormLabel>
                  <Input name="name" />
                </FormControl>
                <FormControl id="surname">
                  <FormLabel>Cognome</FormLabel>
                  <Input name="surname" />
                </FormControl>
              </Flex>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"red"}
                  color={"white"}
                  _hover={{
                    bg: "red.500",
                  }}
                  onClick={registration}
                >
                  Registrati
                </Button>
              </Stack>
            </Stack>
            <Stack
              marginTop="15px"
              height="30px"
              color="#737373"
              flexDirection="row"
              alignItems="center"
            >
              <FormLabel marginTop="15px">Hai già un account? </FormLabel>
              <FormLabel
                margin="0"
                color="#FFFFFF"
                onClick={handleLogin}
                cursor="pointer"
                _hover={{
                  opacity: 0.5,
                }}
              >
                Torna al Login.
              </FormLabel>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};
