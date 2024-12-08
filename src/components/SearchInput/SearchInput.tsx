// components/SearchInput.tsx
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
<div className="flex items-center gap-2 bg-[rgb(245,245,245)] p-1 sm:p-2 rounded-sm ">
      <input type="text" className="bg-transparent w-[100%] outline-none" />
      <FiSearch size={24}/>
</div>
 
  );
};

export default SearchInput;
