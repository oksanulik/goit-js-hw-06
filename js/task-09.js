function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

buttonChangeColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
});
