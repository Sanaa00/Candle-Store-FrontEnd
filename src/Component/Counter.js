import React from "react";
import CounterButton from "./CounterButton";

function Counter() {
  return (
    <div className="flex">
      <CounterButton text="-" />
      <div>1</div>
      <CounterButton text="+" />
    </div>
  );
}

export default Counter;
