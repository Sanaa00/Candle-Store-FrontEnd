import React from "react";

function CounterButton({ text, onClick }) {
  return (
    <button
      className="px-2 font-semibold text-lg text-gray-800"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default CounterButton;
