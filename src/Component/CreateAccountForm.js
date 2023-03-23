import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import { Link } from "react-router-dom";
function CreateAccountForm() {
  return (
    <div className="grid grid-cols-1 mb-10">
      <InputField placeholder="First Name" name="firstname" value="" />
      <InputField placeholder="Last Name" name="lastname" value="" />
      <InputField placeholder="Email" name="email" value="" />
      <InputField placeholder="Password" name="password" value="" />
      <InputField
        placeholder="Confirm Password"
        name="confirmpasssword"
        value=""
      />
      <div className="mt-10 flex flex-col justify-center items-center">
        <Button text="Order Now" width="96" />
        <Link to="/login" className="mt-2">
          Have Account? Login{" "}
        </Link>
      </div>
    </div>
  );
}

export default CreateAccountForm;
