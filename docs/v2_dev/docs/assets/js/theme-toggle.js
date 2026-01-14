// theme-toggle.js – toggles light/dark mode and stores preference
const toggle = document.getElementById('theme-toggle');
if (toggle) {
  const current = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', current);
  toggle.textContent = current === 'dark' ? 'Light Mode' : 'Dark Mode';

  toggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggle.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
  });
}
