
import axios from "axios";
import { renderTopBooks, renderCategoriesList, renderBooksByCategory } from './render-categories.js';

const BASE_URL = 'https://books-backend.p.goit.global';

const fetchData = async (endpoint, params = null) => {
  const fetchUrl = `${BASE_URL}/books${endpoint}`;

  try {
    const response = await axios.get(fetchUrl, { params });
    console.log('Data from server:', response.data)
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTopBooks = async (booksPerRow) => {
  const data = await fetchData('/top-books/');
  return renderTopBooks(data, booksPerRow);
};

export const getCategoryList = async () => {
  const data = await fetchData('/category-list/');
  return renderCategoriesList(data);
};


// export const getBooksByCategory = async (categoryName = '') => {
//   const data = await fetchData('/category?category=', categoryName );
//   return renderBooksByCategory(data);
// };

export const getBooksByCategory = async (categoryName = '') => {
  const encodedCategoryName = encodeURIComponent(categoryName);
  const endpoint = `/category?category=${encodedCategoryName}`;

  const data = await fetchData(endpoint);
  console.log('Category name3:', data);
  // return renderBooksByCategory(categoryName, data);
  const dataArray = Object.values(data); // Преобразование объекта в массив
  return renderBooksByCategory(dataArray);
};

export const getBookInfo = async (id) => {
  return fetchData(`/${id}`);
};



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

