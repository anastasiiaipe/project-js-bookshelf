import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

export async function getCategoryList() {
  const params = 'category-list';
  return await axios.get(`${BASE_URL}${params}`);
}

export async function getTopBooks() {
  const params = 'top-books';
  return await axios.get(`${BASE_URL}${params}`);
}

export async function getBooksByCategory(selectedCategory) {
  const params = 'category?category=';
  return await axios.get(`${BASE_URL}${params}${selectedCategory}`);
}

export async function getBooksId(idBook) {
  return await axios.get(`${BASE_URL}${idBook}`);
}







// import axios from "axios";
// // import { renderTopBooks, renderCategoriesList, renderBooksByCategory } from './render-categories.js';

// const BASE_URL = 'https://books-backend.p.goit.global/books';

// const fetchData = async (endpoint, params = null) => {
//   try {
//     const response = await axios.get(`${BASE_URL}${endpoint}`, { params });
//     console.log('Data from server:', response.data)
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error; // Пробрасываем ошибку дальше для обработки в вызывающем коде
//   }
// };

// // Получение списка категорий
// export const getCategoryList = async () => {
//   return fetchData('/category-list');
// };

// // Получение списка топовых книг
// export const getTopBooks = async () => {
//   return fetchData('/top-books');
// };
// // Получение книг по категории
// export const getBooksByCategory = async (categoryName = '') => {
//   return fetchData('/category', { category: categoryName });
// };
// // Получение информации о книге по ID
// export const getBookById = async (id) => {
//   return fetchData(`/${id}`);
// };

