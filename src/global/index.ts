import { atom } from "recoil";

export const ascendingState = atom({
  key: 'ascendingState',
  default: false,
})

export const colorState = atom({
  key: 'colorState',
  default: 'all',
})