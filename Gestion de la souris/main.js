"use strict"
/*********************
 *  Fontions
 *********************/
/**
 * Cacher ou afficher le rectangle
 */
function toggleRectangle(){
    rectangle.classList.toggle("hide");
};
/**
 * Ajoute la classe good sur le rectangle
 */
function becomeBeige() {
    rectangle.classList.add("good");
}
/**
 * Ajoute la classe important sur le rectangle
 */
function becomeRed(){
    rectangle.classList.add("important");
}
/**
 * supprimes les classes du rectangle
 */
function becomeBlue(){
    rectangle.classList.remove("important", "good");
}
/*********************
 *  CODE PRINCIPAL
 *********************/

let rectangle = document.querySelector(".rectangle");
//cibler le bouton #toggle-rectangle -<click -< appelle toogle Rectangle
document
    .querySelector("#toggle-rectangle")
    .addEventListener("click", toggleRectangle);

//sur le rectangle => quand la souris entre dans le rectangle
rectangle.addEventListener("mouseover", becomeRed);

//sur le rectangle =>quand la souris sors du rectangle 

rectangle.addEventListener("mouseout", becomeBlue);

//sur le rectangle => au double click il devien beige
rectangle.addEventListener("dblclick",becomeBeige);