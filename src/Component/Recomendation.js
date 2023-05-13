import React, { useRef } from "react";
import Slider from "react-slick";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useGetProductsByCategoryQuery } from "../features/api/productApi";
import CandleCard from "./CandleCard";

function Recomendation({ singleProduct }) {
  const productCategoryId = singleProduct.data.categoryId._id;
  console.log(productCategoryId);
  const sliderRef = useRef(null);

  const { data: category } = useGetProductsByCategoryQuery(productCategoryId);
  console.log("recommendations", category?.data?.products);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // arrows: true,
    vertical: false,
    // prevArrow: "<",
    // nextArrow: ">",
  };
  return (
    <div className="flex flex-col my-10">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-greeen my-5">
          Recommendation
        </p>
        <div className="flex">
          <div className="mr-5" onClick={() => sliderRef.current.slickPrev()}>
            <BsArrowLeftCircle className="w-6 h-6 text-gray-800" />
          </div>
          <div className="" onClick={() => sliderRef.current.slickNext()}>
            <BsArrowRightCircle className="w-6 h-6 text-gray-800" />
          </div>
        </div>
      </div>{" "}
      <Slider {...settings} className=" ">
        {category?.data?.products?.map((candle) => {
          return <div>{candle._id}</div>;
          //  <CandleCard key={candle._id} candle={candle} />;
        })}
      </Slider>
    </div>
  );
}

export default Recomendation;
