import React from "react";

import { NavLink } from "react-router-dom";
import { HiOutlineUserCircle, HiUserCircle } from "react-icons/hi";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useGetCartQuery } from "../features/api/cart";
import { BarLoader } from "react-spinners";
import { useSelector } from "react-redux";

import Container from "./Container";
import MobileMenu from "./MobileMenu";
import Search from "./Search";

function Navbar() {
  // const bag = useSelector((state) => state.candle.candle);
  const { data: bag, isLoading, error, isError } = useGetCartQuery();

  console.log(bag?.length);

  isLoading && (
    <div className="flex justify-center items-center h-screen">
      <BarLoader color="#316C57" height={5} width={200} />
    </div>
  );
  return (
    <div className="bg-gray-50 w-full fixed z-50">
      <Container>
        <div className="flex justify-between items-center h-16 text-lg lg:text-base xl:text-lg text-gray-800 font-semibold">
          <NavLink to="/" className="w-1/3">
            LOGO
          </NavLink>
          <MobileMenu />
          <ul className="hidden lg:flex w-1/3 justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-greeen " : "") +
                "hover:text-greeen mx-4"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="products"
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-greeen " : "") +
                "hover:text-greeen mx-4"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-greeen " : "") +
                "hover:text-greeen mx-4"
              }
            >
              Contact
            </NavLink>
          </ul>
          <ul className="hidden lg:flex w-1/3 justify-end items-center">
            <div className="">
              <Search />
            </div>

            <NavLink to="/shopBag">
              {({ isActive }) =>
                isActive ? (
                  <HiShoppingBag className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 hover:text-greeen mx-2" />
                ) : (
                  <span>
                    {" "}
                    {bag?.length !== 0 && (
                      <span className="absolute h-5 w-5 flex items-center justify-center text-center translate-x-1/2 -translate-y-1/2 bg-red-500  rounded-full text-xs text-white shadow-sm">
                        {bag?.length}
                      </span>
                    )}
                    <HiOutlineShoppingBag className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 hover:text-greeen mx-2" />
                  </span>
                )
              }
            </NavLink>
            <NavLink to="/favourite">
              {({ isActive }) =>
                isActive ? (
                  <AiFillHeart className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 hover:text-greeen mx-2" />
                ) : (
                  <AiOutlineHeart className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 hover:text-greeen mx-2" />
                )
              }
            </NavLink>
            <NavLink to="/createAcount">
              {({ isActive }) =>
                isActive ? (
                  <HiUserCircle className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 hover:text-greeen mx-2" />
                ) : (
                  <HiOutlineUserCircle className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 hover:text-greeen mx-2" />
                )
              }
            </NavLink>
            {/* <Search /> */}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
