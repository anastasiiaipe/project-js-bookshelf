import axios from 'axios';
import {
  renderTopBooks,
  renderCategoriesList,
  renderBooksByCategory,
} from './render-categories.js';

const BASE_URL = 'https://books-backend.p.goit.global';

const CACHE_KEY_TOP = 'topBooksData';
export const getTopBooks = async displayMode => {
  try {
    const cachedData = sessionStorage.getItem(CACHE_KEY_TOP);
    if (cachedData) {
      return renderTopBooks(JSON.parse(cachedData), displayMode);
    }

    const endpoint = '/books/top-books/';
    const fetchUrl = BASE_URL + endpoint;
    const response = await axios.get(fetchUrl);

    sessionStorage.setItem(CACHE_KEY_TOP, JSON.stringify(response.data));

    return renderTopBooks(responseData, displayMode);
  } catch (error) {
    console.error('Error fetching top books:', error);
    return '';
  }
};

const CACHE_KEY_LIST = 'categoryListData';
export const getCategoryList = async () => {
  try {
    const cachedData = sessionStorage.getItem(CACHE_KEY_LIST);
    if (cachedData) {
      return renderCategoriesList(JSON.parse(cachedData));
    }

    const endpoint = '/books/category-list/';
    const fetchUrl = BASE_URL + endpoint;
    const response = await axios.get(fetchUrl);
    sessionStorage.setItem(CACHE_KEY_LIST, JSON.stringify(response.data));
    return renderCategoriesList(response.data);
  } catch (error) {
    console.error('Error fetching category list:', error);
  }
};

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
    console.error('Error fetching books by category:', error);
  }
};

export const getBookInfo = async id => {
  const endpoint = `/books/${id}`;
  const fetchUrl = BASE_URL + endpoint;

  try {
    const response = await axios.get(fetchUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching books id:', error);
  }
};
