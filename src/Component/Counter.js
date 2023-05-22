import React from "react";

import CounterButton from "./CounterButton";

function Counter({ data, increment, decrement }) {
  return (
    <div className="flex">
      <CounterButton text="-" onClick={decrement} />
      <div>{data.quantity}</div>
      <CounterButton text="+" onClick={increment} />
    </div>
  );
}

export default Counter;
