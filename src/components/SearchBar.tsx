import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { searchString } from "../global";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [, setSearch] = useRecoilState(searchString);

  const handleSearch = () => {
    inputRef.current && setSearch(inputRef.current.value);
  };

  return (
    <div className="flex shadow-md">
      <input
        ref={inputRef}
        type="search"
        className="rounded-tl rounded-bl bg-violet-50 px-2.5 w-32"
        placeholder="Search..."
        onKeyDown={(event) => event.key === "Enter" && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className=" rounded-tr rounded-br  bg-slate-200 px-2 text-sm font-medium hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 h-full items-center"
      >
        <MagnifyingGlassIcon className="h-5 w-5 text-slate-500" />
      </button>
    </div>
  );
};

export default SearchBar;