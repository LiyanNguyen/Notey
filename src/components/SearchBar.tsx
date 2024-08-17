import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../store";
import { setSearchString, updatePartial } from "../store/filterSlice";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");
  const search = useAppSelector((state) => state.filter.searchString);

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (search === "") setValue("");
  }, [search]);

  const handleSearch = () => {
    dispatch(updatePartial({ currentPage: 1 }));
    dispatch(setSearchString(value));
  };

  return (
    <div className="flex shadow-md">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        data-testid="search-input"
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
