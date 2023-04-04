import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="relative flex items-center justify-end focus:text-greeen focus:bg-white">
      <input
        onChange={searchHandler}
        type="search"
        className="duration-500 focus:duration-500 cursor-pointer relative z-10 h-8 w-8 lg:h-6 lg:w-6 xl:h-8 xl:w-8 rounded-sm  focus:border-2  bg-transparent pl-4 outline-none focus:w-56 lg:focus:w-36 xl:focus:w-48 2xl:focus:w-60  focus:cursor-text focus:border-greeen focus:pr-4 foucs:text-greeen"
      />
      <FiSearch className="absolute inset-y-0 w-8 h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 px-1 border-r border-transparent focus:text-greeen " />
    </div>
  );
}

export default Search;
