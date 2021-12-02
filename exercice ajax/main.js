"use strict"

/******************
 * VARIABLES
 *******************/



/******************
 * FONCTIONS
 *******************/
// Affiche le HTML dans #target
function displayHTML(htmlDatas){
    $("#target").html(htmlDatas);
}

//genere le HTML de la liste de contacts
function displayContacts(contacts) {
    let html = "<ul>";
    contacts.forEach((contact) => {
        html += `<li>
                    <strong>Prénom :</strong> ${contact.firstName} <br>
                    <i>Téléphone : </i> ${contact.phone}
                </li> 
            `;
    });
    html += "</ul>";
    displayHTML(html);
}
//genere le HTML de la liste de film 
function displayMovies(movies) {
    let html = "<ul class='movie-list'>";
     movies.forEach((movie) => {
         html +=    `<li>
         <img src="images/${movie.cover}">
         <p>
           <strong>${movie.title}</strong> -
           <em>${movie.duration}</em>
         </p>
       </li>`
     }); console.log(movies);
     html += "</ul>";
     displayHTML(html);
}



function onClickExecute() {
    //récupère la valeur de l'input coché
    let choice = $("input[name='what']:checked").val();

    //en fonction de cette valeur, gérer les differents(appels AJAX)
    switch (choice) {
        case "1":
            $.get("data/1-get-html-article.html", displayHTML);
            break;
        case "2":
            $.getJSON("data/2-get-contacts-list.json", displayContacts);
            break;
        case "3":
            $.get("data/3-get-html-movies.html", displayHTML);
            break;
        case "4":
            $.getJSON("data/4-get-json-movies.json", displayMovies);
            break;
    
    
    }
}



/******************
 * CODE PRINCIPALE
 *******************/
$(document).ready(function() {
    $("#run").on("click", onClickExecute);

})