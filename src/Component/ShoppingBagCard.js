import React from "react";
import { SlClose } from "react-icons/sl";
import { BarLoader } from "react-spinners";
import {
  useGetCartQuery,
  useDeleteFromCartMutation,
  useQuantityChangeMutation,
  useGetCartByUserIdQuery,
} from "../features/api/cart";
import { useSelector } from "react-redux";
import Counter from "./Counter";

function ShoppingBagCard() {
  const { user } = useSelector((state) => state.user);
  const userId = user?._id;

  const { data: cart } = useGetCartQuery();
  const {
    data: cartByUser,
    cartByUserisLoading,
    cartByUserisError,
    cartByUsererror,
  } = useGetCartByUserIdQuery(userId);

  const cartId = cart?.data[0]?._id;

  const [quantityChange] = useQuantityChangeMutation();
  const [deleteFromCart] = useDeleteFromCartMutation();

  const deleteFromCartHandle = (bag) => {
    const productId = bag;
    deleteFromCart({ productId: productId, cartId: cartId });
  };

  const incrementQuantityHandler = (item) => {
    let productId = item.productId._id;
    let quantity = item.quantity + 1;
    quantityChange({ cartId, productId, quantity });
    return quantity;
  };

  const decrementQuantityHandler = (item) => {
    let productId = item.productId._id;
    let quantity = item.quantity - 1;
    if (quantity <= 1) {
      quantity = 1;
    }
    quantityChange({ cartId, productId, quantity });
    return quantity;
  };

  if (cartByUserisLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <BarLoader color="#316C57" height={5} width={200} />
      </div>
    );
  if (cartByUserisError) return <p>{cartByUsererror.status}</p>;
  return (
    <div>
      {cartByUser?.data[0]?.products?.map((bag, i) => {
        return (
          <div key={bag?.productId?._id}>
            <div className="p-2 lg:p-5 flex border-b-2 ">
              <div className="w-52 h-40">
                {" "}
                <img
                  src={bag?.productId?.images[0]}
                  alt="shopping card"
                  className="w-40 h-40 object-cover rounded-sm object-center mr-1 lg:mr-5"
                />
              </div>

              <div className="flex flex-col justify-between items-center w-full p-1 ml-5">
                <div className="flex justify-between items-center w-full">
                  <p className="font-semibold text-greeen ">
                    {bag?.productId?.productName}
                  </p>
                  <div className="flex ">
                    <button
                      onClick={() => deleteFromCartHandle(bag?.productId?._id)}
                    >
                      <SlClose className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <Counter
                    data={bag}
                    increment={() => incrementQuantityHandler(bag)}
                    decrement={() => decrementQuantityHandler(bag)}
                  />
                  <p>{bag?.productId?.price}$ </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingBagCard;
