import React from "react";
import { Link } from "react-router-dom";
function LinkButton({ location, width, text, onClick }) {
  return (
    <Link
      onClick={onClick}
      to={`/${location}`}
      className={`bg-greeen w-${width} py-2 px-10 text-gray-100 text-center rounded-sm hover:bg-darkgreen hover:duration-500 duration-500 hover:shadow-lg `}
    >
      {text}
    </Link>
  );
}

export default LinkButton;
