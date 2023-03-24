import React from "react";
import { FiSearch } from "react-icons/fi";
function Search() {
  return (
    <div className="border-b-2 border-greeen flex justify-between w-80">
      <input placeholder="Search" className="w-full focus:outline-none px-2" />
      <button className="px-2">
        <FiSearch className="w-5 h-5 text-gray-800" />
      </button>
    </div>
  );
}

export default Search;
