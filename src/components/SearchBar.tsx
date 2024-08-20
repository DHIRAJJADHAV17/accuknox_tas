import { Search } from "lucide-react";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md">
      <Search
        className="text-slate-400 cursor-pointer hover:text-black"
        onClick={() => {}}
      />
      <input
        type="text"
        placeholder="Search anything"
        className="w-full text-xs bg-transparent py-[11px] outline-none"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
};

export default SearchBar;
