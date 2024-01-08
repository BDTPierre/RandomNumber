// On va creer une variable nombre fixe (nombre à deviner)
// Créer une deuxième variable qui demande un nombre à l'utilisateur
// On va faire une boucle while qui a pour condition: Tant que le nombre de l'utilisateur est different du nombre fixe, il doit executer la tache
// La boucle while sert a demander à l'utilisateur un nombre tant qu'il a pas trouver le nombre juste.
// Dans cette boucle while on va mettre des conditions: Trop haut, trop bas ou correct et quand il est correct, ca arrete la boucle while et il recoit un message de felicitation.

let Randomnumber = Math.floor(Math.random() * (101 - 0) + 0 );
// console.log(numberfix)
let usernumber = window.parseInt(prompt("Trouve le bon nombre"));
// console.log(usernumber)

while (usernumber !== Randomnumber){
    if (usernumber > Randomnumber) {
        alert ("Vous êtes trop haut!")
    } else {
    alert ("Vous êtes trop bas!")
    }
    usernumber = window.parseInt(prompt("Trouve le bon nombre"))
}

alert ("Bravo, vous avez trouver le bon nombre!")
