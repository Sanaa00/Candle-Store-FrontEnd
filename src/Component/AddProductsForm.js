import { Formik, useFormik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import InputField from "./InputField";
import Button from "./Button";
import AddCategoryForm from "./AddCategoryForm";
import { useAddProductMutation } from "../features/api/productApi";
import { Box, MenuItem, TextField } from "@mui/material";
import { useGetCategoryQuery } from "../features/api/category";
import { useUploadMutation } from "../features/api/upload";
import { Slide, ToastContainer, toast } from "react-toastify";
function AddProductForm() {
  const [addproduct] = useAddProductMutation();
  const [upload, { data: uploadResponse }] = useUploadMutation();
  const { data: allcategory } = useGetCategoryQuery();
  const addProduct = () => toast("add product Successfully");
  const widthOfButton = () => {
    if (window.innerWidth < 640) {
      return "full";
    } else if (window.innerWidth < 768) {
      return "full";
    } else if (window.innerWidth < 1024) {
      return "full";
    } else if (window.innerWidth > 1024) {
      return "full";
    }
  };
  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      price: "",
      images: "",
      categoryId: "",
    },

    onSubmit: (values, { resetForm }) => {
      addproduct({ ...values, images: uploadResponse?.path });
      resetForm({ values: "" });
    },

    validationSchema: Yup.object({
      productName: Yup.string().label("product Name").required(),
      categoryId: Yup.string().label("categoryId").required(),
      description: Yup.string().label("description").required(),
      price: Yup.number().required(),
      images: Yup.mixed().required(),
    }),
    handleUpload: (e) => {
      upload(e.target.files);
    },
  });

  return (
    <div className="grid ml-10 xl:ml-0 grid-cols-1 xl:grid-cols-2 justify-between  xl:gap-44  text-gray-800">
      <div>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="light"
          transition={Slide}
          className="h-32"
        />
        <p className=" font-semibold">Add New Product</p>
        <Formik>
          <div className="w-full lg:w-fit">
            <Form
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-1 mb-10 w-full lg:w-fit">
              <InputField
                placeholder="Product Name"
                name="productName"
                id="productName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.productName}
              />
              {formik.touched.productName && formik.errors.productName && (
                <span className="text-red-400 text-sm">
                  {formik.errors.productName}
                </span>
              )}
              <InputField
                placeholder="Description"
                name="description"
                id="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              />
              {formik.touched.description && formik.errors.description && (
                <span className="text-red-400 text-sm">
                  {formik.errors.description}
                </span>
              )}
              <InputField
                type="number"
                placeholder="Price"
                name="price"
                id="price"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
              {formik.touched.price && formik.errors.price && (
                <span className="text-red-400 text-sm">
                  {formik.errors.price}
                </span>
              )}
              <InputField
                type="file"
                name="images"
                id="images"
                accept="image/*"
                onChange={(e) => {
                  formik.handleChange(e);
                  upload(e.target.files);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.images}
              />

              {formik.touched.images && formik.errors.images && (
                <span className="text-red-400 text-sm">
                  {formik.errors.images}
                </span>
              )}
              <div className=" mt-5 w-full lg:w-80 xl:w-96">
                <Box width="full">
                  <TextField
                    height=""
                    name="categoryId"
                    id="categoryId"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.categoryId}
                    label="category"
                    select
                    fullWidth>
                    {" "}
                    {allcategory?.data?.map((category) => {
                      return (
                        <MenuItem value={`${category?._id}`} key={category._id}>
                          {category?.category}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                </Box>
                {formik.touched.categoryId && formik.errors.categoryId ? (
                  <span className="text-red-400 text-sm">
                    {formik.errors.categoryId}
                  </span>
                ) : null}
              </div>
              <div className="mt-5 flex flex-col justify-center items-center">
                <Button
                  text="Add"
                  width={widthOfButton()}
                  type="submit"
                  onClick={addProduct}
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
