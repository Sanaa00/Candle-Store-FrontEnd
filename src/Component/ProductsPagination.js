import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import CandleCard from "./CandleCard";
// import data from "../Data";
// import { useGetProductsMutation } from "../features/api/api";
import { useGetProductsQuery } from "../features/api/cart";
import products from "../Data";

function ProductsPagination() {
  // const { data: products } = useGetProductsQuery();
  const itemPerPageWindowSize = () => {
    if (window.innerWidth < 640) {
      return 6;
    } else if (window.innerWidth < 768) {
      return 9;
    } else if (window.innerWidth < 1280) {
      return 12;
    } else {
      return 15;
    }
  };
  // const [isLoading, setIsLoading] = useState(true);
  const [currentItems, setCurrentItems] = useState([]);

  // const {data} = useGetProductsQuery({offset: pageCount, limit: 15})

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = itemPerPageWindowSize();

  const endOffset = itemOffset + itemsPerPage;

  useEffect(() => {
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
    // setIsLoading(false);
  }, [endOffset, itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
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
