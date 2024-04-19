import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const GET_Notes = async (
  rating: string,
  color: string,
  search: string,
  page: number
) => {
  return await axios
    .get(`${API_URL}/notes?color=${color}&rating=${rating}&search=${search}&page=${page}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
};

export const POST_Note = async (
  title: string,
  description: string,
  color: string,
  rating: number
) => {
  return await axios
    .post(`${API_URL}/notes`, {
      title,
      description,
      color,
      rating,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
};

export const PATCH_Note = async (
  id: string,
  title: string,
  description: string,
  color: string,
  rating: number
) => {
  return await axios
    .patch(`${API_URL}/notes/${id}`, {
      title,
      description,
      color,
      rating,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
};

export const DELETE_Note = async (id: string) => {
  return await axios
    .delete(`${API_URL}/notes/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
};
