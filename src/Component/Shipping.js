import { Formik, useFormik, Form } from "formik";
import React from "react";
import { useAddToCartMutation, useGetCartQuery } from "../features/api/cart";
import { useGetAddressQuery } from "../features/api/address";
import * as Yup from "yup";
import InputField from "./InputField";

function Shipping() {
  const [addToCart] = useAddToCartMutation();
  const { data: address } = useGetAddressQuery();
  console.log("address table", address);
  const { data: bag } = useGetCartQuery();
  console.log("bag", bag);
  const formik = useFormik({
    initialValues: {
      phone: "",
      city: "",
      street: "",
    },
    onSubmit: (values) => {
      console.log({ values });
      addToCart({ address: values });
    },
    validationSchema: Yup.object({
      phone: Yup.string().required(),
      street: Yup.string().required("Fill Address"),
      city: Yup.string().required("fill City"),
    }),
  });
  return (
    <div className="">
      <Formik>
        <div className="w-full ">
          <Form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1  justify-between mb-10 w-full lg:w-full items-center"
          >
            <div className="flex flex-col">
              <InputField
                type="text"
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
                name="street"
                id="street"
                onChange={formik.handleChange}
                value={formik.values.street}
              />
              <span className="text-red-400 text-sm">
                {formik.errors.street}
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
