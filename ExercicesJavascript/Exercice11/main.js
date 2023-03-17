let lettre = prompt("Entrez une lettre :");
let estVoyelle = false;

switch (lettre.toLowerCase()) { //case sensitiv
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    estVoyelle = true;
    break;
  default:
    estVoyelle = false;
}


if (estVoyelle) {
  console.log(`La lettre ${lettre} est une voyelle.`);
} else {
  console.log(`La lettre ${lettre} est une consonne.`);
}
