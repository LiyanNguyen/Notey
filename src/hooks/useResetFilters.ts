import { useRecoilValue, useResetRecoilState } from "recoil";
import {
  colorState,
  currentPage,
  ratingState,
  searchInputRef,
  searchString,
} from "../global";

const useResetFilters = () => {
  const inputRef = useRecoilValue<HTMLInputElement | null>(searchInputRef);
  const resetPage = useResetRecoilState(currentPage);
  const resetColor = useResetRecoilState(colorState);
  const resetRating = useResetRecoilState(ratingState);
  const resetSearchString = useResetRecoilState(searchString);

  const resetAllFilters = () => {
    if (inputRef) {
      inputRef.value = "";
      resetPage();
      resetColor();
      resetRating();
      resetSearchString();
    }
  };

  return { resetAllFilters };
};

export default useResetFilters;
