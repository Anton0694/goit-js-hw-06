const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", formCheck);
function formCheck(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email.length || password.length === 0) {
        alert('Заповніть всі поля');
        return;
    }
    const formData = {
        email.length === 0,
        password,
    };

    console.log(formData)

    formEl.reset();
};
