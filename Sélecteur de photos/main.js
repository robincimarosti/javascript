"use strict";
let count = 0
/*****************
 * FONCTIONS
 ****************/
/*quand on vas clicker sur tout selectionner 
toutes les photos seront selectionner*/
function selectAll() {
    console.log("click ok");
};
//quand on vas selectionner la photo elle deviens bleu
function selectOne() {
    this.classList.toggle("selected");

    if (this.classList.contains("selected")) {
        count++;
    } else {
        count--;
    }
document.querySelector("#total em").textContent = count;
}






/*****************
 * CODE PRINCIPAL
 ****************/
const photos = document.querySelectorAll(".photo-list li");

// selection individuel

photos.forEach((li) => li.addEventListener("click", selectOne)
);

document.querySelector("#selectAll")
for (let photo of photos){
    selectOne()
}


//selectionner Tout selectionner pour que toute les photos ce séléctionne

