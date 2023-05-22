import React from "react";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import {
  useAddContactMutation,
  useGetContactQuery,
} from "../features/api/contact";
import InputField from "./InputField";
import Button from "./Button";

function ContactForm() {
  const [addContact] = useAddContactMutation();
  const { data: contact } = useGetContactQuery();

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

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      addContact(values);
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
          <div className="flex flex-col my-5 ">
            <textarea
              cols={20}
              rows={5}
              placeholder="Message"
              id="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              className="w-full lg:w-80 xl:w-96 border-2 rounded-sm resize-none border-gray-200 bg-gray-50 focus:border-greeen focus:outline-none px-1 py-1"
            />{" "}
            <span className="text-red-400 text-sm bottom-full">
              {formik.errors.message}
            </span>
          </div>
          <Button type="submit" text="Send" width={widthOfButton()} />
        </Form>
      </div>
    </Formik>
  );
}

export default ContactForm;
