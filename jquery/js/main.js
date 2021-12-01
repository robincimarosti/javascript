"use stricte"

/*****************
 * VARIABLES
 ******************/

let FORM;



/*****************
 * FONCTIONS
 ******************/
//compresse les donner en texte 
function loadDatas() {
    let datas = JSON.parse(localStorage.getItem("address-book"));
    if (datas===null) datas = [];
    return datas;
}
function saveDatas(datas) {
    //transformer la liste en JSON
    let json = JSON.stringify(datas);

    //ajouter la liste JSONifiée dans le localStorage
    localStorage.setItem("address-book", json);
}
function displayForm() {
    FORM.removeClass("hide").data("mode", "add");
};

//crééer ou modifier un contact
function saveContact() {
let list = loadDatas()
    let contact = {
        title:$("#title").val(),
        lastName:$("#lastName").val(),
        firstName:$("#firstName").val(),
        phone:$("#phone").val()
    };

    //si formulaire est en mode ajout
    if(FORM.data("mode") === "add") {
    list.push(contact);
    }else{
    //sinon
        //modifie
        let index= $("#contact-details a").data("index");
        list[index] = contact;
    }
    saveDatas(list);
    
}

//Affiche la liste de contacts 
function displayContacts() {
    let list = loadDatas ();
    $("#address-book").html("<ul></ul>");
    list.forEach((contact, index)=> {
        $("#address-book ul").append(
            `<li><a data-index="${index}">${contact.lastName} ${contact.firstName}</a><i data-index="${index}"class="fa fa-trash-o"></i></li>`
        );
    });
}

//Affiche le détail d'un contact
function displayDetails() {
    //récupère le tableau des données dans le LS
    let list = loadDatas();
    //récupère l'index du contact stocké dans son data-index(dans la balise HTML)
    let index = this.dataset.index;
    //dans le tableau récupère l'objet à la ligne correspondant à l'index du contact
    let contact = list [index];
    //remplir le aside >h3 avec Mme. Nom Prenoms 
    $("#contact-details h3").text(`${displayTitle(contact.title)} ${contact.lastName} ${contact.firstName}
    `
    );
    //remplir le aside>p avec le téléphone
    $("#contact-details p").texte(contact.phone);
    //stocke l'index dans la balise "editer le contact"
    $("#contact-details a").data("index", index);
    //afficher le aside
    $("#contact-details").removeClass("hide");

    
}

function removeContact() {
    let list = loadDatas();
    let index = this.dataset.index;

    list.splice(index, 1);
    saveDatas(list);
    displayContacts();
}
//title Civilité choisie (1,2,3)Abréviation de la civilité textuellement
function dislpayTitle(title){
    let textTitle ="";
    switch (title) {
    case "1":
        textTitle = "Mme.";
        break;
    case "2":
        textTitle = "Mlle.";
        break;
    case "3":
        textTitle = "Mr.";
        break;
}
return textTitle;
}

//editer 
function editContact() {
    let list = loadDatas();
    let index = $("#contact-details a").data("index");
    let contact= list[index];

    $("#title").val(concat.title);
    $("#lastName").val(concat.lastName);
    $("#firstName").val(concat.firstName);
    $("#phone").val(concat.phone);

    //changer le data-mode en mode edit
    FORM.removeClass("hide").data("mode", "edit");
    $("#contact-details").addClass("hide");
}
//tout supprimer
function removeAll() {
    saveDatas([]);
}
/*****************
 * CODE PRINCIPALE
 ******************/

$(document).ready(function(){
    displayContacts();
     FORM = $("#contact-form")

$("#add-contact").on("click", displayForm)

$("#save-contact").on("click", saveContact)

$("#contact-details a").on("click", editContact);

$("#clear-address-book").on("click", removeAll);

// gestionnaire d'évènement sur un élément qui sera créé dans le futur par le JS
$("#address-book").on("click", "li a", displayDetails);
$("#address-book").on("click", "li i", removeAll);
});
