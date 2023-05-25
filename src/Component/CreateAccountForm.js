import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik, Form, useFormik } from "formik";
import { useSignupMutation } from "../features/api/auth";
import * as Yup from "yup";
import InputField from "./InputField";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/user.slice";
import { ClipLoader } from "react-spinners";
import { Slide, ToastContainer } from "react-toastify";

function CreateAccountForm() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [signup, { data: response, isError, error, isLoading }] =
    useSignupMutation();

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
    }
  }, [dispatch, isError, response]);
  if (user) return <Navigate to="/" replace />;

  return (
    <Formik>
      <div className="w-full lg:w-fit">
        {/* <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="light"
          transition={Slide}
          className="h-32"
        /> */}
        <Form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 mb-10 w-full lg:w-fit"
        >
          <InputField
            placeholder="First Name"
            name="firstName"
            id="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && formik.touched.firstName && (
            <span className="text-red-400 text-sm">
              {formik.errors.firstName}
            </span>
          )}
          <InputField
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <span className="text-red-400 text-sm">
              {formik.errors.lastName}
            </span>
          )}
          <InputField
            placeholder="Email"
            name="email"
            id="email"
            error={formik.touched.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            // onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-400 text-sm">{formik.errors.email}</span>
          )}
          {error && error?.data?.data?.message.startsWith("E11000") && (
            <span className="text-red-400 text-sm">
              This user already exists
            </span>
          )}
          <InputField
            placeholder="Password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <span className="text-red-400 text-sm">
              {formik.errors.password}
            </span>
          ) : null}
          <InputField
            placeholder="Confirm Password"
            name="confirmpasssword"
            id="confirmpasssword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmpasssword}
          />
          {formik.touched.confirmpasssword && formik.errors.confirmpasssword ? (
            <span className="text-red-400 text-sm">
              {formik.errors.confirmpasssword}
            </span>
          ) : null}
          <div className="mt-5 flex flex-col justify-center items-center">
            <Button
              // text="Create"
              text={
                !isLoading ? (
                  "Create"
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
              width={widthOfButton()}
              type="submit"
            />
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
