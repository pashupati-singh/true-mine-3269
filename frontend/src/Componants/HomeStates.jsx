import {
  Box,
  Center,

  Image,
  SimpleGrid,
  Stat,
  StatLabel,
  useColorModeValue,
} from "@chakra-ui/react";

function StatsCard(props) {
  const { title, image } = props;
  return (
    <Stat
      px={{ base: 1, md: 4 }}
      py={"5"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}>
      <StatLabel fontWeight={"medium"} isTruncated>
        <Center>
          <Image src={image} alt="Dan Abramov" />
        </Center>
      </StatLabel>
      <Box fontWeight={600} mt={2}>
        {title}
      </Box>
    </Stat>
  );
}

export default function HomeStates() {
  return (
    <Box
      maxW="6xl"
      mx={"auto"}
      pt={10}
      pb={10}
      px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 4 }}
        spacing={{ base: 2, lg: 3 }}
        shadow={"base"}>
        <StatsCard
          title={"CURATED VARIETIES"}
          image={
            "https://gardenguru.in/cdn/shop/files/varieties-web-green.jpg?v=1625036315"
          }
        />

        <StatsCard
          title={"IGROWER SUPPORT"}
          image={
            "https://gardenguru.in/cdn/shop/files/grower-support-web-yellow.jpg?v=1625036525"
          }
        />

        <StatsCard
          title={"PREMIUM QUALITY"}
          image={
            "https://gardenguru.in/cdn/shop/files/premium-quality-web.jpg?v=1625036526"
          }
        />

        <StatsCard
          title={"PROVEN PRODUCTS"}
          image={
            "https://gardenguru.in/cdn/shop/files/proven_0ae88cf5-1024-45fe-8806-9a192d5845ae.png?v=1647187782"
          }
        />
      </SimpleGrid>
    </Box>
  );
}
