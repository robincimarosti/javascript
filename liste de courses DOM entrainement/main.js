"use strict"

/*******************
 * VARIABLES
 *******************/
let list = [];


/*******************
 * FONCTIONS
 *******************/
/*
*fonction qui permet d'ajouter un produit à la liste 
*/
function addItem(){
  let item = document.querySelector("#toAdd").value;
  list.push(item);
  console.log(item);
  displayList();
}
/*
*fonction qui affiche la liste de course dans l'UL
*/
function displayList() {
//afficher la taille de la liste 
document.querySelector("h2").textContent = "la liste de contient " + list.length +" produit(s)";
// pas de repetition de la liste de course
document.querySelector("ul").innerHTML = "";
//pour parcourrir un tableau toujours une boucle 
  list.forEach((line) => {
    document.querySelector("ul").insertAdjacentHTML("beforeend", `<li>${line}</li>`);
    }
  );
}

/*
*fonction qui affiche la popup 
*/
function displayPopup(){
  document.querySelector("#popup").classList.toggle("hide")
  
};

/*
*fonction qui supprime 1 element 
*/
function deleteOne() {
  let product = document.querySelector("#toDelete").value
  let index = list.indexOf(product);
        console.log(product);
        if (index == -1) {
          alert("ERREUR : le produit " + product + " n'existe dans la liste de courses.");
         return;
        }
        
        list.splice(index, 1);
        displayList();
        displayPopup();
      }



/*******************
 * CODE PRINCIPAL
 *******************/
 document.addEventListener("DOMContentLoaded", function(){
//code principal ici
document.querySelector("#submit").addEventListener("click", addItem);
document.querySelector("#deleteOne").addEventListener("click", displayPopup);
document.querySelector("#popup span").addEventListener("click", displayPopup);
document.querySelector("#btnDelete").addEventListener("click", deleteOne);
});

    

