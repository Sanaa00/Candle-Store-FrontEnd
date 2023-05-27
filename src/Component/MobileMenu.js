import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi";
import { HiOutlineUserCircle, HiUserCircle } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";
import { addUser } from "../features/user.slice";
function MobileMenu() {
  const [open, setOpen] = useState(true);

  const bag = useSelector((state) => state.candle.candle);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      {" "}
      <div
        className={`flex lg:hidden lg:w-0  justify-center items-center  h-full text-lg font-bold`}
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
        <NavLink to="/favourite">
          {({ isActive }) =>
            isActive ? (
              <AiFillHeart className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 hover:text-greeen mx-2" />
            ) : (
              <AiOutlineHeart className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 hover:text-greeen mx-2" />
            )
          }
        </NavLink>
        <button onClick={() => setOpen(!open)} className="lg:hidden ">
          <IoMenu fill="#f55951" className="w-8 h-8" />
        </button>
        <div
          className={`bg-white z-100 rounded-sm lg:hidden flex flex-col fixed w-3/5 top-0 right-0 shadow-lg transform duration-500 ease-in-out ${
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
            {/* <Link
              to="/favourite"
              onClick={() => setOpen(!open)}
              className="text-orange text-center py-3"
            >
              Favourite
            </Link>{" "} */}
            {/* <Link
              to="/createAcount"
              onClick={() => setOpen(!open)}
              className="text-orange text-center py-3"
            >
              Account
            </Link>{" "} */}
            {!user ? (
              <NavLink
                to="/createAcount"
                className="flex justify-center items-center w-full"
              >
                {({ isActive }) =>
                  isActive ? (
                    <HiUserCircle className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 hover:text-greeen mx-2" />
                  ) : (
                    <HiOutlineUserCircle className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 hover:text-greeen mx-2" />
                  )
                }
              </NavLink>
            ) : (
              <NavLink
                className="flex justify-center items-center w-full"
                to="/"
                onClick={(e) => {
                  localStorage.removeItem("access_token");
                  dispatch(addUser(null));
                }}
              >
                {" "}
                <AiOutlineLogout className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 hover:text-greeen mx-2" />
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
