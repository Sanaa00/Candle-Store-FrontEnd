import React from "react";

import { useGetCartQuery } from "../features/api/cart";
import { BarLoader } from "react-spinners";

import LinkButton from "./LinkButton";

function TotalPrice() {
  const { data, isLoading } = useGetCartQuery();

  let totalQuantity = 0;
  let totalPrice = 0;
  data?.data?.forEach((item) => {
    totalQuantity = totalQuantity + item.quantity;
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

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <BarLoader color="#316C57" height={5} width={200} />
      </div>
    );
  return (
    <div className="flex w-full sm:justify-center">
      <div className="bg-greeen bg-opacity-10 p-5 w-full lg:w-fit h-fit flex flex-col items-center my-5 lg:my-0">
        <div className="grid grid-cols-1 w-full lg:w-80 xl:w-96 border-b-2 border-greeen">
          {data?.data?.map((bag) => {
            return (
              <div
                key={bag._id}
                className="w-full flex justify-between items-centr pb-5"
              >
                <p>{bag.productName}</p>
                <p>
                  {bag.price}*{bag.quantity}={bag.price * bag.quantity}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-between items-center py-5">
          <p className="">Total</p>
          <p>{totalPrice}</p>
        </div>
        <LinkButton
          // onClick={openModal}
          location="ShippingAndPayment"
          width={widthofbutton()}
          text="Checkout"
        />{" "}
        {/* <AdressPaymentModal modalIsOpen={modalIsOpen} closeModal={closeModal} /> */}
      </div>
    </div>
  );
}

export default TotalPrice;
