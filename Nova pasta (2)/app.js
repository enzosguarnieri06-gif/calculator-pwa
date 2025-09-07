[00:50, 07/09/2025] Enzo Rodrigues: const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let lastInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    const buttonContent = button.textContent;

    if (action === 'clear') {
      currentInput = '';
      display.value = '';
    } else if (action === 'backspace') {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (action === 'operator') {
      if (currentInput === '') return;
      const lastChar = currentInput.slice(-1);
      if ('+-*/'.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + buttonC…
[08:32, 05/09/2025] Enzo Rodrigues: {
  "name": "Calculadora PWA",
  "short_name": "CalcPWA",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#239bc0ff",
  "theme_color": "#4c5eafff",
  "description": "Uma calculadora simples como Progressive Web App",
  "icons": [
    {
      "src": "icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}