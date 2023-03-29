import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  useToast,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Signin } from "../store/Authreducer/action";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState({});
  const toast = useToast();
  const { isLoading, isAuth } = useSelector((store) => store.authReducer);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAdminData({
      ...adminData,
      [name]: value,
    });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    dispatch(Signin(adminData)).then((res) => {
      if (res) {
        toast({
          title: "Sign In successfull",
          status: "success",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
        navigate('/dashboard')
      } else {
        toast({
          title: "Something went wrong",
          description: "Wrong password or email",
          status: "error",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
      }
    });
  };
  return (
    <>
      <Navbar />
      <Stack
        spacing={4}
        w={"60%"}
        margin="auto"
        marginTop={"4rem"}
        padding={"1.5rem"}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Heading>Sign In</Heading>
        <form onSubmit={handleSignin}>
          <FormControl id="email" isRequired marginBottom={"1rem"}>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" onChange={handleChange} />
          </FormControl>
          <FormControl id="password" isRequired marginBottom={"1rem"}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              type="submit"
              isLoading={isLoading}
            >
              Sign In
            </Button>
          </Stack>
        </form>
      </Stack>
    </>
  );
};

export default SignIn;
