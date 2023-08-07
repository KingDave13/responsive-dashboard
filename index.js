const sideMenu = document.querySelector('aside');
const menuBtn =  document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector(".themeToggler");

menuBtn.addEventListener('click', () => {
	sideMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
	sideMenu.classList.remove('show');
});

