function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const txtNumber = document.querySelector("input[type='number']");
const uiBoxes = document.querySelector("#boxes");

const clearUI = () => {};

const createBoxes = (amount) => {
  console.log(amount);
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  uiBoxes.append(...boxes);
};

btnCreate.addEventListener("click", (e) => {
  if (txtNumber.value >= 1 && txtNumber.value <= 100) {
    uiBoxes.innerHTML = "";
    createBoxes(txtNumber.value);
    txtNumber.value = "";
  }
});

btnDestroy.addEventListener("click", (e) => {
  uiBoxes.innerHTML = "";
  txtNumber.value = "";
});
