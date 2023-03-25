import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineUserCircle, HiUserCircle } from "react-icons/hi";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import Container from "./Container";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const bag = useSelector((state) => state.candle.candle);
  // const [open, setOpen] = useState(false);
  return (
    <Container>
      <div className="w-full flex justify-between items-center border-b-2 border-greeen h-16 text-lg text-gray-800 font-semibold">
        <NavLink to="/">LOGO</NavLink>
        <MobileMenu />
        {/* <div
          className={`flex md:hidden  justify-center items-center  h-full text-lg font-bold`}
        >
          {" "}
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
          <button onClick={() => setOpen(!open)} className="md:hidden ">
            <IoMenu fill="#f55951" className="w-8 h-8" />
          </button>
          <div
            className={`bg-white rounded-sm md:hidden flex flex-col fixed w-3/5 top-0 z-40 right-0 shadow-lg transform duration-500 ease-in-out ${
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
        </div> */}
        {/* <p className="md:hidden">menu</p> */}
        <ul className="hidden lg:flex justify-between items-center lg:w-2/5 w-1/5">
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
        <ul className="hidden lg:flex items-center justify-between w-32">
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
