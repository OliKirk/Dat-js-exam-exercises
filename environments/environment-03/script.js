"use strict";

const product = {
  name: "kasse",
  price: 30,
  inStock: true,

  name: "box",
  price: 50,
  inStock: true,

  name: "bord",
  price: 100,
  inStock: false,
};

window.addEventListener("load", initApp);

function initApp() {
  showProducts();
}

function showProducts(listOfProducts) {
  for (const product of listOfProducts) {
    const html = /*html*/ `
        <li> ${product.name} ${product.price} ${product.inStock} </li>`;
    document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
  }
}
