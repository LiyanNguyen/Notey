import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../store";
import { setSearchString, updatePartial } from "../store/filterSlice";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updatePartial({ searchInput: inputRef.current }));
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(updatePartial({ currentPage: 1 }));
    inputRef.current && dispatch(setSearchString(inputRef.current.value));
  };

  return (
    <div className="flex shadow-md">
      <input
        data-testid="search-input"
        ref={inputRef}
        type="search"
        className="rounded-tl rounded-bl bg-violet-50 px-2.5 w-36 dark:bg-slate-800 dark:text-slate-200 focus-within:outline-violet-500"
        placeholder={t("search")}
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
