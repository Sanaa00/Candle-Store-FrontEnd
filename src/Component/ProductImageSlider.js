import React, { useState } from "react";

function ProductImageSlider({ images }) {
  const [wordData, setWordData] = useState(images[0]);
  const handleClick = (i) => {
    const wordSlider = images[i];
    setWordData(wordSlider);
  };
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
    </div>
  );
}

export default ProductImageSlider;
