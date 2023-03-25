import React from "react";
import Container from "./Container";

function AboutSection() {
  return (
    <div className="bg-greeen bg-opacity-10">
      <Container>
        <div className="pt-5 lg:pt-0 grid grid-cols-1 lg:grid-cols-2 justify-between items-center min-h-screen ">
          <div className="grid grid-rows-2 gap-y-5 justify-center items-center">
            <img
              className=" w-96 h-80 object-cover"
              alt="candle"
              src="https://images.unsplash.com/photo-1608181831696-1f21b6e6e5e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
            <img
              className="w-96 h-80 object-cover"
              alt="candle"
              src="https://images.unsplash.com/photo-1608181831696-1f21b6e6e5e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
          </div>
          <div className="p-5   flex flex-col items-center">
            <p className=" text-lg md:text-2xl lg:text-3xl font-semibold text-greeen">
              About Our Store
            </p>
            <p className="md:text-lg xl:text-xl text-justify flex leading-8 mt-5 lg:px-10 text-gray-800">
              Welcome to our candle store, where creativity meets candles. We
              offer a wide variety of candles in different shapes, sizes, and
              scents that are carefully crafted and prepared to light up your
              day. Our store also provides a unique gift service, where we
              prepare personalized gift sets that perfectly suit your needs.
              Moreover, we offer custom-made candles, allowing you to create
              your perfect scent and packaging. We use high-quality materials
              and natural ingredients to create a premium product that will
              transform any space into a relaxing haven. Come visit our candle
              store, where you can indulge in the soothing glow and personal
              experience of our bespoke candles.
            </p>
          </div>{" "}
        </div>
      </Container>
    </div>
  );
}

export default AboutSection;
