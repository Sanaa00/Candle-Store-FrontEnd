import React from "react";

import CounterButton from "./CounterButton";

function Counter({ data, increment, decrement }) {
  console.log("counter", data.quantity);
  return (
    <div className="flex">
      <CounterButton text="-" onClick={decrement} />
      <div>
        {" "}
        {data.quantity}
        {console.log("counter", data.quantity)}
      </div>
      <CounterButton text="+" onClick={increment} />
    </div>
  );
}

export default Counter;
