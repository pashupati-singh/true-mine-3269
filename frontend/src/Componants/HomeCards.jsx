import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import "../css/Homepage.css";
import { FaHeart } from "react-icons/fa";
import { Search2Icon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";

const HomeCards = ({
  _id,
  primary_image,
  alternative_image,
  title,
  old_price,
  price,
  category,
  type,
}) => {
  const handleCart = () => {};
  const handleWish = () => {};

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        // boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        className="each-product"
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${primary_image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={primary_image}
          />
          <div className="Display">
            <Text className="Hovering">
              <FaShoppingCart
                style={{ fontSize: "30px" }}
                onClick={handleCart}
              />
            </Text>
            <Text className="Hovering">
              <FaHeart
                style={{
                  color: "grey",
                  fontSize: "30px",
                }}
                onClick={handleWish}
              />
            </Text>
            <Text className="Hovering">
              <Link to={`/products/${_id}`}>
                {" "}
                <Search2Icon style={{ fontSize: "30px" }} />
              </Link>
            </Text>
          </div>
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Title
          </Text>
          <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ${price}
            </Text>
            {old_price && (
              <Text textDecoration={"line-through"} color={"gray.600"}>
                ${old_price}
              </Text>
            )}
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default HomeCards;
