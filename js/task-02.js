const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("ul");
const products = ingredients.map((product) => {
  const productEl = document.createElement("li");
  productEl.textContent = product;
  productEl.classList.add("item");

  return productEl;
});

ingredientsList.append(...products);
