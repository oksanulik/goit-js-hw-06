const inputEl = document.getElementById("validation-input");
console.log(inputEl);

inputEl.addEventListener("blur", () => {
  const maxSymbol = parseInt(inputEl.getAttribute("data-length"));
  const inputVal = inputEl.value.length;

  if (inputVal === maxSymbol) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
