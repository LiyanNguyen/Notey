import { faker } from "@faker-js/faker";
import { Note } from "../types/Note";
import { v4 as uuidv4 } from 'uuid';

export const colorOptions = ['all','blue', 'red', 'yellow', 'green', 'slate']
export const ratingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const fakeArray: Note[] = [
  {
    _id: uuidv4(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    rating: 7,
    color: 'blue',
    createdAt: new Date(),
  },
  {
    _id: uuidv4(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    rating: 6,
    color: 'red',
    createdAt: new Date(),
  },
  {
    _id: uuidv4(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    rating: 8,
    color: 'yellow',
    createdAt: new Date(),
  },
  {
    _id: uuidv4(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    rating: 5,
    color: 'green',
    createdAt: new Date(),
  },
  {
    _id: uuidv4(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    rating: 4,
    color: 'slate',
    createdAt: new Date(),
  },
]

export const colorClasses = {
  blue: { borderColor: "border-t-blue-400", ratingColor: "bg-blue-400" },
  red: { borderColor: "border-t-red-400", ratingColor: "bg-red-400" },
  yellow: { borderColor: "border-t-yellow-400", ratingColor: "bg-yellow-400" },
  green: { borderColor: "border-t-green-400", ratingColor: "bg-green-400" },
  slate: { borderColor: "border-t-slate-400", ratingColor: "bg-slate-400" },
};