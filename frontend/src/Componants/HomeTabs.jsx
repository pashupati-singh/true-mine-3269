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
            <Tab _selected={{ color: "green", fontWeight: "600" }}>Seeds</Tab>
            <Tab _selected={{ color: "green", fontWeight: "600" }}>
              Plant Nutrients
            </Tab>
            <Tab _selected={{ color: "green", fontWeight: "600" }}>
              DIY Grow Kits
            </Tab>
            <Tab _selected={{ color: "green", fontWeight: "600" }}>
              Training
            </Tab>
          </TabList>
        </Center>
        <TabPanels>
          <TabPanel key={"seeds"}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
              {Seeds?.map((item) => (
                <HomeCards key={item.id} {...item} />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel key={"products"}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
              {products?.map((item) => (
                <HomeCards key={item.id} {...item} />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel key={"diy"}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
              {Diy?.map((item) => (
                <HomeCards key={item.id} {...item} />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel key={"training"}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
              {training?.map((item) => (
                <HomeCards key={item.id} {...item} />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

// Data for tabs

const Seeds = [
  {
    _id: "64baee5085ea3ee2551692fd",
    primary_image:
      "https://gardenguru.in/cdn/shop/products/417-cucumber-beit-alpha-seeds_grande.jpg?v=1621080197",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/417-cucumber-beit-alpha-seeds_grande.jpg?v=1621080197",
    title: "Cucumber Beit Alpha Seeds",
    price: 70,
    description:
      "A crunchy variety of cucumber with a very good yield. Provide support for these creepers and they will yield duriing the entire crop. These are delicious, very sweet cucumbers that are usually picked small and do not need peeling as the skin is very tender. These Cucumbers absolutely have no bitterness and one of the earliest to produce.Seeds per Pack: 10 seeds with 98% physical purity.",
    category: "seeds",
    type: "vegetable_seeds",
  },
  {
    _id: "64baee5085ea3ee25516930e",
    primary_image:
      "https://gardenguru.in/cdn/shop/products/738-Onion-Improved-Dark-red-Seeds_grande.jpg?v=1621083000",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/738-Onion-Improved-Dark-red-Seeds_grande.jpg?v=1621083000",
    title: "Onion Improved Dark red Seeds",
    price: 55,
    description:
      "Improved variety of onion grown for its flat round shape with Dark red colour. The red colour of outer skin is due to presence of Anthocyanin Seeds per Pack: 100 seedsSoil and climatic requirement: Soil-fertile well drained, loose soil (for the development of bulb) and need full Sun. Onions are sensitive to the amount of daylight they receive. When days are long, leaf production stops and bulbs begin to form. Cool (not cold) weather encourages heavy leaf growth so it is important to get your onions growing before warm weather hits. Be sure to water them during drought conditions as...",
    category: "seeds",
    type: "vegetable_seeds",
  },
  {
    _id: "64baee5085ea3ee255169321",
    primary_image:
      "https://gardenguru.in/cdn/shop/products/594-Oxheart-Tomato-Seeds_grande.jpg?v=1621858272",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/594-Oxheart-Tomato-Seeds_grande.jpg?v=1621858272",
    title: "Oxheart (red) Tomato Seeds",
    price: 80,
    description:
      "Tomato Imp.Oxheart is a heirloom collection. each packet of seeds contain 40 seeds with 98 % Physical purity. \n\n\n\n\n\n\n\nOxheart tomatoes are in heart shape so called oxheart, they are traditional variety of tomato, these tomatoes are fragrant and sweet in taste. Oxheart varieties are indeterminate type of habitat they yield till it kill by frost. Big fruits, more flesh with few seeds which is suitable for sandwiches and salads.",
    category: "seeds",
    type: "vegetable_seeds",
  },
  {
    _id: "64baee5085ea3ee255169341",
    primary_image:
      "https://gardenguru.in/cdn/shop/products/735-Amaranthus-Chouli-Red-Jewel-seeds_grande.jpg?v=1621944222",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/735-Amaranthus-Chouli-Red-Jewel-seeds_grande.jpg?v=1621944222",
    title: "Amaranthus Chouli Red Jewel seeds",
    price: 100,
    description:
      "Red Amaranthus is a variety of leafy vegetable, It grow an height of 1-2 feet, easy to cultivate in kitchen garden.Seeds per pack: 5 gm of seeds with 98% physical purityScientific name: Amaranthus tricolor, A.dubius, A. tristisFamily: AmaranthaceaeCommon Names: Chhoti chulai -Hindi, Danttu -KannadaVariety: Red choulai jewel and green choulai jewel Soil and climatic requirement:Soil: It can grow in all type of soil, but loam soil are best for cultivation. Ideal Ph is 6-7 range. Climate: Require 18-25 degree C for germination and for optimum growth required 25 degree temperature.Crop Duration: 35-30 days as vegetable, 90 days for seed purpose.Planting...",
    old_price: "120",
    category: "seeds",
    type: "vegetable_seeds",
  },
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

const training = [
  {
    _id: "64baee5085ea3ee2551692dg",
    primary_image:
      "https://gardenguru.in/cdn/shop/products/hydroponics-training-live-workshop.png?v=1650118511",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/hydroponics-training-live-workshop.png?v=1650118511",
    title: "Learn Hydroponics - 2 Hour Live Online Workshop",

    price: 599.0,
    old_price: "2,999.00",

    category: "seeds",
    type: "fruit_seeds",
  },
];
const Diy = [
  {
    _id: "64baee5085ea3ee2551692mo",
    primary_image:
      "https://gardenguru.in/cdn/shop/products/913-DIY-Hydroponic-Kit---30-planter-NFT_grande.jpg?v=1621946555",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/913-DIY-Hydroponic-Kit---30-planter-NFT_grande.jpg?v=1621946555",
    title: "DIY Hydroponic Kit - 30 planter NFT",

    price: "8,728.81",
    old_price: "10,999.15",

    category: "seeds",
    type: "fruit_seeds",
  },
  {
    _id: "64baee5085ea3ee2551692om",
    primary_image:
      "https://gardenguru.in/cdn/shop/products/966-DIY-Hydroponic-Raft-System_grande.jpg?v=1621936856",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/966-DIY-Hydroponic-Raft-System_grande.jpg?v=1621936856",
    title: "DIY Hydroponic Raft System",

    price: "2,288.14",
    old_price: "10,999.15",

    category: "seeds",
    type: "fruit_seeds",
  },
];

const products = [
  {
    primary_image:
      "https://gardenguru.in/cdn/shop/products/general-grow-100liters-hydroponics-nutrients-in-india-recipe_74b39bc3-1a3d-4071-b91f-cfb85e3c590d_grande.jpg?v=1650960641",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/gen-grow-hydroponic-nutrients-online_grande.png?v=1671788291",
    title: "General Grow - 100 liters",
    price: 142,
    description:
      "Hydroponic formulation for promoting vegetative growth Suitable for most leafy vegetables and fruiting plants (initial growth phase). Contains all macro and micro nutrients. For 100 liters of final solution. Available in two packets of water soluble nutrients. Can use this general nutrient for Hydroponic , Aeroponic cultivation. You can download the nutrient mixing instructions from the link below Hydroponics Nutrients Mixing Watch the below video to learn more about it   Hydroponics Nutrients Mixing ObjectiveMix your own hydroponic nutrients from the packets provided to you.MaterialsYou will need the following to make your own concentrate/stock solution. This stock solution can be used...",
    category: "hydroponics",
    type: "nutrient_hydroponics",
  },
  {
    primary_image:
      "https://gardenguru.in/cdn/shop/products/general-bloom-100liters-softwater-hydroponics-nutrients-in-india-recipe_grande.jpg?v=1650961676",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/general-bloom-100liters-softwater-hydroponics-nutrients-in-india-recipe_grande.jpg?v=1650961676",
    title: "General Bloom (Soft Water)-100 liters",
    price: 142,
    description:
      "Hydroponic formulation for flowering and fruiting phase. This General Bloom is designed especially for use in soft water areas where TDS value below 200 ppm. Suitable for most flowering and fruiting plants (bloom phase). Contains all macro and micro nutrients. For 100 liters of final solution. Available in two packets of water soluble nutrients. Can use this general nutrient for Hydroponic and Aeroponic cultivation You can download the nutrient mixing instructions from the link below Hydroponics Nutrients Mixing Watch the below video to learn more about it   Hydroponics Nutrients Mixing ObjectiveMix your own hydroponic nutrients from the packets provided to...",
    category: "hydroponics",
    type: "nutrient_hydroponics",
  },
  {
    primary_image:
      "https://gardenguru.in/cdn/shop/products/general-grow-500liters-hydroponics-nutrients-in-india-recipe_grande.jpg?v=1650961197",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/general-grow-500liters-hydroponics-nutrients-in-india-recipe_grande.jpg?v=1650961197",
    title: "General Grow - 500 liters",
    price: 571,
    description:
      "Hydroponic formulation for vegetative growth application. Suitable for most leafy vegetables and fruiting plants (initial growth phase). Contains all macro and micro nutrients. Available in two packets of water soluble nutrients. You can download the nutrient mixing instructions from the link below Hydroponics Nutrients Mixing Watch the below video to learn more about it     Hydroponics Nutrients Mixing Objective• Mix your own hydroponic nutrients from the packets provided to you. Materials• You will need the following to make yourown concentrate/stock solution. This stocksolution can be used later to make nutrientsolution of any volume.• For 500L packets• Two cans of each...",
    category: "hydroponics",
    type: "nutrient_hydroponics",
  },
  {
    primary_image:
      "https://gardenguru.in/cdn/shop/products/general-grow-100liters-softwater-hydroponics-nutrients-in-india-recipe_grande.jpg?v=1650962710",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/general-grow-100liters-softwater-hydroponics-nutrients-in-india-recipe_grande.jpg?v=1650962710",
    title: "General Grow (Soft Water)-100 liters",
    price: 142,
    description:
      "Hydroponic formulation for promoting vegetative growth. General Grow is designed especially for use in soft water areas where TDS value below 200 ppm Suitable for most leafy vegetables and fruiting plants (initial growth phase). Contains all macro and micro nutrients. For 100 liters of final solution. Available in two packets of water soluble nutrients.Can use this general nutrient for Hydroponic and Aeroponic cultivation You can download the nutrient mixing instructions from the link below Hydroponics Nutrients Mixing Watch the below video to learn more about it Hydroponics Nutrients Mixing ObjectiveMix your own hydroponic nutrients from the packets provided to you.MaterialsYou will...",
    category: "hydroponics",
    type: "nutrient_hydroponics",
  },
  {
    primary_image:
      "https://gardenguru.in/cdn/shop/products/chelated-micronutrients-for-hydroponics-foliar-spray-india_grande.jpg?v=1650963444",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/Micronutrients---100gms_grande.jpg?v=1650963444",
    title: "Micronutrients - 100gms",
    price: 169,
    description:
      "100% Water soluble micro nutrients, the packet contains various chelated micro nutrients elements in balanced percentages to meet the micro nutrient demands of various crops.\nMicro nutrients can be used as preventive or curative in the treatment of deficiencies.\nEssential micro nutrients packet contains:\nBoron : 2.5% \nIron : 5.0%\nManganese : 2.5%\nZinc : 1.0%\nCopper : 2.5%\nMolybdenum : 0.035%\nUsage: 1/4 of tea spoon in 1Ltr of water and apply once in a week to the plant root or Hydroponics system.",
    category: "hydroponics",
    type: "nutrient_hydroponics",
  },
  {
    primary_image:
      "https://gardenguru.in/cdn/shop/products/general-bloom-100liters-hydroponics-nutrients-in-india-recipe_grande.jpg?v=1650960923",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/general-bloom-100liters-hydroponics-nutrients-in-india-recipe_grande.jpg?v=1650960923",
    title: "General Bloom - 100 liters",
    price: 142,
    description:
      "Hydroponic formulation for flowering and fruiting phase. Suitable for most flowering and fruiting plants (bloom phase). Contains all macro and micro nutrients. This pack is for 100 liters of final solution. Available in two packets of water soluble nutrients. You can download the nutrient mixing instructions from the link below Hydroponics Nutrients Mixing Watch the below video to learn more about it Hydroponics Nutrients Mixing ObjectiveMix your own hydroponic nutrients from the packets provided to you.MaterialsYou will need the following to make your own concentrate/stock solution. This stock solution can be used later to makenutrient solution of any volume.For 100 Litres...",
    category: "hydroponics",
    type: "nutrient_hydroponics",
  },
  {
    primary_image:
      "https://gardenguru.in/cdn/shop/products/Epsom-Salt-Magnesium-Sulfate_grande.jpg?v=1629229448",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/epsom-salts-extra-pure-magnesium-sulfate_1_grande.jpg?v=1629229448",
    title: "Epsom Salt for Plants (100% Pure Magnesium Sulfate)",
    price: 47,
    description:
      "Pure Epsom salt for your plants. Available in 200 gms pack.\nMagnesium Sulfate is an important ingredient for all plants. Too much MgSO4 can inhibit the uptake of Calcium. But in low concentrations it works wonders as helps plant to uptake nitrates more effectively.\n \nUsage Instructions\nMix a teaspoon of Epsom salt in a liter of water. Apply this solution weekly to your plants.\nCan be used for the following plants\n\nTomato\nPepper\nCucumber\nRoses\nStrawberries\nHibiscus\n\netc",
    category: "hydroponics",
    type: "nutrient_hydroponics",
  },
  {
    primary_image:
      "https://gardenguru.in/cdn/shop/products/4-18-38-pack-lg_grande.png?v=1649676680",
    alternative_image:
      "https://gardenguru.in/cdn/shop/products/4-18-38_grande.png?v=1649676680",
    title: "NPK 4-18-38 Fertilizer for Hydroponics. Soilless and Soil Farming",
    price: 525,
    description:
      "NPK 4 18 38 is a balanced mix of key elements that will help you achieve higher yields and healthier growth in your plants. 4 18 38 NPK fertilizer is a blend of fertilizers that helps in producing great quality vegetables such as tomatoes, cucumber, squash etc. This product requires no mixing and its performance is guaranteed under all weather conditions. It has high potassium content which helps in keeping the plant healthy and produces great sized fruits with excellent flavor. Pack Size: 1kg Guaranteed Analysis : 1. Total Nitrogen (N) : 4.0 % Nitrate Nitrogen : 3.5% Ammoniacal Nitrogen...",
    category: "hydroponics",
    type: "nutrient_hydroponics",
  },
];
