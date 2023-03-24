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
      className="w-full sm:w-96 border-b-2 border-greeen focus:outline-none mt-10 px-1 py-1"
    />
  );
}

export default InputField;
