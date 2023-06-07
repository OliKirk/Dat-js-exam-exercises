// ==================================== exersice 06 ===============================================

// "use strict";

// window.addEventListener("load", initApp);

// function initApp() {
//   showProducts(products);
//   document.querySelector("#create-form").addEventListener("submit", createProduct);
// }

// const products = [
//   {
//     name: "computer",
//     price: 10000,
//     inStock: true,
//   },
//   {
//     name: "playstation 5",
//     price: 5000,
//     inStock: false,
//   },
//   {
//     name: "xbox serios x",
//     price: 4500,
//     inStock: true,
//   },
// ];

// function showProducts(products) {
//   document.querySelector("#list-container").innerHTML = "";
//   for (const product of products) {
//     if (product.inStock === true) {
//       const html = /*html*/ `
//         <li>${product.name} ${product.price} ${product.inStock}</li>`;
//       document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
//     }
//   }
// }

// function createProduct(event) {
//   event.preventDefault();

//   const name = document.querySelector("#product-name").value;
//   const price = Number(document.querySelector("#product-price").value);
//   const inStock = document.querySelector("#stock").checked;

//   const newProduct = { name: name, price: price, inStock: inStock };
//   products.push(newProduct);
//   showProducts(products);
// }

// ==================================== exersice 07 ===============================================

// "use strict";

// window.addEventListener("load", initApp);

// const products = [
//   {
//     name: "computer",
//     price: 10000,
//     inStock: true,
//   },
//   {
//     name: "playstation 5",
//     price: 5000,
//     inStock: false,
//   },
//   {
//     name: "xbox serios x",
//     price: 4500,
//     inStock: true,
//   },
// ];

// function initApp() {
//   showProducts(products);
//   document.querySelector("#create-form").addEventListener("submit", createProduct);
// }

// function showProducts(products) {
//   document.querySelector("#list-container").innerHTML = "";
//   products.sort((a, b) => b.inStock - a.inStock);
//   for (const product of products) {
//     const html = /*html*/ `
//     <li>${product.name} ${product.price} ${product.inStock}</li>`;
//     document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
//   }
// }

// function createProduct(event) {
//   event.preventDefault();

//   const name = document.querySelector("#product-name").value;
//   const price = document.querySelector("#product-price").value;
//   const inStock = document.querySelector("#stock").checked;

//   const newProduct = { name: name, price: price, inStock: inStock };
//   products.push(newProduct);
//   showProducts(products);
// }

// ==================================== exersice 08 ===============================================

// "use strict";

// window.addEventListener("load", initApp);

// const products = [
//   {
//     name: "computer",
//     price: 10000,
//     inStock: true,
//   },
//   {
//     name: "playstation 5",
//     price: 5000,
//     inStock: false,
//   },
//   {
//     name: "xbox serios x",
//     price: 4500,
//     inStock: true,
//   },
// ];

// function initApp() {
//   showProducts(products);
//   document.querySelector("#select-sort-by").addEventListener("change", sortByProducts);
// }

// function showProducts(products) {
//   document.querySelector("#list-container").innerHTML = "";
//   for (const product of products) {
//     const html = /*html*/ `
//         <li>${product.name} ${product.price} ${product.inStock}</li>`;
//     document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
//   }
// }

// function sortByProducts() {
//   const sortBy = document.querySelector("#select-sort-by").value;

//   if (sortBy === "name") {
//     products.sort((a, b) => a.name.localeCompare(b.name));
//   } else if (sortBy === "price") {
//     products.sort((a, b) => a.price - b.price);
//   } else if (sortBy === "inStock") {
//     products.sort((a, b) => a.inStock - b.inStock);
//   }
//   showProducts(products);
// }
