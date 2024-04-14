import '../styles/main.scss';
import '../styles/responsive.scss'
import restaurants from '../public/data/DATA.json'
import createArticle from './components/article.js'

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

const postsContainer = document.querySelector('.posts')
restaurants.forEach(articleData => {
const { name, pictureId, categories, city, description } = articleData;
  const article = createArticle(name, pictureId, categories, city, description);
  postsContainer.appendChild(article);
});
