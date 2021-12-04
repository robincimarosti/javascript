"use strict"

/*******************
 * VARIABLES
 *******************/
let list = [];



/*******************
 * FONCTIONS
 *******************/
//ajouter des produit a la liste 
function addProducts() {
    let product = document.querySelector("#toAdd").value.toLowerCase();
   
    list.push(product);
    
    console.log(product);
    console.log(list);
    displayList();
}
//fonction affiche la liste de course avec un compteur 
 function count() {
    document.querySelector("h2").textContent = "la liste contient" + list.length + "produit(s)"
}
// fonction pour afficher la liste
function displayList () {
    document.querySelector("h2").textContent = "la liste contient" + list.length + "produit(s)"
    //remplace par un tableau vide a chaque fois et du coup evite la répétition
    document.querySelector("ul").innerHTML = "";
   //ciblé la ul
    list.forEach((line) => {
        document
        .querySelector("ul")
        .insertAdjacentHTML("beforeend", `<li>${line}</li>`);

    }
    
    );
}
//fonction cacher la popup
function displayPopup() {
    document.querySelector("#popup").classList.toggle("hide");
  }

//fonction supprimer un aliment 
function deleteOne() {
        let product = document.querySelector("#toDelete").value;
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
 * CODE PRINCIPALE
 *******************/
 document.addEventListener("DOMContentLoaded", function(){
//code principal ici
document.querySelector("#submit").addEventListener("click", addProducts);
document.querySelector("#deleteOne").addEventListener("click", displayPopup);
document.querySelector("#btnDelete").addEventListener("click", deleteOne);


});
//ciblé la ul
    

