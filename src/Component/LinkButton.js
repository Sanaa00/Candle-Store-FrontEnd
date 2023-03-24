import React from "react";
import { Link } from "react-router-dom";
function LinkButton({ location, width }) {
  return (
    <Link
      to={`/${location}`}
      className={`bg-greeen px-${width} py-1 text-gray-100 hover:bg-darkgreen hover:duration-500 duration-500 hover:shadow-lg `}
    >
      Shop Now{" "}
    </Link>
  );
}

export default LinkButton;
