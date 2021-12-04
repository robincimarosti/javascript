"use strict";

/******************
 * VARIABLES
 *******************/
let meals = [
    "fondue bourguignone", 
    "Couscous", 
    "poké bowl", 
    "pizza", 
    "frites", 
    "courgettes", 
    "falafels", 
    "raclette", 
    "puré", 
    "pâtes roquefort"];
// variable qui permettra de verifié si on peux push ou pas 
 let canPush = true; 

/******************
 * FONCTIONS
 *******************/
//afficher la liste de repas dans le HTML
function displayMeals() {
    document.querySelector("#meals").innerHTML = `<h3>il y a ${meals.length} repas dans le menue</h3> <ul></ul>`;
     meals.forEach( function(food) {
        let li = document.createElement("li")
        document.querySelector("#meals ul").appendChild(li)
        li.innerHTML = `<p>${food}</p>`
        
    });
}
//afficher le nombre de repas dans le menue 
function numberMeals(){
    div.innerHTML = "<h3>meals.length</h3>"
}


//'ajouter des éléments dans le tableau de plats
function addMeals() {
    let meal = document.querySelector("#prompt").value.toLowerCase();
    meals.forEach((line) => {
        /*condition qui parcours le tableau pour savoir 
        si chaque les valeur du tableau son differente de la valeur 
        inscrite dans le input*/
        if (meal == line) {
            alert(meal + " existe déja dans le menue.");
            canPush =false;
       }
    } )
    //condition pour si il n'y as rien d'écrit dans la popup
    if (meal=="") {
        alert("vous n avez ajoutez aucun repas dans le menue")
        canPush = false;
    };
    // push le repas si la variable canPush est respecté
    if(canPush) {
        meals.push(meal);
        alert(meal + " à bien été ajouté au menue.")
    displayMeals()
    }   
}
 
/******************
 * CODE PRINCIPAL
 *******************/
 document.addEventListener("DOMContentLoaded", function () {
//code principal ici
document.querySelector("#submit").addEventListener("click", addMeals);
displayMeals();


 });