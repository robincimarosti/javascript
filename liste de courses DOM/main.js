"use strict"

/*******************
 * VARIABLES
 *******************/
let list = [];



/*******************
 * FONCTIONS
 *******************/
function addProduct () {
    let product = document.querySelector("#toAdd").value;
    list.push(product);
    console.log(list)
};
//supprimer un produit
function deleteProduct() {
    (document.querySelector("#popup").classList.remove("hide"));
    
    let product = document.querySelector("#toDelete").value;
    list.forEach(line) => {
        if(line==item) {
            console.log("le produit existe déjà");
        } else {
            console.log("le produit n'est pas dans la liste")
        }
        
    list.splice(product)
}

function deleteList() {
    list.splice(0);
    console.log(list)
};


/*******************
 * CODE PRINCIPALE
 *******************/

document
    .querySelector("#submit")
    .addEventListener("click", addProduct);

document
    .querySelector("#delete")
    .addEventListener("click", deleteList);

document
    .querySelector("#deleteOne")
    .addEventListener("click", deleteProduct)

