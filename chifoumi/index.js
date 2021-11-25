"use strict"
// variables
let player;
let computer;
let message;
// saisi utilisateur
do{
player = prompt("vous jouez? Pierre, feuille, ciseaux?").toLowerCase();
} while(
    player != "pierre"&&
    player != "feuille"&&
    player != "ciseaux"
    );

// saisi ordinateur

computer = Math.random();
if(computer < 1 / 3){
computer = "pierre"
} else if (computer >= 1 / 3 && computer < 2 / 3)
{
    computer ="feuille";
} else {
    computer="ciseaux";
}

// jeu comparaison
if(player === computer){
    // gestion de l'égalité 
 message = "il y a égalité !";
} else {
    //déterminer qui est le gagnant 
 switch (player){
     case "pierre":
         if(computer === "feuille"){
             message = " La feuille recouvre la pierre : vous perdez."
         } else {
             message = "la pierre casse les ciseaux: vous gagnez.";
         }
         break;
    case "feuille":
        if(computer == "ciseaux"){
            message ="Les ciseaux découpent la feuille : vous perdez.";
        } else{
            message = " La feuille recouvre la pierre : vous gagnez.";
        }
        break;
        case "ciseaux":
            if(computer ==="pierre"){
                message = "La pierre casse les ciseaux : vous perdez.";
            } else {
                message = "Les ciseaux découpent la feuille : vous gagnez."
            }
            break;
 }
}

// affichage html

document.querySelector("#content").innerHTML = `<ul>
<li>
    <img src="img/${player}" alt="">
</li>
<li>
    <img src="img/${computer}" alt="">
</li>
</ul>
<p>${message}`;
