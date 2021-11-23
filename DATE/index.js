"use strict";

let weekDays = new Array();
weekDays[0] = "dimanche";
weekDays[1] = "lundi";
weekDays[2] = "mardi";
weekDays[3] = "mercredi";
weekDays[4] = "jeudi";
weekDays[5] = "vendredi";
weekDays[6] = "samedi";

weekDays = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];

let month = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "decembre", 
]
//n'afficher que mercredi
let today = new Date();
let datechiffre =today.getDate();
let dayIndex = today.getDay();
let monthIndex = today.getMonth();
let year = today.getFullYear();

const DIV = document.querySelector("#content");
DIV.innerHTML= `<p>${weekDays[dayIndex]} ${datechiffre} ${month[monthIndex]} ${year}</p>`;

