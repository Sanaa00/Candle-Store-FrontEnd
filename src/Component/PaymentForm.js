import React from "react";
import InputField from "./InputField";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
function PaymentForm() {
  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      cardHolderName: "",
      expiration: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string().label("cardNumber").required(),
      cardHolderName: Yup.string().label("cardHolderName").required(),
      expiration: Yup.string().label("expiration").required(),
    }),
  });
  return (
    <div>
      {" "}
      <Formik>
        <div className="w-full lg:w-fit">
          <Form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 mb-10 w-full lg:w-fit"
          >
            <InputField
              name="cardNumber"
              placeholder="Card Number"
              value=""
              onChange={() => {}}
              id="cardNumber"
            />{" "}
            <span className="text-red-400 text-sm">
              {formik.errors.cardNumber}
            </span>
            <InputField
              name="cardHolderName"
              placeholder="cardHolder name"
              value=""
              onChange={() => {}}
              id="cardHolderName"
            />{" "}
            <span className="text-red-400 text-sm">
              {formik.errors.cardHolderName}
            </span>
            <InputField
              name="expiration"
              placeholder="Expiration"
              value=""
              id="expiration"
              onChange={() => {}}
            />{" "}
            <span className="text-red-400 text-sm">
              {formik.errors.expiration}
            </span>
            <button
              type="submit"
              className="py-1 mt-5 w-full lg:w-80 xl:w-96  rounded-sm  bg-greeen text-center text-gray-100 hover:bg-darkgreen hover:duration-500 duration-500 hover:shadow-lg"
            >
              Confirm
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
}

export default PaymentForm;
