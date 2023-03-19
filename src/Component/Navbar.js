import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";

function Navbar() {
  return (
    <div className="flex justify-between items-center border-b-2 border-greeen h-16 text-lg text-gray-800 font-semibold">
      <NavLink to="/">LOGO</NavLink>
      <ul className="flex justify-between items-center w-1/5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            (isActive ? "border-b-2 border-greeen " : "") + "hover:text-greeen"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="products"
          className={({ isActive }) =>
            (isActive ? "border-b-2 border-greeen" : "") + "hover:text-greeen"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-greeen" : "hover:text-greeen"
          }
        >
          Contact
        </NavLink>
      </ul>
      <ul className="flex items-center justify-between w-32">
        <NavLink to="/shopBag">
          {" "}
          <HiOutlineShoppingBag className="w-6 h-6 hover:text-greeen" />
        </NavLink>
        <NavLink to="/favourite">
          {" "}
          <AiOutlineHeart className="w-6 h-6 hover:text-greeen" />
        </NavLink>
        <NavLink to="/createAcount">
          {" "}
          <HiOutlineUserCircle className="w-6 h-6 hover:text-greeen" />
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
