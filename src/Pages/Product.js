import React from "react";

import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { ClipLoader } from "react-spinners";

import {
  useGetProductByIdQuery,
  useProductQuantityChangeMutation,
} from "../features/api/productApi";
import { useAddToCartMutation, useGetCartQuery } from "../features/api/cart";

import Recomendation from "../Component/Recomendation";
import RadioButtons from "../Component/RadioButtons";
import Review from "../Component/Review";
import ItemsColor from "../Component/ItemsColor";
import Button from "../Component/Button";
import Container from "../Component/Container";
import Counter from "../Component/Counter";

function Product() {
  const { id } = useParams();
  console.log(id);
  const [addToCart, { isLoadingg }] = useAddToCartMutation();
  const [productQuantityChange] = useProductQuantityChangeMutation();
  const { data: cart } = useGetCartQuery();
  console.log("item inside cart", cart);
  const {
    data: singleProduct,
    isLoading,
    error,
    isError,
  } = useGetProductByIdQuery(parseInt(id));

  console.log("singleproduct", singleProduct);
  console.log("function", addToCart);

  const addToCartHandle = (singleProduct) => {
    addToCart(singleProduct);
  };

  const widthOfButton = () => {
    if (window.innerWidth < 640) {
      return "full";
    } else if (window.innerWidth < 768) {
      return "full";
    } else if (window.innerWidth < 1024) {
      return "full";
    } else {
      return "96";
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
        {singleProduct ? (
          <div
            key={singleProduct.id}
            className="grid lg:grid-cols-2 lg:gap-10 justify-center  lg:justify-between pt-5 mt-10"
          >
            {" "}
            <img
              className="w-fit h-fit md:w-[700px]  md:h-[600px] lg:w-[500px] lg:h-[400px] 2xl:w-full 2xl:h-[450px] xl:gap-10 object-cover"
              alt="product"
              src={singleProduct.url}
            />
            <div className="text-gray-800 flex flex-col justify-between p-2 lg:p-0  mt-5 lg:mt-0 2xl:pl-2">
              <div className=" ">
                <p className="font-semibold text-2xl">
                  {singleProduct.name}
                  {id}
                </p>
                <p className="bg-gray-100 py-1 px-5 text-greeen rounded-sm w-fit mt-5 font-semibold">
                  {singleProduct.category}
                </p>
              </div>
              <p className="">candle description here</p>
              <div className="">
                <ItemsColor />
              </div>
              <RadioButtons props={singleProduct} />

              <div className="flex justify-between items-center sm:w-96">
                <p className=" font-semibold text-greeen text-lg">
                  {singleProduct.price}.00 $
                </p>
                <Counter data={singleProduct} />
              </div>

              <div className="flex justify-between items-center">
                {" "}
                <Button
                  onClick={() => addToCartHandle(singleProduct)}
                  text={
                    !isLoadingg ? (
                      "Add to cart"
                    ) : (
                      <div className="flex justify-center items-center">
                        <ClipLoader
                          color="#F8FAFC"
                          size={20}
                          speedMultiplier={0.5}
                        />
                      </div>
                    )
                  }
                  width={widthOfButton()}
                />
              </div>
            </div>
          </div>
        ) : null}

        <Recomendation />
        <Review />
      </Container>
    </div>
  );
}

export default Product;
