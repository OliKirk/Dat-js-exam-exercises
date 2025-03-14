"use strict";

let songs = [];
window.addEventListener("load", initApp);

async function initApp() {
  songs = await getSongs();
  console.log(songs);
  showSongs();
}

async function getSongs() {
  const response = await fetch("playlist.json");
  const data = await response.json();
  return data;
}

function showSongs() {
  for (const song of songs) {
    const html = /*html*/ `
<li>${song.artist} ${song.title} ${song.duration} <button>Remove</button></li> 
`;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
    document.querySelector("#songlist li:last-child button").addEventListener("click", () => removeSong(song));
  }
}

function removeSong(songToRemove) {
  console.log(songToRemove);
  songs = songs.filter((song) => song.title != songToRemove.title);
  showSongs();
}
