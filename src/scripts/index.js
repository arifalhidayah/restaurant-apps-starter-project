import '../styles/main.css';
import '../styles/responsive.css'

const menu = document.querySelector('#menu')
const drawer = document.querySelector('#drawer');
const main = document.querySelector('main');
const hero = document.querySelector('.hero');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open')
    event.stopPropagation()
})

hero.addEventListener('click', () => {
    drawer.classList.remove('open')
});

main.addEventListener('click', () => {
    drawer.classList.remove('open')
})