import React from "react";
import { useGetCartByUserIdQuery } from "../features/api/cart";
import { useSelector } from "react-redux";

function SummeryCard() {
  const { user } = useSelector((state) => state.user);
  const userId = user?._id;
  const { data: cart } = useGetCartByUserIdQuery(userId);
  let totalQuantity = 0;
  let totalprice = 0;
  cart?.data[0]?.products.forEach((item) => {
    totalQuantity = totalQuantity + item.quantity;

    totalprice += item.productId.price * item.quantity;
  });
  return (
    <div className="grid grid-cols-1 w-full lg:w-80 xl:w-96  border-greeen">
      {cart?.data[0]?.products.map((bag) => {
        return (
          <div
            key={bag.productId._id}
            className="w-full flex justify-between border-b border-greeen py-2 "
          >
            <img
              alt="product iamge"
              src={bag.productId.images[0]}
              className="w-28 h-28 object-cover lg:mr-10"
            />
            <div className="flex flex-col justify-between items-end">
              <p>{bag.productId.productName}</p>
              <p className="text-greeen"> {bag.productId.price * 1}$</p>
            </div>
          </div>
        );
      })}
      <div className="w-full flex justify-between items-center px-1 font-semibold pt-5">
        <p className="">Total</p>
        <p>{totalprice}$</p>
      </div>
    </div>
  );
}

export default SummeryCard;
