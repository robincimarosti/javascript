"use strict";

const TAUX_TVA = 20;

let montantHT;
let montantTVA;
let montantTTC;
let isRemise, tauxRemise;


//affectation de valeur
montantHT = parseInt(prompt("valeur de montant ht"));


//demander si oui ou non il a une remise
isRemise = prompt("Avez-vous une remise");
if (isRemise === "oui" || isRemise === "yes"){
    tauxRemise = parseInt(prompt("quel est le taux de la remise?"));
    montantHT = montantHT - ((tauxRemise*montantHT)/100)
} else{
    tauxRemise = 0;
}

  
//calcul montant TVA
montantTVA = (montantHT * TAUX_TVA) / 100;

//calcul du montant TTC : HT + TVA
montantTTC = montantHT + montantTVA;





//affichage 
const DIV = document.querySelector("#content");
DIV.innerHTML= `<p>Pour un montant HT de ${montantHT} il y a ${montantTVA} de TVA.
Le montant TTC est donc de ${montantTTC} Une remise de ${tauxRemise}a été appliquée sur le montant HT</p>`;
if (isRemise ==="yes"|| isRemise ==="oui"){
    DIV.innerHTML= DIV.innerHTML + `<p>Une remise de ${tauxRemise}% à était appliquée</p>`;
} else {
    DIV.innerHTML = DIV.innerHTML + `<p>pas de remise<p>`;
    
}
