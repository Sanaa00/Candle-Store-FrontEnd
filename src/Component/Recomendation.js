import React, { useRef } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { useSelector } from "react-redux";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import data from "../Data";
import CandleCard from "./CandleCard";
function Recomendation() {
  // const data = useSelector((state) => state.candle.candle);
  const sliderRef = useRef(null);
  console.log(sliderRef.current);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-greeen my-5">
          Recommendation
        </p>
        <div className="flex">
          <div className="mr-5" onClick={() => sliderRef.current.goBack()}>
            <HiArrowNarrowLeft className="w-6 h-6" />
          </div>
          <div className="" onClick={() => sliderRef.current.goNext()}>
            <HiArrowNarrowRight className="w-6 h-6" />
          </div>
        </div>
      </div>

      <Slide
        ref={sliderRef}
        autoplay={false}
        slidesToScroll={2}
        canSwipe={true}
        slidesToShow={5}
        arrows={false}
        cssClass=""
      >
        {data.map((candle) => (
          <CandleCard candle={candle} key={candle.id} />
        ))}
      </Slide>
    </div>
  );
}

export default Recomendation;
