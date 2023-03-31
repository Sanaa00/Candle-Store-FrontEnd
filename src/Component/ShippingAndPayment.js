import Container from "./Container";
import React from "react";
// import { Tabs } from "antd";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Shipping from "./Shipping";
// import Payment from "./Payment";
import ShoppingBagCard from "./ShoppingBagCard";
// import TotalPrice from "./TotalPrice";
function ShippingAndPayment() {
  return (
    <Container>
      <div className="min-h-screen">
        {" "}
        <p className="text-2xl font-semibold text-greeen mt-5">
          Shipping details
        </p>
        <div className="grid grid-cols-2 justify-between">
          <Shipping />
          <div className="bg-greeen bg-opacity-10 my-5">
            <p className="font-semibold text-gray-800 px-4 pt-4">
              Shipping details
            </p>
            <ShoppingBagCard />
          </div>

          {/* <Payment /> */}
        </div>
      </div>

      {/* <div className="min-h-screen mt-5">
        <Tabs
          centered={true}
          // popupClassName="text-greeen"
          // tabBarStyle={}
        >
          <Tabs.TabPane tab="Shipping" key="Shipping">
            <Shipping />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Payment" key="Payment">
            <Payment />
          </Tabs.TabPane>
        </Tabs> */}
      {/* <Tabs
          className="mt-5 border-none outline-none"
          selectedTabClassName="border-none outline-none "
          disabledTabClassName="border-b-2 border-gray-800"
          //   selectedTabPanelClassName="border-b-2 border-greeen"
        >
          <TabList disabledClassName="border-b-2" className="">
            <Tab>shipping</Tab>
            <Tab>payment</Tab>
          </TabList>

          <TabPanel className="border-none outline-none">
            <div>
              {" "}
              <div className="grid grid-cols-1 lg:grid-cols-2 pag-5">
                <p>form shipping</p>
                <p>shippping price or detail</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {" "}
              <div className="grid grid-cols-1 lg:grid-cols-2 pag-5">
                <p>form for payment</p>
                <p>shippping price or detail</p>
              </div>
            </div>
          </TabPanel>
        </Tabs> */}
      {/* </div> */}
      {/* <div className="min-h-screen">
        shipping and payment
        <div className="grid grid-cols-1 lg:grid-cols-2 pag-5">
          <p>form</p>
          <p>shippping price or detail</p>
        </div>
      </div> */}
    </Container>
  );
}

export default ShippingAndPayment;
