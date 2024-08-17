import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  ratingState: string;
  colorState: string;
  searchString: string;
  currentPage: number;
}

const initialState: FilterState = {
  ratingState: "ascending",
  colorState: "all",
  searchString: "",
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    previousPage: (state) => {
      state.currentPage -= 1;
    },
    nextPage: (state) => {
      state.currentPage += 1;
    },
    filterByColor: (state, action: PayloadAction<string>) => {
      state.colorState = action.payload;
    },
    filterByRating: (state, action: PayloadAction<string>) => {
      state.ratingState = action.payload;
    },
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
    updatePartial: (state, action: PayloadAction<Partial<FilterState>>) => {
      Object.assign(state, action.payload);
    },
    resetFilters: () => initialState,
  },
});

export const {
  previousPage,
  nextPage,
  filterByColor,
  filterByRating,
  setSearchString,
  updatePartial,
  resetFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
