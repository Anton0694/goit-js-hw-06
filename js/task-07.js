const textRef = document.querySelector(`#text`);
const inputRef = document.querySelector(`#font-size-control`);

inputRef.addEventListener(`input`, function () {
    textRef.style.fontSize = inputRef.value + "px";
});