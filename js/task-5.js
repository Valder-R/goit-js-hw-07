function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("button.change-color");

button.addEventListener("click", (event) => {
  const newColor = getRandomHexColor();
  const body = document.querySelector("body");
  const spanColor = document.querySelector("span.color");
  body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
})