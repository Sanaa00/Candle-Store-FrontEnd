import React from "react";
import { useGetCartQuery } from "../features/api/cart";

function SummeryCard() {
  const { data } = useGetCartQuery();
  return (
    <div>
      {data?.data?.map((bag) => {
        return (
          <div
            key={bag._id}
            className="w-full flex justify-between border-b border-greeen py-2 "
          >
            {/* <img
              alt="product iamge"
              src={bag.images[0]}
              className="w-28 h-28 object-cover lg:mr-10"
            /> */}
            <div className="flex flex-col justify-between items-end">
              <p>{bag.productName}</p>
              <p className="text-greeen"> {bag.price * bag.quantity}$</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SummeryCard;
