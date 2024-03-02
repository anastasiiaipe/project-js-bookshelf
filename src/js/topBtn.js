// Функція, яка прокручує сторінку на початок
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const scrollToTopBtn = document.querySelector('.top-btn');
scrollToTopBtn.style.display = 'none';

// Показати кнопку, коли користувач прокрутив сторінку
window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    scrollToTopBtn.style.display = 'inline-flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Встановлення обробника подій для кнопки
scrollToTopBtn.addEventListener('click', scrollToTop);
