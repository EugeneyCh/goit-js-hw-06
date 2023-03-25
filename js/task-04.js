let counterValue = 0;

const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const counterValueOutput = document.getElementById("value");


decrementBtn.addEventListener("click", handleDecrementButtonClick);
incrementBtn.addEventListener("click", handleIncrementButtonClick);

function handleDecrementButtonClick(event) {
  counterValue -= 1;
  const elem = (counterValueOutput.textContent = counterValue);
}
function handleIncrementButtonClick(event) {
  counterValue += 1;
  const elem = (counterValueOutput.textContent = counterValue);
}

console.log(counterValue);
