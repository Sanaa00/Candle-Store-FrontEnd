import React from "react";
import { useGetProductByCategoryQuery } from "../features/api/productApi";

function ProductsNavbar() {
  // const { getProductByCategory } = useGetProductByCategoryQuery("red");

  // console.log(getProductByCategory);

  const category = [
    {
      id: 0,
      category: "All",
    },
    {
      id: 1,
      category: "red",
    },
    {
      id: 2,
      category: "green",
    },
    {
      id: 3,
      category: "yellow",
    },
  ];

  const handleFilter = (category) => {
    console.log(category);
  };

  return (
    <div className="pt-10 flex flex-wrap gap-5 bg-gray-50">
      {category.map((product) => {
        return (
          <button
            className="bg-gray-100 py-1 px-5 focus:bg-greeen rounded-sm hover:bg-greeen hover:text-gray-50 text-greeen focus:text-gray-50  hover:shadow-lg duration-500 hover:duration-500 text-sm flex font-semibold"
            key={product.id}
            onClick={() => handleFilter(product.category)}
          >
            {product.category}
          </button>
        );
      })}
    </div>
  );
}

export default ProductsNavbar;
