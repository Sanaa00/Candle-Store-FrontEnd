import React, { useMemo } from "react";
import ReactPaginate from "react-paginate";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import CandleCard from "./CandleCard";
import { BarLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { useGetfavouritebyUserIdQuery } from "../features/api/favourite";

function ProductsPagination({ products, isError, isLoading, page, setPage }) {
  const { user } = useSelector((state) => state.user);
  const userId = user?._id;
  const { data: fav } = useGetfavouritebyUserIdQuery(userId);

  const testData = useMemo(() => {
    console.log("products ", products?.data?.products);
    console.log("fav products ", fav?.data[0]?.products);

    const isFavored = products?.data?.products?.filter((prod) =>
      fav?.data[0]?.products?.some((item) => item.productId?._id === prod?._id)
    );

    console.log("test fav ", isFavored);

    return products?.data?.products?.map((prod) => ({
      ...prod,
      favourite: isFavored?.some((item) => item?._id === prod?._id),
    }));
  }, [products, fav]);

  fav?.data[0]?.products.map((checkFav) => {
    return <div>{checkFav?.productId?._id}</div>;
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <BarLoader color="#316C57" height={5} width={200} />
      </div>
    );
  if (isError) return <p>error</p>;
  return (
    <div className="min-h-screen pt-5">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-center ">
        {testData?.map((candle) => {
          return <CandleCard candle={candle} key={candle._id} />;
        })}
      </div>
      <div className="container mx-auto flex justify-center py-10">
        <ReactPaginate
          breakLabel="..."
          onPageChange={(e) => {
            setPage(e.selected + 1);
          }}
          pageRangeDisplayed={3}
          marginPagesDisplayed={0}
          pageCount={products && products?.data?.result / 8}
          className="flex gap-5 items-center"
          previousLabel={
            <BsArrowLeftCircle className="w-6 h-6 text-gray-800" />
          }
          nextLabel={<BsArrowRightCircle className="w-6 h-6 text-gray-800" />}
          pageClassName="text-gray-800 mx-2"
          activeClassName="text-gray-800 border-b-2 border-gray-800 "
          renderOnZeroPageCount={null}
          forcePage={page - 1}
        />
      </div>
    </div>
  );
}

export default ProductsPagination;
