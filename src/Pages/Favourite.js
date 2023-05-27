import React from "react";
import { useGetProductsQuery } from "../features/api/productApi";
import Container from "../Component/Container";
import CandleCard from "../Component/CandleCard";
import emptyBag from "../images/EmptyBag.png";

function Favourite() {
  const { data: products } = useGetProductsQuery({
    search: "",
    category: "",
    page: null,
  });
  console.log(products);
  const favItems = products?.data?.products?.filter((item) => {
    return item.favourite === true;
  });

  console.log(favItems);
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="min-h-screen pt-20">
          <p className="text-2xl font-semibold text-greeen py-5">Favourite</p>
          {favItems?.length === 0 ? (
            <div className="flex justify-center items-center">
              <img
                alt="empty bag"
                src={emptyBag}
                className="lg:w-2/4 lg:h-fit object-cover"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-center ">
              {favItems?.map((candle) => {
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
