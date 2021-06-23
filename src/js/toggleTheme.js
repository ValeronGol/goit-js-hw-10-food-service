const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

function currentTheme() {
  if (localStorage.theme === 'true') {
    body.classList.add(Theme.DARK);
    themeSwitchToggle.checked = true;
  }
}

themeSwitchToggle.addEventListener('change', themeControl);

function themeControl(ev) {
  localStorage.setItem('theme', ev.target.checked);

  body.classList.toggle(Theme.DARK);
}
currentTheme();
