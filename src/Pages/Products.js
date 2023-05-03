import React, { useState } from "react";

import ProductsPagination from "../Component/ProductsPagination";
import Container from "../Component/Container";
import FilterButtons from "../Component/FilterButtons";
import { FiSearch } from "react-icons/fi";
import { useGetProductsQuery } from "../features/api/productApi";
import { useGetCategoryQuery } from "../features/api/category";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const { data: allCategory } = useGetCategoryQuery();
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetProductsQuery(search);
  // console.log("data by search", products);

  return (
    <div className="bg-gray-50 pt-16">
      <Container>
        <FilterButtons />
        <div className="flex w-full justify-center items-center">
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
        />
      </Container>
    </div>
  );
}

export default Products;
