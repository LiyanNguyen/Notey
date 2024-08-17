// src/store/filterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  ratingState: string;
  colorState: string;
  searchString: string;
  currentPage: number;
  searchInput: HTMLInputElement | null;
}

const initialState: FilterState = {
  ratingState: "ascending",
  colorState: "all",
  searchString: "",
  currentPage: 1,
  searchInput: null,
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
    resetFilters: (state) => {
      state.ratingState = initialState.ratingState;
      state.colorState = initialState.colorState;
      state.searchString = initialState.searchString;
      state.currentPage = initialState.currentPage;
      // Do not modify searchInput
    },
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
