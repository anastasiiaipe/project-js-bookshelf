# Vanilla App Template

Цей проект було створено за допомогою Vite. Для знайомства та налаштування
додаткових можливостей [звернись до документації](https://vitejs.dev/).

## Створення репозиторію за шаблоном

Використовуй цей репозиторій організації GoIT як шаблон для створення
репозиторію свого проекту. Для цього натисни на кнопку `«Use this template»` і
обери опцію `«Create a new repository»`, як показано на зображенні.

![Creating repo from a template step 1](./assets/template-step-1.png)

На наступному етапі відкриється сторінка створення нового репозиторію. Заповни
поле його імені, переконайся, що репозиторій публічний, після чого натисни
кнопку `«Create repository from template»`.

![Creating repo from a template step 2](./assets/template-step-2.png)

Після того, як репозиторій буде створено, необхідно перейти в налаштування
створеного репозиторію на вкладку `Settings` > `Actions` > `General` як показано
на зображенні.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Проскроливши сторінку до самого кінця, в секції `«Workflow permissions»` обери
опцію `«Read and write permissions»` і постав галочку в чекбоксі. Це необхідно
для автоматизації процесу деплою проекту.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Тепер у тебе є особистий репозиторій проекту, зі структурою файлів та папок
репозиторію-шаблону. Далі працюй з ним, як з будь-яким іншим особистим
репозиторієм, клонуй його собі на комп'ютер, пиши код, роби коміти та відправляй
їх на GitHub.

## Підготовка до роботи

1. Переконайся, що на комп'ютері встановлено LTS-версію Node.js.
   [Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.
2. Встанови базові залежності проекту в терміналі командою `npm install`.
3. Запусти режим розробки, виконавши в терміналі команду `npm run dev`.
4. Перейдіть у браузері за адресою
   [http://localhost:5173](http://localhost:5173). Ця сторінка буде автоматично
   перезавантажуватись після збереження змін у файли проекту.

## Файли і папки

- Файли розмітки компонентів сторінки повинні лежати в папці `src/partials` та
  імпортуватись до файлу `index.html`. Наприклад, файл з розміткою хедера
  `header.html` створюємо у папці `partials` та імпортуємо в `index.html`.
- Файли стилів повинні лежати в папці `src/css` та імпортуватись до HTML-файлів
  сторінок. Наприклад, для `index.html` файл стилів називається `index.css`.
- Зображення додавай до папки `src/img`. Збирач оптимізує їх, але тільки при
  деплої продакшн версії проекту. Все це відбувається у хмарі, щоб не
  навантажувати твій комп'ютер, тому що на слабких компʼютерах це може зайняти
  багато часу.

## Деплой

Продакшн версія проекту буде автоматично збиратися та деплоїтись на GitHub
Pages, у гілку `gh-pages`, щоразу, коли оновлюється гілка `main`. Наприклад,
після прямого пуша або прийнятого пул-реквесту. Для цього необхідно у файлі
`package.json` змінити значення прапора `--base=/<REPO>/`, для команди `build`,
замінивши `<REPO>` на назву свого репозиторію, та відправити зміни на GitHub.

```json
"build": "vite build --base=/<REPO>/",
```

Далі необхідно зайти в налаштування GitHub-репозиторію (`Settings` > `Pages`) та
виставити роздачу продакшн версії файлів з папки `/root` гілки `gh-pages`, якщо
це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплою

Статус деплою крайнього коміту відображається іконкою біля його ідентифікатора.

- **Жовтий колір** - виконується збірка та деплой проекту.
- **Зелений колір** - деплой завершився успішно.
- **Червоний колір** - під час лінтингу, збірки чи деплою сталася помилка.

Більш детальну інформацію про статус можна переглянути натиснувши на іконку, і в
вікні, що випадає, перейти за посиланням `Details`.

![Deployment status](./assets/deploy-status.png)

### Жива сторінка

Через якийсь час, зазвичай кілька хвилин, живу сторінку можна буде подивитися за
адресою, вказаною на вкладці `Settings` > `Pages` в налаштуваннях репозиторію.
Наприклад, ось посилання на живу версію для цього репозиторію

[https://goitacademy.github.io/vanilla-app-template/](https://goitacademy.github.io/vanilla-app-template/).

Якщо відкриється порожня сторінка, переконайся, що у вкладці `Console` немає
помилок пов'язаних з неправильними шляхами до CSS та JS файлів проекту
(**404**). Швидше за все у тебе неправильне значення прапора `--base` для
команди `build` у файлі `package.json`.

## Як це працює

![How it works](./assets/how-it-works.png)

1. Після кожного пуша у гілку `main` GitHub-репозиторію, запускається
   спеціальний скрипт (GitHub Action) із файлу `.github/workflows/deploy.yml`.
2. Усі файли репозиторію копіюються на сервер, де проект ініціалізується та
   проходить лінтинг та збірку перед деплоєм.
3. Якщо всі кроки пройшли успішно, зібрана продакшн версія файлів проекту
   відправляється у гілку `gh-pages`. В іншому випадку, у лозі виконання скрипта
   буде вказано в чому проблема.

API з книгами: https://books-backend.p.goit.global/api-docs/ Перелік категорій
книг https://books-backend.p.goit.global/books/category-list Популярні книги, що
належать до усіх категорій https://books-backend.p.goit.global/books/top-books
Книги окремої категорії
https://books-backend.p.goit.global/books/category?category=selectedCategory
Детальна інформація про книгу https://books-backend.p.goit.global/books/ bookId

## БАЗОВА ВЕРСІЯ (MVP - minimum viable product)

[Header] "Header включає mobile: логотип, перемикач теми та бургер-меню з
навігацією (Home, Shopping list) tablet&desktop: логотип, навігацію (Home,
Shopping list) та перемикач теми" Click по логотипу або Home відкриває головну
сторінку Click по Shopping list відкриває сторінку з переліком книг, доданих
користувачем у кошик Click по перемикачу теми змінює поточну тему сайту на
іншу(dark or light) Click по бургер-меню розгортає його на всю висоту viewport

[Home] "Home включає блок з переліком усіх категорій книг блок з переліком
благодійних фондів у вигляді вертикального слайдеру блок з переліком книг, що
належать до всіх категорій або до окремої категорії" При переході на сторінку
Home у блоці з переліком книг відмальовуються популярні книги, розділені по
категоріях. Якщо таких книг не знайдено, необхідно показати відповідне
повідомлення користувачу Зверстати шаблон картки однієї книги Click по будь-якій
категорії повинен відмальовувати у блоці з переліком книг книги, які належать до
цієї категорії. Якщо таких книг не знайдено, необхідно показати відповідне
повідомлення користувачу "Click по логотипу будь-якого благодійного фонду
повинен відкривати його оригінальний ресурс в окремій вкладці браузера. Лого
компаній реалізувати як контентні зображення у форматі png. Для стилізації
виористовуйте filter: brightness(0) invert(1).

Масив благодійних фондів міститься праворуч =>" "[ { title: 'Save the Children',
url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
img: null, }, { title: 'Project HOPE', url:
'https://www.projecthope.org/country/ukraine/', img: null, }, { title:
'UNITED24', url: 'https://u24.gov.ua/uk', img: null, }, { title: 'International
Medical Corps', url: 'https://internationalmedicalcorps.org/country/ukraine/',
img: null, }, { title: 'Medicins Sans Frontieres', url:
'https://www.msf.org/ukraine', img: null, }, { title: 'RAZOM', url:
'https://www.razomforukraine.org/', img: null, }, { title: 'Action against
hunger', url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
img: null, }, { title: 'World vision', url:
'https://www.wvi.org/emergencies/ukraine', img: null, }, { title: 'Serhiy
Prytula Charity Foundation', url: 'https://prytulafoundation.org/en', img: null,
}, ]" Click по кнопці See more, закріпленою за кожною категорією, повинен
відмальовувати у блоці з переліком книг книги, які належать до цієї категорії.
Якщо таких книг не знайдено, необхідно показати відповідне повідомлення
користувачу Click по будь-якій книзі повинен відкривати модальне вікно з
детальною інформацією про цю книгу

[Modal window]

"Modal window з детальною інформацією про книгу включає зображення обгортки цієї
книги назву книги її автора короткий опис змісту книги перелік посилань на
торгівельні майданчики, де цю книгу можна придбати та кнопку додавання книги до
Shopping list або видалення з нього" "Click по логотипу торгівельного майданчика
повинен відкривати його оригінальний ресурс в окремій вкладці браузера, де
користувач матиме змогу придбати цю книгу. Для стилізації використовуйте:

- filter: grayscale(100%) - світла тема, звичайний стан
- filter: drop-shadow(0px 3px 3px rgba(0,0,0,.35)) - світла тема, стан hover
- filter: grayscale(100%) - темна тема, звичаний стан (для Apple Books)
- filter: brightness(0) invert(1) - темна тема, звичайний стан (для Amazon)
- filter: drop-shadow(0px 3px 3px rgba(255, 255, 255, 0.35)) - темна тема, стан
  hover" Click по кнопці додавання книги до Shopping list або видалення з нього
  повинен оновлювати інформацію про list, яка повинна зберігатися в localStorage
  Якщо модальне вікно відкрите, контент на його фоні не повинен скролитись.
  Click по backdrop модального вікна, click по кнопці з іконкою хрестика або
  натискання на клавішу ESC повинен закривати модальне вікно (не забувайте
  знімати слухачі)
