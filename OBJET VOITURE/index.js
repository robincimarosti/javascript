"use strict";

let voiture = {
marque:"renault",
dateAchat:2021,
passager:{
  nom:["audrey","gribouille"],
},
year: 2010,
};

const div=document.querySelector("#content")
div.innerHTML= `<ul>
<li>${voiture.marque}</li>
<li>${voiture.dateAchat}</li>
<li>${voiture.passager}</li>
<li>${voiture.year}</li>
</ul>`