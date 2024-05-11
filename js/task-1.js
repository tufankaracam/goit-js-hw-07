const categoriesUI = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesUI.children.length}`);

for (const child of categoriesUI.children) {
  console.log(`Category: ${child.querySelector("h2").textContent}`);
  console.log(`Elements: ${child.querySelector("ul").children.length}`);
}
