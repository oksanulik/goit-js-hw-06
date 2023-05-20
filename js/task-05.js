const nameInput = document.querySelector("#name-input");
const nameOuput = document.querySelector("#name-output");

nameInput.addEventListener("input", onInput);

function onInput(event) {
  if (nameInput.value.trim() === "") {
    nameOuput.textContent = "Anonymous";
  } else {
    nameOuput.textContent = nameInput.value;
  }
}
