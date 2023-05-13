import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addtoFav, removeItemFav } from "../features/favouriteSlice";

// import {
//   useDeleteFromFavMutation,
//   useAddToFavMutation,
//   useToggleFavMutation,
//   useGetFavouriteQuery,
// } from "../features/api/favourite";

function CandleCard({ candle }) {
  const favoriteList = useSelector((state) => state.favourite);
  console.log(favoriteList);
  const dispatch = useDispatch();
  const isItemInFavorite = favoriteList.some(
    (favoriteItem) => favoriteItem._id === candle._id
  );
  // const [addToFav] = useAddToFavMutation();
  // const [deleteFromFav] = useDeleteFromFavMutation();
  // const [toggleFav] = useToggleFavMutation();
  // const { fav } = useGetFavouriteQuery();
  // const addToFavHandler = (item) => {
  //   toggleFav({ ...item, favourite: !item.favourite });
  //   addToFav(item);
  // };

  // const deleteFromFavHandler = (item) => {
  //   toggleFav({ ...item, favourite: !item.favourite });
  //   deleteFromFav(item);
  // };
  // const isItemInFavorite = favoriteList.some(
  //   (favoriteItem) => favoriteItem.id === item.id
  // );
  // if (isItemInFavorite) {
  //   dispatch(removeFromFavorite(item));
  // } else {
  //   dispatch(addToFavorite(item));
  // }
  return (
    <div
      key={candle._id}
      className="hover:duration-500 duration-500 rounded hover:rounded m-2 flex relative"
    >
      {" "}
      <div className="absolute top-2 right-2 bg-gray-50 w-7 h-7 rounded-full flex justify-center items-center z-50">
        {isItemInFavorite ? (
          <button onClick={() => dispatch(removeItemFav(candle))}>
            <AiFillHeart className="w-6 h-6 text-red-500" />
          </button>
        ) : (
          <button onClick={() => dispatch(addtoFav(candle))}>
            <AiOutlineHeart className="w-6 h-6 text-red-500" />
          </button>
        )}
      </div>{" "}
      <Link
        to={`/products/${candle._id}`}
        className="w-full h-full relative overflow-hidden z-0"
      >
        <div className="">
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
