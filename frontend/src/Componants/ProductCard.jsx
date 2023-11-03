import React, { useState } from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/layout";
// import React from "react";
// import { Link } from "react-router-dom";
import "../css/Homepage.css";
import { FaHeart } from "react-icons/fa";
import { Search2Icon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({
  _id,
  primary_image,
  title,
  price,
  description,
  old_price,
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
              className="cartLogo"
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

// const CardContainer = styled.div`
//   border: 1px solid #ccc;
//   padding: 10px;
//   margin: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   transition: transform 0.2s ease-in-out;
//   border: none;
//   &:hover {
//     transform: scale(1.05);
//   }

//   @media (max-width: 768px) {
//     padding: 5px;
//   }
// `;

// const Image = styled.img`
//   width: 100px;
//   height: 100px;
//   object-fit: cover;

//   @media (max-width: 768px) {
//     width: 80px;
//     height: 80px;
//   }
// `;

// const Title = styled.h2`
//   font-size: 18px;
//   margin: 5px 0;

//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const Price = styled.p`
//   font-size: 16px;
//   font-weight: bold;
//   margin: 5px 0;

//   @media (max-width: 768px) {
//     font-size: 14px;
//   }
// `;

// const Description = styled.p`
//   font-size: 14px;
//   margin: 5px 0;

//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const OldPrice = styled.p`
//   font-size: 14px;
//   color: #999;
//   text-decoration: line-through;
//   margin: 5px 0;

//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const Category = styled.p`
//   font-size: 14px;
//   margin: 5px 0;

//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const Type = styled.p`
//   font-size: 14px;
//   margin: 5px 0;

//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

export default ProductCard;
