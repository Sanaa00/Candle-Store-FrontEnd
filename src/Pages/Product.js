import React from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { useGetProductByIdQuery } from "../features/api/productApi";
import { useAddToCartMutation } from "../features/api/cart";
import Recomendation from "../Component/Recomendation";
import Review from "../Component/Review";
import Button from "../Component/Button";
import Container from "../Component/Container";
import Colors from "../Component/Colors";
import ProductImageSlider from "../Component/ProductImageSlider";
import { ToastContainer } from "react-toastify";

function Product() {
  const { _id } = useParams();

  // const { data: cart } = useGetCartQuery();
  const [addToCart] = useAddToCartMutation();

  const {
    data: singleProduct,
    isLoading,
    error,
    isError,
  } = useGetProductByIdQuery(_id);

  const addToCartHandle = (singleProduct) => {
    addToCart({ productId: singleProduct.data._id });
  };

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Container>
        {singleProduct.data ? (
          <div
            key={singleProduct._id}
            className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 justify-center  lg:justify-between pt-5 mt-10"
          >
            <ProductImageSlider images={singleProduct.data.images} />
            <div className="text-gray-800 flex flex-col justify-between p-2 lg:p-0  mt-20 sm:mt-28 md:mt-52 lg:mt-0 2xl:pl-2">
              <div className=" ">
                <p className="font-semibold text-2xl">
                  {singleProduct.data.productName}
                </p>
                <p className="bg-gray-100 py-1 px-5 text-greeen rounded-sm w-fit mt-5 font-semibold">
                  {singleProduct?.data.categoryId.category}
                </p>
              </div>
              <p className="mt-2 lg:mt-0">{singleProduct.data.description}</p>
              <div className="mt-2 lg:mt-0">
                <Colors colors={singleProduct.data.color} />
              </div>
              <div className="mt-2 lg:mt-0 flex justify-between items-center sm:w-96 lg:w-full">
                <p className=" font-semibold text-greeen text-lg">
                  {singleProduct.data.price}.00 $
                </p>
              </div>
              {console.log(singleProduct.data._id)}
              <div className="mt-2 lg:mt-0 flex justify-between items-center w-full">
                {" "}
                <Button
                  onClick={() => addToCartHandle(singleProduct)}
                  text="add to cart"
                  // text={
                  //   !isLoadingg ? (
                  //     "Add to cart"
                  //   ) : (
                  //     <div className="flex justify-center items-center">
                  //       <ClipLoader
                  //         color="#F8FAFC"
                  //         size={20}
                  //         speedMultiplier={0.5}
                  //       />
                  //     </div>
                  //   )
                  // }
                  width={widthOfButton()}
                />
              </div>
            </div>
          </div>
        ) : null}

        <Recomendation singleProduct={singleProduct} />
        <Review id={_id} />
      </Container>
    </div>
  );
}

export default Product;
