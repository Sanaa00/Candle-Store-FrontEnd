import React from "react";

function AboutSection() {
  return (
    <div className="bg-gray-50 pt-10">
      <div className=" lg:pt-0 grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <img
          className="w-full h-[500px]  object-cover"
          alt="candle"
          src="https://cdn.shopify.com/s/files/1/0315/2749/files/K9A3398_6269420c-2c2b-4f05-a648-7c68f6aa9b2f.jpg?v=1678129986"
        />
        <div className="px-36 flex flex-col items-center">
          <p className=" text-lg md:text-2xl lg:text-3xl font-semibold text-greeen">
            About Our Store
          </p>
          <p className="md:text-lg  flex leading-8 mt-5 lg:px-10 text-gray-800">
            At our candle store, we believe that candles are more than just a
            source of light. They are a form of self-expression, a way to set
            the mood, and an invitation to relax and unwind. That's why we offer
            a wide selection of candles that cater to every need and preference.
            Whether you're looking for a classic scent or something more exotic,
            we have it all. From fruity to floral, spicy to woody, our candles
            are carefully crafted to deliver an enchanting sensory experience.
            We also offer unique candle accessories that enhance the ambiance
            and beauty of our candles, ensuring that you get the most out of
            your purchase.
          </p>
        </div>{" "}
      </div>
      <div className="lg:pt-0 grid grid-cols-1 lg:grid-cols-2 justify-between  items-center">
        <div className="px-36 flex flex-col items-center">
          <p className="md:text-lg  flex leading-8 mt-5 lg:px-10 text-gray-800">
            Our candle store is committed to sustainability and environmental
            responsibility. We believe that our planet's health is crucial, and
            we strive to make a positive impact in our community and beyond.
            That's why we offer a range of eco-friendly candles that are made
            from renewable resources and biodegradable materials. Our products
            are packaged in recyclable materials, and we ensure that our
            manufacturing processes are as green as possible. By choosing our
            candles, you're not only enhancing your home's ambiance, but you're
            also supporting a business that cares about the planet.
          </p>
        </div>{" "}
        <img
          className="w-full h-[500px] object-cover"
          alt="candle"
          src="https://images.unsplash.com/photo-1503926359680-9ddd5b2bcbdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        />
      </div>
    </div>
  );
}

export default AboutSection;
