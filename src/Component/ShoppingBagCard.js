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
  const [quantityChange] = useQuantityChangeMutation();

  const [deleteFromCart] = useDeleteFromCartMutation();
  console.log(cart);

  const deleteFromCartHandle = (id) => {
    deleteFromCart(id);
  };
  const incrementQuantityHandler = (item) => {
    let newQuantity = item.quantity + 1;

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
          {cart.map((bag) => {
            return (
              <div key={bag.id}>
                <div key={bag.id} className="p-2 lg:p-5 flex border-b-2 ">
                  <img
                    src={bag.url}
                    alt="shopping card"
                    className="w-28 h-28 lg:w-40 lg:h-40 object-cover mr-1 lg:mr-5"
                  />
                  <div className="flex flex-col justify-between items-center w-full p-1">
                    <div className="flex justify-between items-center w-full">
                      <p className="font-semibold text-greeen ">{bag.name}</p>
                      <div className="flex ">
                        <div>
                          {" "}
                          <AiOutlineHeart className="w-6 h-6 mr-1 sm:mr-5 text-gray-700" />
                        </div>

                        <button onClick={() => deleteFromCartHandle(bag)}>
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
                      <p>{bag.price * bag.quantity}$ </p>
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
