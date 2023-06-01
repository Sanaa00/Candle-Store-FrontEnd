import React from "react";
import { useGetProductsQuery } from "../features/api/productApi";
import Container from "../Component/Container";
import CandleCard from "../Component/CandleCard";
import emptyBag from "../images/EmptyBag.png";
import {
  useGetfavouriteQuery,
  useGetfavouritebyUserIdQuery,
} from "../features/api/favourite";
import { useSelector } from "react-redux";
function Favourite() {
  const { user } = useSelector((state) => state.user);
  const userId = user?._id;
  const { data: fav } = useGetfavouritebyUserIdQuery(userId) || [];
  console.log("fav list", fav);
  // cons
  // const { data: products } = useGetProductsQuery({
  //   search: "",
  //   category: "",
  //   page: null,
  // });
  // console.log(favourite);
  // const favItems = favourite?.data?.filter((item) => {
  //   return item.favourite === true;
  // });

  // console.log(fav);
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="min-h-screen pt-20">
          <p className="text-2xl font-semibold text-greeen py-5">Favourite</p>
          {fav?.data[0]?.products?.length === 0 ||
          !user ||
          fav?.data.length === 0 ? (
            <div className="flex justify-center items-center">
              <img
                alt="empty bag"
                src={emptyBag}
                className="lg:w-2/4 lg:h-fit object-cover"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-center ">
              {fav?.data[0]?.products?.map((candle) => {
                // console.log("candley ka narduma", candle);
                return <CandleCard candle={candle} key={candle._id} />;
              })}
            </div>
          )}{" "}
        </div>
      </Container>
    </div>
  );
}

export default Favourite;
