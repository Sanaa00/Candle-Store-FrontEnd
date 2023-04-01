import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
// import { addToCart } from "../features/candleSlice";
// import LinkButton from "./LinkButton";
import { addtoFav, removeItemFav } from "../features/favouriteSlice";
// import Button from "./Button";
function CandleCard({ candle }) {
  // const dispatch = useDispatch();
  const fav = useSelector((state) => state.favourite.fav);
  console.log("fav data", fav);
  // const fav = useSelector((state) => state.candle.fav);
  // console.log(fav);
  // const [clickedFav, setClickedFav] = useState(false);
  return (
    <div
      // to={`/product/${candle.id}`}
      key={candle.id}
      className="hover:shadow-lg hover:duration-500 duration-500 rounded-sm m-2 border"
    >
      {/* <Link to={`/product/${candle.id}`}> */}
      <div className="relative">
        <img
          alt="candles"
          src={candle.url}
          className="w-full h-52 object-cover relative"
        />
        <div className="absolute top-2 right-2">
          {fav === false ? (
            <button onClick={() => addtoFav(candle)}>
              {" "}
              <AiOutlineHeart className="w-6 h-6 text-red-500" />
            </button>
          ) : (
            <button onClick={() => removeItemFav(candle)}>
              {" "}
              <AiFillHeart className="w-6 h-6 text-red-500" />
            </button>
          )}
        </div>{" "}
      </div>
      {/*        
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                dispatch(removeItemFav(candle.id));
              }}
            >
              <AiFillHeart className="w-6 h-6 text-greeen" />
            </div>
      {/*        
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                dispatch(removeItemFav(candle.id));
              }}
            >
              <AiFillHeart className="w-6 h-6 text-greeen" />
            </div>
      {/* <div className="flex justify-center items-center transition-opacity ease-in-out duration-500 absolute bg-black/20">
        <Link
          to={`/product/${candle.id}`}
          className="py-1 px-10 bg-transparent border-white border-2 absolute top-0 left-0"
        >
          view
        </Link>
      </div> */}
      {/* </Link> */}
      <Link to={`/product/${candle.id}`}>
        <div className="w-full h-full p-2">
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
          {/* <Link to={`/product/${candle.id}`}>view</Link> */}{" "}
          <p className=" text-greeen mt-1 font-semibold">{candle.price}$</p>
          {/* <LinkButton to={`/product/${candle.id}`} text="Buy" /> */}
          {/* <Button
            text="Buy"
            onClick={() => dispatch(addToCart(candle))}
            px="10"
          /> */}
          {/* <AiFillHeart
            onClick={() => {
              dispatch(addtoFav(candle));
            }}
          /> */}
          {/* ////favourite */}
          {/* <div>
          {fav === false ? (
            <AiOutlineHeart
              className="w-6 h-6"
              onClick={() => {
                dispatch(addtoFav(candle));
              }}
            />
          ) : (
            <AiFillHeart
              onClick={() => removeItemFav(candle)}
              className="w-6 h-6"
            />
          )}
        </div> */}
          {/*        
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                dispatch(removeItemFav(candle.id));
              }}
            >
              <AiFillHeart className="w-6 h-6 text-greeen" />
            </div>
  */}
          {/* (
            <div
              onClick={() => {
                dispatch(addToFav(candle));
              }}
            >
              <AiFillHeart className="w-6 h-6 text-greeen" />
            </div>
          ) */}
        </div>
      </Link>
    </div>
  );
}

export default CandleCard;
