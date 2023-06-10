import React from "react";
import Container from "./Container";
import { BarLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import ProductImageSlider from "./ProductImageSlider";
import Colors from "./Colors";
import Button from "./Button";

import {
  useGetProductByIdQuery,
  useDiscountToProductMutation,
} from "../features/api/productApi";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
function ReviewForProducts() {
  const { _id } = useParams();
  const {
    data: singleProduct,
    isLoading,
    error,
    isError,
  } = useGetProductByIdQuery(_id);

  const [discountToProduct] = useDiscountToProductMutation();
  console.log("single product", singleProduct);

  const formik = useFormik({
    initialValues: {
      discount: 0,
    },
    onSubmit: (values) => {
      console.log(values);
      discountToProduct({ id: singleProduct.data._id, discount: values });
    },

    validationSchema: Yup.object({
      discount: Yup.number().label("discount").required(),
    }),
  });
  const widthOfButton = () => {
    if (window.innerWidth < 640) {
      return "full";
    } else if (window.innerWidth < 768) {
      return "full";
    } else if (window.innerWidth < 1024) {
      return "full";
    } else {
      return "full";
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <BarLoader color="#316C57" height={5} width={200} />
      </div>
    );
  if (isError) return <p>{error.status}</p>;

  return (
    <div className="bg-gray-50 pt-10">
      <Container>
        {singleProduct.data ? (
          <div
            key={singleProduct._id}
            className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 justify-center  lg:justify-between pt-5 mt-10"
          >
            <ProductImageSlider images={singleProduct.data.images} />
            <div className="text-gray-800 flex flex-col justify-between p-2 lg:p-0  mt-20 sm:mt-28 md:mt-52 lg:mt-0 2xl:pl-2">
              <div className=" ">
                <div className="flex flex-row items-center">
                  {" "}
                  <p className="font-semibold text-2xl">
                    {singleProduct.data.productName}
                  </p>
                  {singleProduct.data.review.length !== 0 && (
                    <p className="text-gray-400 text-sm ml-2">
                      ({singleProduct.data.review.length})
                    </p>
                  )}
                </div>

                <p className="bg-gray-100 py-1 px-5 text-greeen rounded-sm w-fit mt-5 font-semibold">
                  {singleProduct?.data.categoryId.category}
                </p>
              </div>
              <p className="mt-2 lg:mt-0">{singleProduct.data.description}</p>
              <div className="mt-2 lg:mt-0">
                <Colors colors={singleProduct.data.color} />
              </div>
              <div className="mt-2 lg:mt-0 flex justify-between items-center sm:w-96 lg:w-full">
                <div className="flex justify-between w-32 ">
                  {" "}
                  <p className="text-lg font-medium txet-gray-800 ">Price :</p>
                  {singleProduct?.data?.discount !== 0 && (
                    <p className=" text-greeen font-medium text-lg">
                      {singleProduct?.data?.discount}$
                    </p>
                  )}{" "}
                  <p
                    className={`${
                      singleProduct?.data?.discount !== 0
                        ? "text-gray-600  font-medium line-through text-lg ml-3"
                        : "text-greeen font-medium text-lg ml-3"
                    }  `}
                  >
                    {singleProduct?.data?.price}$
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="py-5">
          <p className="text-2xl font-semibold text-greeen pt-5">Discount</p>{" "}
          <Formik>
            <div className="w-full lg:w-fit">
              <Form
                onSubmit={formik.handleSubmit}
                className="grid grid-cols-1 mb-10 w-full lg:w-fit"
              >
                <InputField
                  placeholder="New Price"
                  name="discount"
                  id="discount"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.discount}
                />
                {formik.touched.discount && formik.errors.discount && (
                  <span className="text-red-400 text-sm">
                    {formik.errors.discount}
                  </span>
                )}{" "}
                <div className="mt-5 flex flex-col justify-center items-center">
                  <Button
                    text="Discount"
                    width={widthOfButton()}
                    type="submit"
                  />{" "}
                </div>
              </Form>{" "}
            </div>
          </Formik>
          <p className="text-2xl font-semibold text-greeen py-5">Reviews</p>
          <div>
            {singleProduct?.data?.review.length === 0 ? (
              <p className="p-2 bg-greeen text-gray-800 bg-opacity-10 border-b border-gray-100">
                No review yet
              </p>
            ) : (
              singleProduct?.data?.review?.map((review) => {
                return (
                  <div key={review._id} className="bg-greeen bg-opacity-10">
                    <p className="p-2  border-b border-gray-50">
                      {review.message}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ReviewForProducts;
