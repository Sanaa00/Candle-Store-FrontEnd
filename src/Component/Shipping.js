import { Formik, useFormik, Form } from "formik";
import { Box, MenuItem, TextField } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useAddToCartMutation,
  useGetCartByUserIdQuery,
} from "../features/api/cart";

import * as Yup from "yup";
import InputField from "./InputField";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Shipping() {
  const [addToCart] = useAddToCartMutation();
  const { user } = useSelector((state) => state.user);
  const userId = user?._id;

  const { data: bag } = useGetCartByUserIdQuery(userId);
  const notify = () => toast("Orderd Successfully");
  const formik = useFormik({
    initialValues: {
      phone: "",
      city: "",
      street: "",
    },
    onSubmit: (values) => {
      addToCart({ address: values, status: "order" });
    },
    validationSchema: Yup.object({
      phone: Yup.string().required(),
      street: Yup.string().required("Fill Address"),
      city: Yup.string().required("fill City"),
    }),
  });

  if (bag?.data?.length === 0) return <Navigate to="/products" replace />;
  return (
    <div className="w-full">
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
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <span className="text-red-400 text-sm">
                  {formik.errors.phone}
                </span>
              ) : null}
            </div>
            <div className=" mt-5 w-full lg:w-80 xl:w-96">
              <Box width="full">
                <TextField
                  height=""
                  name="city"
                  id="city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  label="select country"
                  select
                  fullWidth
                >
                  <MenuItem value="hawler">Hawler</MenuItem>
                  <MenuItem value="selemany">Slemany</MenuItem>
                  <MenuItem value="duhok">Duhok</MenuItem>
                  <MenuItem value="halabja">Halabja</MenuItem>
                </TextField>
              </Box>
              {formik.touched.city && formik.errors.city ? (
                <span className="text-red-400 text-sm">
                  {formik.errors.city}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col">
              <InputField
                type="text"
                placeholder="street"
                name="street"
                id="street"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.street}
              />{" "}
              {formik.touched.street && formik.errors.street ? (
                <span className="text-red-400 text-sm">
                  {formik.errors.street}
                </span>
              ) : null}
            </div>
            <button
              onClick={notify}
              type="order"
              className="py-1.5 mt-5 w-full lg:w-80 xl:w-96 rounded-sm  bg-greeen text-center text-gray-100 hover:bg-darkgreen hover:duration-500 duration-500 hover:shadow-lg"
            >
              submit
            </button>{" "}
          </Form>{" "}
        </div>
      </Formik>
    </div>
  );
}

export default Shipping;
