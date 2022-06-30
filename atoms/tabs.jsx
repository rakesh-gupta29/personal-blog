import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabElem = () => {
  return (
    <Tabs className=" font-lora">
      <TabList className="subtitle   border-primary border-b ">
        <Tab selectedClassName="bg-primary bg-opacity-10">Title 1</Tab>
        <Tab selectedClassName="bg-primary bg-opacity-10">Title 2</Tab>
      </TabList>

      <TabPanel>
        <span className=" subtitle ">Any content 1</span>
      </TabPanel>
      <TabPanel>
        <span className=" subtitle ">Any content 2</span>
      </TabPanel>
    </Tabs>
  );
};
export default TabElem;
