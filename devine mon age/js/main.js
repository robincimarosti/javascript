"use strict";
/******************
 * FONCTIONS
 ******************/

/**
 * Récupère le prénom saisi par l'utilisateur
 * Fait l'appel AJAX à l'API
 */
 function getValue() {
    let name = document.querySelector("#firstname").value.trim();
    fetch("https://api.agify.io?name=" + name)
      .then((response) => response.json())
      .then((datas) => displayDatas(datas))
      .catch((error) => console.log(error));
  }
  
  /**
   * Affiche les infos sur le prénom
   * @param {Object} infos
   */
  function displayDatas(infos) {
    document.querySelector(
      "article h2"
    ).innerHTML = `Selon Agify, avec le prénom ${infos.name}, tu as ${infos.age} ans.`;
    document.querySelector("article p strong").innerHTML = infos.count;
    document.querySelector("article").classList.remove("hide");
  }
  
  /******************
   * CODE PRINCIPAL
   ******************/
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#submit").addEventListener("click", getValue);
  });