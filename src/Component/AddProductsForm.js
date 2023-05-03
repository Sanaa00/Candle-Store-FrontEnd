import { Formik, useFormik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import InputField from "./InputField";
import Button from "./Button";
import AddCategoryForm from "./AddCategoryForm";
import { useGetCategoryQuery } from "../features/api/category";

function AddProductForm() {
  const { data: category } = useGetCategoryQuery();
  console.log(category.data);
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
      price: "",
      images: "",
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
      images: Yup.mixed().required("required"),
    }),
  });

  return (
    <div className="grid grid-cols-2 justify-between gap-44  text-gray-800">
      <div>
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
              <span className="text-red-400 text-sm">
                {formik.errors.price}
              </span>

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
                // placeholder="upload image "
                name="images"
                id="images"
                onChange={formik.handleChange}
                // onChang={(e) => formik.setFieldValue("image", e.target.files[0])}
                value={formik.values.images}
              />

              <span className="text-red-400 text-sm">
                {formik.errors.images}
              </span>
              <select
                name="category"
                id="category"
                className="w-full lg:w-80 xl:w-96 border-2 rounded-sm border-gray-200 focus:outline-none focus:border-greeen bg-gray-50 mt-5 px-1 py-1"
              >
                {category.data.map((one) => {
                  return (
                    <option className="w-full lg:w-80 xl:w-96 border-2 rounded-sm border-gray-200 focus:outline-none hover:bg-greeen bg-gray-50 mt-5 px-1 py-1">
                      {one.category}
                    </option>
                  );
                })}
                {/* <option
                  className="w-full lg:w-80 xl:w-96 border-2 rounded-sm border-gray-200 focus:outline-none hover:bg-greeen bg-gray-50 mt-5 px-1 py-1"
                  value="volvo"
                >
                  Volvo
                </option> */}
              </select>
              {/* <select
                name="category"
                placeholder="category"
                className="w-full lg:w-80 xl:w-96 border-2 rounded-sm border-gray-200 focus:outline-none focus:border-greeen bg-gray-50 mt-5 px-1 py-1"
              > */}
              {/* <button className="w-full lg:w-80 xl:w-96 border-2 rounded-sm border-gray-200 focus:outline-none focus:border-greeen bg-gray-50 mt-5 px-1 py-1">
                  option1
                </button>
              </select> */}
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
      <div>
        <AddCategoryForm />
      </div>
    </div>
  );
}

export default AddProductForm;
