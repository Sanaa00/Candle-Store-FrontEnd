import React from "react";
import { Formik, useFormik, Form } from "formik";

import * as Yup from "yup";
import InputField from "./InputField";
import Button from "./Button";
function AddCategoryForm() {
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
      category: "",
    },
    onSubmit: (values) => {},

    validationSchema: Yup.object({
      productName: Yup.string().label("category").required(),
    }),
  });

  return (
    <div>
      <p className=" font-semibold">Add New category</p>
      <Formik>
        <div className="w-full lg:w-fit">
          <Form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 mb-10 w-full lg:w-fit"
          >
            <InputField
              placeholder="Category"
              name="category"
              id="category"
              onChange={formik.handleChange}
              value={formik.values.category}
            />
            <span className="text-red-400 text-sm">
              {formik.errors.category}
            </span>

            <div className="mt-5 flex flex-col justify-center items-center">
              <Button text="Add" width={widthOfButton()} type="submit" />
            </div>
          </Form>{" "}
        </div>
      </Formik>
    </div>
  );
}

export default AddCategoryForm;
