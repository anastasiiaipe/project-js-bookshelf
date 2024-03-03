async function loadPopularBooks() {
  try {
    const response = await fetch(
      'https://books-backend.p.goit.global/books/top-books'
    );
    if (!response.ok) {
      throw new Error('Ошибка загрузки книг');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Функция для отображения книг на странице
async function displayPopularBooks() {
  const booksContainer = document.querySelector('.books-box');
  booksContainer.innerHTML = ''; // Очищаем контейнер перед загрузкой книг

  // Загружаем популярные книги с сервера
  const books = await loadPopularBooks();

  // Если книги не найдены, показываем сообщение
  if (books.length === 0) {
    const message = document.createElement('p');
    message.textContent = 'Книги не найдены';
    booksContainer.appendChild(message);
    return;
  }

  // Создаем и добавляем блоки с книгами на страницу
  books.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('books-box');

    const image = document.createElement('img');
    image.src = book.image;
    image.alt = '';
    bookElement.appendChild(image);

    const overlay = document.createElement('div');
    overlay.classList.add('books-overlay');
    const overlayText = document.createElement('p');
    overlayText.classList.add('books-overlay-text');
    overlayText.textContent = 'quick view';
    overlay.appendChild(overlayText);
    bookElement.appendChild(overlay);

    const desc = document.createElement('div');
    desc.classList.add('books-box-desc');
    const title = document.createElement('p');
    title.classList.add('books-box-desc-title');
    title.textContent = book.title;
    desc.appendChild(title);
    const author = document.createElement('p');
    author.classList.add('books-box-desc-author');
    author.textContent = book.author;
    desc.appendChild(author);
    bookElement.appendChild(desc);

    booksContainer.appendChild(bookElement);
  });
}

// Обработчик события для кнопки "Home"
const homeLink = document.querySelector('.site-nav__link_active');
homeLink.addEventListener('click', displayPopularBooks);

// Вызываем функцию для отображения книг при загрузке страницы
document.addEventListener('DOMContentLoaded', displayPopularBooks);
