import React from "react";
import Container from "../Component/Container";
import ShoppingBagCard from "../Component/ShoppingBagCard";
import TotalPrice from "../Component/TotalPrice";
// import Data from "../Data";
function ShopBag() {
  return (
    <Container>
      <p className="text-2xl font-semibold text-greeen my-5">Candles</p>
      <div className="grid grid-cols-2 pag-5">
        <ShoppingBagCard />
        <TotalPrice />
      </div>
    </Container>
  );
}

export default ShopBag;
