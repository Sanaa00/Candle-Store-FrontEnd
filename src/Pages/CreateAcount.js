import React from "react";
import CreateAccountForm from "../Component/CreateAccountForm";
import { Slide, ToastContainer } from "react-toastify";

function CreateAcount() {
  return (
    <div className="bg-gray-50 ">
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
        transition={Slide}
        className="h-32"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between items-center pt-16 ">
        <img
          className="w-full h-[600px] object-cover"
          alt="candle"
          src="https://images.unsplash.com/photo-1636714528228-f469eefb3eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80"
        />
        <div className="px-6 sm:px-10 md:px-14 mb-5 lg:mb-0 lg:ml-10">
          {" "}
          <p className="text-2xl font-semibold text-greeen mb-5 mt-5">
            Create Your Account
          </p>
          <CreateAccountForm />
        </div>
      </div>
    </div>
  );
}

export default CreateAcount;
