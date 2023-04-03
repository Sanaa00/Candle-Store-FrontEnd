import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../Component/Button";
import Container from "../Component/Container";
import Counter from "../Component/Counter";
import { useGetProductByIdQuery } from "../features/api/api";
import { BarLoader } from "react-spinners";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../features/candleSlice";
// import { useAddToCartMutation, useProductsQuery } from "../features/api/cart";
// import { RadioGroup, RadioButton } from "react-radio-buttons";
// import products from "../Data";
import Recomendation from "../Component/Recomendation";
import RadioButtons from "../Component/RadioButtons";
import Review from "../Component/Review";
import ItemsColor from "../Component/ItemsColor";
function Product() {
  const { id } = useParams();
  console.log(id);
  // const { data: products } = useGetProductsQuery();
  // const [review, setReview] = useState("");
  // const [candles, setCandles] = useState({});
  const {
    data: singleProduct,
    isLoading,
    error,
    isError,
  } = useGetProductByIdQuery(parseInt(id));
  // const quantity = useSelector((state) => state.candle.candle);
  // const [addToCart] = useAddToCartMutation();
  // const addToCartHandle = () => {
  // addToCart({});
  //  itemInCart = state.candle.find(
  //   (item) => item.id === action.payload.id
  // )
  // if (itemInCart) {
  //   itemInCart.quantity++;
  // } else {
  //   state.candle.push({ ...action.payload, quantity: 1 });
  // })
  // };
  // const dispatch = useDispatch();
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
  // const reviewHandler = (e) => {
  //   setReview(e.target.value);
  //   console.log(review);
  // };
  // useEffect(() => {
  //   for (const d of products) {
  //     if (d.id.toString() === id) {
  //       setCandles(d);
  //     }
  //   }
  // }, []);
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <BarLoader color="#316C57" height={5} width={200} />
      </div>
    );
  if (isError) return <p>{error.status}</p>;
  return (
    <div className="bg-gray-50">
      <Container>
        {singleProduct ? (
          <div
            key={singleProduct?.id}
            className="grid lg:grid-cols-2 lg:gap-10 justify-center  lg:justify-between items-center pt-5"
          >
            {" "}
            <img
              className="w-fit h-fit md:w-[700px]  md:h-[600px] lg:w-[500px] lg:h-[400px] 2xl:w-full 2xl:h-[500px] xl:gap-10 object-cover"
              alt="product"
              src={singleProduct?.url}
            />
            <div className="text-gray-800 flex flex-col justify-between p-2 lg:p-0  mt-5 lg:mt-0 2xl:pl-2">
              <div className=" ">
                <p className="font-semibold text-2xl">
                  {singleProduct?.name}
                  {id}
                </p>
                <p className="text-greeen mt-2 mb-1">
                  {singleProduct?.category}
                </p>
              </div>
              <p className="my-5">candle description here</p>
              <div className="mb-2">
                <ItemsColor />
              </div>
              <RadioButtons props={singleProduct} />

              <div className="flex justify-between items-center sm:w-96">
                <p className="my-5 font-semibold text-greeen">
                  {singleProduct?.price}.00 $
                </p>
                <Counter data={singleProduct} />
              </div>

              <div className="flex justify-between items-center">
                {" "}
                <Button text="Add to cart" width={widthOfButton()} />
              </div>
            </div>
          </div>
        ) : null}

        <Recomendation />
        <div className="grid lg:grid-cols-2 gap-10 justify-between py-10">
          <p className="m-0 text-gray-800  text-lg lg:text-base p-2 lg:p-0 lg:w-full">
            We hope you are enjoying using our product. We value your opinion
            and would love to hear your feedback on the product. Your feedback
            is extremely important to us as it helps us improve our product and
            provide better service to our customers.
          </p>
          <Review />
        </div>

        {/* <div className="border-greeen border-2 my-5">
        <span className="my-4 px-4 w-full">Your Feedback</span>
        <textarea
          cols={20}
          rows={5}
          // placeholder="Message"
          id="message"
          name="message"
          onChange={reviewHandler}
          className="w-full lg:w-full xl:w-full border-none focus:outline-none px-4 py-1"
        />
        <Button type="submit" text="Send" width="full" />
      </div> */}

        {/* <span>review</span> */}
        {/* </textarea> */}
      </Container>
    </div>
  );
}

export default Product;
