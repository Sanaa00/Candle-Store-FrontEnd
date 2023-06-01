import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
import { useFavouriteMutation } from "../features/api/productApi";
import {
  useAddfavouriteMutation,
  useDeleteFavouriteMutation,
  useGetfavouritebyUserIdQuery,
} from "../features/api/favourite";
import { useSelector } from "react-redux";
function CandleCard({ candle, checkFav }) {
  const { user } = useSelector((state) => state.user);
  const userId = user?._id;
  const { data: fav } = useGetfavouritebyUserIdQuery(userId);
  const favId = fav?.data[0]?._id;
  console.log("checkfav", checkFav?.productId?._id);
  console.log(candle._id);
  const [addfavourite, favIsError, favIsLoading] = useAddfavouriteMutation();
  const [deleteFavourite] = useDeleteFavouriteMutation();
  const handleAddFavourite = (candle) => {
    addfavourite({ productId: candle._id });
  };
  const handleRemoveFavourite = (candle) => {
    let productId = candle?.productId?._id;
    deleteFavourite({ productId: productId, favId: favId });
  };
  // if (isError) return <p>{error.status}</p>;

  if (favIsError && favIsError?.error?.originalStatus === 401)
    return (
      <>
        <Navigate to="/createAcount" replace />
      </>
    );
  return (
    <div
      key={candle?.productId?._id || candle._id}
      className="hover:duration-500 duration-500 rounded hover:rounded m-2 flex relative"
    >
      <div className="absolute top-2 right-2 bg-gray-50 w-7 h-7 rounded-full flex justify-center items-center z-40">
        {candle?.productId?.favourite === true ? (
          <button onClick={() => handleRemoveFavourite(candle)}>
            <AiFillHeart className="w-6 h-6 text-red-500" />
          </button>
        ) : candle?._id === checkFav?.productId?._id ? (
          <button onClick={() => handleRemoveFavourite(candle)}>
            {console.log("candle._id", candle._id)}
            {console.log("fav._id", checkFav?.productId?._id)}
            <AiFillHeart className="w-6 h-6 text-red-500" />
          </button>
        ) : (
          <button onClick={() => handleAddFavourite(candle)}>
            {" "}
            {console.log("candle._id", candle._id)}
            {console.log("fav._id", checkFav?.productId?._id)}
            <AiOutlineHeart className="w-6 h-6 text-red-500" />
          </button>
        )}
        {/* {checkFav?.productId?._id === candle?._id ||
        candle?.productId?._id === true ? (
          checkFav === true ? (
            <button onClick={() => handleRemoveFavourite(candle)}>
              <AiFillHeart className="w-6 h-6 text-red-500" />
            </button>
          ) : (
            <button onClick={() => handleAddFavourite(candle)}>
              <AiOutlineHeart className="w-6 h-6 text-red-500" />
            </button>
          )
        ) : (
          <button onClick={() => handleAddFavourite(candle)}>
            <AiOutlineHeart className="w-6 h-6 text-red-500" />
          </button>
        )} */}
      </div>
      <Link
        to={`/products/${candle?.productId?._id || candle._id}`}
        className="w-full h-full relative overflow-hidden z-0"
      >
        <div className="relative overflow-hidden">
          <img
            alt="candles"
            src={candle?.productId?.images || candle.images}
            className="w-full h-72 object-cover relative overflow-hidden rounded-sm hover:scale-110 hover:duration-500 duration-500 hover:ease-in-out z-10"
          />
        </div>
        <div className="pt-1 text-gray-800 w-full  duration-500 hover:duration-500 ">
          <div className="flex justify-between">
            <p className="font-semibold text-gray-800 text-lg">
              {candle?.productId?.productName ||
              candle?.productName?.length > 15
                ? candle?.productId?.productName?.slice(0, 15) ||
                  candle?.productName?.slice(0, 15) + "..."
                : candle?.productId?.productName || candle?.productName}
            </p>{" "}
            <p className=" text-greeen font-medium text-lg">
              {candle?.productId?.price || candle.price}$
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CandleCard;
