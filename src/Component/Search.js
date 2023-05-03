import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useGetProductsBySearchQuery } from "../features/api/productApi";
function Search() {
  const [search, setSearch] = useState("");
  const { data: searchdata } = useGetProductsBySearchQuery(search);
  // console.log(searchdata);
  // const { searchdata } = useGetProductsBySearchQuery(search);
  // console.log(searchdata);
  const searchHandler = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  return (
    <div className="relative flex items-center justify-end focus:text-greeen focus:bg-white">
      <input
        onChange={searchHandler}
        className="duration-500 focus:duration-500 cursor-pointer text-sm font-regular relative z-10 h-8 w-8 lg:h-6 lg:w-6 xl:h-8 xl:w-8 rounded-sm bg-transparent focus:border-2  pl-4 outline-none focus:w-56 lg:focus:w-36 xl:focus:w-48 2xl:focus:w-60 focus:border-greeen focus:pr-4 "
      />
      <FiSearch className="absolute w-8 h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 px-1 border-r border-transparent focus:text-greeen" />
    </div>
  );
}

export default Search;
