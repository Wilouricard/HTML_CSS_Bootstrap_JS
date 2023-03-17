let ajacent1 = parseFloat(prompt("Entr la longueur du premier côté ajacent : "));
let ajacent2 = parseFloat(prompt("Entrel a longueur du deuxième côté ajacent : "));

let hypotenuse = Math.sqrt(Math.pow(ajacent1, 2) + Math.pow(ajacent2, 2));

// arondissement de la longueur de l'hypotenuse à 2 decimales
hypotenuse = Math.round(hypotenuse * 100) / 100;

console.log("La longueur de l'hypoténuse st de : " + hypotenuse +" cm.");
