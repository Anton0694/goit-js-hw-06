function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  widgetEl: document.querySelector(".widget"),
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
  body: document.querySelector(".body"),
};
refs.button.addEventListener("click", onButtonName);
function onButtonName(event) {
  let colorRandomizer = getRandomHexColor();
  refs.span.textContent = colorRandomizer;
  document.body.style.backgroundColor = colorRandomizer;
}
