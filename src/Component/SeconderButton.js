import React from "react";

function SeconderButton({ text, width, type, onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-10 py-1 w-${width} border-2 bg-gray-100  border-greeen text-center text-gray-800 hover:text-gray-100 hover:bg-darkgreen hover:duration-500 duration-500 hover:shadow-lg`}
    >
      {text}
    </button>
  );
}

export default SeconderButton;
