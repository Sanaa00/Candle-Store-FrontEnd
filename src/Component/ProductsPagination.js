import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import CandleCard from "./CandleCard";
import data from "../Data";

function ProductsPagination() {
  const itemPerPageWindowSize = () => {
    if (window.innerWidth < 640) {
      return 4;
    } else if (window.innerWidth < 768) {
      return 6;
    } else if (window.innerWidth < 1280) {
      return 8;
    } else {
      return 10;
    }
  };
  const [isLoading, setIsLoading] = useState(true);
  const [currentItems, setCurrentItems] = useState([]);

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = itemPerPageWindowSize();

  const endOffset = itemOffset + itemsPerPage;

  useEffect(() => {
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
    setIsLoading(false);
  }, [endOffset, itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-between items-center ">
        {currentItems.map((candle) => {
          return <CandleCard candle={candle} key={candle.id} />;
        })}
      </div>
      <div className="container mx-auto flex justify-center my-10">
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          className="flex gap-5 items-center"
          previousLabel={<BiLeftArrow />}
          nextLabel={<BiRightArrow />}
          pageClassName="text-gray-800 mx-2"
          activeClassName="text-gray-800 border-b-2 border-gray-800 "
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default ProductsPagination;
