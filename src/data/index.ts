import { faker } from "@faker-js/faker";
import { Note } from "../types/Note";
import { v4 as uuidv4 } from 'uuid';

export const colorOptions = ['blue', 'red', 'yellow', 'green', 'slate']
export const ratingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const fakeArray: Note[] = [
  {
    _id: uuidv4(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    rating: 7,
    color: 'blue',
    createdAt: 'string',
  },
  {
    _id: uuidv4(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    rating: 6,
    color: 'red',
    createdAt: 'string',
  },
  {
    _id: uuidv4(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    rating: 8,
    color: 'yellow',
    createdAt: 'string',
  },
  {
    _id: uuidv4(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    rating: 5,
    color: 'green',
    createdAt: 'string',
  },
  {
    _id: uuidv4(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    rating: 4,
    color: 'slate',
    createdAt: 'string',
  },
]