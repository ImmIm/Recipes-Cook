# Recipes & Cook

This project is a final project of 7 month MASA program in Israel. This application idea is to get recipes to cook with all you've got in your fridge.
## Project materials and contacts:
- Figma: https://www.figma.com/file/kI8jgGkj6U6ZD7eA8DTC1r/Recipies%26Cook?node-id=2%3A2
- Trelo: https://trello.com/b/KECk6Qcp/recipiescook
- GitHub: https://github.com/ImmIm/Recipes-Cook
- GitHub Pages: https://immim.github.io/Recipes-Cook/
## Technology stack:
- HTML5
- CSS3
- JavaScript (ES6+)
- React js 17.0.2
- redux 7.2.8
- redux-thunk 2.4.1
- redux-toolkit 1.8.1
- React router 6.2.2
- Material UI 5.5.2
- Bootstrap Icons 1.8.1
- gh-pages 3.2.3
- react-lazy-load-image-component 1.5.4



Recipes & Cook
Техническое задание на разработку веб-сайта
О сайте
Общая информация
Сайте Recipes&Cook предназначен для поиска рецептов согласно выбранным ингредиентам. 
Практическая польза сайта:
Внесение разнообразия в рацион пользователя;
Облегчение задачи по поиску рецептов, подходящих только под имеющиеся ингредиенты;
Упрощение поиска рецептов согласно диете, аллергии, предпочтениям и иным ограничениям.

Сайты аналогичного направления:
Русскоязычные:
http://recepty-po-ingredientam.ru/
https://mnevkusno.ru/
Международные:
https://www.supercook.com/#/desktop
https://myfridgefood.com/
Учтены только те сайты, чьим основным (а не сопутствующим) направлением является поиск рецептов по ингредиентам.

Структура и логика сайта
В базовой версии сайт представляет собой следующую конструкцию:
Шапка сайта
Содержит в себе следующие элементы:
Эмблему сайта, при нажатии на которую юзер переходит на стартовую страницу;
Страницу поиска рецептов;
Страницу со списком всех рецептов;
Ссылку на регистрацию;
Ссылку на авторизацию;
Переход на светлую/темную тему;
Выбор языка.
Шапка остается доступна из любого места на сайте.

Стартовая страница:
Рассказывает пользователю, куда он попал и чем сайт может быть ему полезен. Содержит дополнительную кнопку, при нажатии на которую юзер переходит на страницу поиска рецептов.

Регистрация 
Представляет собой всплывающее окно поверх стартовой страницы. Содержит четыре обязательных поля – имя пользователя, е-мейл, пароль и повторение пароля. Если какое-либо поле не заполнено, юзер получит всплывающее уведомление-подсказку с просьбой заполнить все поля. Аналогичный механизм срабатывает в случае, если не совпадают пароли (текст подсказки меняется). При успешном прохождении регистрации информация о новом пользователе сохраняется.

Авторизация
Представляет собой всплывающее окно поверх стартовой страницы. Содержит два обязательных поля – е-мейл и пароль. При прохождении авторизации происходит сверка с имеющимися пользователями и, если такой пользователь существует, авторизация осуществляется. 

Страница поиска рецептов
Внутренняя структура:
Поле поиска ингредиентов с всплывающими подсказками;
Разворачивающиеся списки с предлагаемыми ингредиентами;
Кнопка поиска.
После выбора всех ингредиентов и нажатия кнопки, справа от меню формируется список рецептов, отвечающих запросам пользователя.

Страница со всеми имеющимися рецептами 
Возможна фильтрация по кухне/иным предпочтениям.

Требования к внешнему виду и дополнительным возможностям
Наличие адаптивной верстки – сайт должен быть одинаково удобен как для пользователя со смартфоном, так и для пользователя с компьютером;
Две темы – светлая и темная;
Навигация по сайту на двух языках (иврит и английский), с возможностью переключения из любого места;
Наличие дополнительных функций для зарегистрированного пользователя: возможность добавлять рецепты в избранное и оставлять комментарии.


