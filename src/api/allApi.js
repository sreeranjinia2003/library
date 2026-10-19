import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const addBookAPI = (bookData) => {
  return axios.post(`${BASE_URL}/books`, bookData);
};

// Get all books from the backend
export const getAllBooksAPI = () => {
  return axios.get(`${BASE_URL}/books`);
};

// Delete a book from the backend
export const deleteBookAPI = (id) => {
  return axios.delete(`${BASE_URL}/books/${id}`);
};

// edit a book from the backend
export const editBookAPI = (id, data) => {
  return axios.put(`http://localhost:3000/books/${id}`, data);
};

export const getBookByIdAPI = (id) => {
  return axios.get(`${BASE_URL}/books/${id}`);
};

export const addReviewAPI = (data) => {
  return axios.post(`${BASE_URL}/reviews`, data);
};

