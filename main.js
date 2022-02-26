const settingsButton = document.getElementById('settings-button');
const tools = document.getElementById('tools');
const wordInput = document.getElementById('word-input');
const coverageInput = document.getElementById('coverage-input');
const word = document.getElementById('word');
const blinder = document.getElementById('blinder');
const fontPicker = document.getElementById('font-picker');
let isSettingsShown = true;

settingsButton.addEventListener('click', () => {
  isSettingsShown = !isSettingsShown;
  if (isSettingsShown) {
    tools.style.display = 'flex';
  } else {
    tools.style.display = 'none';
  }
});

wordInput.addEventListener('input', () => {
  word.innerText = wordInput.value;
});

blinder.style.bottom = (100 - 56) + '%';
coverageInput.addEventListener('input', () => {
  const coverage = parseInt(coverageInput.value);
  blinder.style.bottom = (100 - coverage) + '%';
});

fontPicker.addEventListener('change', () => {
  word.style.fontFamily = `${fontPicker.value}, serif`;
});
