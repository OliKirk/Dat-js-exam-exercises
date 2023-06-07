import { teachers } from "./teachers.js";

window.addEventListener("load", initApp);

function initApp() {
  showTeachers(teachers);
  sortByName(teachers);
  sortByEmail(teachers);
}

function showTeachers(teachers) {
  document.querySelector("#teachers-list").innerHTML = "";
  for (const teacher of teachers) {
    const html = /*html*/ `
    <li>${teacher.name} ${teacher.email}</li>`;
    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", html);
  }
}

// sort funktion virker kun hvert for sig. så husk at udkomenter for at se om de virker
function sortByName() {
  teachers.sort((a, b) => a.name.localeCompare(b.name));
  showTeachers(teachers);
}

function sortByEmail() {
  teachers.sort((a, b) => a.email.localeCompare(b.email));
  showTeachers(teachers);
}
