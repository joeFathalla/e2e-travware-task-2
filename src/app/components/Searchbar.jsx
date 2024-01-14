import React from "react";

function SearchBar({ searchValue, setSearchValue }) {
  return (
    <div className="w-full mr-5">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Search Product Name"
        className="rounded-md px-4 w-full py-2 my-2"
      />
    </div>
  );
}

export default SearchBar;
