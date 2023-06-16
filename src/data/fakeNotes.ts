import { faker } from "@faker-js/faker";
import { Note } from "../types/Note";
import { v4 as uuidv4 } from 'uuid';

export const fakeArray: Note[] = [
  {
    id: uuidv4(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    rating: 7,
    color: 'blue',
    createdAt: 'string',
    updatedAt: 'string',
  },
  {
    id: uuidv4(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    rating: 6,
    color: 'red',
    createdAt: 'string',
    updatedAt: 'string',
  },
  {
    id: uuidv4(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    rating: 8,
    color: 'yellow',
    createdAt: 'string',
    updatedAt: 'string',
  },
  {
    id: uuidv4(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    rating: 5,
    color: 'green',
    createdAt: 'string',
    updatedAt: 'string',
  },
  {
    id: uuidv4(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    rating: 4,
    color: 'slate',
    createdAt: 'string',
    updatedAt: 'string',
  },
]