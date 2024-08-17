import { memo } from "react";
import icon from "../assets/icon.png";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Dropdown, LanguageSwitcher, SearchBar, ThemeToggler } from ".";
import { colorOptions, ratingState } from "../data";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "./../store";
import { filterByColor, filterByRating } from "../store/filterSlice";

const NavbarContent = memo(({ openModal }: { openModal: () => void }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.filter.colorState);
  const rating = useAppSelector((state) => state.filter.ratingState);

  return (
    <div className="bg-violet-950 h-20 flex absolute top-0 w-full">
      <div className="px-10 mx-auto container w-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={icon} alt="" className=" object-scale-down w-8" />
          <h1 className=" text-white font-medium text-3xl">Notey</h1>
        </div>
        <div className="hidden lg:flex gap-4">
          <LanguageSwitcher />
          <SearchBar />
          <Dropdown
            value={color}
            onChange={(value: string) => dispatch(filterByColor(value))}
            options={colorOptions}
          />
          <Dropdown
            value={rating}
            onChange={(value: string) => dispatch(filterByRating(value))}
            options={ratingState}
          />
          <ThemeToggler />
        </div>
        <button
          data-testid="new-note-button"
          onClick={openModal}
          className=" border border-slate-400 h-max w-28 justify-center py-1.5 px-2.5 rounded-md text-white hover:text-violet-950 hover:bg-white transition-all flex items-center"
        >
          <PlusIcon className="w-4 h-4" />
          {t("newNote")}
        </button>
      </div>
    </div>
  );
});

export default NavbarContent;
