"use strict"

/*******************
 * VARIABLES
 *******************/
const slides = [
    {
        src:"1.jpg",
        legend:"frères pandas",
    },
    {
        src:"2.jpg",
        legend:"yoga",
    },
    {
        src:"3.jpg",
        legend:"coucher de soleil",
    },
    {
        src:"4.jpg",
        legend:"nuit étoilée",
    },
    {
        src:"5.jpg",
        legend:"tea time",
    },
    {
        src:"6.jpg",
        legend:"gros dessert",
    }
];

const state= { index:0, interval: false };



/*******************
 * FONCTIONS
 *******************/
//cacher ou afficher la barre d'outils
function toolbarToggle(){
    document.querySelector(".toolbar ul").classList.toggle("hide");

    const icon = document.querySelector("#toolbar-toggle i");
    icon.classList.toggle("fa-arrow-right");
    icon.classList.toggle("fa-arrow-down");
 }
//afficher la photo en cours de visionnage
function resfreshSlider(){
    document.querySelector("#slider img").src = "images/" + slides[state.index].src;
    document.querySelector("#slider figcaption").textContent = slides[state.index].legend;
}
/**
 * passer a la photo suivante
 * -->revenir à la 1ere photo (index 0) quand on arrive à la fin de la liste de photos
 */
function next(){
    //incrémente la propriété index dans l'objet state
    state.index++;
    //revenir a la 1 ere photo (index0) quand on arrive a la fin de la liste de photos
    if(state.index == slides.length)state.index = 0;
    //fait appel à la fonction refreshSlider
    resfreshSlider();

};
/**
 * passer a la photo precedente
 * -->revenir à la 1ere photo (index 0) quand on arrive à la fin de la liste de photos
 */
function previous (){
//incrémente la propriété index dans l'objet state
 state.index--;
 //revenir a la 1 ere photo (index0) quand on arrive a la fin de la liste de photos
 if(state.index < 0) state.index = slides.length -1;
 //fait appel à la fonction refreshSlider
 resfreshSlider();
};
/**
 * photo aléatoire
 */
 function random (){
  let nb;
  do{
   nb = getRandomInteger(0, slides.length -1)
  } while (nb == state.index);
  state.index = nb
  resfreshSlider();
   };
/**
 * lancer/ arreter le diaporama
 */
   function playPause (){
       if(state.interval== false){
    state.interval = setInterval(next,2000);
        
    } else {
        clearInterval(state.interval);
        state.interval =false;
    }
    const icon = document.querySelector("#slider-toggle i")
    icon.classList.toggle("fa-play");
    icon.classList.toggle("fa-pause");
       }



/*******************
 * CODE PRINCIPALE
 *******************/
resfreshSlider();
document
    .querySelector("#toolbar-toggle")
    .addEventListener("click", toolbarToggle);
//next
document.querySelector("#slider-next").addEventListener("click", next);

//previous
document.querySelector("#slider-previous").addEventListener("click", previous);

//aléatoire
document.querySelector("#slider-random").addEventListener("click", random);

//demarrer le carroussel
document.querySelector("#slider-toggle").addEventListener("click", playPause);