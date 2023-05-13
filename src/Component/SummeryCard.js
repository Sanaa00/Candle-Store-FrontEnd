import React from "react";
import { useGetCartByUserIdQuery } from "../features/api/cart";
import { useSelector } from "react-redux";

function SummeryCard() {
  const { user } = useSelector((state) => state.user);
  const userId = user?._id;
  const { data: cart } = useGetCartByUserIdQuery(userId);
  console.log("cart", cart);
  return (
    <div className="grid grid-cols-1 w-full lg:w-80 xl:w-96 border-b-2 border-greeen">
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
              <p>{bag.productName}</p>
              <p className="text-greeen"> {bag.productId.price * 1}$</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SummeryCard;
