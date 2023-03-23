import React from "react";
import AboutSection from "../Component/AboutSection";
import HomeSectionOne from "../Component/HomeSectionOne";

function Home() {
  return (
    <>
      <HomeSectionOne />
      <AboutSection />
    </>
    // <div className="grid grid-cols-2 justify-between items-center ">
    //   <div className="flex flex-col justify-between mt-5">
    //     <div className="p-6">
    //       <p className="text-greeen font-semibold text-3xl">
    //         Our candles are more than just a scent, they're a personalized
    //         experience.
    //       </p>
    //       <p className="text-lg mt-5">
    //         "Experience unique candles and customized gifts at our store.
    //         Handcrafted with natural ingredients to transform any space into a
    //         haven of relaxation."
    //       </p>
    //     </div>
    //     <div className="grid grid-cols-3 self-end">
    //       <div></div>
    //       <img
    //         className="w-48 h-48"
    //         alt="candle"
    //         src="https://images.unsplash.com/photo-1608181831696-1f21b6e6e5e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    //       />
    //       <img
    //         className="w-48 h-48"
    //         alt="candle"
    //         src="https://images.unsplash.com/photo-1608181831696-1f21b6e6e5e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    //       />
    //       <img
    //         className="w-48 h-48"
    //         alt="candle"
    //         src="https://images.unsplash.com/photo-1608181831696-1f21b6e6e5e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    //       />
    //     </div>
    //   </div>{" "}
    //   <img
    //     src="https://images.unsplash.com/photo-1595055258834-8290e4181590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
    //     alt="candle"
    //     className="w-full h-[680px] object-cover"
    //   />
    //   {/* <section>
    //     Welcome to our candle store, where creativity meets candles. We offer a
    //     wide variety of candles in different shapes, sizes, and scents that are
    //     carefully crafted and prepared to light up your day. Our store also
    //     provides a unique gift service, where we prepare personalized gift sets
    //     that perfectly suit your needs. Moreover, we offer custom-made candles,
    //     allowing you to create your perfect scent and packaging. We use
    //     high-quality materials and natural ingredients to create a premium
    //     product that will transform any space into a relaxing haven. Come visit
    //     our candle store, where you can indulge in the soothing glow and
    //     personal experience of our bespoke candles.
    //   </section> */}
    // </div>
  );
}

export default Home;
