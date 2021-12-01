"use strict";
let user;
do {
  user = prompt("Que choisissez-vous ?\n 1. Pierre, 2. Feuille, 3. Ciseaux").toLowerCase();
} while (
    user != "pierre"&&
     user != "feuille"&&
     user != "ciseaux"
     );
console.log(user);