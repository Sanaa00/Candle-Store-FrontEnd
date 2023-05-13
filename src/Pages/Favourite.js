import React from "react";
import { useSelector } from "react-redux";

import Container from "../Component/Container";
import CandleCard from "../Component/CandleCard";
import emptyBag from "../images/EmptyBag.png";

function Favourite() {
  const fav = useSelector((state) => state.favourite);
  // console.log(fav, "favourite page");
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="min-h-screen pt-20">
          <p className="text-2xl font-semibold text-greeen py-5">Favourite</p>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-between items-center"> */}
          {fav.length === 0 ? (
            <div className="flex justify-center items-center">
              <img
                alt="empty bag"
                src={emptyBag}
                className="lg:w-2/4 lg:h-fit object-cover"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  justify-between items-center ">
              {fav.map((candle) => {
                return <CandleCard candle={candle} key={candle._id} />;
              })}
            </div>
          )}{" "}
        </div>

        {/* <div className="container mx-auto flex justify-center my-10"> */}
        {/* <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          className="flex gap-5"
          previousLabel="< "
          nextLabel=" >"
          pageClassName="text-gray-800 mx-2 "
          activeClassName="text-gray-800 border-b-2 border-gray-800 "
          renderOnZeroPageCount={null}
        /> */}
        {/* </div> */}
      </Container>
    </div>
  );
}

export default Favourite;
