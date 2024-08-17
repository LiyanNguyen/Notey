import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../store";
import { resetFilters } from "../store/filterSlice";

const EmptyBoard = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const inputElement = useAppSelector((state) => state.filter.searchInput);

  const resetFiltersAndInput = () => {
    if (inputElement) {
      inputElement.value = "";
      dispatch(resetFilters());
    }
  };

  return (
    <div className="w-full h-96 flex flex-col items-center justify-center text-slate-500 text-md dark:text-slate-300 gap-4">
      <p>{t("noNotesFound")}</p>
      <button
        type="button"
        data-testid="reset-button"
        className="inline-flex justify-center rounded-md border border-transparent bg-violet-100 px-4 py-2 text-sm font-medium text-violet-900 hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 self-center w-28 disabled:bg-slate-200 disabled:text-gray-400"
        onClick={resetFiltersAndInput}
      >
        {t("resetFilters")}
      </button>
    </div>
  );
};

export default EmptyBoard;
