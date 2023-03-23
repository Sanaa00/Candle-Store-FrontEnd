import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, addToFav } from "../features/candleSlice";
import Button from "./Button";
import Counter from "./Counter";
// import data from "../Data";
function ShoppingBagCard() {
  const data = useSelector((state) => state.candle.candle);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div>
      {data === [] ? (
        <p>your bag is empty</p>
      ) : (
        <div>
          {data.map((bag) => {
            return (
              <div key={bag.id}>
                <div key={bag.id} className="p-5 flex border-b-2 ">
                  <img
                    src={bag.url}
                    alt="shopping card"
                    className="w-40 h-32 object-cover mr-5"
                  />
                  <div className="flex flex-col justify-between items-center w-full p-1">
                    <div className="flex justify-between items-center w-full">
                      <p className="font-semibold text-greeen ">{bag.name}</p>
                      <div className="flex ">
                        <div onClick={() => dispatch(addToFav(bag))}>
                          {" "}
                          <AiOutlineHeart className="w-6 h-6 mr-5" />
                        </div>

                        <div onClick={() => dispatch(removeItem(bag.id))}>
                          {" "}
                          <TiDeleteOutline className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <Counter />
                      <p>{bag.price}$</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ShoppingBagCard;
