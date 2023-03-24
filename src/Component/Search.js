import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import data from "../Data";
function Search() {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="my-5 md:mt-0 border-b-2 border-greeen flex justify-between w-60 sm:w-80">
      <input
        placeholder="Search"
        className="w-full focus:outline-none px-2"
        onChange={searchHandler}
      />
      <button className="px-2">
        <FiSearch className="w-5 h-5 text-gray-800" />
      </button>
    </div>
  );
}

export default Search;
