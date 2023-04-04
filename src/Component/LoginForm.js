import React from "react";

import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";

import InputField from "./InputField";
import Button from "./Button";
function LoginForm() {
  const widthOfButton = () => {
    if (window.innerWidth < 640) {
      return "full";
    } else if (window.innerWidth < 768) {
      return "full";
    } else if (window.innerWidth < 1280) {
      return "full";
    } else {
      return 96;
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
  });
  return (
    <Formik>
      <div className="w-full lg:w-fit">
        <Form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 mb-10 w-full lg:w-fit"
        >
          <InputField
            name="email"
            placeholder="Email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <span className="text-red-400 text-sm">{formik.errors.email}</span>
          <InputField
            name="password"
            placeholder="Password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <span className="text-red-400 text-sm">{formik.errors.password}</span>
          <div className="mt-5">
            {" "}
            <Button text="Login" width={widthOfButton()} type="submit" />
          </div>
        </Form>
      </div>
    </Formik>
  );
}

export default LoginForm;
