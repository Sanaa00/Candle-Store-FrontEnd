import React, { useEffect, useState } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";

import { Formik, Form, useFormik } from "formik";
import { useSignupMutation } from "../features/api/auth";

import * as Yup from "yup";

import InputField from "./InputField";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/user.slice";

function CreateAccountForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState();

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [signup, { data: response, isError }] = useSignupMutation();

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
    signup(formData);
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpasssword: "",
    },
    onSubmit: (values) => {
      signup(values);
      console.log("form values", values);
    },

    validationSchema: Yup.object({
      firstName: Yup.string().label("First Name").required(),
      lastName: Yup.string().label("Last Name").required(),
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
  useEffect(() => {
    if (!isError && response) {
      localStorage.setItem("access_token", response?.data.token);
      dispatch(addUser(response.data.user));
      // navigate("/");
    }
  }, [response]);
  if (user) return <Navigate to="/" replace />;

  return (
    <Formik>
      <div className="w-full lg:w-fit">
        <Form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 mb-10 w-full lg:w-fit"
        >
          <InputField
            placeholder="First Name"
            name="firstName"
            id="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <span className="text-red-400 text-sm">
            {formik.errors.firstName}
          </span>
          <InputField
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <span className="text-red-400 text-sm">{formik.errors.lastName}</span>
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
            <Button text="Create" width={widthOfButton()} type="submit" />
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
