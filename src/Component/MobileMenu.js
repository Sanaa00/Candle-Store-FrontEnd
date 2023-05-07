import React, { useState } from "react";

import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi";

function MobileMenu() {
  const [open, setOpen] = useState(true);

  const bag = useSelector((state) => state.candle.candle);

  return (
    <div>
      {" "}
      <div
        className={`flex lg:hidden  justify-center items-center  h-full text-lg font-bold`}
      >
        <NavLink to="/shopBag">
          {({ isActive }) =>
            isActive ? (
              <HiShoppingBag className="w-6 h-6 hover:text-greeen mr-2" />
            ) : (
              <span>
                {" "}
                {bag.length !== 0 && (
                  <span className="absolute h-5 w-5 flex items-center justify-center text-center translate-x-1/2 -translate-y-1/2 bg-red-500  rounded-full text-xs text-white shadow-sm">
                    {bag.length}
                  </span>
                )}
                <HiOutlineShoppingBag className="w-6 h-6 hover:text-greeen mr-2" />
              </span>
            )
          }
        </NavLink>
        <button onClick={() => setOpen(!open)} className="lg:hidden ">
          <IoMenu fill="#f55951" className="w-8 h-8" />
        </button>
        <div
          className={`bg-white rounded-sm lg:hidden flex flex-col fixed w-3/5 top-0 z-40 right-0 shadow-lg transform duration-500 ease-in-out ${
            open ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="right-0 flex  h-16">
            <button
              onClick={() => setOpen(!open)}
              className="text-black w-full px-6 flex flex-col pt-4 items-end"
            >
              <IoClose className="text-orange w-8 h-8" />
            </button>
          </div>

          <div className=" h-screen flex flex-col">
            <Link
              to="/"
              onClick={() => setOpen(!open)}
              className="text-orange text-center py-3"
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setOpen(!open)}
              className="text-orange text-center py-3"
            >
              Products
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(!open)}
              className="text-orange text-center py-3"
            >
              Contact
            </Link>{" "}
            <Link
              to="/favourite"
              onClick={() => setOpen(!open)}
              className="text-orange text-center py-3"
            >
              Favourite
            </Link>{" "}
            <Link
              to="/createAcount"
              onClick={() => setOpen(!open)}
              className="text-orange text-center py-3"
            >
              Account
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
