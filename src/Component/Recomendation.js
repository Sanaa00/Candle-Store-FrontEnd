import React, { useRef } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import data from "../Data";
import CandleCard from "./CandleCard";
function Recomendation() {
  const sliderRef = useRef(null);
  console.log(sliderRef.current);
  const itemPerPage = () => {
    if (window.innerWidth < 640) {
      return 2;
    } else if (window.innerWidth < 768) {
      return 3;
    } else if (window.innerWidth < 1280) {
      return 4;
    } else {
      return 5;
    }
  };

  return (
    <div className="flex flex-col my-10">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-greeen my-5">
          Recommendation
        </p>
        <div className="flex">
          <div className="mr-5" onClick={() => sliderRef.current.goBack()}>
            <BsArrowLeftCircle className="w-6 h-6 text-gray-800" />
          </div>
          <div className="" onClick={() => sliderRef.current.goNext()}>
            <BsArrowRightCircle className="w-6 h-6 text-gray-800" />
          </div>
        </div>
      </div>

      <Slide
        className=""
        ref={sliderRef}
        autoplay={false}
        slidesToScroll={1}
        canSwipe={true}
        slidesToShow={itemPerPage()}
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
