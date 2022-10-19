let hamburgerIcon = document.querySelector('.hamburger_icon');
let navMenu = document.querySelector('.nav_menu');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav_link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburgerIcon.classList.remove('active');
    navMenu.classList.remove('active');
  })
);
