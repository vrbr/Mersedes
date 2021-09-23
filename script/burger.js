const menu = document.querySelector('.menu');
const burger = document.querySelector('.humburger-menu');

const toggleMenu = () => {
    menu.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => {
    toggleMenu();
})