const inputSizeChange = document.getElementById("font-size-control");
const textContent = document.getElementById("text");
inputSizeChange.addEventListener("change", changeTextSize);
function changeTextSize(event) {
  textContent.style.fontSize = inputSizeChange.valueAsNumber + "px";
}
