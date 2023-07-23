import {
  Center,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import React from "react";
import HomeCards from "./HomeCards";

export default function HomeTabs() {
  return (
    <div>
      <Tabs>
        <Center>
          <TabList>
            <Tab _selected={{ color: "green", fontWeight: "600" }}>One</Tab>
            <Tab _selected={{ color: "green", fontWeight: "600" }}>Two</Tab>
            <Tab _selected={{ color: "green", fontWeight: "600" }}>Three</Tab>
          </TabList>
        </Center>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
              {Seeds?.map((item) => (
                <HomeCards key={item.id} {...item} />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

const Seeds = [
  {
    _id: "64baee5085ea3ee2551692b2",
    primary_image:
      "https://gardenguru.in/cdn/shop/products/Marigold-Nana-Patula-Yellow-Seeds_grande.jpg?v=1629235784",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/Marigold-Nana-Patula-Yellow-Seeds_grande.jpg?v=1629235784",
    title: "Marigold Nana Patula Yellow Seeds",
    price: 80,
    old_price: "120",
    category: "seeds",
    type: "flower_seeds",
  },
  {
    _id: "64baee5085ea3ee2551692b5",
    primary_image:
      "https://gardenguru.in/cdn/shop/products/MarigoldWhite_grande.jpg?v=1645012850",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/MarigoldWhite_grande.jpg?v=1645012850",
    title: "F1 Marigold vanilla White seeds",
    price: 105,
    category: "seeds",
    type: "flower_seeds",
  },
  {
    _id: "64baee5085ea3ee2551692b9",
    primary_image:
      "https://gardenguru.in/cdn/shop/products/434_grande.jpg?v=1627761555",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/434_grande.jpg?v=1627761555",
    title: "Cosmos Sensation Mixed Seeds",
    price: 105,

    category: "seeds",
    type: "flower_seeds",
  },
  {
    _id: "64baee5085ea3ee2551692bc",
    primary_image:
      "https://gardenguru.in/cdn/shop/products/633-Strawberry-Alpine-Fragaria_grande.jpg?v=1621932067",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/633-Strawberry-Alpine-Fragaria_grande.jpg?v=1621932067",
    title: "Strawberry Alpine Fragaria",
    price: 140,

    category: "seeds",
    type: "fruit_seeds",
  },
];
