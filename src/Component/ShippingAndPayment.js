import Container from "./Container";
import React from "react";
import "react-tabs/style/react-tabs.css";

import Shipping from "./Shipping";

import Payment from "./Payment";

function ShippingAndPayment() {
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="">
          {" "}
          <p className="text-2xl font-semibold text-greeen pt-20">
            Shipping details
          </p>
          <div className="grid grid-cols-1 justify-between">
            <Shipping />
            <Payment />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ShippingAndPayment;
