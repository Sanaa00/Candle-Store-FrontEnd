import React from "react";

import {
  useAddToCartMutation,
  useGetCartByUserIdQuery,
} from "../features/api/cart";

import LinkButton from "./LinkButton";
import { useSelector } from "react-redux";

function TotalPrice() {
  const { user } = useSelector((state) => state.user);
  const userId = user?._id;
  const { data: cart } = useGetCartByUserIdQuery(userId);
  const [addToCart] = useAddToCartMutation();

  let totalQuantity = 0;
  let totalprice = 0;
  cart?.data[0]?.products.forEach((item) => {
    totalQuantity = totalQuantity + item?.quantity;

    totalprice += item?.productId?.price * item?.quantity;
  });
  const addTotalHandler = () => {
    addToCart({ totalprice: `${totalprice}` });
  };
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
          {cart?.data[0]?.products?.map((bag) => {
            return (
              <div
                key={bag?.productId?._id}
                className="w-full flex justify-between items-centr pb-5"
              >
                <p>{bag?.productId?.productName}</p>
                <p>
                  {bag?.productId?.price}*{bag?.quantity}$
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-between items-center py-5">
          <p className="">Total</p>
          <p>{totalprice}$</p>
        </div>
        <LinkButton
          onClick={() => {
            addTotalHandler();
          }}
          location="ShippingAndPayment"
          width={widthofbutton()}
          text="Checkout"
        />{" "}
      </div>
    </div>
  );
}

export default TotalPrice;
