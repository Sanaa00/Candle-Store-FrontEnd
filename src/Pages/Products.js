import React, { useState } from "react";
import ProductsPagination from "../Component/ProductsPagination";
import Container from "../Component/Container";
import FilterButtons from "../Component/FilterButtons";
import { FiSearch } from "react-icons/fi";
import { useGetProductsQuery } from "../features/api/productApi";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetProductsQuery({ search, category, page });

  return (
    <div className="bg-gray-50 pt-16">
      <Container>
        {" "}
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="light"
          transition={Slide}
          className="h-32"
        />
        <FilterButtons categoryId={category} setCategoryId={setCategory} />
        <div className="mt-5 flex w-full justify-center items-center">
          <div className=" flex justify-between items-center w-full lg:w-80 xl:w-96 border-2 rounded-sm border-gray-200 focus:outline-none duration-500 hover:duration-500 hover:border-greeen bg-gray-50 mt-2">
            <input
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="pl-1 w-full h-full  text-sm font-regular bg-transparent outline-none focus:text-greeen"
            />
            <FiSearch className=" w-8 h-8 px-1 text-gray-300 focus:scale-110 duration-500" />
          </div>
        </div>
        <ProductsPagination
          products={products}
          isLoading={isLoading}
          error={error}
          isError={isError}
          search={search}
          page={page}
          setPage={setPage}
        />
      </Container>
    </div>
  );
}

export default Products;
