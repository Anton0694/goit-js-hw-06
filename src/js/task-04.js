const counterEl = document.querySelector('#counter')
const counterValue = document.querySelector('#value')
let count = 0;
function btnDecr(event) {
    event.currentTarget.value -= 1;
    counterValue.textContent = event.currentTarget.value;
}

function btnIncr(event) {
    event.currentTarget.value = count;
    count += 1; 
    
    /* console.log(counterValue.textContent); */
    counterValue.textContent = event.currentTarget.value;
}

counterEl.firstElementChild.addEventListener('click', btnDecr);
counterEl.lastElementChild.addEventListener('click', btnIncr);