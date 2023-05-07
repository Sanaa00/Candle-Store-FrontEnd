import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

import {
  useDeleteFromFavMutation,
  useAddToFavMutation,
  useToggleFavMutation,
  useGetFavouriteQuery,
} from "../features/api/favourite";

function CandleCard({ candle }) {
  const [addToFav] = useAddToFavMutation();
  const [deleteFromFav] = useDeleteFromFavMutation();
  const [toggleFav] = useToggleFavMutation();
  const { fav } = useGetFavouriteQuery();
  const addToFavHandler = (item) => {
    toggleFav({ ...item, favourite: !item.favourite });
    addToFav(item);
  };

  const deleteFromFavHandler = (item) => {
    toggleFav({ ...item, favourite: !item.favourite });
    deleteFromFav(item);
  };

  return (
    <div
      key={candle._id}
      className="hover:duration-500 duration-500 rounded hover:rounded m-2 "
    >
      {" "}
      <Link to={`/products/${candle._id}`} className="w-full h-full">
        <div className="relative overflow-hidden">
          <img
            alt="candles"
            src={candle.images}
            className="w-full h-72 object-cover relative overflow-hidden rounded-sm hover:scale-110 hover:duration-500 duration-500 hover:ease-in-out z-10"
          />
          <div className="absolute top-2 right-2 bg-gray-50 w-7 h-7 rounded-full flex justify-center items-center z-40">
            {candle.favourite === false ? (
              <button onClick={() => addToFavHandler(fav)}>
                {" "}
                <AiOutlineHeart className="w-6 h-6 text-red-500" />
              </button>
            ) : (
              <button onClick={() => deleteFromFavHandler(fav)}>
                {" "}
                <AiFillHeart className="w-6 h-6 text-red-500" />
              </button>
            )}
          </div>{" "}
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
