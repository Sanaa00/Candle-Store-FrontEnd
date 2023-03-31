import React from "react";
import Container from "./Container";
// import Checkbox from "rc-checkbox";
import "@trendmicro/react-radio/dist/react-radio.css";
import { RadioButton, RadioGroup } from "@trendmicro/react-radio";
function Payment() {
  return (
    <RadioGroup
      name="radiogroup"
      defaultValue="one"
      onChange={(event) => {
        console.log(event.target.value);
      }}
    >
      <div>Payment</div>
      <div className="flex justify-between items-center text-gray-800 mt-5">
        {" "}
        <RadioButton value="one">
          <span>First option</span>
        </RadioButton>
        <RadioButton value="two" className="">
          <span>Second option</span>
        </RadioButton>
      </div>
    </RadioGroup>
  );
}

export default Payment;
