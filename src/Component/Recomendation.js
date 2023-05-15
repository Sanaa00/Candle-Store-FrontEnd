import React, { useRef } from "react";
// import Slider from "react-slick";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useGetProductsByCategoryQuery } from "../features/api/productApi";
import CandleCard from "./CandleCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
// import { Pagination } from "swiper";
function Recomendation({ singleProduct }) {
  const productCategoryId = singleProduct.data.categoryId._id;
  console.log(productCategoryId);
  const sliderRef = useRef(null);
  console.log(sliderRef);

  const { data: category } = useGetProductsByCategoryQuery(productCategoryId);
  console.log("recommendations", category?.data?.products);

  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   vertical: false,
  // };
  return (
    <div className="flex flex-col my-10">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-greeen my-5">
          Recommendation
        </p>
        <div className="flex">
          <div
            className="mr-5"
            onClick={() => sliderRef?.current?.sliderPrev()}
          >
            <BsArrowLeftCircle className="w-6 h-6 text-gray-800" />
          </div>
          <div
            className=""
            onClick={() => sliderRef.current.Swiper.allowSlideNext(true)}
          >
            <BsArrowRightCircle className="w-6 h-6 text-gray-800" />
          </div>
        </div>
      </div>{" "}
      <Swiper
        ref={sliderRef}
        slidesPerView={3}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="w-full"
      >
        {" "}
        {category?.data?.products?.map(
          (candle) => (
            <SwiperSlide key={candle._id}>
              {" "}
              <CandleCard key={candle._id} candle={candle} />{" "}
            </SwiperSlide>
          )
          //
        )}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      {/* <Slider ref={sliderRef} {...settings} className=" ">
        {category?.data?.products?.map(
          (candle) => (
            <CandleCard key={candle._id} candle={candle} />
          )
          //
        )}
      </Slider> */}
    </div>
  );
}

export default Recomendation;
