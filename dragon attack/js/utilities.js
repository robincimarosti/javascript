"use strict"

/****************
 * Fonction universelle
 *****************/
//demande à l'utilisateur de saisir un nombre
 function requestInteger(message, min, max){
    let nb;
    do {
        nb = parseInt(prompt(message,1));
    } while ( isNaN(nb) ||
    nb < min ||
    nb > max 
    );
    return nb;
}

//retourne un nombre entier aléatoire compris entre un minimum et un maximum
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


