import {
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";

export default function HomeTabs() {
  return (
    <div>
      <Tabs>
        <Center>
          <TabList >
            <Tab _selected={{ color: "green", fontWeight: "600" }}>One</Tab>
            <Tab _selected={{ color: "green", fontWeight: "600" }}>Two</Tab>
            <Tab _selected={{ color: "green", fontWeight: "600" }}>Three</Tab>
          </TabList>
        </Center>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
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
