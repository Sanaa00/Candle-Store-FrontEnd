import React from "react";

import CounterButton from "./CounterButton";
// import { useProductQuantityChangeMutation } from "../features/api/productApi";
function Counter({ data, increment, decrement }) {
  // const [quantityChange] = useQuantityChangeMutation();
  // const [productQuantityChange] = useProductQuantityChangeMutation();

  // const incrementQuantityHandler = (item) => {
  //   let newQuantity = item.quantity + 1;

  //   quantityChange({ ...item, quantity: newQuantity });

  //   return newQuantity;
  // };

  // const decrementQuantityHandler = (item) => {
  //   let newQuantity = item.quantity - 1;
  //   if (newQuantity <= 1) {
  //     newQuantity = 1;
  //   }
  //   quantityChange({ ...item, quantity: newQuantity });
  //   return newQuantity;
  // };

  return (
    <div className="flex">
      <CounterButton text="-" onClick={decrement} />
      <div> {data.quantity || 0}</div>
      <CounterButton text="+" onClick={increment} />
    </div>
  );
}

export default Counter;
