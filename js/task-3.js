const textImput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textImput.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() != 0) {
        output.textContent = event.currentTarget.value.trim();
    } else {
        output.textContent = "Anonymous";
    }
})
