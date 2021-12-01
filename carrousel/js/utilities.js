"use strict"

/*******************
 * FONCTIONS
 *******************/

/**
 * Retourne un nombre entier aléatoire compris entre un minimum et un maximum
 * @param {number} min
 * @param {number} max
 * @returns nombre aléatoire
 */
 function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  