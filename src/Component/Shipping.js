import { Formik, useFormik, Form } from "formik";
import React from "react";

import * as Yup from "yup";
import InputField from "./InputField";

function Shipping() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      password: "",
      confirmpasssword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstname: Yup.string().label("First Name").required(),
      lastname: Yup.string().label("Last Name").required(),
      phone: Yup.number().required(),
      address: Yup.string().required("Fill Address"),
      city: Yup.string().required("fill City"),
    }),
  });
  return (
    <div className="">
      {/* <Payment /> */}
      <Formik>
        <div className="w-full ">
          <Form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 justify-between mb-10 w-full lg:w-full items-center"
          >
            <div className="flex flex-col">
              <InputField
                type="text"
                placeholder="First Name"
                name="firstname"
                id="firstname"
                onChange={formik.handleChange}
                value={formik.values.firstname}
              />
              <span className="text-red-400 text-sm">
                {formik.errors.firstname}
              </span>
            </div>
            <div className="flex flex-col">
              <InputField
                type="text"
                placeholder="Last Name"
                name="lastname"
                id="lastname"
                onChange={formik.handleChange}
                value={formik.values.lastname}
              />
              <span className="text-red-400 text-sm">
                {formik.errors.lastname}
              </span>
            </div>
            <div className="flex flex-col">
              <InputField
                type="number"
                placeholder="Phone.no"
                name="phone"
                id="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              <span className="text-red-400 text-sm">
                {formik.errors.phone}
              </span>
            </div>
            <div className="flex flex-col bg-gray-50">
              <select
                placeholder="City"
                name="city"
                id="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                className="w-full lg:w-80 xl:w-96 border-2 text-gray-400 focus:text-gray-800 bg-gray-50 border-gray-200 focus:border-greeen focus:outline-none mt-5 px-1 py-1"
              >
                <option>Erbil</option>
                <option>Sulaymaniah</option>
                <option>Duhok</option>
                <option>Halabja</option>
              </select>{" "}
              <span className="text-red-400 text-sm">{formik.errors.city}</span>
            </div>
            <div className="flex flex-col">
              <InputField
                type="text"
                placeholder="street"
                name="address"
                id="address"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
              <span className="text-red-400 text-sm">
                {formik.errors.address}
              </span>
            </div>

            <button
              type="submit"
              className="py-1.5 mt-5 w-full lg:w-80 xl:w-96 rounded-sm  bg-greeen text-center text-gray-100 hover:bg-darkgreen hover:duration-500 duration-500 hover:shadow-lg"
            >
              submit
            </button>
          </Form>{" "}
        </div>
      </Formik>
    </div>
  );
}

export default Shipping;
