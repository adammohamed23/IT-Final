const themeLink = document.getElementById('light-theme-link');
const themeToggle = document.getElementById('theme-toggle');

function updateThemeToggle() {
  const enabled = !themeLink.disabled;
  themeToggle.textContent = enabled ? 'Light Theme Off' : 'Light Theme On';
}

const savedDisabled = localStorage.getItem('lightThemeDisabled');
if (savedDisabled !== null) {
  themeLink.disabled = savedDisabled === 'true';
}
updateThemeToggle();

themeToggle.addEventListener('click', () => {
  themeLink.disabled = !themeLink.disabled;
  localStorage.setItem('lightThemeDisabled', themeLink.disabled);
  updateThemeToggle();
});