import React from "react";
import { RiAdminLine, RiAdminFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { HiOutlineUserCircle, HiUserCircle } from "react-icons/hi";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useGetCartByUserIdQuery } from "../features/api/cart";
import { BarLoader } from "react-spinners";
import { AiOutlineLogout } from "react-icons/ai";
import logo from "../images/logo.png";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/user.slice";

function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const userId = user?._id;
  const { data: cartByUser, isLoading } = useGetCartByUserIdQuery(userId, {
    skip: !userId,
  });

  isLoading && (
    <div className="flex justify-center items-center h-screen">
      <BarLoader color="#316C57" height={5} width={200} />
    </div>
  );
  return (
    <div className="bg-gray-50 bg-opacity-70  w-full fixed z-50">
      <Container>
        <div className="flex justify-between items-center h-16 text-lg lg:text-base xl:text-lg text-gray-800 font-semibold">
          <ul className="hidden lg:flex items-center  justify-start">
            <NavLink to="/" className="hidden lg:flex">
              <img alt="logo" src={logo} className="w-10 h-10 " />
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-greeen text-greeen " : "") +
                "hover:text-greeen mx-4 text-gray-800"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="products"
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-greeen text-greeen " : "") +
                "hover:text-greeen mx-4 text-gray-800"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-greeen text-greeen " : "") +
                "hover:text-greeen mx-4 text-gray-800"
              }
            >
              Contact
            </NavLink>
          </ul>{" "}
          <NavLink to="/" className="w-1/3 lg:w-0 lg:hidden">
            <img alt="logo" src={logo} className="w-10 h-10 lg:w-12 lg:h-12" />
          </NavLink>
          <MobileMenu />
          <ul className="hidden lg:flex justify-end items-center">
            {user?.role === "admin" && (
              <NavLink to="/adminPanel">
                {({ isActive }) =>
                  isActive ? (
                    <RiAdminFill className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 hover:text-greeen mx-2" />
                  ) : (
                    <RiAdminLine className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 hover:text-greeen mx-2" />
                  )
                }
              </NavLink>
            )}
            <NavLink to="/shopBag">
              {({ isActive }) =>
                isActive ? (
                  <HiShoppingBag className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 hover:text-greeen mx-2" />
                ) : (
                  <span>
                    {user && cartByUser?.data?.length !== 0 && (
                      <span className="absolute h-5 w-5 flex items-center justify-center text-center translate-x-1/2 -translate-y-1/2 bg-red-500  rounded-full text-xs text-white shadow-sm">
                        {cartByUser?.data[0]?.products?.length}
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
            {!user ? (
              <NavLink to="/createAcount">
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
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
