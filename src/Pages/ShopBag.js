import React from "react";
import Container from "../Component/Container";
import ShoppingBagCard from "../Component/ShoppingBagCard";
import TotalPrice from "../Component/TotalPrice";
import { useSelector } from "react-redux";
import emptyBag from "../images/EmptyBag.png";
// import Data from "../Data";
function ShopBag() {
  const bag = useSelector((state) => state.candle.candle);

  return (
    <div className="bg-gray-50">
      <Container>
        <div className="min-h-screen">
          <p className="text-2xl font-semibold text-greeen py-5">Candles</p>
          {bag.length === 0 ? (
            <div className="flex justify-center items-center">
              {" "}
              <img
                alt="empty bag"
                src={emptyBag}
                className="w-2/4 h-fit object-cover"
              />
            </div>
          ) : (
            // <p className=" text-gray-800 font-semibold mt-5">Your Bag is Empty</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 pag-5">
              <ShoppingBagCard />
              <TotalPrice />
            </div>
          )}{" "}
        </div>
      </Container>
    </div>
  );
}

export default ShopBag;
