import {
  getTopBooks,
  getCategoryList,
  getBooksByCategory,
} from './books-API.js';

async function displayCategories() {
  const categoriesContainer = document.querySelector('.categories-list');

  // Отримуємо список категорій
  const renderedCategories = await getCategoryList();

  // Відображаємо категорії на сторінці
  categoriesContainer.innerHTML = renderedCategories;

  // Додаємо обробник подій для категорій
  categoriesContainer.addEventListener('click', handleCategoryClick);

  return categoriesContainer; // Повертаємо контейнер категорій
}

// Додаємо обробник подій для кнопок "See more" у кожній категорії
document.addEventListener('click', async function (event) {
  if (event.target && event.target.classList.contains('books-btn-see-more')) {
    const catName = event.target.dataset.categoryname;
    console.log(catName);
    await displayBooksByCategory(null, catName); // Передаємо другий аргумент
  }
});

// Функція для обробки кліків на категорії
async function handleCategoryClick(e) {
  e.preventDefault();

  const target = e.target;
  const catName = target.dataset.categoryname;

  // Отримуємо контейнер категорій
  const categoriesContainer = await displayCategories();

  // Якщо натиснута категорія "All categories", відображаємо усі книги
  if (catName === 'all categories') {
    displayTopBooks();
  } else {
    // В іншому випадку відображаємо книги за вибраною категорією
    await displayBooksByCategory(categoriesContainer, catName);
  }
}

// Функція для відображення книг за вибраною категорією - ПРАЦЮЄЄЄЄ
async function displayBooksByCategory(categoriesContainer, catName) {
  const booksContainer = document.querySelector('.books-box');
  if (!booksContainer) {
    console.error('Element with class "books-category-box" not found.');
    return;
  }
  // Отримуємо книги за вибраною категорією
  const renderedBooks = await getBooksByCategory(catName);

  // Відображаємо книги на сторінці
  booksContainer.innerHTML = renderedBooks;
  console.log(renderedBooks);
}

async function displayTopBooks() {
  const booksPerRow = 5; // Задаємо кількість книг на рядок
  const topBooksContainer = document.querySelector('.books-box');

  // Отримуємо популярні книги
  const renderedBooks = await getTopBooks(booksPerRow);

  // Відображаємо книги на сторінці
  topBooksContainer.innerHTML = renderedBooks;
}
// Відображаємо популярні книги та категорії при завантаженні сторінки
displayTopBooks();
displayCategories();
