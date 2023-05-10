import React from "react";
import { useGetCategoryQuery } from "../features/api/category";

function ProductsNavbar({ categoryId, setCategoryId }) {
  const { data: categoryyy } = useGetCategoryQuery();
  const handleFilter = (category) => {
    setCategoryId(category);
    console.log("category id", category);
  };
  return (
    <div className="pt-5 flex flex-wrap gap-5 bg-gray-50">
      <button
        className="bg-gray-100 py-1 px-5 focus:bg-greeen rounded-sm hover:bg-greeen hover:text-gray-50 text-greeen focus:text-gray-50  hover:shadow-lg duration-500 hover:duration-500 text-sm flex font-semibold"
        key={1}
        onClick={() => handleFilter("")}
      >
        All
      </button>
      {categoryyy?.data?.map((product) => {
        return (
          <button
            className="bg-gray-100 py-1 px-5 focus:bg-greeen rounded-sm hover:bg-greeen hover:text-gray-50 text-greeen focus:text-gray-50  hover:shadow-lg duration-500 hover:duration-500 text-sm flex font-semibold"
            key={product._id}
            onClick={() => handleFilter(product._id)}
          >
            {product.category}
          </button>
        );
      })}
    </div>
  );
}

export default ProductsNavbar;
