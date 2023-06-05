// ==================================== exersice 01 ===============================================
// "use strict";

// window.addEventListener("load", initApp);

// let usersGlobal = [];

// async function initApp() {
//   usersGlobal = await getUsers();
//   displayUsers(usersGlobal);
// }

// async function getUsers() {
//   const response = await fetch("users.json");
//   const data = await response.json();
//   return data;
// }

// function displayUsers(listOfUsers) {
//   for (const user of listOfUsers) {
//     if (user.role === "admin") {
//       const html = /*html*/ `
//             <li>${user.name} (${user.role}), active: ${user.active}</li>
//         `;
//       console.log(html);
//       document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
//     }
//   }
// }

// ==================================== exersice 02 ===============================================

// "use strict";

// let globalUsers = [];

// window.addEventListener("load", initApp);

// async function initApp() {
//   console.log("Vi virker");
//   globalUsers = await getUsers();
//   displayUsers(globalUsers);
//   displayRoleCouint();
// }

// async function getUsers() {
//   const reponse = await fetch("users.json");
//   const data = reponse.json();
//   return data;
// }

// function displayUsers(listOfUsers) {
//   for (const user of listOfUsers) {
//     const html = /*html*/ `
//     <li>${user.name} ${user.role} ${user.active} </li>`;
//     document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
//   }
// }

// function displayRoleCouint(users) {
//   const admin = globalUsers.filter((user) => user.role === "admin");
//   document.querySelector("#admin-count").textContent = admin.length;
//   const user = globalUsers.filter((user) => user.role === "user");
//   document.querySelector("#user-count").textContent = user.length;
//   const guest = globalUsers.filter((user) => user.role === "guest");
//   document.querySelector("#guest-count").textContent = guest.length;
// }
