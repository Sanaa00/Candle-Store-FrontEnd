import React from "react";
import { NavLink } from "react-router-dom";
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
    {
      id: 5,
      category: "Category 5",
    },
  ];
  return (
    <div className="my-5 flex flex-wrap gap-5">
      {category.map((navbar) => {
        return (
          <NavLink
            key={navbar.id}
            className={({ isActive }) =>
              (isActive ? "border-b-2 border-greeen " : "") +
              "hover:text-greeen font-semibold text-gray-800"
            }
          >
            {navbar.category}
          </NavLink>
        );
      })}
    </div>
  );
}

export default ProductsNavbar;
