const body = document.querySelector('body');
const btn = document.querySelector('.bmbtn');
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const navItems = document.querySelector('.nav__items');

btn.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu-open');
  body.classList.toggle('scroll-hidden');
  nav.classList.toggle('nav-in-burger');
  nav.classList.toggle('nav');
  navItems.classList.toggle('nav-items-in-burger');
  navItems.classList.toggle('nav__items');
});
