import Container from "./Container";
import React from "react";
import "react-tabs/style/react-tabs.css";
import Shipping from "./Shipping";
import SummeryCard from "./SummeryCard";

function ShippingAndPayment() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Container>
        <p className="text-xl font-semibold text-greeen pt-20">
          Address details
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
          <Shipping />
          <SummeryCard />
        </div>
      </Container>
    </div>
  );
}

export default ShippingAndPayment;
