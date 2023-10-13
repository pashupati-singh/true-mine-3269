// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { LoginUser } from "../Redux/Auth/Action";
// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Checkbox,
//   Stack,
//   Link,
//   Button,
//   Heading,
//   Text,
//   useToast,
// } from "@chakra-ui/react";

// import { Navigate } from "react-router-dom";
// // import { Toast } from "../Componants/Toast";

// export const Login = () => {
//   const { isAuth, token } = useSelector((store) => store.authReducer);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const dispatch = useDispatch();
//   const toast = useToast();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const obj = { email, password };

//     dispatch(LoginUser(obj))
//       .then((data) => {
//         // console.log("Data received after login:", data);

//         // Display toast or perform other actions on successful login
//         toast({
//           title: "Login Successful",
//           description: "You have successfully logged in.",
//           status: "success",
//           position: "top",
//           duration: 5000,
//           isClosable: true,
//         });
//       })
//       .catch((error) => {
//         // Handle errors, if needed
//         console.error("Login error:", error);
//         // Display an error toast or perform other error handling actions
//         toast({
//           title: "Login Failed",
//           description: "There was an error during login.",
//           status: "error",
//           position: "top",
//           duration: 5000,
//           isClosable: true,
//         });
//       });
//   };

  
//   useEffect(() => {
//     localStorage.setItem("token", JSON.stringify(token));
//   }, [token]);

//   if (isAuth) {
//     return <Navigate to={"/"} />;
//   }
//   // console.log(isAuth, msg);
//   return (
//     <form onSubmit={handleSubmit}>
//       <Flex minH={"100vh"} align={"center"} justify={"center"}>
//         {/* {isAuth ? <div>{msg}</div> : ""} */}
//         <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
//           <Stack align={"center"}>
//             <Heading fontSize={"4xl"}>Login to your account</Heading>
//             <Text fontSize={"lg"} color={"gray.600"}>
//               to enjoy all of our cool features
//             </Text>
//           </Stack>
//           <Box rounded={"lg"} boxShadow={"lg"} p={8}>
//             <Stack spacing={4}>
//               <FormControl id="email">
//                 <FormLabel>Email address</FormLabel>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl id="password">
//                 <FormLabel>Password</FormLabel>
//                 <Input
//                   type="password"
//                   name="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </FormControl>
//               <Stack spacing={10}>
//                 <Stack
//                   direction={{ base: "column", sm: "row" }}
//                   align={"start"}
//                   justify={"space-between"}>
//                   {/* Updated checkbox handling */}
//                   <Checkbox
//                     isChecked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}>
//                     Remember me
//                   </Checkbox>
//                   <Link color={"blue.400"}>Forgot password?</Link>
//                 </Stack>
//                 <Button
//                   type="submit"
//                   onClick={(e) => handleSubmit(e)}
//                   bg={"blue.400"}
//                   color={"white"}
//                   _hover={{
//                     bg: "blue.500",
//                   }}>
//                   Log-in
//                 </Button>
//               </Stack>
//             </Stack>
//           </Box>
//         </Stack>
//       </Flex>
//     </form>
//   );
// };

// export default Login;




import React, { useEffect, useState } from "react";
import { Link as RouterLink, Navigate } from "react-router-dom";
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
  Text,
  useToast,
} from "@chakra-ui/react";

export const Login = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [token, setToken] = useState(null);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = { email, password };

    try {
      // Perform API call to check if the user can log in
      const response = await loginUser(obj);

      // Assuming your API returns a token upon successful login
      const receivedToken = response.token;

      // Update local state
      setIsAuth(true);
      setToken(receivedToken);

      // Display success toast
      toast({
        title: "Login Successful",
        description: "You have successfully logged in.",
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      // Handle errors, if needed
      console.error("Login error:", error);

      // Display error toast
      toast({
        title: "Login Failed",
        description: "There was an error during login.",
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    // Update localStorage with the token when it changes
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    }
  }, [token]);

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Login to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features
            </Text>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}>
                  <Checkbox
                    isChecked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}>
                    Remember me
                  </Checkbox>
                  <Link as={RouterLink} to={"/forgot-password"} color={"blue.400"}>
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}>
                  Log-in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
};

const loginUser = async (credentials) => {
  try {
    const response = await fetch("https://mock-api-template2-ighr.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    return response.json();
  } catch (error) {
    throw new Error("Error during login");
  }
};

export default Login;
