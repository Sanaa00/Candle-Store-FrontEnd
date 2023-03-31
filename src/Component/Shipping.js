import { Formik, useFormik, Form } from "formik";
import React from "react";
// import Container from "./Container";
// import ShippingDetail from "./ShippingDetail";
import * as Yup from "yup";
import InputField from "./InputField";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import Payment from "./Payment";
// import { Link } from "react-router-dom";
// import SeconderButton from "./SeconderButton";
// import { Form } from "antd";
function Shipping() {
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
      <Payment />
      <Formik>
        <div className="w-full lg:w-fit">
          <Form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 mb-10 w-full lg:w-fit"
          >
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
            <InputField
              type="number"
              placeholder="Phone.no"
              name="phone"
              id="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <span className="text-red-400 text-sm">{formik.errors.phone}</span>
            <InputField
              type="text"
              placeholder="Address"
              name="address"
              id="address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            <span className="text-red-400 text-sm">
              {formik.errors.address}
            </span>
            <select
              placeholder="City"
              name="city"
              id="city"
              onChange={formik.handleChange}
              value={formik.values.city}
              className="w-full lg:w-80 xl:w-96 border-2 border-greeen focus:outline-none mt-10 px-1 py-1"
            >
              <option>Erbil</option>
              <option>Sulaymaniah</option>
              <option>Duhok</option>
              <option>Halabja</option>
            </select>{" "}
            <span className="text-red-400 text-sm">{formik.errors.city}</span>
            <NavLink to="/payment">
              {" "}
              <div className="mt-10 w-full">
                <Button
                  text="Countinue"
                  width={widthOfButton()}
                  type="submit"
                />
              </div>
            </NavLink>
          </Form>{" "}
        </div>
      </Formik>
    </div>
  );
}

export default Shipping;
