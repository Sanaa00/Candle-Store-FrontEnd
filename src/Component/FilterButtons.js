import React from "react";

function ProductsNavbar() {
  const category = [
    {
      id: 0,
      category: "All",
    },
    {
      id: 1,
      category: "Category 1",
    },
    {
      id: 2,
      category: "Category 2",
    },
    {
      id: 3,
      category: "Category 3",
    },
    {
      id: 4,
      category: "Category 4",
    },
  ];

  const handleFilter = (category) => {
    console.log(category);
  };

  return (
    <div className="pt-10 flex flex-wrap gap-5 bg-gray-50">
      {category.map((navbar) => {
        return (
          <button
            className="bg-gray-100 py-1 px-5 focus:bg-greeen rounded-sm hover:bg-greeen hover:text-gray-50 text-greeen focus:text-gray-50  hover:shadow-lg duration-500 hover:duration-500 text-sm flex font-semibold"
            key={navbar.id}
            onClick={() => handleFilter(navbar.category)}
          >
            {navbar.category}
          </button>
        );
      })}
    </div>
  );
}

export default ProductsNavbar;
