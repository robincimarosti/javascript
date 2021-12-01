"use stict"
/******************
 * VARIABLES
 ******************/
let article = document.querySelector("#content");




/******************
 * FONCTIONS
 ******************/
function generateH1() {
    article.insertAdjacentHTML(
        "afterbegin", 
        "<h1>Saisir le titre principal</h1>"
        );
        article.contentEditable = "true";
};
function generateH2() {
    article.insertAdjacentHTML(
        "beforeend", 
        "<h2>Saisir le titre secondaire</h2>"
        );
        article.contentEditable = "true";
};

function generateH3() {
    article.insertAdjacentHTML(
        "beforeend", 
        "<h3>Saisir le 3ème titre</h3>"
        );
        article.contentEditable = "true";
};

function generateP() {
    article.insertAdjacentHTML(
        "beforeend", 
        "<p>Saisir un paragraphe</p>"
        );
        article.contentEditable = "true";
};

function generateHr() {
    article.insertAdjacentHTML(
        "abeforeend", 
        "<hr>"
        );
        article.contentEditable = "false";
};




/******************
 * CODE PRINCIPAL
 ******************/
document
    .querySelector("#h1")
    .addEventListener("click", generateH1);

document
    .querySelector("#h2")
    .addEventListener("click", generateH2);

document
    .querySelector("#h3")
    .addEventListener("click", generateH3);

document
    .querySelector("#p")
    .addEventListener("click", generateP);

document
    .querySelector("#hr")
    .addEventListener("click", generateHr);

