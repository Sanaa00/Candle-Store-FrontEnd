import React from "react";
import { useSelector } from "react-redux";
import LinkButton from "./LinkButton";
function TotalPrice() {
  const data = useSelector((state) => state.candle.candle);
  let totalQuantity = 0;
  let totalPrice = 0;
  data.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return (
    <div className="flex justify-center ">
      <div className="bg-greeen bg-opacity-10 p-5  h-fit flex flex-col items-center ">
        <div className="grid grid-cols-1 w-96 border-b-2 border-greeen">
          {data.map((bag) => {
            return (
              <div
                key={bag.id}
                className="w-full flex justify-between items-centr pb-5"
              >
                <p>{bag.name}</p>
                <p>
                  {bag.price}*{bag.quantity}={bag.price * bag.quantity}
                </p>
              </div>
            );
          })}
        </div>
        {/* <div className="w-full flex justify-between items-centr border-b-2 border-greeen pb-5">
          <p>{data.name}</p>
          <p>{data.price}</p>
        </div> */}
        <div className="w-full flex justify-between items-center py-5">
          <p className="">Total</p>
          <p>{totalPrice}</p>
        </div>
        <LinkButton location="products" width="96" text="Checkout" />
      </div>
    </div>
  );
}

export default TotalPrice;
