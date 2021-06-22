import './sass/main.scss';
import menu from './js/menu.json';
import menuTemplate from './templates/menu.hbs';

// Создание разметки меню по шаблону

const menuConteiner = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menu);
menuConteiner.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menu) {
  return menuTemplate(menu);
}

// Скрипт переключения и сохранения темы
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkBoxTheme = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

if (localStorage.theme === 'true') {
    body.classList.add(Theme.LIGHT, Theme.DARK);
    checkBoxTheme.checked = true

} else {
    localStorage.setItem('theme', false);
    body.classList.add(Theme.LIGHT)
}

checkBoxTheme.addEventListener('change', changeTheme);

function changeTheme(ev) {
localStorage.setItem('theme', ev.target.checked)

body.classList.toggle(Theme.DARK);
};
