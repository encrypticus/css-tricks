import './burger.scss';

const burgers = document.querySelectorAll('.burger');

Array.prototype.forEach.call(burgers, (burger) => {
  burger.addEventListener('click', function () {
    this.classList.toggle('burger--active');
  });
});
