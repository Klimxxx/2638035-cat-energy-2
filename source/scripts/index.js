const menuButton = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');

mainNav.classList.add('main-nav--closed');

menuButton.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');
});

