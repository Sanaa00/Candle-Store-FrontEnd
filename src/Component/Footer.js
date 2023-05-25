import React from "react";
import logo from "../images/logo.png";

import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

import Container from "./Container";
function Footer() {
  return (
    <div className="bg-greeen bg-opacity-10">
      {" "}
      <Container>
        <div className=" py-10 flex flex-col items-center justify-center px-5">
          <img alt="logo" src={logo} className="w-10 h-10 " />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 justify-between w-full mt-5">
            <div className="flex flex-col">
              <p className="font-semibold text-greeen">Category</p>
              <p>Simple</p>
              <p>Collection</p>
              <p>Scently</p>
              <p>Flowers</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-greeen">About As</p>
              <p>Home</p>
              <p>Products</p>
              <p>Contact</p>
              <p>Gift</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-greeen">Customer Care</p>
              <p>Size guide</p>
              <p>Checkout order</p>
              <p>Shipping</p>
              <p>credits</p>
            </div>
            <div className="flex flex-col md:items-center ">
              <p className="font-semibold text-greeen">Contact As</p>
              <AiFillInstagram className="w-6 h-6 mt-2 text-gray-800" />
              <FaFacebookF className="w-6 h-6 mt-1 text-gray-800" />
              <AiOutlineTwitter className="w-6 h-6 mt-1 text-gray-800" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
