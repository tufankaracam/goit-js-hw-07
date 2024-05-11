const inputUI = document.querySelector("#name-input");
const outputUI = document.querySelector("#name-output");

inputUI.addEventListener("input", (event) => {
  if (event.target.value === "") {
    outputUI.textContent = "Anonymous";
    return;
  }
  outputUI.textContent = event.target.value;
});
