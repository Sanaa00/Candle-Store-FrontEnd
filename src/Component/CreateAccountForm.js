import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Formik, Form, useFormik } from "formik";
import { useGetUserQuery, useAddUserMutation } from "../features/api/user";

import * as Yup from "yup";

import InputField from "./InputField";
import Button from "./Button";

function CreateAccountForm() {
  const [formData, setFormData] = useState();
  console.log("form data", formData);
  const { data: user } = useGetUserQuery();
  const [addUser] = useAddUserMutation();
  console.log("after add", user);
  const widthOfButton = () => {
    if (window.innerWidth < 640) {
      return "full";
    } else if (window.innerWidth < 768) {
      return "full";
    } else if (window.innerWidth < 1024) {
      return "full";
    } else if (window.innerWidth < 1280) {
      return 96;
    }
  };
  const addUserHandler = () => {
    addUser(formData);
  };
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpasssword: "",
    },
    onSubmit: (values) => {
      setFormData(values);
      // addUser(values);
      // console.log("form values", values);
    },

    validationSchema: Yup.object({
      firstname: Yup.string().label("First Name").required(),
      lastname: Yup.string().label("Last Name").required(),
      email: Yup.string().email().required(),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "should be 8 chars minimum."),
      confirmpasssword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
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
            placeholder="First Name"
            name="firstname"
            id="firstname"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
          <span className="text-red-400 text-sm">
            {formik.errors.firstname}
          </span>
          <InputField
            placeholder="Last Name"
            name="lastname"
            id="lastname"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
          <span className="text-red-400 text-sm">{formik.errors.lastname}</span>
          <InputField
            placeholder="Email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <span className="text-red-400 text-sm">{formik.errors.email}</span>
          <InputField
            placeholder="Password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <span className="text-red-400 text-sm">{formik.errors.password}</span>
          <InputField
            placeholder="Confirm Password"
            name="confirmpasssword"
            id="confirmpassword"
            onChange={formik.handleChange}
            value={formik.values.confirmpasssword}
          />
          <span className="text-red-400 text-sm">
            {formik.errors.confirmpasssword}
          </span>
          <div className="mt-5 flex flex-col justify-center items-center">
            <Button
              text="Create"
              width={widthOfButton()}
              type="submit"
              onClick={() => addUserHandler()}
            />{" "}
            <Link
              to="/login"
              className="mt-2 text-blue-700 underline hover:text-blue-500 duration-400 hover:duration-500"
            >
              Have Account? Login{" "}
            </Link>
          </div>
        </Form>{" "}
      </div>
    </Formik>
  );
}

export default CreateAccountForm;
