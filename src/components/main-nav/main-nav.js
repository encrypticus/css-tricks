import './main-nav.scss';

const allLinks = document.querySelectorAll('.main-nav__item_has-child > .main-nav__link'); // все ссылки
const linksLvl_1 = document.querySelectorAll('.main-nav__item_has-child > .main-nav__link_level-1'); // ссылки 1го уровня
const linksLvl_2 = document.querySelectorAll('.main-nav__item_has-child > .main-nav__link_level-2'); // ссылки 2го уровня
const linksLvl_3 = document.querySelectorAll('.main-nav__item_has-child > .main-nav__link_level-3'); // ссылки 3го уровня
const linksLvl_4 = document.querySelectorAll('.main-nav__item_has-child > .main-nav__link_level-4'); // ссылки 4го уровня
const linksLvl_5 = document.querySelectorAll('.main-nav__item_has-child > .main-nav__link_level-5'); // ссылки 5го уровня

const sublists = document.querySelectorAll('.main-nav__item_has-child > .main-nav__link + .main-nav__list'); // все вложенные списки
const sublistsLvl_1 = document.querySelectorAll('.main-nav__list_level-1'); // главный список меню
const sublistsLvl_2 = document.querySelectorAll('.main-nav__item_has-child > .main-nav__link + .main-nav__list_level-2'); // вложенные списки 2го уровня
const sublistsLvl_3 = document.querySelectorAll('.main-nav__item_has-child > .main-nav__link + .main-nav__list_level-3'); // вложенные списки 3го уровня
const sublistsLvl_4 = document.querySelectorAll('.main-nav__item_has-child > .main-nav__link + .main-nav__list_level-4'); // вложенные списки 4го уровня
const sublistsLvl_5 = document.querySelectorAll('.main-nav__item_has-child > .main-nav__link + .main-nav__list_level-5'); // вложенные списки 5го уровня
const sublistsLvl_6 = document.querySelectorAll('.main-nav__item_has-child > .main-nav__link + .main-nav__list_level-6'); // вложенные списки 6го уровня


const { body } = document;
const { documentElement } = document;
const { forEach } = Array.prototype;

function isExistSubmenus(links = 0, sublists = 0) {
  return (links !== 0 && sublists !== 0);
}

// Для ссылкок 1го уровня
forEach.call(linksLvl_1, (link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    const thisSublist = this.nextElementSibling;

    forEach.call(sublists, (sublist) => {
      if (thisSublist !== sublist) sublist.classList.remove('main-nav__list_visible');
    });

    thisSublist.classList.toggle('main-nav__list_visible');
  });
});

// Для ссылок 2го уровня
if (isExistSubmenus(linksLvl_2, sublistsLvl_3)) {
  forEach.call(linksLvl_2, (link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      const thisSublist = this.nextElementSibling;

      forEach.call(sublistsLvl_3, (sublist) => {
        if (thisSublist !== sublist) sublist.classList.remove('main-nav__list_visible');
      });

      thisSublist.classList.toggle('main-nav__list_visible');
    });
  });
}

// Для ссылок 3го уровня
if (isExistSubmenus(linksLvl_3, sublistsLvl_4)) {
  forEach.call(linksLvl_3, (link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      const thisSublist = this.nextElementSibling;

      forEach.call(sublistsLvl_4, (sublist) => {
        if (thisSublist !== sublist) sublist.classList.remove('main-nav__list_visible');
      });

      thisSublist.classList.toggle('main-nav__list_visible');
    });
  });
}

// Для ссылок 4го уровня
if (isExistSubmenus(linksLvl_4, sublistsLvl_5)) {
  forEach.call(linksLvl_4, (link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      const thisSublist = this.nextElementSibling;

      forEach.call(sublistsLvl_5, (sublist) => {
        if (thisSublist !== sublist) sublist.classList.remove('main-nav__list_visible');
      });

      thisSublist.classList.toggle('main-nav__list_visible');
    });
  });
}

// Для ссылок 5го уровня
if (isExistSubmenus(linksLvl_5, sublistsLvl_6)) {
  forEach.call(linksLvl_5, (link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      const thisSublist = this.nextElementSibling;

      forEach.call(sublistsLvl_6, (sublist) => {
        if (thisSublist !== sublist) sublist.classList.remove('main-nav__list_visible');
      });

      thisSublist.classList.toggle('main-nav__list_visible');
    });
  });
}

// При клике на body и на html нужно закрыть все вложенные списки
documentElement.addEventListener('click', () => {
  forEach.call(sublists, (sublist) => {
    sublist.classList.remove('main-nav__list_visible');
  });
});

body.addEventListener('click', () => {
  forEach.call(sublists, (sublist) => {
    sublist.classList.remove('main-nav__list_visible');
  });
});
