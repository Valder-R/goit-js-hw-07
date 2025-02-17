function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const container = document.querySelector("#boxes");
  const boxes = [];
  for (let i = 0; i < amount; i++){
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = `${30+10*i}px`;
    box.style.width = `${30 + 10 * i}px`;
    boxes.push(box);
  }
  container.append(...boxes);
}

function destroyBoxes() {
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = "";
}

const createButton = document.querySelector("button[data-create]");

createButton.addEventListener("click", (event) => {
  const inputField = document.querySelector("#controls > input");
  if (inputField.value > 0 && inputField.value <= 100) {
    destroyBoxes()
    createBoxes(inputField.value);
  } else {
    alert(`Number should be from 1 to 100`);
    inputField.value = "";
  }
});


const destroyButton = document.querySelector("button[data-destroy]");

destroyButton.addEventListener("click", (evemt) => {
  destroyBoxes()
});