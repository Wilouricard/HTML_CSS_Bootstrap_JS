let diametre = parseFloat(prompt("Entrez le diamètre du cercle :"));

let rayon = diametre / 2;
let perimetre = 2 * Math.PI * rayon;
let aire = Math.PI * Math.pow(rayon, 2);
let perimetreArrondi = Math.round(perimetre * 100) / 100;
let aireArrondie = Math.round(aire * 100) / 100;

console.log("Le diamètre du cercle est de " + diametre.toFixed(2) + ".");
console.log("Le périmètre du cercle est de " + perimetre.toFixed(2) + ".");
console.log("L'aire du cercle est de " + aire.toFixed(2) + ".");
console.log("Le périmètre arrondi à l'entier du cercle est de " + perimetreArrondi.toFixed(0) + ".");
console.log("L'aire arrondie à l'entier du cercle est de " + aireArrondie.toFixed(0) + ".");