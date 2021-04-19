import React from 'react';
import './demandReport.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const DemandReport = () => {
  return (
    <div className='flex flex-col ml-9 mr-9 py-20 font-mono mb-10 lg:mx-40'>
      <h2 className='main-title flex flex-col justify-center items-center text-lg my-20'>
        Demand Report
      </h2>
      <Tabs>
        <TabList>
          <Tab>Essay</Tab>
          <Tab>4.1</Tab>
          <Tab>4.1</Tab>
          <Tab>4.1</Tab>
          <Tab>4.1</Tab>
          <Tab>4.1</Tab>
          <Tab>4.1</Tab>
          <Tab>4.1</Tab>
          <Tab>4.1</Tab>
          <Tab>4.1</Tab>
        </TabList>

        <TabPanel>
          <h2>Essay here</h2>
        </TabPanel>
        <TabPanel>
          <h2>Part of essay to support that criteria</h2>
        </TabPanel>
        <TabPanel>
          <h2>Part of essay to support that criteria</h2>
        </TabPanel>
        <TabPanel>
          <h2>Part of essay to support that criteria</h2>
        </TabPanel>
        <TabPanel>
          <h2>Part of essay to support that criteria</h2>
        </TabPanel>
        <TabPanel>
          <h2>Part of essay to support that criteria</h2>
        </TabPanel>
        <TabPanel>
          <h2>Part of essay to support that criteria</h2>
        </TabPanel>
        <TabPanel>
          <h2>Part of essay to support that criteria</h2>
        </TabPanel>
        <TabPanel>
          <h2>Part of essay to support that criteria</h2>
        </TabPanel>
        <TabPanel>
          <h2>Part of essay to support that criteria</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DemandReport;
