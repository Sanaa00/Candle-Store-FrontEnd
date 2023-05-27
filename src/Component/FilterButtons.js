import React from "react";
import { useGetCategoryQuery } from "../features/api/category";
import { NavLink } from "react-router-dom";

function ProductsNavbar({ categoryId, setCategoryId }) {
  const { data: categoryyy } = useGetCategoryQuery();
  const handleFilter = (category) => {
    setCategoryId(category);
  };
  return (
    <div className="pt-5 flex flex-wrap gap-5 bg-gray-50">
      <NavLink
        className={
          (categoryId === ""
            ? "bg-greeen text-gray-100  py-1 px-5 "
            : "  text-greeen  bg-gray-100  py-1 px-5 ") +
          "hover:duration-500 text-sm flex font-semibold py-1 px-5 rounded-sm hover:bg-greeen hover:text-gray-50 hover:shadow-lg duration-500 "
        }
        key={1}
        onClick={() => handleFilter("")}
      >
        All
      </NavLink>
      {categoryyy?.data?.map((product) => {
        return (
          <button
            className={
              (categoryId === product._id
                ? "bg-greeen text-gray-100  py-1 px-5 "
                : "  text-greeen  bg-gray-100  py-1 px-5 ") +
              "hover:duration-500 text-sm flex font-semibold py-1 px-5 rounded-sm hover:bg-greeen hover:text-gray-50 hover:shadow-lg duration-500 "
            }
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
