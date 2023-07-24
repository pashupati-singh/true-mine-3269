import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  useStatStyles,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useToast } from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router";
import { getProducts, singleuser } from "../Redux/Products/action";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddCartObj, AddToCart } from "../Redux/carts/action";

export default function SingleProductPage() {
  const [state,setstate]=useState(false);
  const [data, setData] = useState({});
  const { id } = useParams();
  const { _id } = useParams();
  const toast = useToast();
  const dispatch = useDispatch();
  const errorID = "error-toast";
  const successID = "success-toast";
  const [qty, setQty] = useState(1);

  const handleAddToCart = (_id) => {
    dispatch(AddCartObj(_id));
    console.log("dispatch");
    setstate(true)
    
  };

  useEffect(() => {
    singleuser(id).then((res) => {
      setData(res);
      console.log(res);
    });
  }, []);
  // console.log(data)
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        {/* _id, primary_image, title, price, description, old_price, category, type */}
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={data?.primary_image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data?.title}
            </Heading>
            <Text
              color={useColorModeValue("black.900", "black.400")}
              fontWeight={400}
              fontSize={"2xl"}
            >
              Rs.{data?.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{data?.description}</Text>
            </VStack>

            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    {data.type}
                  </Text>{" "}
                  20 mm
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={() => handleAddToCart(_id)}
          >{state?"Added to cart":"Add to cart"}
            
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
