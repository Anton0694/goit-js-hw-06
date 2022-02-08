const refs = {
    input : document.querySelector("#name-input"),
    output : document.querySelector("#name-output"),
}


refs.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
    } else {
        output.textContent = event.currentTarget.value;
    };

};

