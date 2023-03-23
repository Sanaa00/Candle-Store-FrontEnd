import React from "react";
import LinkButton from "./LinkButton";
function TotalPrice() {
  return (
    <div className="flex justify-center">
      <div className="bg-greeen bg-opacity-10 p-5 w-96 h-fit flex flex-col items-center ">
        <div className="w-full flex justify-between items-centr border-b-2 border-greeen pb-5">
          <p>Product Name</p>
          <p>100$</p>
        </div>
        <div className="w-full flex justify-between items-center py-5">
          <p className="">Total</p>
          <p>200$</p>
        </div>
        <LinkButton location="products" width="32" />
      </div>
    </div>
  );
}

export default TotalPrice;
