import React from "react";
import Container from "./Container";
import LinkButton from "./LinkButton";
function HomeSectionOne() {
  return (
    <div>
      <Container>
        {/* <img src={homebg} alt="" className="z-0 h-96 bottom-0 relative" /> */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 justify-between items-center `}
        >
          {/* <div className="flex flex-col justify-between items-start self-end"> */}
          <div className="p-5 grid items-center">
            <p className="text-greeen font-semibold text-lg sm:text-xl md:text-5xl z-0">
              Our candles are more than just a scent, theyre a personalized
              experience.
            </p>
            <p className="md:text-xl text-gray-800 mt-10 ">
              We offer unique candles in various scents, sizes, and shapes. Our
              store provides customized gift sets, and we also create bespoke
              candles to perfectly suit your preferences. Our candles are
              handcrafted with natural ingredients, creating a premium product
              that transforms any space into a haven of relaxation. Come and
              indulge in the soothing glow of our one-of-a-kind candles!
              {/* "Experience unique candles and customized gifts at our store.
          Handcrafted with natural ingredients to transform any space into a
          haven of relaxation." */}
            </p>
            <div className="mt-10">
              {" "}
              <LinkButton location="products" text="Shop Now" />
              {/* <Link
                to="/products"
                className="bg-greeen px-10 py-1 text-gray-100 hover:bg-darkgreen hover:duration-500 duration-500 hover:shadow-lg"
              >
                Shop Now{" "}
              </Link> */}
            </div>
          </div>
          {/* <div className="grid grid-cols-3 gap-x-5 justify-between items-center mt-20">
          <img
            className="w-48 h-48"
            alt="candle"
            src="https://images.unsplash.com/photo-1608181831696-1f21b6e6e5e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <img
            className="w-48 h-48"
            alt="candle"
            src="https://images.unsplash.com/photo-1608181831696-1f21b6e6e5e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <img
            className="w-48 h-48"
            alt="candle"
            src="https://images.unsplash.com/photo-1608181831696-1f21b6e6e5e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </div> */}
          {/* </div> */}
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1595055258834-8290e4181590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
              alt="candle"
              className="w-full h-[500px]  object-cover"
            />{" "}
            <div className="grid grid-cols-3 gap-x-5 justify-between items-center mt-5">
              <img
                className="w-full h-40 object-cover"
                alt="candle"
                src="https://images.unsplash.com/photo-1608181831696-1f21b6e6e5e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              />
              <img
                className=" w-full h-40 object-cover"
                alt="candle"
                src="https://images.unsplash.com/photo-1608181831696-1f21b6e6e5e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              />
              <img
                className="w-full h-40 object-cover"
                alt="candle"
                src="https://images.unsplash.com/photo-1608181831696-1f21b6e6e5e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeSectionOne;
