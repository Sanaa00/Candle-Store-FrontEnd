import React from "react";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import Button from "./Button";
function LoginForm() {
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
      <div>
        <Form onSubmit={formik.handleSubmit} className="grid grid-cols-1 mb-10">
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
          <div className="mt-10">
            {" "}
            <Button text="Login" width="96" type="submit" />
          </div>
        </Form>
      </div>
    </Formik>
  );
}

export default LoginForm;
