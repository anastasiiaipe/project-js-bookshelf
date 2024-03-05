import axios from 'axios';

const options = {
  method: 'get',
  baseURL: 'https://books-backend.p.goit.global/books/',
  url: '',
};

export async function getCategoryList() {
  options.url = 'category-list';
  const response = await axios(options).then(rep => rep.data).catch(error => {
    console.log(error.message);
  } );
  return response;
}

export async function getBooksByCategory(target) {
  options.url = `category?category=${target}`;
  const response = await axios(options).then(rep => rep.data).catch(error => {
    console.log(error.message);
  } );
  return response;
}

export async function getTopBooks() {
  options.url = 'top-books';
  const response = await axios(options).then(rep => rep.data).catch(error => {
    console.log(error.message);
  } );
  return response;
}

export async function getBookInfo(bookId) {
  options.url = `${bookId}`;
  const response = await axios(options).then(rep => rep.data).catch(error => {
    console.log(error.message);
  } );
  return response;
}

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
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getCategoryList = async () => {
//   const data = await fetchData('/category-list/');
//   return renderCategoriesList(data);
// };

// export const getTopBooks = async booksPerRow => {
//   const data = await fetchData('/top-books/');
//   return renderTopBooks(data, booksPerRow);
// };



// export const getBooksByCategory = async categoryName => {
//   console.log('Selected Category:', categoryName);
//   const data = await fetchData(`/category?category=${categoryName}`);
//   return renderBooksByCategory(data, categoryName);
//   // const BASE_URL = 'https://books-backend.p.goit.global';
//   // const END_POINT = '/books/';
//   // const PARAMS = `category?category=${categoryName}`;

//   // const url = BASE_URL + END_POINT + PARAMS;

//   // const res = await axios.get(url);
//   // return res.data;
// };

// export const getBooksByCategory = async (categoryName = '') => {
//   const data = await fetchData('/category/', { category: categoryName });
//   return renderBooksByCategory(data);
// };

// export const getBookInfo = async id => {
//   return fetchData(`/${id}`);
// };
