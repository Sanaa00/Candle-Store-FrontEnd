import React from "react";
import paymnet from "../images/payment.png";
// import Checkbox from "rc-checkbox";
import "@trendmicro/react-radio/dist/react-radio.css";
import { RadioButton, RadioGroup } from "@trendmicro/react-radio";
import SummeryCard from "./SummeryCard";
import PaymentForm from "./PaymentForm";
function Payment() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <RadioGroup
          name="radiogroup"
          defaultValue="one"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        >
          <p className="text-2xl font-semibold text-greeen pt-5">
            Paymnet details
          </p>
          <div className="flex justify-start items-center text-gray-800 mt-5">
            {" "}
            <RadioButton value="one" className="">
              <span>Cash payment</span>
            </RadioButton>
            <RadioButton
              value="two"
              className="flex justify-center items-center ml-40"
            >
              <span>
                <img
                  alt="credit  cart "
                  src={paymnet}
                  className="w-10 h-10 mb-1"
                />
              </span>
            </RadioButton>
          </div>
        </RadioGroup>
        <PaymentForm />
      </div>
      <div className="bg-greeen bg-opacity-10 p-5 w-full lg:w-80 xl:w-96 h-fit flex flex-col mt-10 lg:my-5  mb-10 ">
        <p className="text-greeen font-semibold"> Order Summery</p>
        <SummeryCard />
      </div>
    </div>
  );
}

export default Payment;
