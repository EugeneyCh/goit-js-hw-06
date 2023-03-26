function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", onChangeColor);
const bgBody = document.querySelector("body");
const span = document.querySelector(".color");

function onChangeColor(event) {
  const randomColor = getRandomHexColor();
  bgBody.style.background = randomColor;
  span.textContent = `${randomColor}`;
}
