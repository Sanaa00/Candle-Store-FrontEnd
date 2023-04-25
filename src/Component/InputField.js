import React from "react";
import { Field } from "formik";

function InputField({ name, placeholder, value, onChange, id, type }) {
  return (
    <Field
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      type={type}
      className="w-full lg:w-80 xl:w-96 border-2 rounded-sm border-gray-200 focus:outline-none focus:border-greeen bg-gray-50 mt-5 px-1 py-1"
    />
  );
}

export default InputField;
