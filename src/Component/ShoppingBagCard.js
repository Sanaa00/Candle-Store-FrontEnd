import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/candleSlice";
import { addtoFav } from "../features/favouriteSlice";
// import { useDeletFromCartMutation } from "../features/api/cart";
import EmptyBag from "../images/EmptyBag.png";
import Counter from "./Counter";
// import data from "../Data";
function ShoppingBagCard() {
  const data = useSelector((state) => state.candle.candle);
  // const [deleteCart] = useDeletFromCartMutation();
  // const fav = useSelector((state) => state.fa.fav);
  // const dispatch = useDispatch();
  // console.log(data);
  const deletHandler = (id) => {
    // deleteCart(id);
  };
  return (
    <div>
      {data === [] ? (
        <div className="flex">
          <img src={EmptyBag} alt="" className="w-full h-96" />
        </div>
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
                        <div
                        // onClick={() => dispatch(addtoFav(bag))}
                        >
                          {" "}
                          <AiOutlineHeart className="w-6 h-6 mr-1 sm:mr-5 text-gray-700" />
                        </div>

                        <div onClick={() => deletHandler(bag.id)}>
                          {" "}
                          <TiDeleteOutline className="w-6 h-6 text-gray-700" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <Counter data={bag} />
                      <p>{bag.price * bag.quantity}$ </p>
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
