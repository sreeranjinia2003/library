import axios from 'axios';

const BASE_URL = 'https://library-server-aro1.onrender.com';

export const addBookAPI = (bookData) => {
  return axios.post(`${BASE_URL}/books`, bookData);
};

// Get all books
export const getAllBooksAPI = () => {
  return axios.get(`${BASE_URL}/books`);
};

// Delete a book
export const deleteBookAPI = (id) => {
  return axios.delete(`${BASE_URL}/books/${id}`);
};

// Edit a book
export const editBookAPI = (id, data) => {
  return axios.put(`${BASE_URL}/books/${id}`, data);
};

// Get a single book
export const getBookByIdAPI = (id) => {
  return axios.get(`${BASE_URL}/books/${id}`);
};

// Add a review
export const addReviewAPI = (data) => {
  return axios.post(`${BASE_URL}/reviews`, data);
};