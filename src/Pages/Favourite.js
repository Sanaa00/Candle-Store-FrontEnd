import React from "react";
import { useSelector } from "react-redux";
import Container from "../Component/Container";
import ProductsPagination from "../Component/ProductsPagination";
import CandleCard from "../Component/CandleCard";
function Favourite() {
  const fav = useSelector((state) => state.candle.candle);
  return (
    <Container>
      {" "}
      <p className="text-2xl font-semibold text-greeen my-5">Favourite</p>
      {/* <ProductsPagination /> */}
      <div className="grid grid-cols-5 justify-between items-center">
        {fav.map((candle) => {
          return <CandleCard candle={candle} key={candle.id} />;
        })}
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
  );
}

export default Favourite;