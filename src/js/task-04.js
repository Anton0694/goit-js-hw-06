const counterEl = document.querySelector('#counter')
const counterValue = document.querySelector('#value')
let count = 0;
function btnDecr(event) {
    event.currentTarget.value = count;
    count -= 1; 
    counterValue.textContent = event.currentTarget.value;
    /* event.currentTarget.value -= 1;
    counterValue.textContent = event.currentTarget.value; */
}

function btnIncr(event) {
    event.currentTarget.value = count;
    count += 1; 
    counterValue.textContent = event.currentTarget.value;
}

counterEl.firstElementChild.addEventListener('click', btnDecr);
counterEl.lastElementChild.addEventListener('click', btnIncr);