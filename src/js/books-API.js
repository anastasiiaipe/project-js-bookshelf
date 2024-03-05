// import axios from "axios";
// import { renderTopBooks, renderCategoriesList, renderBooksByCategory } from './render-categories.js';

// const BASE_URL = 'https://books-backend.p.goit.global';

// //Fatch for top books
// let savedFetch = JSON.parse(sessionStorage.getItem('savedfetch')) || '';
// export const fetchGeneral = async booksPerRow => {

//   if(!savedFetch) {
//     const endpoint = '/books/top-books/';
//     const fetchUrl = BASE_URL + endpoint;

//     try {
//       const response = await axios.get(fetchUrl);
//       sessionStorage.setItem('savedfetch', JSON.stringify(response.data));
//       savedFetch = response.data;
//       return renderTopBooks(response.data, booksPerRow);
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     return renderTopBooks(savedFetch, booksPerRow);
//   }

// };

// //Fatch for categories
// export const getCategoryList = async () => {
//   const endpoint = '/books/category-list/';
//   const fetchUrl = BASE_URL + endpoint;

//   try {
//     const response = await axios.get(fetchUrl);
//     return renderCategoriesList(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// //Fatch for categories books
// export const getBooksByCategory = async categoryName => {
//   const endpoint = '/books/category/';
//   const fetchUrl = BASE_URL + endpoint;
//   const params = {
//     category: categoryName,
//   };

//   try {
//     const response = await axios.get(fetchUrl, { params });
//     return renderBooksByCategory(response.data, categoryName);
//   } catch (error) {
//     console.log(error);
//   }
// };

// // повертає дані однієї книги по id
// export const getBookInfo = async id => {
//   const endpoint = `/books/${id}`;
//   const fetchUrl = BASE_URL + endpoint;

//   try {
//     const response = await axios.get(fetchUrl);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchData = async (endpoint, params = null) => {
//   const fetchUrl = `${BASE_URL}/books${endpoint}`;

//   try {
//     const response = await axios.get(fetchUrl, { params });
//     console.log('Data from server:', response.data)
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getTopBooks = async (booksPerRow) => {
//   const data = await fetchData('/top-books/');
//   return renderTopBooks(data, booksPerRow);
// };

// export const getCategoryList = async () => {
//   const data = await fetchData('/category-list/');
//   return renderCategoriesList(data);
// };

// // export const getBooksByCategory = async (categoryName = '') => {
// //   const data = await fetchData('/category?category=', categoryName );
// //   return renderBooksByCategory(data);
// // };

// export const getBooksByCategory = async (categoryName = '') => {
//   const encodedCategoryName = encodeURIComponent(categoryName);
//   const endpoint = `/category?category=${encodedCategoryName}`;

//   const data = await fetchData(endpoint);
//   console.log('Category name3:', data);
//   // return renderBooksByCategory(categoryName, data);
//   const dataArray = Object.values(data); // Преобразование объекта в массив
//   return renderBooksByCategory(dataArray);
// };

// export const getBookInfo = async (id) => {
//   return fetchData(`/${id}`);
// };
// import axios from 'axios';
// import {
//   renderTopBooks,
//   renderCategoriesList,
//   renderBooksByCategory,
// } from './render-categories.js';

// const BASE_URL = 'https://books-backend.p.goit.global';

// const fetchData = async (endpoint, params = null) => {
//   const fetchUrl = `${BASE_URL}/books${endpoint}`;

//   try {
//     const response = await axios.get(fetchUrl, { params });
//     console.log('Data from server:', response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getTopBooks = async booksPerRow => {
//   const data = await fetchData('/top-books/');
//   return renderTopBooks(data, booksPerRow);
// };

// export const getCategoryList = async () => {
//   const data = await fetchData('/category-list/');
//   return renderCategoriesList(data);
// };

// export const getBooksByCategory = async (categoryName = '') => {
//   const data = await fetchData('/category/', { category: categoryName });
//   return renderBooksByCategory(data);
// };

// export const getBookInfo = async id => {
//   return fetchData(`/${id}`);
// };

import axios from 'axios';
import {
  renderTopBooks,
  renderCategoriesList,
  renderBooksByCategory,
} from './render-categories.js';

const BASE_URL = 'https://books-backend.p.goit.global';

//Fatch for top books
let savedFetch = JSON.parse(sessionStorage.getItem('savedfetch')) || '';
export const getTopBooks = async booksPerRow => {
  if (!savedFetch) {
    const endpoint = '/books/top-books/';
    const fetchUrl = BASE_URL + endpoint;

    try {
      const response = await axios.get(fetchUrl);
      sessionStorage.setItem('savedfetch', JSON.stringify(response.data));
      savedFetch = response.data;
      return renderTopBooks(response.data, booksPerRow);
    } catch (error) {
      console.log(error);
    }
  } else {
    return renderTopBooks(savedFetch, booksPerRow);
  }
};

//Fatch for categories
export const getCategoryList = async () => {
  const endpoint = '/books/category-list/';
  const fetchUrl = BASE_URL + endpoint;

  try {
    const response = await axios.get(fetchUrl);
    return renderCategoriesList(response.data);
  } catch (error) {
    console.log(error);
  }
};

//Fatch for categories books
export const getBooksByCategory = async categoryName => {
  const endpoint = '/books/category/';
  const fetchUrl = BASE_URL + endpoint;
  const params = {
    category: categoryName,
  };

  try {
    const response = await axios.get(fetchUrl, { params });
    return renderBooksByCategory(response.data, categoryName);
  } catch (error) {
    console.log(error);
  }
};

// повертає дані однієї книги по id
export const getBookInfo = async id => {
  const endpoint = `/books/${id}`;
  const fetchUrl = BASE_URL + endpoint;

  try {
    const response = await axios.get(fetchUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
