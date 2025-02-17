const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const inputEmail = event.target.elements.email.value;
    const inputPass = event.target.elements.password.value;
    if (inputEmail.trim() === "" || inputPass.trim() === "") {
        alert('All form fields must be filled in');
    } else {

        const results = {
            email: inputEmail.trim(),
            password: inputPass.trim(),
        };

        console.log(results);
        form.reset();
    }
});
