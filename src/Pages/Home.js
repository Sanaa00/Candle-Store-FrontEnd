import React from "react";
import AboutSection from "../Component/AboutSection";
import HomeSlideShow from "../Component/HomeSlideShow";

function Home() {
  return (
    <>
      <div className="grid grid-cols-1 bg-gray-50">
        <HomeSlideShow />
        <AboutSection />
      </div>
    </>
  );
}

export default Home;
