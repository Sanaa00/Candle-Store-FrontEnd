import React from "react";

function CounterButton({ text, onClick }) {
  return (
    <button className="px-2" onClick={onClick}>
      {text}
    </button>
  );
}

export default CounterButton;
