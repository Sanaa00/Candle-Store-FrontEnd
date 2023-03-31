import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import data from "../Data";
function Search() {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="relative flex justify-end focus:text-greeen">
      <input
        onChange={searchHandler}
        type="search"
        className="duration-500 focus:duration-500 cursor-pointer relative z-10 h-8 w-8  focus:border-b-2 bg-transparent pl-4 outline-none focus:w-60 focus:cursor-text focus:border-greeen focus:pr-4 foucs:text-greeen"
      />
      <FiSearch className="absolute inset-y-0 my-auto h-8 px-1 w-8 border-r border-transparent focus:text-greeen " />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg> */}
      {/* <input
        type="search"
        name="search"
        id="search"
        // placeholder={`Search`}
        className="w-6 focus:outline-none bg-transparent relative z-10 peer foucs:rounded-full outline-non cursor-pointer focus:w-60 focus:pr-10  focus:cursor-text focus:border-2 focus:p-1 "
        onChange={searchHandler}
      />{" "}
      <FiSearch className="w-6 h-6 mx-2 focus:text-greeen absolute bg-transparent  inset-y-0 my-auto focus:border-l-2 focus:border-greeen hover:greeen " /> */}
    </div>
  );
}

export default Search;
