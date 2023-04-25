import React, { useState } from "react";
import { useGetProductsByCategoryQuery } from "../features/api/productApi";

function ProductsNavbar() {
  // const { getProductByCategory } = useGetProductByCategoryQuery("red");
  // console.log(getProductByCategory);

  const [categoryy, setCategoryy] = useState("");
  const { data: categoryyy } = useGetProductsByCategoryQuery(categoryy);
  console.log("category", categoryyy);
  const handleFilter = (category) => {
    setCategoryy(category);
  };
  const category = [
    {
      id: 0,
      category: "All",
    },
    {
      id: 1,
      category: "Simple",
    },
    {
      id: 2,
      category: "Collection",
    },
    {
      id: 3,
      category: "Flowers",
    },
    {
      id: 4,
      category: "Luxury",
    },
  ];

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
