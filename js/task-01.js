const categoriesEl = document.querySelectorAll(".item");

console.log("Number of categories: ", categoriesEl.length);

categoriesEl.forEach((item) => {
  const titleEl = item.firstElementChild.textContent;
  const lengthEl = item.lastElementChild.children.length;
  console.log("Category: ", titleEl);
  console.log("Elements: ", lengthEl);
});
