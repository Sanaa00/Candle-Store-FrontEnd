import React, { useState } from "react";

import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";

import InputField from "./InputField";
import Button from "./Button";
import { useGetCurrentUserQuery, useLoginMutation } from "../features/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { addUser } from "../features/user.slice";
import { ClipLoader } from "react-spinners";
function LoginForm() {
  const dispatch = useDispatch();
  const [token, setToken] = useState();
  const { user } = useSelector((state) => state.user);
  const [
    login,
    { data: loginData, isError: loginDataIsError, isLoading: loginIsLoading },
  ] = useLoginMutation();

  const { data: userData, isError: userDataIsError } = useGetCurrentUserQuery(
    token,
    { skip: !token }
  );

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
      login(values);
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
  });

  useEffect(() => {
    if (!loginDataIsError && loginData) {
      localStorage.setItem("access_token", loginData?.token);
      setToken(loginData?.token);
    }
  }, [loginData, loginDataIsError]);
  useEffect(() => {
    if (!userDataIsError && userData) {
      dispatch(addUser(userData.data.user));
    }
  }, [dispatch, userData, userDataIsError]);

  if (user) return <Navigate to="/" replace />;

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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="text-red-400 text-sm">{formik.errors.email}</span>
          ) : null}

          <InputField
            name="password"
            placeholder="Password"
            id="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <span className="text-red-400 text-sm">
              {formik.errors.password}
            </span>
          ) : null}

          <div className="mt-5">
            {" "}
            <Button
              text={
                !loginIsLoading ? (
                  "Login"
                ) : (
                  <div className="flex justify-center items-center">
                    <ClipLoader
                      color="#F8FAFC"
                      size={20}
                      speedMultiplier={0.5}
                    />
                  </div>
                )
              }
              type="submit"
              px={widthOfButton()}
            />
          </div>
        </Form>
      </div>
    </Formik>
  );
}

export default LoginForm;
