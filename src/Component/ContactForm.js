import React from "react";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import { useAddContactMutation } from "../features/api/contact";
import InputField from "./InputField";
import Button from "./Button";

import { toast } from "react-toastify";

function ContactForm() {
  const [addContact] = useAddContactMutation();

  const widthOfButton = () => {
    if (window.innerWidth < 640) {
      return "full";
    } else if (window.innerWidth < 768) {
      return "full";
    } else if (window.innerWidth < 1024) {
      return "full";
    } else if (window.innerWidth < 1280) {
      return 80;
    } else {
      return 96;
    }
  };
  const contactMessage = () => toast("Message send Successfully");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      addContact(values);
      resetForm({ values: "" });
    },
    validationSchema: Yup.object({
      name: Yup.string().label("Name").required(),
      email: Yup.string().email().required(),
      message: Yup.string().min(50, "must add 50 characture").required(),
    }),
  });

  return (
    <Formik>
      <div className="flex justify-center w-full lg:w-fit">
        <Form
          className="grid grid-cols-1 w-full lg:w-fit"
          onSubmit={formik.handleSubmit}
        >
          <InputField
            placeholder="Name"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <span className="text-red-400 text-sm">{formik.errors.name}</span>
          )}
          <InputField
            placeholder="Email"
            name="email"
            id="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />{" "}
          {formik.errors.email && formik.touched.email && (
            <span className="text-red-400 text-sm">{formik.errors.email}</span>
          )}
          <div className="flex flex-col my-5 ">
            <textarea
              cols={20}
              rows={5}
              placeholder="Message"
              id="message"
              name="message"
              value={formik.values.message}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="pl-3 w-full lg:w-80 xl:w-96 border-2 rounded-sm resize-none border-gray-300 bg-gray-50 focus:border-greeen focus:outline-none px-1 py-1"
            />{" "}
            {formik.errors.message && formik.touched.message && (
              <span className="text-red-400 text-sm">
                {formik.errors.message}
              </span>
            )}
          </div>
          <Button
            type="submit"
            text="Send"
            width={widthOfButton()}
            onClick={contactMessage}
          />
        </Form>
      </div>
    </Formik>
  );
}

export default ContactForm;
