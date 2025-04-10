const toggle = document.getElementById('mode-toggle');
const root = document.documentElement;

alert("If you are on mobile, use desktop site!");

function applyTheme(darkMode) {
  if (darkMode) {
    root.style.setProperty('--white', '#111');
    root.style.setProperty('--text', '#fff');
    root.style.setProperty('--cyan', '#008b8b');
    root.style.setProperty('--pink', '#c71585');
    root.style.setProperty('--gold', '#b8860b');
  } else {
    root.style.setProperty('--white', '#ffffff');
    root.style.setProperty('--text', '#000000');
    root.style.setProperty('--cyan', '#00d4ff');
    root.style.setProperty('--pink', '#ff9ee6');
    root.style.setProperty('--gold', '#ffd700');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  toggle.checked = isDarkMode;
  applyTheme(isDarkMode);
});


toggle.addEventListener('change', () => {
  const isChecked = toggle.checked;
  localStorage.setItem('darkMode', isChecked);
  applyTheme(isChecked);
});
