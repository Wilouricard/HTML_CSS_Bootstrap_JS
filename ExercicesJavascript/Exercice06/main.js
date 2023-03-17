let coteCarre = parseFloat(prompt("Entre la longueur d'un coté du carré :"));
let perimetreCarre = 4 * coteCarre;
let aireCarre = coteCarre ** 2;

console.log("Périmetre du carré : " + perimetreCarre+ "xm");
console.log("Aire du carré : " + aireCarre+ "xm");

let longueurRectangle = parseFloat(prompt("Entre la longueur du rectangle :"));
let largeurRectangle = parseFloat(prompt("Entre la largeur du rectangle :"));
let perimetreRectangle = 2 * (longueurRectangle + largeurRectangle);
let aireRectangle = longueurRectangle * largeurRectangle;

console.log("Périmtere du rectangle : " + perimetreRectangle+ "xm");
console.log("Aire du rectangle : " + aireRectangle+ "xm");
