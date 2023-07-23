import { Box } from "@chakra-ui/react";
import React from "react";
import HomeStates from "../Componants/HomeStates";
import HomeImage from "../Componants/HomeImagres";
import HomeTabs from "../Componants/HomeTabs";
import {Carousel} from "../Componants/Carosels";

const Home = () => {
  return (
    <Box>
      <Carousel />
      <Box>
        <HomeStates />
      </Box>
      <Box>
        <HomeTabs />
      </Box>

      <Box>
        <HomeImage />
      </Box>
    </Box>
  );
};

export default Home;
