import React from "react";
import { Field } from "formik";

function InputField({ name, placeholder, value, onChange, id, type, accept }) {
  return (
    <Field
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      type={type}
      multiple
      accept={accept}
      className="w-full lg:w-80 xl:w-96 h-14 pl-3 border-2 rounded-sm border-gray-300 focus:outline-none focus:border-greeen bg-gray-50 mt-5 px-1 py-1"
    />
  );
}

export default InputField;
