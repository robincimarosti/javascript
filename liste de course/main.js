"use strict"

/*******************
 * FONCTIONS
 *******************/
 function addItem(item){
    liste.push(item);
}

/*******************
 * VARIABLES
 *******************/
 let liste = new Array(); //tableau qui contiendra notre liste de courses

 




/*******************
 * CODE PRINCIPAL
 *******************/
 addItem("Fraises");
 addItem("Poulet");
 addItem("Tournevis");
 addItem("Artichaut");
 addItem(
    prompt(
      "Quel produit souhaitez-vous ajouter à la liste ?"
    )
  );