import Container from "./Container";
import React from "react";
import "react-tabs/style/react-tabs.css";

import Shipping from "./Shipping";

import Payment from "./Payment";
import SummeryCard from "./SummeryCard";

function ShippingAndPayment() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Container>
        <div className="">
          {" "}
          <p className="text-2xl font-semibold text-greeen pt-20">
            Address details
          </p>
          <div className="grid grid-cols-2 justify-between">
            <Shipping />{" "}
            <div className="bg-greeen bg-opacity-10 p-5 w-full lg:w-fit h-fit flex flex-col items-center my-5 lg:my-0">
              <p className="text-greeen font-semibold"> Order Summery</p>
              <SummeryCard />
            </div>
            {/* <Payment /> */}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ShippingAndPayment;
