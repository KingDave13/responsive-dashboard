const sideMenu = document.querySelector('aside');
const menuBtn =  document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', () => {
	sideMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
	sideMenu.classList.remove('show');
});

themeToggler.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme-variables');
})