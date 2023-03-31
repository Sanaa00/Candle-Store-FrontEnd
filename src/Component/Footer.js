import React from "react";
import Container from "./Container";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-greeen bg-opacity-10">
      {" "}
      <Container>
        <div className="border-t-2 border-greeen py-10 flex flex-col items-center justify-center px-5">
          <p>LOGO</p>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 justify-between w-full mt-5">
            <div className="flex flex-col">
              <p className="font-semibold text-greeen">Category</p>
              <p>category 1</p>
              <p>category 2</p>
              <p>category 3</p>
              <p>category 4</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-greeen">About As</p>
              <p>Profile</p>
              <p>Gifts</p>
              <p>Brand</p>
              <p>category 4</p>
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
