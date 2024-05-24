import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { currentPage, searchString, searchInputRef } from "../global";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [, setSearch] = useRecoilState(searchString);
  const resetPage = useResetRecoilState(currentPage);
  const [, setSearchInput] = useRecoilState(searchInputRef);

  useEffect(() => {
    setSearchInput(inputRef.current);
  }, [setSearchInput]);

  const handleSearch = () => {
    resetPage();
    inputRef.current && setSearch(inputRef.current.value);
  };

  return (
    <div className="flex shadow-md">
      <input
        data-testid="search-input"
        ref={inputRef}
        type="search"
        className="rounded-tl rounded-bl bg-violet-50 px-2.5 w-36 dark:bg-slate-800 dark:text-slate-200 focus-within:outline-violet-500"
        placeholder="Search..."
        onKeyDown={(event) => event.key === "Enter" && handleSearch()}
      />
      <button
        data-testid="search-button"
        onClick={handleSearch}
        className=" rounded-tr rounded-br bg-slate-200 px-2 text-sm font-medium hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 items-center"
      >
        <MagnifyingGlassIcon className="h-5 w-5 text-slate-500" />
      </button>
    </div>
  );
};

export default SearchBar;
