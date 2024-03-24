import { atom } from "recoil";

export const ratingState = atom({
  key: "ratingState",
  default: "ascending",
});

export const colorState = atom({
  key: 'colorState',
  default: 'all',
})