import { Formik, useFormik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import InputField from "./InputField";
import Button from "./Button";

function AddProductForm() {
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
      productName: "",
      description: "",
      price: 0,
      image: "",
      category: "",
    },
    onSubmit: (values) => {
      //  setFormData(values);
      // addUser(values);
      console.log("add product", values);
    },

    validationSchema: Yup.object({
      productName: Yup.string().label("product Name").required(),

      category: Yup.string().label("category").required(),

      description: Yup.string().label("description").required(),
      price: Yup.number().required(),
      image: Yup.number().required(),
    }),
  });

  return (
    <div className="flex flex-col text-gray-800">
      <p className=" font-semibold">Add New Product</p>
      <Formik>
        <div className="w-full lg:w-fit">
          <Form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 mb-10 w-full lg:w-fit"
          >
            <InputField
              placeholder="Product Name"
              name="productName"
              id="productName"
              onChange={formik.handleChange}
              value={formik.values.productName}
            />
            <span className="text-red-400 text-sm">
              {formik.errors.productName}
            </span>
            <InputField
              placeholder="Description"
              name="description"
              id="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            <span className="text-red-400 text-sm">
              {formik.errors.description}
            </span>
            <InputField
              type="number"
              placeholder="Price"
              name="price"
              id="price"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
            <span className="text-red-400 text-sm">{formik.errors.price}</span>

            <InputField
              type="text"
              placeholder="Category"
              name="category"
              id="category"
              onChange={formik.handleChange}
              value={formik.values.category}
            />
            <span className="text-red-400 text-sm">
              {formik.errors.category}
            </span>
            {/* <input type="file" id="file-input" name="ImageStyle" /> */}
            <InputField
              type="file"
              placeholder="upload image "
              name="image"
              id="image"
              onChang={formik.handleChange}
              value={formik.values.image}
            />

            <span className="text-red-400 text-sm">{formik.errors.image}</span>

            <div className="mt-5 flex flex-col justify-center items-center">
              <Button
                text="Add"
                width={widthOfButton()}
                type="submit"
                // onClick={() => addUserHandler()}
              />{" "}
            </div>
          </Form>{" "}
        </div>
      </Formik>
    </div>
  );
}

export default AddProductForm;
