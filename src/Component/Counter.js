import React from "react";

import { useQuantityChangeMutation } from "../features/api/cart";
import { useProductQuantityChangeMutation } from "../features/api/productApi";

import CounterButton from "./CounterButton";
// import { useProductQuantityChangeMutation } from "../features/api/productApi";
function Counter({ data }) {
  const [quantityChange] = useQuantityChangeMutation();
  // const [productQuantityChange] = useProductQuantityChangeMutation();

  const incrementQuantityHandler = (item) => {
    let newQuantity = item.quantity + 1;

    quantityChange({ ...item, quantity: newQuantity });

    return newQuantity;
    // productQuantityChange({ ...item, quantity: newQuantity });
  };

  const decrementQuantityHandler = (item) => {
    let newQuantity = item.quantity - 1;
    if (newQuantity <= 1) {
      newQuantity = 1;
    }
    quantityChange({ ...item, quantity: newQuantity });
    return newQuantity;
    // productQuantityChange({ ...item, quantity: newQuantity });
  };

  return (
    <div className="flex">
      <CounterButton text="-" onClick={() => decrementQuantityHandler(data)} />
      <div> {data.quantity || 0}</div>
      <CounterButton text="+" onClick={() => incrementQuantityHandler(data)} />
    </div>
  );
}

export default Counter;
