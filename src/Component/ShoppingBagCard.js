import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { BarLoader } from "react-spinners";
import {
  useGetCartQuery,
  useDeleteFromCartMutation,
  useQuantityChangeMutation,
} from "../features/api/cart";

import EmptyBag from "../images/EmptyBag.png";
import Counter from "./Counter";

function ShoppingBagCard() {
  const { data: cart, isLoading, error, isError } = useGetCartQuery();
  console.log("item in shop bag", cart);
  // let Cart = cart.data[0].products[0];
  // console.log("before delete", Cart);
  const [quantityChange] = useQuantityChangeMutation();

  const [deleteFromCart] = useDeleteFromCartMutation();
  console.log("after delete", cart);

  const deleteFromCartHandle = (id) => {
    deleteFromCart(id);
  };
  const incrementQuantityHandler = (item) => {
    let newQuantity = item.quantity + 1;
    console.log("quantity", item.quantity, newQuantity);
    quantityChange({ ...item, quantity: newQuantity });

    return newQuantity;
  };

  const decrementQuantityHandler = (item) => {
    let newQuantity = item.quantity - 1;
    if (newQuantity <= 1) {
      newQuantity = 1;
    }
    quantityChange({ ...item, quantity: newQuantity });
    return newQuantity;
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <BarLoader color="#316C57" height={5} width={200} />
      </div>
    );
  if (isError) return <p>{error.status}</p>;
  return (
    <div>
      {cart === [] ? (
        <div className="flex">
          <img src={EmptyBag} alt="" className="w-full h-96" />
        </div>
      ) : (
        <div>
          {cart?.data?.products?.map((bag) => {
            return (
              <div key={bag._id}>
                <div className="p-2 lg:p-5 flex border-b-2 ">
                  <div className="w-52 h-40">
                    {" "}
                    <img
                      src={bag.images[0]}
                      alt="shopping card"
                      className="w-40 h-40 object-cover rounded-sm object-center mr-1 lg:mr-5"
                    />
                  </div>

                  <div className="flex flex-col justify-between items-center w-full p-1 ml-5">
                    <div className="flex justify-between items-center w-full">
                      <p className="font-semibold text-greeen ">
                        {bag.productName}
                      </p>
                      <div className="flex ">
                        <div>
                          {" "}
                          <AiOutlineHeart className="w-6 h-6 mr-1 sm:mr-5 text-gray-700" />
                        </div>

                        <button onClick={() => deleteFromCartHandle(bag._id)}>
                          <TiDeleteOutline className="w-6 h-6 text-gray-700" />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <Counter
                        data={bag}
                        increment={() => incrementQuantityHandler(bag)}
                        decrement={() => decrementQuantityHandler(bag)}
                      />
                      <p>{bag.price}$ </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ShoppingBagCard;
