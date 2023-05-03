import React, { useState } from "react";

function ProductImageSlider({ images }) {
  const [wordData, setWordData] = useState(images[0]);
  // console.log("images", images[0]);
  const handleClick = (i) => {
    // console.log(i);
    const wordSlider = images[i];
    setWordData(wordSlider);
  };
  // const settings = {
  //   customPaging: function (i) {
  //     return (
  //       <img alt="" src={images[i]} className="w-full h-full object-cover" />
  //     );
  //   },
  //   dots: true,
  //   dotsClass: "slick-dots custom-indicator",
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  // };
  return (
    <div className="h-[500px] ">
      <img src={wordData} alt="" className="w-full h-[400px] object-cover" />
      <div className="flex w-full justify-between">
        {images.map((data, i) => (
          <div className="mt-5 relative overflow-hidden" key={i}>
            <img
              alt=""
              className={
                (wordData[i] === i ? " " : "") +
                "w-[110px] h-[90px] object-cover hover:scale-110 duration-500 hover:duration-500 "
              }
              src={data}
              onClick={() => handleClick(i)}
            />
          </div>
        ))}
      </div>
      {/* <Slider {...settings}>
        {images.map((img) => {
          return (
            <div key={img}>
              <img
                className="px-1 w-full  h-[500px] md:w-[700px]  md:h-[600px] lg:w-[500px] lg:h-[400px] 2xl:w-full 2xl:h-[400px] xl:gap-10 object-cover"
                alt=""
                src={img}
              />
            </div>
          );
        })}
        <div></div>
      </Slider> */}
    </div>
  );
}

export default ProductImageSlider;
