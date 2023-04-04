import Container from "./Container";
import React from "react";
import "react-tabs/style/react-tabs.css";

import Shipping from "./Shipping";
import ShoppingBagCard from "./ShoppingBagCard";

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
        </div>
      </div>
    </Container>
  );
}

export default ShippingAndPayment;
