const quantityCat = document.querySelectorAll(".item");
console.log("Number of categories:", quantityCat.length);

quantityCat.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});

