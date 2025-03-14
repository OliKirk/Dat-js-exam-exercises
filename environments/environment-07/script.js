"use strict";

window.addEventListener("load", initApp);

const songs = {
  artist: "Taylor Swift",
  title: "Blank space",
  duration: "4:33",
  artist: "Beastie Boys",
  title: "Sabotage",
  duration: "3:02",
  artist: "Skrillex",
  title: "Bangarang",
  duration: "3:35",
  artist: "Wolfgang Amadeus Mozart",
  title: "Eine kleine Nachtmusik",
  duration: "5:45",
  artist: "Coldplay",
  title: "Yellow",
  duration: "4:27",
  artist: "Metallica",
  title: "Enter Sandman",
  duration: "5:32",
};

function initApp() {
  console.log(songs);
  listOfSongs();
}

function listOfSongs(songs) {
  for (const song of songs) {
    console.log(songs);
  }
}
