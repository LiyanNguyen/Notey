export type Note = {
  _id: string;
  title: string;
  description: string;
  rating: number;
  color: "blue" | "red" | "yellow" | "green" | "slate";
  createdAt: string;
  updatedAt?: string;
};