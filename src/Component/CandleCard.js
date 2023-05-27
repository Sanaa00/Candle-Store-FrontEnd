import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addtoFav, removeItemFav } from "../features/favouriteSlice";
import { useFavouriteMutation } from "../features/api/productApi";
// import { addtoFav } from "../features/favouriteSlice";

function CandleCard({ candle }) {
  const [favourite] = useFavouriteMutation();

  // const favoriteList = useSelector((state) => state.favourite);
  // const dispatch = useDispatch();
  // const isItemInFavorite =favoriteList?.some((favoriteItem) => favoriteItem._id === candle._id) || [];

  // console.log(candle);
  const handleAddFavourite = (candle) => {
    let addtoFav = candle.favourite;
    addtoFav = true;
    favourite({ ...candle, favourite: addtoFav });
  };
  const handleRemoveFavourite = (candle) => {
    let removetoFav = candle.favourite;
    removetoFav = false;
    favourite({ ...candle, favourite: removetoFav });
  };
  return (
    <div
      key={candle._id}
      className="hover:duration-500 duration-500 rounded hover:rounded m-2 flex relative"
    >
      {" "}
      <div className="absolute top-2 right-2 bg-gray-50 w-7 h-7 rounded-full flex justify-center items-center z-40">
        {candle.favourite === true ? (
          <button onClick={() => handleRemoveFavourite(candle)}>
            <AiFillHeart className="w-6 h-6 text-red-500" />
          </button>
        ) : (
          <button onClick={() => handleAddFavourite(candle)}>
            <AiOutlineHeart className="w-6 h-6 text-red-500" />
          </button>
        )}
      </div>{" "}
      <Link
        to={`/products/${candle._id}`}
        className="w-full h-full relative overflow-hidden z-0"
      >
        <div className="relative overflow-hidden">
          <img
            alt="candles"
            src={candle.images}
            className="w-full h-72 object-cover relative overflow-hidden rounded-sm hover:scale-110 hover:duration-500 duration-500 hover:ease-in-out z-10"
          />
        </div>
        <div className="pt-1 text-gray-800 w-full  duration-500 hover:duration-500 ">
          <div className="flex justify-between">
            <p className="font-semibold text-gray-800 text-lg">
              {candle?.productName?.length > 15
                ? candle?.productName?.slice(0, 15) + "..."
                : candle?.productName}
            </p>{" "}
            <p className=" text-greeen font-medium text-lg">{candle.price}$</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CandleCard;
