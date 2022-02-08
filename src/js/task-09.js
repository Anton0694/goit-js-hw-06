function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('button');
const spanRef = document.querySelector('span');

buttonRef.addEventListener('click', onBodyColorChange);


function onBodyColorChange() {
  const newColor = getRandomHexColor();
  document.body.setAttribute('style', `background-color: ${newColor}`);
  spanRef.textContent = newColor;
};
