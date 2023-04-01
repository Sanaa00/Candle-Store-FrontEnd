import React from "react";
import { Field } from "formik";
function InputField({ name, placeholder, value, onChange, id }) {
  return (
    <Field
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      className="w-full lg:w-80 xl:w-96 border-2 rounded-sm border-greeen focus:outline-none mt-10 px-1 py-1"
    />
  );
}

export default InputField;
