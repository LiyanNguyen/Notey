import { atom, useRecoilCallback } from "recoil";

export const ratingState = atom({
  key: "ratingState",
  default: "ascending",
});

export const colorState = atom({
  key: "colorState",
  default: "all",
});

export const searchString = atom({
  key: "searchString",
  default: "",
});

export const currentPage = atom({
  key: "currentPage",
  default: 1,
});
