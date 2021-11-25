"use strict"

/****************
 * VARIABLES
 *****************/

let game = new Object();

/****************
 * FONCTIONS
 *****************/

/*détermine les valeurs qui composent le jeu : niveau épée et armure*/
function initializeGame(){
    game.round = 1;
    
    game.level = requestInteger("Niveau de difficulté ? \n 1.Facile - 2.Normal - 3.Difficle", 1 , 3);
    switch (game.level){
        case 1:
            game.pvDragon = getRandomInteger(150,200);
            game.pvKnight = getRandomInteger(200, 250);
            break;
        case 2:
            game.pvDragon = getRandomInteger(200, 250);
            game.pvKnight = getRandomInteger(200, 250);
            break;
        case 3:
            game.pvDragon = getRandomInteger(200, 250);
            game.pvKnight = getRandomInteger(150, 200);
            break;
    };
    
    game.armor = requestInteger("Armure ? \n 1.Cuivre - 2.Fer - 3.Magique", 1 , 3);
    switch (game.armor){
        case 1:
            game.armorRatio = 1;
            break;
        case 2:     
            game.armorRatio = 0.75;
            break;
        case 3:
            game.armorRatio = 0.5;
            break;
    };

    game.sword = requestInteger("Epée ? \n 1.Bois - 2.Acier - 3.Excalibur", 1 , 3);
    switch (game.sword){
        case 1: 
            game.swordRatio = 0.5;
        case 2:
            game.swordRatio = 1;
        case 3:
            game.swordRatio = 1.5;
    };
    DIV.innerHTML = "<h3>Points de vie de départ</h3>";
    DIV.innerHTML += `
    <table>
        <thead>
            <th>

            </th>
        </thead>
        <tbody>
            <tr>
                <td>chevalier</td>
                <td>chevalier</td>
            </tr>
            <tr>
                <td>dragon</td>
                <td>dragon</td>
            </tr>
        </tbody>
    </table>
    `;
   
};
/*degat du player sur le dragon*/
function computePlayerDamagePoint(){
    let damage;
    switch (game.level){
        case 1:
            damage = getRandomInteger(25, 30);
            break;
        case 2:
            damage = getRandomInteger(15, 20);
            break;
        case 3:
            damage = getRandomInteger(5, 10);
    }
    return Math.floor(damage * game.swordRatio);
};
/*degat du dragon sur le player*/
function computeDragonDamagePoint(){
    let damage;
    if(game.level ===1){
        damage = getRandomInteger(10, 20);
    } else {
        damage = getRandomInteger(20, 30);
    }
    return Math.floor(damage * game.armorRatio);
};

function gameLoop(){
    //combat tour à tour
    let damage;
    console.log("combat tour à tour");
    while(game.pvKnight > 0 && game.pvDragon > 0){
        DIV.innerHTML += 
        console.log(`=== TOUR n°${game.round}===`);
        let vitesse = getRandomInteger(1,2);
        if(vitesse == 1){
            //le dragon attaque 
            damage = computeDragonDamagePoint();
            game.pvKnight -= damage;
            console.log("dragon attaque, il vous retire " + damage + "PV.")
        }else {
            //le chevalier attaque
            damage = computePlayerDamagePoint();
            game.pvDragon -= damage;
            console.log("chevalier attaque, il retire " + damage +"PV au dragon.")
        }
        console.log("PV restants au dragon : " + game.pvDragon);
        console.log("PV restants au chevalier : " + game.pvKnight);
        game.round ++;
    }
}

/*************************
 * CODE PRINCIPAL
 ************************/
let DIV =document.querySelector(#game)
//DEGAT KNIGHT

 initializeGame();
 gameLoop();



