"use strict";

let nb;
let randNb = parseInt(Math.floor(Math.random() * 100));
console.log(randNb);
 do {
  nb = parseInt(prompt("Choisir un nombre"));

  if (nb < randNb) {
      console.log('Plus');
  } else if (nb > randNb) {
      console.log('Moin');
  } else   {
      console.log("Gagné");
 }

  
 } while (isNaN(nb));

console.log(nb);
