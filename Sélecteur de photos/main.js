"use strict";
let count = 0
/*****************
 * FONCTIONS
 ****************/


//quand on vas selectionner la photo elle deviens bleu
function selectOne() {
    this.classList.toggle("selected");

    if (this.classList.contains("selected")) {
        count++;
    } else {
        count--;
    }
document.querySelector("#total em").textContent = count;
};

/*quand on vas clicker sur tout selectionner 
toutes les photos seront selectionner*/
function selectAll() {
    photos.forEach(li => li.classList.add("selected"));
    count = photos.length;
    document.querySelector("#total em").textContent = count;
};
function deselectAll() {
    photos.forEach(li => li.classList.remove("selected"));
    count = 0;
    document.querySelector("#total em").textContent = count;
};




/*****************
 * CODE PRINCIPAL
 ****************/
const photos = document.querySelectorAll(".photo-list li");

// selection individuel

photos.forEach((li) => li.addEventListener("click", selectOne)
);

//selectionner Tout selectionner pour que toute les photos ce séléctionne

document.querySelector("#selectAll").addEventListener("click", selectAll);

// déselectionner
document.querySelector("#deselectAll").addEventListener("click", deselectAll);