import React from "react";

function Button({ text, width }) {
  return (
    <button
      className={`px-10 py-1 w-${width}  bg-greeen text-center text-gray-100 hover:bg-darkgreen hover:duration-500 duration-500 hover:shadow-lg`}
    >
      {text}
    </button>
  );
}

export default Button;
