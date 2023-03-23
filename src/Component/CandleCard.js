import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import StarRatings from "react-star-ratings";
import Button from "./Button";
function CandleCard({ candle }) {
  return (
    <div
      key={candle.id}
      className="hover:shadow-xl hover:duration-500 duration-500 "
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
          <Button text="Buy" />
          {/* <button className="px-10 py-1 bg-greeen text-center text-gray-100">
                    Buy
                  </button> */}
          {candle.favourite === false ? (
            <AiOutlineHeart className="w-6 h-6" />
          ) : (
            <AiFillHeart className="w-6 h-6 text-greeen" />
          )}
        </div>
      </div>
    </div>
  );
}

export default CandleCard;
