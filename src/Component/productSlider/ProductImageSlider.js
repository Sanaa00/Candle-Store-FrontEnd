import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
function ProductImageSlider({ images }) {
  const settings = {
    customPaging: function (i, index) {
      console.log(images);
      return (
        <img alt="" src={images[i]} className="w-full h-full object-cover" />
      );
    },
    dots: true,
    dotsClass: "slick-dots custom-indicator",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="h-[400px]">
      <Slider {...settings}>
        {images.map((img) => {
          return (
            <div>
              <img
                className="px-1 w-fit h-fit md:w-[700px]  md:h-[600px] lg:w-[500px] lg:h-[400px] 2xl:w-full 2xl:h-[300px] xl:gap-10 object-cover"
                alt=""
                src={img}
              />
            </div>
          );
        })}
        <div></div>
      </Slider>
    </div>
  );
}

export default ProductImageSlider;
