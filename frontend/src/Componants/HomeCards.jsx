import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";

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
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}>
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
          }}>
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={primary_image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Title
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
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
