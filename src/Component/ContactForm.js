import React from "react";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";

import InputField from "./InputField";
import Button from "./Button";
function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string().label("Name").required(),
      email: Yup.string().email().required(),
      message: Yup.string().min(50, "must add 50 characture").required(),
    }),
  });
  return (
    <Formik>
      <div>
        <Form className="grid grid-cols-1" onSubmit={formik.handleSubmit}>
          <InputField
            placeholder="Name"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <span className="text-red-400 text-sm">{formik.errors.name}</span>
          <InputField
            placeholder="Email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />{" "}
          <span className="text-red-400 text-sm">{formik.errors.email}</span>
          <div className="flex flex-col my-10">
            <textarea
              cols={20}
              rows={5}
              placeholder="Message"
              id="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              className="w-96 border-2 border-greeen focus:outline-none px-1 py-1"
            />{" "}
            <span className="text-red-400 text-sm">
              {formik.errors.message}
            </span>
          </div>
          <Button type="submit" text="Send" width={96} />
        </Form>
      </div>
    </Formik>
  );
}

export default ContactForm;
