const hamburger_icon = document.querySelector('.hamburger_icon');
const nav_menu = document.querySelector('nav_menu');

hamburger_icon.addEventListener('click', () => {
  hamburger_icon.classList.toggle('active');
  nav_menu.classList.toggle('active');
});
