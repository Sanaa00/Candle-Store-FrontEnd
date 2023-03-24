import React from "react";
import CounterButton from "./CounterButton";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../features/candleSlice";
// import { useSelector } from "react-redux";
function Counter({ data }) {
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.candle);
  // console.log(data.quantity);
  return (
    <div className="flex">
      <CounterButton
        text="-"
        onClick={() => {
          dispatch(decrementQuantity(data.id));
        }}
      />
      <div>{data.quantity}</div>
      <CounterButton
        text="+"
        onClick={() => dispatch(incrementQuantity(data.id))}
      />
    </div>
  );
}

export default Counter;
