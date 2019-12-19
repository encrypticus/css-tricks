import './main-nav.scss';

const links = document.querySelectorAll('.main-nav__item_has-child > .main-nav__link');
const sublists = document.querySelectorAll('.main-nav__item_has-child > .main-nav__link + .main-nav__list');
const { body } = document;
const { documentElement } = document;
const { forEach } = Array.prototype;

forEach.call(links, (link) => {
  link.addEventListener('click', function (event) {
    event.stopPropagation();
    event.preventDefault();

    const thisSublist = this.nextElementSibling;
    const parentSublist = thisSublist.parentElement.parentElement;
    const parentSublistLvl4 = thisSublist.parentElement.parentElement;
    console.log(thisSublist);
    console.log(parentSublist);

    forEach.call(sublists, (sublist) => {
      if (thisSublist !== sublist && parentSublist !== sublist && parentSublistLvl4 !== parentSublist) sublist.classList.remove('main-nav__list_visible');
    });

    thisSublist.classList.toggle('main-nav__list_visible');
  });
});

body.addEventListener('click', (event) => {
  forEach.call(sublists, (sublist) => {
    sublist.classList.remove('main-nav__list_visible');
  });
});

documentElement.addEventListener('click', (event) => {
  forEach.call(sublists, (sublist) => {
    sublist.classList.remove('main-nav__list_visible');
  });
});

// Сделать изменения, вообще все переделать. Есть идеи, но как всегда нет времени все реализоватьa
