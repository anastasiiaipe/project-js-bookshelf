'use strict';

const loaderContainer = document.querySelector('.loader-container');

export function showLoader() {
  loaderContainer.classList.remove('visually-hidden');
}

export function hideLoader() {
  loaderContainer.classList.add('visually-hidden');
}

showLoader(); // Показати loader перед початком завантаження сторінки

window.addEventListener('load', () => {
  setTimeout(() => {
    hideLoader();
  }, 350);
});
