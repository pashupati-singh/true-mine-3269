import { Box, Container, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { Link as DomLink } from "react-router-dom";

const Card = ({ imageUrl, imageAlt, text }) => {
  return (
    <DomLink to={`/products`}>
      <Box
        position="relative"
        display="inline-block"
        maxW="400px"
        overflow="hidden">
        <Image
          _hover={{ transform: "scale(1.1)" }}
          transition="transform 0.5s ease-out"
          src={imageUrl}
          alt={imageAlt}
          w="100%"
          h="auto"
        />
        <Box
          position="absolute"
          bottom="5"
          left="0"
          width="100%"
          bg="rgba(0, 0, 0, 0)"
          color="#2b2b2b"
          p={4}>
          <Heading size="lg">{text}</Heading>
        </Box>
        <Box
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          bg="rgba(0, 0, 0, 0)"
          color="#2b2b2b"
          p={4}>
          <Heading size="2xl">____</Heading>
        </Box>
      </Box>
    </DomLink>
  );
};

export default function HomeImage() {
  return (
    <Box p={4}>
      <Container maxW={"7xl"} mt={12}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: 5, lg: 8 }}>
          <Card
            imageUrl={
              "https://gardenguru.in/cdn/shop/files/easy-grow-vegetables-india.jpg?v=1647227756"
            }
            imageAlt={"image1"}
            text={"Easy To Grow Vaggies"}
          />
          <Card
            imageUrl={
              "https://gardenguru.in/cdn/shop/files/cool-season-vegetables-2-sq.jpg?v=1627027801"
            }
            imageAlt={"image2"}
            text={"Winter Vaggies"}
          />
          <Card
            imageUrl={
              "https://gardenguru.in/cdn/shop/files/hydroponics-farming-sq.jpg?v=1627028835"
            }
            imageAlt={"image2"}
            text={"Hydroponics Specials"}
          />
          <Card
            imageUrl={
              "https://gardenguru.in/cdn/shop/files/microgreens-sq.jpg?v=1627029079"
            }
            imageAlt={"image2"}
            text={"Microgreens Seeds"}
          />
          <Card
            imageUrl={
              "https://gardenguru.in/cdn/shop/files/sale-label-sq.png?v=1627029451"
            }
            imageAlt={"image2"}
            text={"On Sale"}
          />
          <Card
            imageUrl={
              "https://gardenguru.in/cdn/shop/files/diy-hydroponics-kit-sq.jpg?v=1627029595"
            }
            imageAlt={"image2"}
            text={"DIY kits"}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
