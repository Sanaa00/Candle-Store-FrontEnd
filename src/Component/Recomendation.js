import React, { useRef } from "react";

import { useGetProductsByCategoryQuery } from "../features/api/productApi";
import CandleCard from "./CandleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function Recomendation({ singleProduct }) {
  const productCategoryId = singleProduct.data.categoryId._id;

  const sliderRef = useRef(null);

  const { data: category } = useGetProductsByCategoryQuery(productCategoryId);

  return (
    <div className="flex flex-col my-10">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-greeen my-5">
          Recommendation
        </p>
      </div>{" "}
      <Swiper
        ref={sliderRef}
        slidesPerView={3}
        spaceBetween={30}
        className="w-full"
      >
        {" "}
        {category?.data?.products?.map((candle) => (
          <SwiperSlide key={candle._id}>
            {" "}
            <CandleCard key={candle._id} candle={candle} />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Recomendation;
