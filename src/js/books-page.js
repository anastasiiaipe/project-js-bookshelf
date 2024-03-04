import {
  getTopBooks,
  getCategoryList,
  getBooksByCategory,
} from './books-API.js';

const booksContainer = document.querySelector('.books-box');
const categoriesListContainer = document.querySelector('.categories-list');

const BOOKS_PER_ROW_MAP = {
  default: 3,
  largeScreen: 5,
  smallScreen: 1,
};

// Function to display books
async function showBooks(renderedContent) {
  booksContainer.innerHTML = renderedContent;
  const titleElement = document.querySelector('.books-box-desc-title');

  if (titleElement) {
    wrapLastWord(titleElement);
  }
}
// Function to display categories
async function showCategories() {
  const renderedCategories = await getCategoryList();
  categoriesListContainer.innerHTML = renderedCategories;
}

// Function to display top books
export async function showTopBooks() {
  const windowWidth = window.innerWidth;
  const booksPerRow = determineBooksPerRow(windowWidth);
  const renderedTop = await getTopBooks(booksPerRow);
  showBooks(renderedTop);
}

//===========================================================
// Function to display books by category

// Отримуємо посилання на елемент, в якому будуть відображатися книги
const booksListContainer = document.querySelector('.books-category-list');
export async function showBooksByCategory(categoryName) {
  console.log(categoryName);
  //   const renderedBooks = await getBooksByCategory(categoryName);
  try {
    // Отримуємо книги вибраної категорії з API
    const books = await getBooksByCategory(categoryName);

    // Перевіряємо, чи є книги в цій категорії
    if (books.length > 0) {
      const booksHTML = renderBooksByCategory(books, categoryName);
      // Якщо книги є, відображаємо їх на сторінці
      booksListContainer.innerHTML = booksHTML;
    } else {
      // Якщо книги не знайдено, виводимо повідомлення про це користувачу
      booksListContainer.innerHTML = '<p>No books found in this category</p>';
    }
  } catch (error) {
    // Якщо сталася помилка під час отримання даних з API, виводимо повідомлення про це користувачу
    console.error('Error fetching books by category:', error);
    booksListContainer.innerHTML =
      '<p>Failed to fetch books. Please try again later.</p>';
  }
  //   return showBooks(renderedBooks);
}

// Отримуємо всі елементи категорій
const categoryItems = document.querySelectorAll('.categories-itm');

categoryItems.forEach(item => {
  item.addEventListener('click', function (event) {
    // Забороняємо перехід за замовчуванням посилання
    event.preventDefault();

    // Отримуємо назву категорії, на яку натиснули
    const categoryName = this.dataset.categorieName;

    // Викликаємо функцію для відображення книг вибраної категорії
    showBooksByCategory(categoryName);
  });
});
//===============================================================
// Function to wrap the last word in the title
function wrapLastWord(titleElement) {
  const textContent = titleElement.textContent.split(' ');
  const lastWord = textContent.pop();
  const updatedContent =
    textContent.join(' ') +
    (textContent.length > 0
      ? ` <span class="books-title-color">${lastWord}</span>`
      : lastWord);
  titleElement.innerHTML = updatedContent;
}
// Function to determine the number of books per row based on window width
function determineBooksPerRow(windowWidth) {
  if (windowWidth >= 1440) {
    return BOOKS_PER_ROW_MAP.largeScreen;
  } else if (windowWidth < 768) {
    return BOOKS_PER_ROW_MAP.smallScreen;
  } else {
    return BOOKS_PER_ROW_MAP.default;
  }
}

// Initialize the page
if (booksContainer) {
  showTopBooks();
  showCategories();

  categoriesListContainer.addEventListener('click', handleCategoryClick);
  booksContainer.addEventListener('click', handleSeeMoreClick);
}

// Event handler for category click
async function handleCategoryClick(e) {
  e.preventDefault();
  const target = e.target;
  const categoryName = target.dataset.categorieName;

  console.log('Category Name:', categoryName);
  if (categoryName === `all categories`) {
    try {
      const resp = await getTopBooks();
      booksContainer.insertAdjacentHTML(
        'afterbegin',
        '<h2 class="books-box-title">Best Sellers <span class="books-title-span">Books</span></h2>'
      );
      booksContainer.insertAdjacentHTML(
        'beforeend',
        renderBooksByCategory(resp.data, categoryName)
      );
      categoriesListContainer
        .querySelector('.js-categories-current')
        .classList.remove('js-categories-current');
      target.classList.add('js-categories-current');
    } catch (error) {
      console.error('Books was not found :', error.message);
    }
    return;
  } else {
    try {
      const data = await getBooksByCategory(categoryName);
      booksContainer.insertAdjacentHTML('beforeend', showBooksByCategory(data));
      categoriesListContainer
        .querySelector('.js-categories-current')
        .classList.remove('js-categories-current');
      target.classList.add('js-categories-current');
    } catch (error) {
      console.error('Books was not found :', error.message);
    }
  }
}

//   if (target.tagName === 'A') {
//     const categoryName = target.dataset.categoryName;

//     categoriesListContainer
//       .querySelector('.js-categories-current')
//       .classList.remove('js-categories-current');
//     target.classList.add('js-categories-current');

//     if (categoryName) {
//       showBooksByCategory(categoryName);
//     } else {
//       showTopBooks();
//     }
//   }

// Event handler for "See More" click
function handleSeeMoreClick(e) {
  e.preventDefault();
  const target = e.target;

  if (target.classList.contains('books-btn-see-more')) {
    const categoryName = target.dataset.categoryName;

    categoriesListContainer
      .querySelector('.js-categories-current')
      .classList.remove('js-categories-current');
    categoriesListContainer
      .querySelector(`[data-categoryName="${categoryName}"]`)
      .classList.add('js-categories-current');

    showBooksByCategory(categoryName);
  }
}
