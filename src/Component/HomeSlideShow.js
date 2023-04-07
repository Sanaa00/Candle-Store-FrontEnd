import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import Container from "./Container";
import LinkButton from "./LinkButton";
import Home from "../images/homeShow.jpeg";
import { Link } from "react-router-dom";

function HomeSlideShow() {
  var settings = {
    // className="x",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 5000,
    arrows: false,
  };
  const images = [
    {
      url: "https://images.unsplash.com/photo-1643122966676-29e8597257f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "Illuminate Your Space with Our High-Quality Candles",
    },
    {
      url: "https://images.unsplash.com/photo-1602607203559-d38903b80507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      text: "Find Your Perfect Scent: Explore Our Wide Range of Candle Fragrances",
    },
    {
      url: "https://images.unsplash.com/photo-1601479604588-68d9e6d386b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2013&q=80",
      text: "Transform Your Home into a Cozy Haven with Our Beautiful Candles",
    },
  ];
  return (
    <div className=" pb-8">
      <Slider
        {...settings}
        className="w-full h-screen bg-gray-50 grid grid-cols-1"
      >
        <div className="w-full h-screen flex justify-center items-center">
          <div className="justify-center items-center relative w-full">
            <img
              alt="candles"
              src={Home}
              className="w-full object-cover object-center"
            />
            <Container>
              <p className="absolute top-36 left-0 text-gray-800  py-32">
                <div className="flex flex-col justify-center items-center px-80 ">
                  <p className="text-greeen font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    Illuminate Your Space with Our Candles
                  </p>
                  <p className=" text-gray-800 mt-10  text-center">
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
              </p>
            </Container>
          </div>
        </div>{" "}
        <div className="w-full h-screen flex justify-center items-center">
          <div className="justify-center items-center relative w-full">
            <img
              alt="candles"
              src={Home}
              className="w-full object-cover object-center"
            />
            <Container>
              <p className="absolute top-36 left-0 text-center  py-32 text-greeen font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-80">
                {/* <p className="text-greeen font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-80"> */}
                Transform Your Home into a Cozy Haven with Our Beautiful Candles
                {/* </p> */}
              </p>
            </Container>
          </div>
          {/* <div className="justify-center items-center relative w-full">
            <img
              alt="candles"
              src="https://images.unsplash.com/photo-1601479604588-68d9e6d386b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2013&q=80"
              className="w-full object-cover object-center"
            />
            <Container>
              <p className="absolute top-36 left-0 text-center  py-32 text-greeen font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-80">
                Light Up Your Life
              </p>
            </Container>
          </div> */}
        </div>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="justify-center items-center relative w-full">
            <img
              alt="candles"
              src="https://images.unsplash.com/photo-1602607203559-d38903b80507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              className="w-full object-cover object-center"
            />
            <Container>
              <p className="absolute top-36 left-0 text-center  py-32 text-greeen font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-80">
                Light Up Your Life
              </p>
            </Container>
          </div>
        </div>{" "}
      </Slider>
    </div>
  );
}

export default HomeSlideShow;
