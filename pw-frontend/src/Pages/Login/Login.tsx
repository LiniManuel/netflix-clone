import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTokenCookies } from "../../utils/authCookies";
import "./Login.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const Login = () => {
    fetch("http://localhost:5000/auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(async (response) => {
      const data = await response.json();
      if (response.status === 200 || response.status === 201) {
        addTokenCookies({
          token: data.token,
          refreshToken: data.refresh_token,
        });
        navigate("/home");

        return response;
      }
    });
  };

  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="login">
      <Flex
        minH={"100vh"}
        minW={"100vw"}
        align={"center"}
        justify={"center"}
        bg="rgba(0,0,0,.75)"
        flexDirection="column"
      >
        <img
          src="/images/Logonetflix.png"
          style={{ width: "160px", height: "45px", justifyContent: "flex-end" }}
        ></img>
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
          height="570px"
          width="450px"
        >
          <Box
            rounded={"lg"}
            bg="#000000BF"
            boxShadow={"lg"}
            height="100%"
            width="100%"
            p={8}
          >
            <Stack align={"start"} marginBottom="30px">
              <Heading fontSize={"4xl"}>Accedi</Heading>
            </Stack>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email </FormLabel>
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
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Ricordami</Checkbox>
                </Stack>
                <Button
                  bg={"red"}
                  color={"white"}
                  _hover={{
                    opacity: 0.5,
                  }}
                  onClick={Login}
                >
                  Login
                </Button>
              </Stack>
            </Stack>
            <Stack
              marginTop="30px"
              height="30px"
              color="#737373"
              flexDirection="row"
              alignItems="center"
            >
              <FormLabel marginTop="15px">Prima volta su Netflix? </FormLabel>
              <FormLabel
                margin="0"
                color="#FFFFFF"
                onClick={handleRegister}
                cursor="pointer"
                _hover={{
                  opacity: 0.5,
                }}
              >
                Registrati.
              </FormLabel>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};
