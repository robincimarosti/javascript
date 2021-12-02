"use strict"; // utiliser le mode strict, permet de relever des erreurs pour structurer le code

/***************************
    * ORGANISER LE CODE EN JS :
***************************/

/**
 * 1.VARIBABLES
**/

/**
 * 2.FONCTIONS
**/

/**
 * 3.CODE PRINCIPAL
**/

/***************************
    * LES VARIABLES :
***************************/

//Déclaration de la variable (première etape essentielle car on ne peux pas utiliser une variable inexistante)
let maVariable;

//Affectation de valeur
maVariable = "toto";

maVariable = 22.5; //changement de valeur

console.log(maVariable, typeof maVariable); //voir ce que contient la var et sont type dans la console

maVariable = parseInt(maVariable)
console.log("pareseINT", maVariable, typeof maVariable);

maVariable = 22.5;
maVariable = parseFloat(maVariable)
console.log("parseFloat", maVariable, typeof maVariable);

//Type de données:

    //simples
    "toto" //texte - chaine de caractères - string
    2 //number
    true, false //boolean

    //complexe
    {} //objets
    [] //tableaux


//CONSTANTE
const MA_CONSTANTE ="valeur";


/**opérateurs =
    * addition : +
    * soustraction : -
    * division : /
    * multiplication : *
*/

/** 
    * <= inférieur ou égale à
    * >= supérieur ou égale à
    * > supérieur à
    * > inférieur à
    * != différent de
    * == compare la valeur de la donnée
    * === compare la valeur ET le type de la donnée
    * += concaténation
    * && ET
    * || OU
*/

let nb = 2;
nb = nb + 2;
console.log(nb);

//CONCATENATION
let mot = " choses";
let chaine = nb + mot;
console.log("Ma chaine de caractère vaut : " + chaine);

//Template string (altgr + 7)
console.log(`Je fait une concaténation entre ${nb} et${mot}, ce qui donne : ${chaine}`)

console.clear();

/***************************
    * EXEMPLE : CALCULATRICE DE TVA
***************************/

//Déclaration des var
const TAUX_TVA = 20;

let montantHT;
let montantTVA;
let montantTTC;

//Affectation de valeur
montantHT = 90;

//Calcul montant TVA
montantTVA = (montantHT * TAUX_TVA) / 100;

//Calcul montant TTC : HT + TVA
montantTTC = montantHT + montantTVA;
console.log(`Pour un montantHT de ${montantHT} €, nous payons un TTC de ${montantTTC} €. Le montant de la tva est donc de ${montantTVA} €`);

//Tableau
let weekDays = new Array();

weekDays = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
]

console.table(weekDays);

/***************************
    * LES BOUCLES :
***************************/


/***********
    * WHILE
*************/
  
console.log("------- WHILE -------");

let index = 0;
while (index < weekDays.length) {
    console.log(weekDays[index]);
    index++;
}
  
/***********
    * FOR
************/
console.log("------- FOR -------");

for (let i = 0; i < weekDays.length; i++) {
    console.log(weekDays[i]);
}
  
/***********
    * FOR...OF très utilisé pour naviguer dans un tableau sans index
*************/
console.log("------- FOR...OF -------");

for (let ligne of weekDays) {
    console.log(ligne);
}
  
/***********
    * FOREACH utilisé pour naviguer dans un tableau avec index
*************/
console.log("------- FOREACH -------");

weekDays.forEach(function (ligne, index) {
    console.log(ligne);
});

console.log("------- fonction fléchée -------");

weekDays.forEach((ligne, index) => console.log(ligne));


/***************************
    * LES FONCTIONS
***************************/

//Fonction simple :
function direCoucou(){
    let maVar = "coucou";
    console.log(maVar); //Existe que dans la fonction donc apparait que dans la focntion
}
//Autre écriture :
let uneFonction = function (){
    console.log("ok");
}
    

//Fonction avec parmètres :
function isEven(nb){ 
    let result = nb % 2;
    if(result == 1){
        console.log(nb + " est impair");
    }else{
        console.log(nb + " est pair");
    }
}

//Fonction avec parmètres et return:
function whatReste(nb, diviseur){
    let reste = nb % diviseur;
    return reste;
}

//Fonctions fléchées :
let maFonction = () => {
    console.log("fonction fléchée");
}

//Appel de fonctions :
direCoucou();
//uneFonction();
//maFonction();
isEven(99);

//Affichage :
let result = whatReste(598, 57);
alert("568 % 57 = " + result);

//Exemple :
const numbers = [2, 6, 52, 84, 75];
for (let nb of numbers){
    isEven(nb);
}

numbers.forEach((nb) => isEven(nb));
numbers.forEach(function (nb){
    isEven(nb);
});

for (let i = 0; i < numbers.length; i++){
    isEven(numbers[i]);
}