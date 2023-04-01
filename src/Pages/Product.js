import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../Component/Button";
import Container from "../Component/Container";
import Counter from "../Component/Counter";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../features/candleSlice";
import { useAddToCartMutation, useProductsQuery } from "../features/api/cart";
// import { RadioGroup, RadioButton } from "react-radio-buttons";
import products from "../Data";
import Recomendation from "../Component/Recomendation";
import RadioButtons from "../Component/RadioButtons";
import Review from "../Component/Review";
import ItemsColor from "../Component/ItemsColor";
function Product() {
  const { id } = useParams();
  // const { data: products } = useGetProductsQuery();
  // const [review, setReview] = useState("");
  const [candles, setCandles] = useState({});
  // const quantity = useSelector((state) => state.candle.candle);
  // const [addToCart] = useAddToCartMutation();
  const addToCartHandle = () => {
    // addToCart({});
    //  itemInCart = state.candle.find(
    //   (item) => item.id === action.payload.id
    // )
    // if (itemInCart) {
    //   itemInCart.quantity++;
    // } else {
    //   state.candle.push({ ...action.payload, quantity: 1 });
    // })
  };
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
  useEffect(() => {
    for (const d of products) {
      if (d.id.toString() === id) {
        setCandles(d);
      }
    }
  }, []);
  return (
    <Container>
      <div
        key={candles.id}
        className="grid grid-cols-2 gap-10 justify-between items-center mt-5"
      >
        {" "}
        <img
          className="w-[500px]  h-[500px] xl:gap-10 object-cover"
          alt="product"
          src={candles.url}
        />
        <div className="text-gray-800 flex flex-col justify-between">
          <div className=" ">
            <p className="font-semibold text-2xl">
              {candles.name}
              {id}
            </p>
            <p className="text-greeen mt-2 mb-1">{candles.category}</p>
          </div>
          <p className="my-5">candle description here</p>
          <div className="mb-2">
            <ItemsColor />
          </div>
          <RadioButtons props={candles} />
          {/* <div className="mb-5">Colors here</div> */}
          <div className="flex justify-between items-center w-96">
            <p className="my-5 font-semibold text-greeen">
              {candles.price}.00 $
            </p>
            <Counter data={candles} />
          </div>

          <div className="flex justify-between items-center">
            {" "}
            <Button
              text="Buy"
              width={widthOfButton()}
              // onClick={() => addToCartHandle(candles)}
            />
            {/* <Counter data={quantity} /> */}
          </div>
        </div>
      </div>
      {/* {candles.map((candle) => {
        return (
         
        );
      })} */}
      <Recomendation />
      <div className="grid grid-cols-2 gap-10  justify-between  my-10">
        <p className="m-0 text-gray-800  text-lg">
          We hope you are enjoying using our product. We value your opinion and
          would love to hear your feedback on the product. Your feedback is
          extremely important to us as it helps us improve our product and
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
  );
}

export default Product;
