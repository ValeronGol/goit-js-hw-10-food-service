const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

if (localStorage.theme === 'true') {
    body.classList.add(Theme.LIGHT, Theme.DARK);
    themeSwitchToggle.checked = true

} else {
    localStorage.setItem('theme', false);
    body.classList.add(Theme.LIGHT)
}

themeSwitchToggle.addEventListener('change', themeControl);

function themeControl(ev) {
localStorage.setItem('theme', ev.target.checked)

body.classList.toggle(Theme.DARK);
};
