import React from "react";

import AboutSection from "../Component/AboutSection";
// import HomeSectionOne from "../Component/HomeSectionOne";
import HomeSlideShow from "../Component/HomeSlideShow";
// import HomeSlider from "../Component/HomeSlider";

function Home() {
  return (
    <>
      <div className="grid grid-cols-1">
        {" "}
        <HomeSlideShow />
        {/* <HomeSectionOne /> */}
        {/* <HomeSlider /> */}
        <AboutSection />
      </div>
    </>
  );
}

export default Home;
