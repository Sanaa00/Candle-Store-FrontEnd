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
  const widthofbutton = () => {
    if (window.innerWidth < 640) {
      return "full";
    } else if (window.innerWidth < 768) {
      return "full";
    } else if (window.innerWidth < 1024) {
      return "full";
    } else if (window.innerWidth) {
      return "full";
    } else {
      return 96;
    }
  };
  return (
    <div className="flex w-full sm:justify-center">
      <div className="bg-greeen bg-opacity-10 p-5 w-full lg:w-fit h-fit flex flex-col items-center my-5 lg:my-0">
        <div className="grid grid-cols-1 w-full lg:w-80 xl:w-96 border-b-2 border-greeen">
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
        <LinkButton
          location="products"
          width={widthofbutton()}
          text="Checkout"
        />
      </div>
    </div>
  );
}

export default TotalPrice;
