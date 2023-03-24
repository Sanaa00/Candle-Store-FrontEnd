import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineUserCircle, HiUserCircle } from "react-icons/hi";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import Container from "./Container";

function Navbar() {
  const bag = useSelector((state) => state.candle.candle);
  return (
    <Container>
      <div className="flex justify-between items-center border-b-2 border-greeen h-16 text-lg text-gray-800 font-semibold">
        <NavLink to="/">LOGO</NavLink>
        <p className="md:hidden">menu</p>
        <ul className="hidden md:flex justify-between items-center w-1/5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              (isActive ? "border-b-2 border-greeen " : "") +
              "hover:text-greeen"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              (isActive ? "border-b-2 border-greeen " : "") +
              "hover:text-greeen"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              (isActive ? "border-b-2 border-greeen " : "") +
              "hover:text-greeen"
            }
          >
            Contact
          </NavLink>
        </ul>
        <ul className="hidden md:flex items-center justify-between w-32">
          <NavLink to="/shopBag">
            {({ isActive }) =>
              isActive ? (
                <HiShoppingBag className="w-6 h-6 hover:text-greeen " />
              ) : (
                <span>
                  {" "}
                  {bag.length !== 0 && (
                    <span className="absolute h-5 w-5 flex items-center justify-center text-center translate-x-1/2 -translate-y-1/2 bg-red-500  rounded-full text-xs text-white shadow-sm">
                      {bag.length}
                    </span>
                  )}
                  <HiOutlineShoppingBag className="w-6 h-6 hover:text-greeen" />
                </span>
              )
            }
          </NavLink>
          <NavLink to="/favourite">
            {({ isActive }) =>
              isActive ? (
                <AiFillHeart className="w-6 h-6 hover:text-greeen" />
              ) : (
                <AiOutlineHeart className="w-6 h-6 hover:text-greeen" />
              )
            }
          </NavLink>
          <NavLink to="/createAcount">
            {({ isActive }) =>
              isActive ? (
                <HiUserCircle className="w-6 h-6 hover:text-greeen" />
              ) : (
                <HiOutlineUserCircle className="w-6 h-6 hover:text-greeen" />
              )
            }
          </NavLink>
        </ul>
      </div>
    </Container>
  );
}

export default Navbar;
