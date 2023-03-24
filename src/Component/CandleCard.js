import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";
import { addToCart, addToFav } from "../features/candleSlice";
import Button from "./Button";
function CandleCard({ candle }) {
  const dispatch = useDispatch();
  return (
    <div
      key={candle.id}
      className="hover:shadow-xl hover:duration-500 duration-500 m-2 "
    >
      <img
        alt="candles"
        src={candle.url}
        className="w-full h-52 object-cover"
      />
      <div className="p-2">
        <p className="font-semibold text-gray-800">{candle.name}</p>
        {/* <p className="font-semibold text-gray-800">{candle.name}</p> */}
        <StarRatings
          rating={candle.rating}
          changeRating={null}
          numberOfStars={5}
          starRatedColor={"#FDCC0D"}
          name="rating"
          className="grid grid-cols-5 w-6 h-6"
          starSpacing="1"
          starDimension="18"
        />

        <p className=" text-greeen mt-1">{candle.price}$</p>
        <div className="flex justify-between items-center mt-2">
          <Button text="Buy" onClick={() => dispatch(addToCart(candle))} />
          {candle.favourite === false ? (
            <div
              onClick={() => {
                dispatch(addToFav(candle));
              }}
            >
              <AiOutlineHeart className="w-6 h-6" />
            </div>
          ) : (
            <div
              onClick={() => {
                dispatch(addToFav(candle));
              }}
            >
              <AiFillHeart className="w-6 h-6 text-greeen" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CandleCard;
