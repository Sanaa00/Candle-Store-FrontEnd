import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import Container from "./Container";
import LinkButton from "./LinkButton";
import { Link } from "react-router-dom";

function HomeSlideShow() {
  var settings = {
    // className="x",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  };

  return (
    <div className=" lg:pb-8">
      <Slider
        {...settings}
        className="w-full lg:h-screen bg-gray-50 grid grid-cols-1 "
      >
        <div className="w-full h-[500px] lg:h-screen flex justify-center items-center">
          <div className="justify-center items-center relative w-full">
            <img
              alt="candles"
              src="https://cdn.shopify.com/s/files/1/0315/2749/files/ALLISON_KUNATH_PR-22_1800x.jpg?v=1679503315"
              className="w-full h-[500px] lg:h-screen object-cover object-center opacity-50"
            />
            <Container>
              <div className="absolute top-24 md:top-36 lg:top-10 xl:top-44 2xl:top-1/3 left-0 text-gray-800  lg:py-32 2xl:py-10">
                <div className="flex flex-col justify-center items-center px-6 lg:px-80 ">
                  <p className="text-greeen text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl">
                    Illuminate Your Space with Our Candles
                  </p>
                  <p className=" text-gray-800 mt-5 lg:mt-10 font-bold  text-center">
                    We offer unique candles in various scents, sizes, and
                    shapes. Our store provides customized gift sets, and we also
                    create bespoke candles to perfectly suit your preferences.
                    Our candles are handcrafted with natural ingredients,
                    creating a premium product that transforms any space into a
                    haven of relaxation. Come and indulge in the soothing glow
                    of our one-of-a-kind candles!
                  </p>
                  <div className="mt-10 flex justify-between items-center">
                    {" "}
                    <LinkButton location="products" text="Shop Now" />
                    <Link
                      className="bg-gray-100 h-10 ml-5 px-10 flex justify-center items-center shadow  focus:bg-greeen rounded-sm hover:bg-greeen hover:text-gray-50 text-greeen focus:text-gray-50  hover:shadow-lg duration-500 hover:duration-500 text-sm font-semibold"
                      to="/Contact"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>{" "}
        <div className="w-full h-[500px] lg:h-screen flex justify-center items-center">
          <div className="justify-center items-center relative w-full">
            <img
              alt="candles"
              src="https://cdn.shopify.com/s/files/1/0236/6289/files/Hero_Lilac_AzulBrush_With_Bar_110421_2000x.jpg?v=1680192188"
              className="w-full h-[505px] lg:h-screen opacity-70 object-cover object-center"
            />
            <Container>
              <p className="absolute top-1/2  left-0 text-center   text-greeen font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-6 lg:px-40 xl:px-80">
                {/* <p className="text-greeen font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-80"> */}
                Transform Your Home into a Cozy Haven with Our Beautiful Candles
                {/* </p> */}
              </p>
            </Container>
          </div>
        </div>
        <div className="w-full h-[500px] lg:h-screen flex justify-center items-center">
          <div className="justify-center items-center relative w-full">
            <img
              alt="candles"
              src="https://cdn.shopify.com/s/files/1/0910/3062/files/Mar23-PastFavs-Banner_Desktop_1800x.jpg?v=1677557010"
              className="w-full h-[500px] lg:h-screen object-cover opacity-70 object-center"
            />
            <Container>
              <p className="absolute top-1/2 lg:top-1/2 left-0 flex justify-center items-center text-center text-greeen font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-6 lg:px-40 xl:px-80">
                Illuminate your space and senses with the warm glow and soothing
                fragrances of candles.
              </p>
            </Container>
          </div>
        </div>{" "}
      </Slider>
    </div>
  );
}

export default HomeSlideShow;
