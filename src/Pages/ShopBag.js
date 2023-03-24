import React from "react";
import Container from "../Component/Container";
import ShoppingBagCard from "../Component/ShoppingBagCard";
import TotalPrice from "../Component/TotalPrice";
import { useSelector } from "react-redux";
// import Data from "../Data";
function ShopBag() {
  const bag = useSelector((state) => state.candle.candle);
  return (
    <Container>
      <div className="min-h-screen">
        <p className="text-2xl font-semibold text-greeen my-5">Candles</p>
        {bag.length === 0 ? (
          <p className=" text-gray-800 font-semibold mt-5">Your Bag is Empty</p>
        ) : (
          <div className="grid grid-cols-2 pag-5">
            <ShoppingBagCard />
            <TotalPrice />
          </div>
        )}{" "}
      </div>
    </Container>
  );
}

export default ShopBag;
